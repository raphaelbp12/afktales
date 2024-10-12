// parserItemConfig.ts

import { ItemData } from "./ItemDB/types";
import { Job, Bonuses, bonusTypeToStatusPointType } from "./types";

// Function to remove comments from the config string
export function removeComments(configString: string): string {
  const noSingleLineComments = configString.replace(/\/\/.*$/gm, "");
  const noMultiLineComments = noSingleLineComments.replace(
    /\/\*[\s\S]*?\*\//g,
    ""
  );
  return noMultiLineComments;
}

// Function to parse the config string into a list of item objects and a dictionary
export function parseConfig(configString: string): {
  itemsList: ItemData[];
  itemsDict: { [key: number]: ItemData };
  itemsDictAegisNameKey: Record<string, number>;
} {
  const cleanConfig = removeComments(configString);
  const itemsList: ItemData[] = [];
  const itemsDict: { [key: number]: ItemData } = {};
  const itemsDictAegisNameKey: Record<string, number> = {};

  let match;
  const itemRegex = /{([^{}]*({[^{}]*}[^{}]*)*)},?/gs;

  while ((match = itemRegex.exec(cleanConfig)) !== null) {
    const itemString = match[1];
    const partialItem = parseItem(itemString);
    const item: ItemData = new ItemData(partialItem);
    itemsList.push(item);
    itemsDict[item.Id] = item;
    itemsDictAegisNameKey[item.AegisName] = item.Id;
  }

  return { itemsList, itemsDict, itemsDictAegisNameKey };
}

export function parseItem(itemString: string): ItemData {
  const item: Partial<ItemData> = {};
  const lines = itemString.split("\n");
  let currentKey: keyof ItemData | null = null;
  let currentValue: string | null = null;
  let nestedObjectDepth = 0;
  let nestedObjectKey: keyof ItemData | null = null;
  let nestedObjectValue = "";
  let inScript = false;

  lines.forEach((line) => {
    line = line.trim();
    if (line === "") return;

    if (inScript) {
      currentValue += "\n" + line;
      if (line.endsWith('">')) {
        inScript = false;
        item[currentKey as keyof ItemData] = parseValue(
          currentValue as string,
          currentKey as keyof ItemData
        );
        currentKey = null;
        currentValue = null;
      }
      return;
    }

    if (nestedObjectKey) {
      nestedObjectValue += line + " ";
      nestedObjectDepth +=
        (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      if (nestedObjectDepth === 0) {
        item[nestedObjectKey] = parseValue(
          nestedObjectValue.trim(),
          nestedObjectKey
        );
        nestedObjectKey = null;
        nestedObjectValue = "";
        currentKey = null;
        currentValue = null;
      }
      return;
    }

    const fieldMatch = line.match(/^(\w+):\s*(.*)$/);
    if (fieldMatch) {
      if (currentKey && currentValue !== null) {
        (item as any)[currentKey] = parseValue(currentValue.trim(), currentKey);
      }
      currentKey = fieldMatch[1] as keyof ItemData;
      currentValue = fieldMatch[2];
      if (currentValue.startsWith('<"') && !currentValue.endsWith('">')) {
        inScript = true;
      }
      nestedObjectDepth =
        (currentValue.match(/{/g) || []).length -
        (currentValue.match(/}/g) || []).length;
      if (nestedObjectDepth > 0) {
        nestedObjectKey = currentKey;
        nestedObjectValue = currentValue + " ";
      } else if (nestedObjectDepth === 0 && currentValue.endsWith('">')) {
        // Handle single-line script
        item[currentKey] = parseValue(currentValue.trim(), currentKey);
        currentKey = null;
        currentValue = null;
      }
    } else if (currentKey && currentValue !== null) {
      currentValue += " " + line;
      nestedObjectDepth +=
        (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      if (nestedObjectDepth === 0) {
        item[currentKey] = parseValue(currentValue.trim(), currentKey);
        currentKey = null;
        currentValue = null;
      }
    }
  });

  if (currentKey && currentValue !== null) {
    (item as any)[currentKey] = parseValue(
      (currentValue as string).trim(),
      currentKey
    );
  }

  // Parse and aggregate bonuses if the item has a script
  if (item.Script) {
    item.Bonuses = { ...parseBonuses(item.Script) };
  }

  return item as ItemData;
}

function parseValue(value: string, key: keyof ItemData): any {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  } else if (value.startsWith("{") && value.endsWith("}")) {
    return parseJob(value);
  } else if (value.startsWith("[") && value.endsWith("]")) {
    return JSON.parse(value);
  } else if (value.startsWith('<"') && value.endsWith('">')) {
    return value.slice(2, -2).trim();
  } else if (!isNaN(Number(value))) {
    return Number(value);
  } else if (value === "true" || value === "false") {
    return value === "true";
  } else {
    return value;
  }
}

export function parseJob(jobString: string): Job {
  const job: Job = {};
  const cleanJobString = jobString.slice(1, -1).trim();
  const jobFieldRegex = /(\w+):\s*(true|false)\s*/g;
  let match;

  while ((match = jobFieldRegex.exec(cleanJobString)) !== null) {
    job[match[1] as keyof Job] = match[2] === "true";
  }

  return job;
}

// Enhanced parsing functions

// Token types
type TokenType =
  | "keyword"
  | "identifier"
  | "number"
  | "string"
  | "operator"
  | "punctuation"
  | "whitespace"
  | "comment";

interface Token {
  type: TokenType;
  value: string;
}

// Function to tokenize the script
function tokenize(script: string): Token[] {
  const tokens: Token[] = [];
  const length = script.length;
  let position = 0;

  const keywords = new Set([
    "bonus",
    "bonus2",
    "bonus3",
    "bonus4",
    "bonus5",
    "if",
    "else",
    "autobonus",
    "getrefine",
    "JobLevel",
    "specialeffect",
    "max",
    "getskilllv",
  ]);

  const operators = new Set([
    "+",
    "-",
    "*",
    "/",
    "%",
    "==",
    "!=",
    "<=",
    ">=",
    "<",
    ">",
    "=",
    "&&",
    "||",
    "!",
    ",",
    ";",
    "(",
    ")",
    "{",
    "}",
  ]);

  while (position < length) {
    const char = script[position];

    // Skip whitespace
    if (/\s/.test(char)) {
      position++;
      continue;
    }

    // Comments (not necessary if already removed)
    if (char === "/" && script[position + 1] === "/") {
      while (position < length && script[position] !== "\n") {
        position++;
      }
      continue;
    }

    // Strings
    if (char === '"' || char === "'") {
      const quoteType = char;
      let value = "";
      position++;
      while (position < length && script[position] !== quoteType) {
        // Handle escaped quotes
        if (script[position] === "\\" && script[position + 1] === quoteType) {
          value += quoteType;
          position += 2;
          continue;
        }
        value += script[position++];
      }
      position++; // Skip closing quote
      tokens.push({ type: "string", value });
      continue;
    }

    // Numbers
    if (/\d/.test(char)) {
      let value = "";
      while (position < length && /\d/.test(script[position])) {
        value += script[position++];
      }
      tokens.push({ type: "number", value });
      continue;
    }

    // Identifiers or Keywords
    if (/[a-zA-Z_]/.test(char)) {
      let value = "";
      while (position < length && /[a-zA-Z0-9_]/.test(script[position])) {
        value += script[position++];
      }
      if (keywords.has(value)) {
        tokens.push({ type: "keyword", value });
      } else {
        tokens.push({ type: "identifier", value });
      }
      continue;
    }

    // Operators and Punctuation
    let op = "";
    for (let opLength = 3; opLength > 0; opLength--) {
      const substr = script.substr(position, opLength);
      if (operators.has(substr)) {
        op = substr;
        break;
      }
    }
    if (op) {
      tokens.push({ type: "operator", value: op });
      position += op.length;
      continue;
    } else {
      // Handle single-character operators or punctuation
      if (operators.has(char)) {
        tokens.push({ type: "operator", value: char });
        position++;
        continue;
      }
    }

    // Unrecognized character
    position++;
  }

  return tokens;
}

// AST Node Types
type ASTNode =
  | BonusNode
  | IfNode
  | BlockNode
  | ExpressionNode
  | AutoBonusNode
  | EmptyNode;

interface BonusNode {
  type: "bonus";
  bonusKey: string; // 'bonus', 'bonus2', etc.
  bonusType: string; // 'bFlee2', 'bCastrate', etc.
  args: string[];
}

interface AutoBonusNode {
  type: "autobonus";
  args: string[];
  script: ASTNode[];
}

interface IfNode {
  type: "if";
  condition: string;
  thenBranch: ASTNode;
  elseBranch?: ASTNode;
}

interface BlockNode {
  type: "block";
  statements: ASTNode[];
}

interface EmptyNode {
  type: "empty";
}

interface ExpressionNode {
  type: "expression";
  value: string;
}

// Function to parse tokens into AST
function parseTokens(tokens: Token[]): ASTNode[] {
  let position = 0;

  function peek(): Token | null {
    return tokens[position] || null;
  }

  function consume(): Token {
    return tokens[position++];
  }

  function expect(type: TokenType, value?: string): Token {
    const token = consume();
    if (!token || token.type !== type || (value && token.value !== value)) {
      throw new Error(
        `Expected token type ${type} with value ${value}, but got ${token?.type} with value ${token?.value}`
      );
    }
    return token;
  }

  function parseStatement(): ASTNode {
    const token = peek();

    if (!token) {
      return { type: "empty" };
    }

    if (token.type === "keyword" && token.value.startsWith("bonus")) {
      return parseBonus();
    } else if (token.type === "keyword" && token.value === "if") {
      return parseIf();
    } else if (token.type === "keyword" && token.value === "autobonus") {
      return parseAutoBonus();
    } else if (token.type === "operator" && token.value === ";") {
      consume(); // Consume semicolon
      return { type: "empty" };
    } else {
      // Unknown statement, skip
      consume();
      return { type: "empty" };
    }
  }

  function parseArguments(): string[] {
    const args: string[] = [];
    let currentArg = "";
    let parenDepth = 0;

    while (
      peek() &&
      !(
        peek()!.type === "operator" &&
        peek()!.value === ";" &&
        parenDepth === 0
      )
    ) {
      const token = peek()!;

      // Handle commas at top level
      if (
        token.type === "operator" &&
        token.value === "," &&
        parenDepth === 0
      ) {
        consume(); // Consume ','
        args.push(currentArg.trim());
        currentArg = "";
        continue;
      }

      // Consume token
      consume();

      // Adjust parenDepth
      if (
        token.type === "operator" &&
        (token.value === "(" || token.value === "{")
      ) {
        parenDepth++;
      } else if (
        token.type === "operator" &&
        (token.value === ")" || token.value === "}")
      ) {
        parenDepth--;
      }

      // Append token value to currentArg
      currentArg += token.value;
    }

    // Add the last argument
    if (currentArg.trim() !== "") {
      args.push(currentArg.trim());
    }

    return args;
  }

  function parseBonus(): BonusNode {
    const bonusToken = consume(); // 'bonus', 'bonus2', etc.
    const bonusKey = bonusToken.value; // 'bonus', 'bonus2', etc.

    // Consume the bonus type, e.g., 'bFlee2'
    const bonusTypeToken = consume();
    const bonusType = bonusTypeToken.value;

    // Consume the comma
    if (peek() && peek()!.value === ",") {
      consume(); // Consume ','
    }

    const args = parseArguments();

    // Consume semicolon
    if (peek() && peek()!.value === ";") {
      consume(); // Consume ';'
    }

    return { type: "bonus", bonusKey, bonusType, args };
  }

  function parseAutoBonus(): AutoBonusNode {
    consume(); // Consume 'autobonus'

    const args: string[] = [];

    // Consume arguments until semicolon
    let parenDepth = 0;
    let script: ASTNode[] = [];

    while (
      peek() &&
      !(
        peek()!.type === "operator" &&
        peek()!.value === ";" &&
        parenDepth === 0
      )
    ) {
      // Skip commas in arguments
      if (peek()!.type === "operator" && peek()!.value === ",") {
        consume();
        continue;
      }

      // Handle negative numbers
      if (
        peek()!.type === "operator" &&
        peek()!.value === "-" &&
        tokens[position + 1] &&
        tokens[position + 1].type === "number"
      ) {
        const minusToken = consume(); // '-'
        const numberToken = consume(); // number
        args.push(minusToken.value + numberToken.value);
        continue;
      }

      const token = consume();

      if (
        token.type === "operator" &&
        (token.value === "(" || token.value === "{")
      ) {
        parenDepth++;
      } else if (
        token.type === "operator" &&
        (token.value === ")" || token.value === "}")
      ) {
        parenDepth--;
      }

      if (token.type === "operator" && token.value === "{") {
        // Parse script block
        const blockNode = parseBlock();
        script = blockNode.statements;
        args.push("{...}");
      } else if (token.type === "string") {
        // Include strings with quotes
        args.push(`"${token.value}"`);
      } else {
        args.push(token.value);
      }
    }

    if (peek() && peek()!.value === ";") {
      consume(); // Consume semicolon
    }

    return { type: "autobonus", args, script };
  }

  function parseIf(): IfNode {
    consume(); // Consume 'if'
    let condition = "";

    if (peek() && peek()!.value === "(") {
      consume(); // Consume '('
      // Collect condition until ')'
      let parenDepth = 1;
      while (peek() && parenDepth > 0) {
        const token = consume();
        if (token.value === "(") {
          parenDepth++;
        } else if (token.value === ")") {
          parenDepth--;
          if (parenDepth === 0) break;
        }
        condition += token.value;
      }
    }

    // Parse thenBranch
    let thenBranch: ASTNode;
    if (peek() && peek()!.value === "{") {
      thenBranch = parseBlock();
    } else {
      thenBranch = parseStatement();
    }

    // Parse elseBranch
    let elseBranch: ASTNode | undefined;
    if (peek() && peek()!.type === "keyword" && peek()!.value === "else") {
      consume(); // Consume 'else'
      if (peek() && peek()!.value === "{") {
        elseBranch = parseBlock();
      } else {
        elseBranch = parseStatement();
      }
    }

    return { type: "if", condition, thenBranch, elseBranch };
  }

  function parseBlock(): BlockNode {
    consume(); // Consume '{'
    const statements: ASTNode[] = [];

    while (peek() && peek()!.value !== "}") {
      const stmt = parseStatement();
      if (stmt.type !== "empty") {
        statements.push(stmt);
      }
    }
    consume(); // Consume '}'

    return { type: "block", statements };
  }

  const statements: ASTNode[] = [];

  while (position < tokens.length) {
    const stmt = parseStatement();
    if (stmt.type !== "empty") {
      statements.push(stmt);
    }
  }

  return statements;
}

interface ParsedBonus {
  bonusKey: string; // 'bonus', 'bonus2', etc.
  bonusType: string; // Actual bonus type like 'bFlee2'
  args: string[];
  condition?: string;
}

function extractBonuses(
  ast: ASTNode[],
  currentCondition?: string
): ParsedBonus[] {
  const bonuses: ParsedBonus[] = [];

  for (const node of ast) {
    switch (node.type) {
      case "bonus":
        bonuses.push({
          bonusKey: node.bonusKey, // 'bonus', 'bonus2', etc.
          bonusType: node.bonusType, // Actual bonus type like 'bFlee2'
          args: node.args,
          condition: currentCondition,
        });
        break;
      case "autobonus":
        // Include the autobonus itself in the bonuses
        bonuses.push({
          bonusKey: "autobonus",
          bonusType: "autobonus",
          args: node.args,
          condition: currentCondition,
        });
        // Extract bonuses from the script inside autobonus
        bonuses.push(...extractBonuses(node.script, currentCondition));
        break;
      case "if":
        // Extract bonuses from thenBranch with the condition
        bonuses.push(...extractBonuses([node.thenBranch], node.condition));
        // Extract bonuses from elseBranch with the negated condition
        if (node.elseBranch) {
          const elseCondition = `!(${node.condition})`;
          bonuses.push(...extractBonuses([node.elseBranch], elseCondition));
        }
        break;
      case "block":
        bonuses.push(...extractBonuses(node.statements, currentCondition));
        break;
      default:
        // Handle other node types if necessary
        break;
    }
  }

  return bonuses;
}

export function parseBonuses(script: string): Bonuses {
  const tokens = tokenize(script);
  const ast = parseTokens(tokens);
  const parsedBonuses = extractBonuses(ast);

  const bonuses: Bonuses = {};

  parsedBonuses.forEach((parsedBonus) => {
    const { bonusKey, bonusType, args, condition } = parsedBonus;

    const key = bonusKey as keyof Bonuses; // 'bonus', 'bonus2', etc.

    let statusPointType: string;
    if (bonusType === "autobonus") {
      statusPointType = "autobonus";
    } else {
      statusPointType = bonusTypeToStatusPointType[bonusType] || bonusType;
    }

    if (!bonuses[key]) {
      bonuses[key] = {};
    }

    const bonusKeyObj = bonuses[key];
    if (!bonusKeyObj![statusPointType]) {
      bonusKeyObj![statusPointType] = [];
    }

    // Include the condition as part of the args array or as metadata
    if (condition) {
      bonusKeyObj![statusPointType]!.push([...args, `condition: ${condition}`]);
    } else {
      bonusKeyObj![statusPointType]!.push(args);
    }
  });

  return bonuses;
}

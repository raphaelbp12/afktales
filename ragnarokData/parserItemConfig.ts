import { Item, Job, Bonuses } from "./types";

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
  itemsList: Item[];
  itemsDict: { [key: number]: Item };
} {
  const cleanConfig = removeComments(configString);
  const itemsList: Item[] = [];
  const itemsDict: { [key: number]: Item } = {};

  let match;
  const itemRegex = /{([^{}]*({[^{}]*}[^{}]*)*)},?/gs;

  while ((match = itemRegex.exec(cleanConfig)) !== null) {
    const itemString = match[1];
    const item = parseItem(itemString);
    itemsList.push(item);
    itemsDict[item.Id] = item;
  }

  return { itemsList, itemsDict };
}

export function parseItem(itemString: string): Item {
  const item: Partial<Item> = {};
  const lines = itemString.split("\n");
  let currentKey: keyof Item | null = null;
  let currentValue: string | null = null;
  let nestedObjectDepth = 0;
  let nestedObjectKey: keyof Item | null = null;
  let nestedObjectValue = "";
  let inScript = false;

  lines.forEach((line) => {
    line = line.trim();
    if (line === "") return;

    if (inScript) {
      currentValue += "\n" + line;
      if (line.endsWith('">')) {
        inScript = false;
        item[currentKey as keyof Item] = parseValue(
          currentValue as string,
          currentKey as keyof Item
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
      currentKey = fieldMatch[1] as keyof Item;
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
    item.Bonuses = parseBonuses(item.Script);
  }

  return item as Item;
}

function parseValue(value: string, key: keyof Item): any {
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

export function parseBonuses(
  script: string
): Record<string, Record<string, string[][]>> {
  const bonuses: Record<string, Record<string, string[][]>> = {};

  const bonusRegex = /bonus(\d*)\s+(\w+)\s*,\s*([^;]+);/g;
  let match;

  while ((match = bonusRegex.exec(script)) !== null) {
    const [, bonusLevel, bonusType, bonusArgs] = match;
    const args = bonusArgs.split(/\s*,\s*/);
    const key = `bonus${bonusLevel}`;

    if (!bonuses[key]) {
      bonuses[key] = {};
    }

    if (!bonuses[key][bonusType]) {
      bonuses[key][bonusType] = [];
    }

    bonuses[key][bonusType].push(args);
  }

  return bonuses;
}

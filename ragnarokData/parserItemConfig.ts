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

export function parseBonuses(script: string): Bonuses {
  const bonuses: Bonuses = {};

  const bonusRegex = /bonus(\d*)\s+(\w+)\s*,\s*([^;]+);/g;
  let match;

  while ((match = bonusRegex.exec(script)) !== null) {
    const [, bonusLevel, bonusType, bonusArgs] = match;
    const args = bonusArgs
      .split(/\s*,\s*/)
      .map((arg) => parseArgument(bonusType, arg));
    const key = `bonus${bonusLevel}` as keyof Bonuses;

    const statusPointType = bonusTypeToStatusPointType[bonusType] || bonusType; // Default to bonusType if not found

    if (!bonuses[key]) {
      bonuses[key] = {};
    }

    const bonusKey = bonuses[key];
    if (bonusKey && !bonusKey[statusPointType]) {
      bonusKey[statusPointType] = [];
    }

    bonusKey![statusPointType]!.push(args);
  }

  return bonuses;
}

function parseArgument(
  bonusType: string,
  arg: string
): string | number | boolean {
  return parsecfg_string(arg); // Default to string if the type is unknown
}

function parsecfg_string(value: string): string {
  const regex = `/^\s*"((?:\\"|.)*)"\s*(?://.*)?$/i`;
  const match = value.match(regex);
  return match ? match[1] : value;
}

function parsecfg_int(value: string): number {
  const regex = `/^\s*(-?\d+)\s*(?://.*)?$/`;
  const match = value.match(regex);
  return match ? parseInt(match[1], 10) : NaN;
}

function parsecfg_bool(value: string): boolean {
  const regex = `/^\s*(yes|true|1|on)\s*(?://.*)?$/i`;
  const match = value.match(regex);
  if (match) return true;
  const regex2 = `/^\s*(no|false|0|off)\s*(?://.*)?$/i`;
  return !!value.match(regex2);
}

function parsecfg_hexint(value: string): number {
  const regex = `/^\s*(0x[\da-fA-F]+)\s*(?://.*)?$/`;
  const match = value.match(regex);
  return match ? parseInt(match[1], 16) : NaN;
}

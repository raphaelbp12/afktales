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
  itemsList: any[];
  itemsDict: { [key: number]: any };
} {
  const cleanConfig = removeComments(configString);
  const itemsList: any[] = [];
  const itemsDict: { [key: number]: any } = {};
  const itemRegex = /{\s*([^}]*)\s*},/g;
  let match;

  while ((match = itemRegex.exec(cleanConfig)) !== null) {
    const itemString = match[1];
    const item = parseItem(itemString);
    itemsList.push(item);
    itemsDict[item.Id] = item;
  }

  return { itemsList, itemsDict };
}

export function parseItem(itemString: string): any {
  const item: any = {};
  const lines = itemString.split("\n");
  let currentKey: string | null = null;
  let currentValue: string | null = null;

  lines.forEach((line) => {
    line = line.trim();
    if (line === "") return;

    const fieldMatch = line.match(/^(\w+):\s*(.*)$/);
    if (fieldMatch) {
      if (currentKey && currentValue !== null) {
        item[currentKey] = parseValue(currentValue.trim());
      }
      currentKey = fieldMatch[1];
      currentValue = fieldMatch[2];
    } else if (currentKey && currentValue !== null) {
      currentValue += " " + line;
    }
  });

  if (currentKey && currentValue !== null) {
    item[currentKey] = parseValue((currentValue as string).trim());
  }

  return item;
}

function parseValue(value: string): any {
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

export function parseJob(jobString: string): any {
  const job: any = {};
  const cleanJobString = jobString.slice(1, -1).trim();
  const jobFieldRegex = /(\w+):\s*(true|false)\s*(,|$)/g;
  let match;

  while ((match = jobFieldRegex.exec(cleanJobString)) !== null) {
    job[match[1]] = match[2] === "true";
  }

  return job;
}

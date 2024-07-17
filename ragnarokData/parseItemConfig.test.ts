import {
  removeComments,
  parseConfig,
  parseItem,
  parseJob,
} from "./parserItemConfig";

describe("removeComments", () => {
  it("should remove single-line comments", () => {
    const configString = `// This is a comment\nkey: "value"`;
    const result = removeComments(configString);
    expect(result).toBe('\nkey: "value"');
  });

  it("should remove multi-line comments", () => {
    const configString = `/* This is a comment */\nkey: "value"`;
    const result = removeComments(configString);
    expect(result).toBe('\nkey: "value"');
  });

  it("should remove both single-line and multi-line comments", () => {
    const configString = `// This is a comment\nkey: "value"\n/* This is a comment */\nkey2: "value2"`;
    const result = removeComments(configString);
    expect(result).toBe('\nkey: "value"\n\nkey2: "value2"');
  });
});

describe("parseConfig", () => {
  it("should parse the config string into a list and a dictionary of items", () => {
    const configString = `
    {
      Id: 1
      Name: "Item1"
      Type: "Type1"
      Buy: 100
    },
    {
      Id: 2
      Name: "Item2"
      Type: "Type2"
      Buy: 200
    },`;
    const { itemsList, itemsDict } = parseConfig(configString);
    expect(itemsList).toHaveLength(2);
    expect(itemsDict[1].Name).toBe("Item1");
    expect(itemsDict[1].Id).toBe(1);
    expect(itemsDict[2].Name).toBe("Item2");
    expect(itemsDict[2].Id).toBe(2);
  });

  it("should parse items with scripts correctly", () => {
    const configString = `
    {
      Id: 501
      AegisName: "Red_Potion"
      Name: "Red Potion"
      Type: "IT_HEALING"
      Buy: 50
      Weight: 70
      Script: <" itemheal rand(45,65),0; ">
    },
    {
      Id: 502
      AegisName: "Orange_Potion"
      Name: "Orange Potion"
      Type: "IT_HEALING"
      Buy: 200
      Weight: 100
      Script: <" itemheal rand(105,145),0; ">
    },
    {
      Id: 16248
      AegisName: "Tiger_Arhat_Mask_Box"
      Name: "Tiger Arhat Mask Box"
      Type: "IT_CASH"
      Buy: 20
      Weight: 10
      Trade: {
        nodrop: true
        notrade: true
        noselltonpc: true
        nocart: true
        nogstorage: true
        nomail: true
        noauction: true
      }
      Script: <" getitem 5566,1; ">
    },
    `;
    const { itemsList, itemsDict } = parseConfig(configString);
    expect(itemsList).toHaveLength(3);
    expect(itemsDict[501].Id).toBe(501);
    expect(itemsDict[501].Script).toBe("itemheal rand(45,65),0;");
    expect(itemsDict[502].Id).toBe(502);
    expect(itemsDict[502].Script).toBe("itemheal rand(105,145),0;");
    expect(itemsDict[16248].Id).toBe(16248);
    expect(itemsDict[16248].Script).toBe("getitem 5566,1;");
  });
});

describe("parseItem", () => {
  it("should parse an item string into an object", () => {
    const itemString = `
      Id: 1
      Name: "Item1"
      Type: "Type1"
      Buy: 100
      Job: {
        Novice: true
        Swordsman: false
      }
      Script: <" itemheal rand(45,65),0; ">`;
    const result = parseItem(itemString);
    expect(result.Id).toBe(1);
    expect(result.Name).toBe("Item1");
    expect(result.Type).toBe("Type1");
    expect(result.Buy).toBe(100);
    expect(result.Job.Novice).toBe(true);
    expect(result.Job.Swordsman).toBe(false);
    expect(result.Script).toBe("itemheal rand(45,65),0;");
  });
});

describe("parseJob", () => {
  it("should parse a job string into an object", () => {
    const jobString = `{ Novice: true Swordsman: false }`;
    const result = parseJob(jobString);
    expect(result.Novice).toBe(true);
    expect(result.Swordsman).toBe(false);
  });

  it("should handle an empty job string", () => {
    const jobString = `{}`;
    const result = parseJob(jobString);
    expect(result).toEqual({});
  });

  it("should handle a job string with one job", () => {
    const jobString = `{ Novice: true }`;
    const result = parseJob(jobString);
    expect(result.Novice).toBe(true);
    expect(Object.keys(result)).toHaveLength(1);
  });

  it("should handle job strings with extra spaces", () => {
    const jobString = `{ Novice: true  Swordsman: false }`;
    const result = parseJob(jobString);
    expect(result.Novice).toBe(true);
    expect(result.Swordsman).toBe(false);
  });
});

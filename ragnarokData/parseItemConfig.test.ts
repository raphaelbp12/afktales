import {
  removeComments,
  parseConfig,
  parseItem,
  parseJob,
  parseBonuses,
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
      Id: 2316
      AegisName: "Plate_Armor"
      Name: "Full Plate"
      Type: "IT_ARMOR"
      Buy: 80000
      Weight: 4500
      Def: 10
      Job: {
        Swordsman: true
        Knight: true
        Crusader: true
      }
      Loc: "EQP_ARMOR"
      EquipLv: 40
    },
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
    expect(itemsList).toHaveLength(4); // Updated to correct length
    expect(itemsDict[2316].Id).toBe(2316); // Additional expectation
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
      Id: 2115
      AegisName: "Valkyrjas_Shield"
      Name: "Valkyrja's Shield"
      Type: "IT_ARMOR"
      Buy: 30000
      Weight: 500
      Def: 3
      Slots: 1
      Job: {
        All: true
        Novice: false
      }
      Loc: "EQP_SHIELD"
      EquipLv: 65
      ViewSprite: 4
      Script: <"
        bonus2 bSubEle,Ele_Water,20;
        bonus2 bSubEle,Ele_Fire,20;
        bonus2 bSubEle,Ele_Dark,20;
        bonus2 bSubEle,Ele_Undead,20;
        bonus bMdef,5;
      ">`;
    const result = parseItem(itemString);
    expect(result.Id).toBe(2115);
    expect(result.Name).toBe("Valkyrja's Shield");
    expect(result.Type).toBe("IT_ARMOR");
    expect(result.Buy).toBe(30000);
    expect(result.Job?.All).toBe(true);
    expect(result.Job?.Novice).toBe(false);
    expect(result.Script).toBe(`bonus2 bSubEle,Ele_Water,20;
bonus2 bSubEle,Ele_Fire,20;
bonus2 bSubEle,Ele_Dark,20;
bonus2 bSubEle,Ele_Undead,20;
bonus bMdef,5;`);
  });

  it("should parse an item string into an object", () => {
    const itemString = `
      Id: 1551
	AegisName: "Bible"
	Name: "Bible"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 1000
	Atk: 115
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bInt,2; ">`;
    const result = parseItem(itemString);
    expect(result.Id).toBe(1551);
    expect(result.Name).toBe("Bible");
    expect(result.Type).toBe("IT_WEAPON");
    expect(result.Buy).toBe(60000);
    expect(result.Job?.All).toBe(undefined);
    expect(result.Job?.Priest).toBe(true);
    expect(result.Job?.Sage).toBe(true);
    expect(result.Job?.Star_Gladiator).toBe(true);
    expect(result.Script).toBe(`bonus bInt,2;`);
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

describe("parseBonuses", () => {
  it("should parse bonuses from Valkyrja's Shield script correctly", () => {
    const script = `
      bonus2 bSubEle,Ele_Water,20;
      bonus2 bSubEle,Ele_Fire,20;
      bonus2 bSubEle,Ele_Dark,20;
      bonus2 bSubEle,Ele_Undead,20;
      bonus bMdef,5;
    `;
    const expectedBonuses = {
      bonus: {
        SP_MDEF1: [["5"]],
      },
      bonus2: {
        SP_SUBELE: [
          ["Ele_Water", "20"],
          ["Ele_Fire", "20"],
          ["Ele_Dark", "20"],
          ["Ele_Undead", "20"],
        ],
      },
    };
    const result = parseBonuses(script);
    expect(result).toEqual(expectedBonuses);
  });

  it("should parse bonuses from Cracked Buckler script correctly", () => {
    const script = `
      bonus bAgi,2;
      bonus2 bAddEle,Ele_Neutral,-10;
      bonus3 bAutoSpellWhenHit,PR_KYRIE,1,50;
      bonus bMdef,1;
    `;
    const expectedBonuses = {
      bonus: {
        SP_AGI: [["2"]],
        SP_MDEF1: [["1"]],
      },
      bonus2: {
        SP_ADDELE: [["Ele_Neutral", "-10"]],
      },
      bonus3: {
        SP_AUTOSPELL_WHENHIT: [["PR_KYRIE", "1", "50"]],
      },
    };
    const result = parseBonuses(script);
    expect(result).toEqual(expectedBonuses);
  });

  it("should parse bonuses from Ring Of Resonance script correctly", () => {
    const script = `
      bonus bAgi,2;
      bonus bVit,1;
      bonus bMdef,2;
      bonus4 bAutoSpellWhenHit,WZ_QUAGMIRE,1,50,0;
      bonus3 bAutoSpellWhenHit,AS_SPLASHER,10,20;
      bonus3 bAutoSpellWhenHit,AL_HEAL,10,30;
      bonus3 bAutoSpellWhenHit,HP_ASSUMPTIO,3,20;
      bonus3 bAutoSpellWhenHit,CG_TAROTCARD,5,20;
    `;
    const expectedBonuses = {
      bonus: {
        SP_AGI: [["2"]],
        SP_VIT: [["1"]],
        SP_MDEF1: [["2"]],
      },
      bonus4: {
        SP_AUTOSPELL_WHENHIT: [["WZ_QUAGMIRE", "1", "50", "0"]],
      },
      bonus3: {
        SP_AUTOSPELL_WHENHIT: [
          ["AS_SPLASHER", "10", "20"],
          ["AL_HEAL", "10", "30"],
          ["HP_ASSUMPTIO", "3", "20"],
          ["CG_TAROTCARD", "5", "20"],
        ],
      },
    };
    const result = parseBonuses(script);
    expect(result).toEqual(expectedBonuses);
  });

  it("should parse bonuses from Detardeurus Card script correctly", () => {
    const script = `
      bonus bMdef,-20;
      bonus2 bResEff,Eff_Freeze,10000;
      bonus5 bAutoSpellWhenHit,SA_LANDPROTECTOR,1,70,BF_MAGIC,0;
    `;
    const expectedBonuses = {
      bonus: {
        SP_MDEF1: [["-20"]],
      },
      bonus2: {
        SP_RESEFF: [["Eff_Freeze", "10000"]],
      },
      bonus5: {
        SP_AUTOSPELL_WHENHIT: [
          ["SA_LANDPROTECTOR", "1", "70", "BF_MAGIC", "0"],
        ],
      },
    };
    const result = parseBonuses(script);
    expect(result).toEqual(expectedBonuses);
  });
});

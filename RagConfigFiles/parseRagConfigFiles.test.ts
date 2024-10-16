import * as fs from "fs";
// Import the generated parser
import { parse } from "./../configParser";

describe("parseRagConfigFiles", () => {
  it("parses exp_group_db.conf file", () => {
    const configContent = fs.readFileSync(
      "RagConfigFiles/exp_group_db.conf",
      "utf8"
    );
    const configObject = parse(configContent) as any;
    expect(configObject).toBeTruthy();

    expect(configObject.base_exp_group_db.FirstClasses.MaxLevel).toBe(99);
    expect(configObject.base_exp_group_db.FirstClasses.Exp.length).toBe(98);
    expect(configObject.base_exp_group_db.FirstClasses.Exp[0]).toBe(9);
    expect(configObject.base_exp_group_db.FirstClasses.Exp[45]).toBe(64041);

    expect(configObject.base_exp_group_db.TranscendedClasses.MaxLevel).toBe(99);
    expect(configObject.base_exp_group_db.TranscendedClasses.Exp.length).toBe(
      98
    );
    expect(configObject.base_exp_group_db.TranscendedClasses.Exp[0]).toBe(10);
    expect(configObject.base_exp_group_db.TranscendedClasses.Exp[45]).toBe(
      108870
    );

    expect(configObject.job_exp_group_db.Novice.MaxLevel).toBe(10);
    expect(configObject.job_exp_group_db.Novice.Exp.length).toBe(9);
    expect(configObject.job_exp_group_db.Novice.Exp[0]).toBe(10);
    expect(configObject.job_exp_group_db.Novice.Exp[8]).toBe(340);

    expect(configObject.job_exp_group_db.FirstClasses.MaxLevel).toBe(50);
    expect(configObject.job_exp_group_db.FirstClasses.Exp.length).toBe(49);
    expect(configObject.job_exp_group_db.FirstClasses.Exp[0]).toBe(30);
    expect(configObject.job_exp_group_db.FirstClasses.Exp[8]).toBe(336);
  });

  it("parses job_db.conf file", () => {
    const configContent = fs.readFileSync("RagConfigFiles/job_db.conf", "utf8");
    const configObject = parse(configContent) as any;
    expect(configObject).toBeTruthy();

    expect(configObject.Archer.InheritSP).toBe("Swordsman");
    expect(configObject.Archer.BaseASPD.Fist).toBe(400);
    expect(configObject.Archer.BaseASPD.Bow).toBe(700);
    expect(configObject.Archer.JobExpGroup).toBe("FirstClasses");
    expect(configObject.Archer.BaseExpGroup).toBe("FirstClasses");
    expect(configObject.Archer.HPTable.length).toBe(150);
    expect(configObject.Archer.HPTable[0]).toBe(40);

    expect(configObject.Swordsman.InheritSP).toBe(undefined);
    expect(configObject.Swordsman.BaseASPD.Fist).toBe(400);
    expect(configObject.Swordsman.BaseASPD.Sword).toBe(550);
    expect(configObject.Swordsman.JobExpGroup).toBe("FirstClasses");
    expect(configObject.Swordsman.BaseExpGroup).toBe("FirstClasses");
    expect(configObject.Swordsman.HPTable.length).toBe(150);
    expect(configObject.Swordsman.HPTable[0]).toBe(40);
    expect(configObject.Swordsman.SPTable.length).toBe(150);
    expect(configObject.Swordsman.SPTable[0]).toBe(12);

    expect(configObject.Magician_High.Inherit).toBe("Magician");
    expect(configObject.Magician_High.JobExpGroup).toBe(
      "TranscendedFirstClasses"
    );
    expect(configObject.Magician_High.BaseExpGroup).toBe("TranscendedClasses");

    expect(configObject.Creator.Inherit).toBe("Alchemist");
    expect(configObject.Creator.JobExpGroup).toBe("TranscendedSecondClasses");
    expect(configObject.Creator.BaseExpGroup).toBe("TranscendedClasses");
  });
});

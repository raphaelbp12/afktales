import * as fs from "fs";
// Import the generated parser
import { parse } from "./../configParser";

const configContent = fs.readFileSync("RagConfigFiles/test.conf", "utf8");

describe("configParser", () => {
  it("parses the configuration file", () => {
    const configObject = parse(configContent) as any;
    expect(configObject).toBeTruthy();
    expect(configObject.base_exp_group_db.FirstClasses.MaxLevel).toBe(99);
    expect(configObject.base_exp_group_db.FirstClasses.Exp.length).toBe(25);
  });
});

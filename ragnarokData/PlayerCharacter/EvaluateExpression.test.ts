import { ItemDB } from "../ItemDB/ItemDB";
import { ClassesEnum, ClassesEnumString } from "./ClassesEnum";
import { PlayerAttributes } from "./PlayerAttributes";
import fs from "fs";

describe("EvaluateExpression", () => {
  let itemDB: ItemDB;
  beforeAll(async () => {
    global.fetch = jest.fn(() => {
      const configContent = fs.readFileSync(
        "./public/configs/item_db.conf",
        "utf8"
      );
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({}),
        text: async () => configContent,
        // Include other properties if needed
      } as Response);
    });

    itemDB = await ItemDB.create();
  });

  it("should evaluate JobLevel >= 50 - to be true", async () => {
    const conditionStr = "JobLevel >= 50";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.persistent_status.job_level = 50;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate JobLevel >= 50 - to be false", async () => {
    const conditionStr = "JobLevel >= 50";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.persistent_status.job_level = 49;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate BaseLevel >= 50 - to be true", async () => {
    const conditionStr = "BaseLevel >= 50";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.persistent_status.base_level = 50;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate BaseLevel >= 50 - to be false", async () => {
    const conditionStr = "BaseLevel >= 50";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.persistent_status.base_level = 49;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate Class==Job_Whitesmith - to be false", async () => {
    const conditionStr = "Class==Job_Whitesmith";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate Class==Job_Whitesmith - to be true", async () => {
    const conditionStr = "Class==Job_Whitesmith";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.job = ClassesEnum.MAPID_WHITESMITH;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate Class==Job_Whitesmith - to be false", async () => {
    const conditionStr = "Class==Job_Whitesmith";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.job = ClassesEnum.MAPID_NOVICE_HIGH;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate && and || operators", async () => {
    const conditionStr =
      "BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief||(BaseJob==Job_Taekwon&&Class!=Job_Soul_Linker)";
    const playerAttributes = await PlayerAttributes.create("test", 1, {});
    playerAttributes.job = ClassesEnum.MAPID_KNIGHT;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });
});

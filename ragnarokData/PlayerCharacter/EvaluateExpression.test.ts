import { ItemDB } from "../ItemDB/ItemDB";
import { ClassesEnum, ClassesEnumString } from "./ClassesEnum";
import { PlayerAttributes } from "./PlayerAttributes";

describe("EvaluateExpression", () => {
  const itemDB = new ItemDB();

  it("should evaluate JobLevel >= 50 - to be true", () => {
    const conditionStr = "JobLevel >= 50";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    playerAttributes.persistent_status.job_level = 50;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate JobLevel >= 50 - to be false", () => {
    const conditionStr = "JobLevel >= 50";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    playerAttributes.persistent_status.job_level = 49;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate BaseLevel >= 50 - to be true", () => {
    const conditionStr = "BaseLevel >= 50";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    playerAttributes.persistent_status.base_level = 50;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate BaseLevel >= 50 - to be false", () => {
    const conditionStr = "BaseLevel >= 50";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    playerAttributes.persistent_status.base_level = 49;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate Class==Job_Whitesmith - to be false", () => {
    const conditionStr = "Class==Job_Whitesmith";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate Class==Job_Whitesmith - to be true", () => {
    const conditionStr = "Class==Job_Whitesmith";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    playerAttributes.job = ClassesEnum.MAPID_WHITESMITH;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate Class==Job_Whitesmith - to be false", () => {
    const conditionStr = "Class==Job_Whitesmith";
    const playerAttributes = new PlayerAttributes("test", 1, {});
    playerAttributes.job = ClassesEnum.MAPID_NOVICE_HIGH;
    const item = itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate && and || operators", () => {
    const conditionStr =
      "BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief||(BaseJob==Job_Taekwon&&Class!=Job_Soul_Linker)";
    const playerAttributes = new PlayerAttributes("test", 1, {});
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

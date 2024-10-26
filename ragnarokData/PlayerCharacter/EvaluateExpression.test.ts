import { ClassesEnum } from "./ClassesEnum";
import { PlayerAttributes } from "./PlayerAttributes";
import { Databases } from "../Database/Databases";
import fs from "fs";

describe("EvaluateExpression", () => {
  let databases: Databases;

  beforeAll(async () => {
    // Mock the global.fetch function
    global.fetch = jest.fn((input: RequestInfo | URL, init?: RequestInit) => {
      let url: string;
      if (typeof input === "string") {
        url = input;
      } else if (input instanceof URL) {
        url = input.toString();
      } else if ("url" in input) {
        // For Request objects
        url = input.url;
      } else {
        throw new Error("Invalid input to fetch");
      }
      // Adjust the path to your actual config files location
      const basePath = "./public"; // Adjust this path as necessary
      let filePath = "";
      if (url.endsWith("/configs/job_db.conf")) {
        filePath = `${basePath}/configs/job_db.conf`;
      } else if (url.endsWith("/configs/job_db2.txt")) {
        filePath = `${basePath}/configs/job_db2.txt`;
      } else if (url.endsWith("/configs/exp_group_db.conf")) {
        filePath = `${basePath}/configs/exp_group_db.conf`;
      } else if (url.endsWith("/configs/item_db.conf")) {
        filePath = `${basePath}/configs/item_db.conf`;
      } else if (url.endsWith("/configs/item_db2.conf")) {
        filePath = `${basePath}/configs/item_db2.conf`;
      } else {
        throw new Error(`Unexpected fetch URL: ${url}`);
      }
      const configContent = fs.readFileSync(filePath, "utf8");
      return Promise.resolve({
        ok: true,
        status: 200,
        text: async () => configContent,
      } as Response);
    });

    databases = await Databases.create();
  });

  afterAll(() => {
    // Restore the original fetch function after tests
    (global.fetch as jest.Mock).mockRestore();
  });
  let playerAttributes: PlayerAttributes;

  beforeEach(async () => {
    playerAttributes = await PlayerAttributes.create(databases, "test", 1, {});
  });

  it("should evaluate JobLevel >= 50 - to be true", async () => {
    const conditionStr = "JobLevel >= 50";

    playerAttributes.persistent_status.job_level = 50;
    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate JobLevel >= 50 - to be false", async () => {
    const conditionStr = "JobLevel >= 50";

    playerAttributes.persistent_status.job_level = 49;
    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate BaseLevel >= 50 - to be true", async () => {
    const conditionStr = "BaseLevel >= 50";

    playerAttributes.persistent_status.base_level = 50;
    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate BaseLevel >= 50 - to be false", async () => {
    const conditionStr = "BaseLevel >= 50";

    playerAttributes.persistent_status.base_level = 49;
    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate Class==Job_Whitesmith - to be false", async () => {
    const conditionStr = "Class==Job_Whitesmith";

    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(false);
  });

  it("should evaluate Class==Job_Whitesmith - to be true", async () => {
    const conditionStr = "Class==Job_Whitesmith";

    playerAttributes.job = ClassesEnum.MAPID_WHITESMITH;
    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });

  it("should evaluate Class==Job_Whitesmith - to be false", async () => {
    const conditionStr = "Class==Job_Whitesmith";

    playerAttributes.job = ClassesEnum.MAPID_NOVICE_HIGH;
    const item = databases.itemDB.getItemByNameid(501);

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

    playerAttributes.job = ClassesEnum.MAPID_KNIGHT;
    const item = databases.itemDB.getItemByNameid(501);

    const result = playerAttributes.evaluateExpression(
      conditionStr,
      item,
      true
    );

    expect(result).toBe(true);
  });
});

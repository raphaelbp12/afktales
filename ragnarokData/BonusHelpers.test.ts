import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { BonusHelpers } from "./BonusHelpers";
import { Bonuses } from "@/ragnarokData/types";
import fs from "fs";
import { Databases } from "./Database/Databases";

describe("BonusHelpers", () => {
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

  test("should process SP_HP_VANISH_RATE bonus correctly", () => {
    const bonuses: Bonuses = {
      bonus3: {
        SP_HP_VANISH_RATE: [[10, 1, 0]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.hp_vanish_rate).toBe(10);
    expect(updatedAttributes.bonus.hp_vanish_per).toBe(1);
    expect(updatedAttributes.bonus.hp_vanish_trigger).toBe(0);
  });

  test("should process SP_SP_VANISH_RATE bonus correctly", () => {
    const bonuses: Bonuses = {
      bonus3: {
        SP_SP_VANISH_RATE: [[10, 1, 0]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.sp_vanish_rate).toBe(10);
    expect(updatedAttributes.bonus.sp_vanish_per).toBe(1);
    expect(updatedAttributes.bonus.sp_vanish_trigger).toBe(0);
  });

  test("should process combinations of bonuses correctly", () => {
    const bonuses: Bonuses = {
      bonus3: {
        SP_HP_VANISH_RATE: [[1, 20, 0]],
        SP_SP_VANISH_RATE: [[1, 15, 1]],
      },
      bonus4: {
        SP_AUTOSPELL: [[1, 2001, 10, 5]],
      },
      bonus5: {
        SP_AUTOSPELL_WHENHIT: [[1, 2002, 20, 10, 5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.hp_vanish_rate).toBe(1);
    expect(updatedAttributes.bonus.hp_vanish_per).toBe(20);
    expect(updatedAttributes.bonus.hp_vanish_trigger).toBe(0);

    expect(updatedAttributes.bonus.sp_vanish_rate).toBe(1);
    expect(updatedAttributes.bonus.sp_vanish_per).toBe(15);
    expect(updatedAttributes.bonus.sp_vanish_trigger).toBe(1);
  });

  test("should handle unknown bonus type gracefully", () => {
    const bonuses: Bonuses = {
      bonus3: {
        UNKNOWN_BONUS: [[1, 2, 3]],
      },
    };

    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Unknown bonus3 type: UNKNOWN_BONUS"
    );
    consoleWarnSpy.mockRestore();
  });
});

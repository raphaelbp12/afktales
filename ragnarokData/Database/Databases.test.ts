// Databases.test.ts
import { Databases } from "./Databases";
import * as fs from "fs";
import { BaseExpGroupKey } from "./ExpGroupDB/ExpGroupDB";

describe("Databases", () => {
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

  it("should initialize the singleton instance", () => {
    expect(databases).toBeDefined();
  });

  it("should have expGroupDB initialized", () => {
    expect(databases.expGroupDB).toBeDefined();
  });

  it("should have jobDB initialized", () => {
    expect(databases.jobDB).toBeDefined();
  });

  it("should have jobDBStats initialized", () => {
    expect(databases.jobDBStats).toBeDefined();
  });

  it("should have itemDB initialized", () => {
    expect(databases.itemDB).toBeDefined();
  });

  // Now, write tests to check that each database contains expected data

  // For expGroupDB
  it("expGroupDB should contain base exp groups", () => {
    const baseExpGroup = databases.expGroupDB.getBaseExpGroup(
      BaseExpGroupKey.FirstClasses
    );
    expect(baseExpGroup).toBeDefined();
    expect(baseExpGroup.MaxLevel).toBeGreaterThan(0);
    expect(baseExpGroup.Exp.length).toBeGreaterThan(0);
  });

  // For jobDB
  it("jobDB should contain jobsDict with correct keys", () => {
    expect(databases.jobDB.jobsDict).toBeDefined();
    expect(Object.keys(databases.jobDB.jobsDict)).toContain("Novice");
    const noviceJobInfo = databases.jobDB.jobsDict["Novice"];
    expect(noviceJobInfo.BaseExpGroup).toBe("FirstClasses");
  });

  // For jobDBStats
  it("jobDBStats should contain job stats", () => {
    expect(databases.jobDBStats.jobsStatsDict).toBeDefined();
    expect(Object.keys(databases.jobDBStats.jobsStatsDict)).toContain("0"); // Assuming '0' is a valid job ID
    const jobStats = databases.jobDBStats.jobsStatsDict["0"];
    expect(Array.isArray(jobStats)).toBe(true);
  });

  // For itemDB
  it("itemDB should contain items", () => {
    expect(databases.itemDB).toBeDefined();
    const item = databases.itemDB.getItemByNameid(501); // Assuming 501 is a valid item ID
    expect(item).toBeDefined();
    expect(item.Name).toBe("Red Potion");
  });
});

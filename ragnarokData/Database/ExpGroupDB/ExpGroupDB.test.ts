// ExpGroupDB.test.ts
import { ExpGroupDB, BaseExpGroupKey, JobExpGroupKey } from "./ExpGroupDB";
import * as fs from "fs";

describe("ExpGroupDB", () => {
  let expGroupDB: ExpGroupDB;

  beforeAll(async () => {
    // Mock the global.fetch function
    global.fetch = jest.fn(() => {
      const configContent = fs.readFileSync(
        "./public/configs/exp_group_db.conf",
        "utf8"
      );
      return Promise.resolve({
        ok: true,
        status: 200,
        text: async () => configContent,
      } as Response);
    });

    expGroupDB = await ExpGroupDB.create();
  });

  afterAll(() => {
    // Restore the original fetch function after tests
    (global.fetch as jest.Mock).mockRestore();
  });

  it("should initialize the singleton instance", () => {
    expect(expGroupDB).toBeDefined();
  });

  it("should have BaseExpGroupDict with correct keys", () => {
    expect(expGroupDB.BaseExpGroupDict).toBeDefined();
    expect(Object.keys(expGroupDB.BaseExpGroupDict)).toEqual(
      expect.arrayContaining(Object.values(BaseExpGroupKey))
    );
  });

  it("should have JobExpGroupDict with correct keys", () => {
    expect(expGroupDB.JobExpGroupDict).toBeDefined();
    expect(Object.keys(expGroupDB.JobExpGroupDict)).toEqual(
      expect.arrayContaining(Object.values(JobExpGroupKey))
    );
  });

  it("should return correct ExpGroup for BaseExpGroupKey", () => {
    const firstClassesExpGroup = expGroupDB.getBaseExpGroup(
      BaseExpGroupKey.FirstClasses
    );
    expect(firstClassesExpGroup).toBeDefined();
    expect(firstClassesExpGroup.MaxLevel).toBeGreaterThan(0);
    expect(firstClassesExpGroup.Exp.length).toBeGreaterThan(0);
    expect(firstClassesExpGroup.Exp[0]).toBe(9);
    expect(firstClassesExpGroup.Exp[8]).toBe(253);
  });

  it("should return correct ExpGroup for JobExpGroupKey", () => {
    const noviceExpGroup = expGroupDB.getJobExpGroup(JobExpGroupKey.Novice);
    expect(noviceExpGroup).toBeDefined();
    expect(noviceExpGroup.MaxLevel).toBe(10);
    expect(noviceExpGroup.Exp.length).toBeGreaterThan(0);
    expect(noviceExpGroup.Exp[0]).toBe(10);
    expect(noviceExpGroup.Exp[8]).toBe(340);
  });
});

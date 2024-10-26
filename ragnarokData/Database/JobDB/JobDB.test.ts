// JobDB.test.ts
import { JobDB } from "./JobDB";
import * as fs from "fs";
import { ClassesEnumString } from "@/ragnarokData/PlayerCharacter/ClassesEnum";

describe("JobDB", () => {
  let jobDB: JobDB;

  beforeAll(async () => {
    // Mock the global.fetch function
    global.fetch = jest.fn(() => {
      // Adjust the path to your actual job_db.conf location
      const configContent = fs.readFileSync(
        "./public/configs/job_db.conf",
        "utf8"
      );
      return Promise.resolve({
        ok: true,
        status: 200,
        text: async () => configContent,
      } as Response);
    });

    jobDB = await JobDB.create();
  });

  afterAll(() => {
    // Restore the original fetch function after tests
    (global.fetch as jest.Mock).mockRestore();
  });

  it("should initialize the singleton instance", () => {
    expect(jobDB).toBeDefined();
  });

  it("should have jobsDict with correct keys", () => {
    expect(jobDB.jobsDict).toBeDefined();
    expect(Object.keys(jobDB.jobsDict)).toEqual(
      expect.arrayContaining([
        "Novice",
        "Swordsman",
        "Magician",
        "Archer",
        "Acolyte",
        "Merchant",
        "Thief",
        "Knight",
        "Wizard",
        "Assassin",
        // Add more job names as needed
      ])
    );
  });

  it("should return correct JobInfo for Novice", () => {
    const noviceJobInfo = jobDB.jobsDict["Novice"];
    expect(noviceJobInfo).toBeDefined();
    expect(noviceJobInfo.BaseExpGroup).toBe("FirstClasses");
    expect(noviceJobInfo.JobExpGroup).toBe("Novice");
    expect(noviceJobInfo.Weight).toBe(20000);
    expect(noviceJobInfo.BaseASPD).toBeDefined();
    expect(noviceJobInfo.BaseASPD!["Fist"]).toBe(500);
    expect(noviceJobInfo.HPTable).toBeDefined();
    expect(noviceJobInfo.HPTable!.length).toBeGreaterThan(0);
    expect(noviceJobInfo.HPTable![0]).toBe(40);
    expect(noviceJobInfo.SPTable).toBeDefined();
    expect(noviceJobInfo.SPTable!.length).toBeGreaterThan(0);
    expect(noviceJobInfo.SPTable![0]).toBe(11);
  });

  it("should correctly inherit properties for Swordsman_High", () => {
    const swordsmanHighJobInfo = jobDB.jobsDict["Swordsman_High"];
    expect(swordsmanHighJobInfo).toBeDefined();
    // Should inherit properties from "Swordsman"
    expect(swordsmanHighJobInfo.BaseExpGroup).toBe("TranscendedClasses");
    expect(swordsmanHighJobInfo.JobExpGroup).toBe("TranscendedFirstClasses");
    expect(swordsmanHighJobInfo.Weight).toBe(28000); // Inherited from Swordsman
    expect(swordsmanHighJobInfo.BaseASPD).toBeDefined();
    expect(swordsmanHighJobInfo.BaseASPD!["Fist"]).toBe(400); // Inherited from Swordsman
    expect(swordsmanHighJobInfo.HPTable).toBeDefined();
    expect(swordsmanHighJobInfo.HPTable!.length).toBeGreaterThan(0);
    expect(swordsmanHighJobInfo.HPTable![0]).toBe(40); // Inherited from Swordsman
  });

  it("should correctly inherit HP from Hunter and SP from Acolyte for Rogue", () => {
    const rogueJobInfo = jobDB.jobsDict["Rogue"];
    expect(rogueJobInfo).toBeDefined();
    expect(rogueJobInfo.HPTable).toBeDefined();
    expect(rogueJobInfo.SPTable).toBeDefined();
    // HPTable should come from Hunter
    const hunterJobInfo = jobDB.jobsDict["Hunter"];
    expect(hunterJobInfo).toBeDefined();
    expect(rogueJobInfo.HPTable).toEqual(hunterJobInfo.HPTable);
    // SPTable should come from Acolyte
    const acolyteJobInfo = jobDB.jobsDict["Acolyte"];
    expect(acolyteJobInfo).toBeDefined();
    expect(rogueJobInfo.SPTable).toEqual(acolyteJobInfo.SPTable);
  });

  it("should throw error on circular inheritance", () => {
    // Temporarily add jobs to create a circular inheritance
    jobDB.jobsDict["JobA"] = { Inherit: "JobB" };
    jobDB.jobsDict["JobB"] = { Inherit: "JobA" };

    expect(() => {
      jobDB.resolveInheritance("JobA", new Set());
    }).toThrow("Circular inheritance detected for job JobA");

    // Clean up the temporary jobs
    delete jobDB.jobsDict["JobA"];
    delete jobDB.jobsDict["JobB"];
  });

  // Tests for mappings
  it("should map job names to IDs correctly", () => {
    expect(jobDB.getJobIDByName("Novice")).toBe(ClassesEnumString.Job_Novice);
    expect(jobDB.getJobIDByName("Swordsman")).toBe(
      ClassesEnumString.Job_Swordman
    );
    expect(jobDB.getJobIDByName("Magician")).toBe(ClassesEnumString.Job_Mage);
    expect(jobDB.getJobIDByName("NonExistingJob")).toBeNull();
  });

  it("should map job IDs to names correctly", () => {
    expect(jobDB.getJobNameById(ClassesEnumString.Job_Novice)).toBe("Novice");
    expect(jobDB.getJobNameById(ClassesEnumString.Job_Swordman)).toBe(
      "Swordsman"
    );
    expect(jobDB.getJobNameById(ClassesEnumString.Job_Mage)).toBe("Magician");
    expect(jobDB.getJobNameById(9999)).toBeNull();
  });

  it("should map job IDs to values correctly", () => {
    expect(jobDB.getJobValueById(ClassesEnumString.Job_Novice)).toBe(0);
    expect(jobDB.getJobValueById(ClassesEnumString.Job_Swordman)).toBe(1);
    expect(jobDB.getJobValueById(ClassesEnumString.Job_Mage)).toBe(2);
    expect(jobDB.getJobValueById(9999)).toBeNull();
  });
});

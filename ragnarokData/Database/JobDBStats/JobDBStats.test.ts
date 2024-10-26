// JobDB.test.ts
import { JobDBStats } from "./JobDBStats";
import * as fs from "fs";

describe("JobDBStats", () => {
  let jobDBStats: JobDBStats;

  beforeAll(async () => {
    // Mock the global.fetch function
    global.fetch = jest.fn(() => {
      // Adjust the path to your actual job_db2.txt location
      const configContent = fs.readFileSync(
        "./public/configs/job_db2.txt",
        "utf8"
      );
      return Promise.resolve({
        ok: true,
        status: 200,
        text: async () => configContent,
      } as Response);
    });

    jobDBStats = await JobDBStats.create();
  });

  afterAll(() => {
    // Restore the original fetch function after tests
    (global.fetch as jest.Mock).mockRestore();
  });

  it("should initialize the singleton instance", () => {
    expect(jobDBStats).toBeDefined();
  });

  it("should have jobsDict with correct keys", () => {
    expect(jobDBStats.jobsStatsDict).toBeDefined();
    expect(Object.keys(jobDBStats.jobsStatsDict)).toEqual(
      expect.arrayContaining([
        "0",
        "1",
        "4003",
        "4012",
        "4020",
        "4033",
        "4038",
        // Add more job names as needed
      ])
    );
  });
});

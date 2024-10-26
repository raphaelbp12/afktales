import { parse } from "@/PEGJSFiles/jobStatsParser"; // Assuming this is your PEG.js parser
import { IJobDBStats } from "./IJobDBStats";

// JobDB class definition
export class JobDBStats implements IJobDBStats {
  private static instance: JobDBStats | null = null;
  private static instancePromise: Promise<JobDBStats> | null = null;

  public jobsStatsDict: { [jobId: string]: number[] } = {};

  private constructor() {}

  public static async create(): Promise<JobDBStats> {
    if (this.instance) {
      console.log("JobDBStats.create(): Returning existing instance");
      return this.instance;
    }

    if (this.instancePromise) {
      console.log("JobDBStats.create(): Returning existing promise");
      return this.instancePromise;
    }

    console.log("JobDBStats.create(): Initializing new singleton instance");

    this.instancePromise = (async () => {
      const jobDBStats = new JobDBStats();

      // Fetch the job_db2.txt file
      const response = await fetch("/configs/job_db2.txt");
      if (!response.ok) {
        throw new Error(`Failed to fetch job_db2.txt: ${response.statusText}`);
      }
      const configString = await response.text();

      // Parse configString
      const configObject = parse(configString) as any;
      jobDBStats.parseConfigObject(configObject);

      // Cache the instance
      this.instance = jobDBStats;
      this.instancePromise = null; // Clear the promise after initialization
      return jobDBStats;
    })();

    return this.instancePromise;
  }

  private parseConfigObject(configObject: any) {
    // Parse each job in the config object
    for (const jobName in configObject) {
      const jobData = configObject[jobName];
      const jobInfo = jobData;
      this.jobsStatsDict[jobName] = jobInfo;
    }
  }
}

import { parse } from "@/PEGJSFiles/configParser"; // Assuming this is your PEG.js parser
import {
  ClassesEnumString,
  MappingJobNameArray,
} from "@/ragnarokData/PlayerCharacter/ClassesEnum";
import { IJobDB, JobInfo } from "./IJobDB";

// JobDB class definition
export class JobDB implements IJobDB {
  private static instance: JobDB | null = null;
  private static instancePromise: Promise<JobDB> | null = null;

  public jobsDict: { [jobName: string]: JobInfo } = {};

  // Mappings between job names and IDs
  private jobNameToId: { [name: string]: number } = {};
  private jobIdToValue: { [name: number]: number } = {};
  private jobIdToName: { [id: number]: string } = {};

  private constructor() {}

  private initializeMappings() {
    // Build the jobNameToID and jobIDToName mappings
    for (const mapping of MappingJobNameArray) {
      this.jobNameToId[mapping.name] = mapping.id;
      this.jobIdToValue[mapping.id] = mapping.value;
      this.jobIdToName[mapping.id] = mapping.name;
    }
  }

  public getJobValueById(id: number): number | null {
    return this.jobIdToValue[id] !== undefined ? this.jobIdToValue[id] : null;
  }

  public getJobIDByName(name: string): number | null {
    return this.jobNameToId[name] !== undefined ? this.jobNameToId[name] : null;
  }

  public getJobNameById(id: number): string | null {
    return this.jobIdToName[id] !== undefined ? this.jobIdToName[id] : null;
  }

  public static async create(): Promise<JobDB> {
    if (this.instance) {
      console.log("JobDB.create(): Returning existing instance");
      return this.instance;
    }

    if (this.instancePromise) {
      console.log("JobDB.create(): Returning existing promise");
      return this.instancePromise;
    }

    console.log("JobDB.create(): Initializing new singleton instance");

    this.instancePromise = (async () => {
      const jobDB = new JobDB();

      // Initialize mappings
      jobDB.initializeMappings();

      // Fetch the job_db.conf file
      const response = await fetch("/configs/job_db.conf");
      if (!response.ok) {
        throw new Error(`Failed to fetch job_db.conf: ${response.statusText}`);
      }
      const configString = await response.text();

      // Parse configString
      const configObject = parse(configString) as any;
      jobDB.parseConfigObject(configObject);

      // Cache the instance
      this.instance = jobDB;
      this.instancePromise = null; // Clear the promise after initialization
      return jobDB;
    })();

    return this.instancePromise;
  }

  private parseConfigObject(configObject: any) {
    // Parse each job in the config object
    for (const jobName in configObject) {
      const jobData = configObject[jobName];
      const jobInfo = this.parseJobInfo(jobData);
      this.jobsDict[jobName] = jobInfo;
    }

    // Resolve inheritance after parsing all jobs
    for (const jobName in this.jobsDict) {
      this.resolveInheritance(jobName, new Set());
      this.setupDefaultValues(jobName);
    }
  }

  private setupDefaultValues(jobName: string) {
    const jobInfo = this.jobsDict[jobName];
    if (jobInfo.Weight === undefined) jobInfo.Weight = 20000;
  }

  private parseJobInfo(jobData: any): JobInfo {
    const jobInfo: JobInfo = {};

    if (jobData.BaseExpGroup) jobInfo.BaseExpGroup = jobData.BaseExpGroup;
    if (jobData.JobExpGroup) jobInfo.JobExpGroup = jobData.JobExpGroup;
    if (jobData.ParametersGroup)
      jobInfo.ParametersGroup = jobData.ParametersGroup;
    if (jobData.Weight) jobInfo.Weight = jobData.Weight;
    if (jobData.InheritHP) jobInfo.InheritHP = jobData.InheritHP;
    if (jobData.InheritSP) jobInfo.InheritSP = jobData.InheritSP;
    if (jobData.Inherit) jobInfo.Inherit = jobData.Inherit;

    if (jobData.BaseASPD) {
      jobInfo.BaseASPD = jobData.BaseASPD;
    }

    if (jobData.HPTable) {
      jobInfo.HPTable = jobData.HPTable;
    }

    if (jobData.SPTable) {
      jobInfo.SPTable = jobData.SPTable;
    }

    return jobInfo;
  }

  public resolveInheritance(jobName: string, visited: Set<string>) {
    if (visited.has(jobName)) {
      throw new Error(`Circular inheritance detected for job ${jobName}`);
    }
    visited.add(jobName);

    const jobInfo = this.jobsDict[jobName];

    if (jobInfo.Inherit) {
      const parentJobName = jobInfo.Inherit;
      if (!this.jobsDict[parentJobName]) {
        throw new Error(
          `Inherited job ${parentJobName} not found for job ${jobName}`
        );
      }

      // Resolve inheritance for the parent first
      this.resolveInheritance(parentJobName, visited);

      const parentJobInfo = this.jobsDict[parentJobName];

      // Merge parent properties into jobInfo
      this.mergeJobInfo(jobInfo, parentJobInfo);
    }

    if (jobInfo.InheritHP) {
      const parentJobName = jobInfo.InheritHP;
      if (!this.jobsDict[parentJobName]) {
        throw new Error(
          `Inherited HP job ${parentJobName} not found for job ${jobName}`
        );
      }

      this.resolveInheritance(parentJobName, visited);

      const parentJobInfo = this.jobsDict[parentJobName];

      if (!jobInfo.HPTable && parentJobInfo.HPTable) {
        jobInfo.HPTable = parentJobInfo.HPTable;
      }
    }

    if (jobInfo.InheritSP) {
      const parentJobName = jobInfo.InheritSP;
      if (!this.jobsDict[parentJobName]) {
        throw new Error(
          `Inherited SP job ${parentJobName} not found for job ${jobName}`
        );
      }

      this.resolveInheritance(parentJobName, visited);

      const parentJobInfo = this.jobsDict[parentJobName];

      if (!jobInfo.SPTable && parentJobInfo.SPTable) {
        jobInfo.SPTable = parentJobInfo.SPTable;
      }
    }

    visited.delete(jobName);
  }

  private mergeJobInfo(jobInfo: JobInfo, parentJobInfo: JobInfo) {
    // For each property in parentJobInfo, if jobInfo doesn't have it, copy it over
    for (const key of Object.keys(parentJobInfo)) {
      const propKey = key as keyof JobInfo;
      if (
        propKey === "Inherit" ||
        propKey === "InheritHP" ||
        propKey === "InheritSP"
      ) {
        continue;
      }
      if ((jobInfo as any)[propKey] === undefined) {
        (jobInfo as any)[propKey] = (parentJobInfo as any)[propKey];
      }
    }
  }
}

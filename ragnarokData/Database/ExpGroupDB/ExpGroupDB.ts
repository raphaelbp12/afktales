import { parse } from "@/configParser"; // Assuming this is your PEG.js parser
// Import or define the `parseConfigFromConf` function for exp groups

export interface ExpGroup {
  MaxLevel: number;
  Exp: number[];
}

export enum BaseExpGroupKey {
  FirstClasses = "FirstClasses",
  TranscendedClasses = "TranscendedClasses",
  ThirdClasses = "ThirdClasses",
  Homunculus = "Homunculus",
}

export enum JobExpGroupKey {
  Novice = "Novice",
  FirstClasses = "FirstClasses",
  SecondClasses = "SecondClasses",
  ThirdClasses = "ThirdClasses",
  HighNovice = "HighNovice",
  TranscendedFirstClasses = "TranscendedFirstClasses",
  TranscendedSecondClasses = "TranscendedSecondClasses",
  NinjaAndGunslinger = "NinjaAndGunslinger",
  StarGladiator = "StarGladiator",
  SoulLinker = "SoulLinker",
  SuperNovice = "SuperNovice",
}

export class ExpGroupDB {
  public BaseExpGroupDict: { [key in BaseExpGroupKey]: ExpGroup };
  public JobExpGroupDict: { [key in JobExpGroupKey]: ExpGroup };

  // Static variables for singleton pattern
  private static instance: ExpGroupDB | null = null;
  private static instancePromise: Promise<ExpGroupDB> | null = null;

  // Private constructor to prevent direct instantiation
  private constructor() {
    console.log("ExpGroupDB constructor");
    this.BaseExpGroupDict = {} as { [key in BaseExpGroupKey]: ExpGroup };
    this.JobExpGroupDict = {} as { [key in JobExpGroupKey]: ExpGroup };
  }

  // Static async factory method to create an instance
  public static async create(): Promise<ExpGroupDB> {
    if (this.instance) {
      console.log("ExpGroupDB.create(): Returning existing instance");
      return this.instance;
    }

    if (this.instancePromise) {
      console.log("ExpGroupDB.create(): Returning existing promise");
      return this.instancePromise;
    }

    console.log("ExpGroupDB.create(): Initializing new singleton instance");

    this.instancePromise = (async () => {
      const expGroupDB = new ExpGroupDB();

      // Fetch the exp_group_db.conf file
      const response = await fetch("/configs/exp_group_db.conf");
      if (!response.ok) {
        throw new Error(
          `Failed to fetch exp_group_db.conf: ${response.statusText}`
        );
      }
      const configString = await response.text();

      // Parse configString
      const configObject = parse(configString) as any;
      expGroupDB.parseConfigObject(configObject);

      // Cache the instance
      this.instance = expGroupDB;
      this.instancePromise = null; // Clear the promise after initialization
      return expGroupDB;
    })();

    return this.instancePromise;
  }

  // Method to parse the configuration object and populate the dictionaries
  private parseConfigObject(configObject: any) {
    if (configObject.base_exp_group_db) {
      const baseKeys = Object.values(BaseExpGroupKey) as BaseExpGroupKey[];
      this.BaseExpGroupDict = this.parseExpGroupDict<BaseExpGroupKey>(
        configObject.base_exp_group_db,
        baseKeys
      );
    }
    if (configObject.job_exp_group_db) {
      const jobKeys = Object.values(JobExpGroupKey) as JobExpGroupKey[];
      this.JobExpGroupDict = this.parseExpGroupDict<JobExpGroupKey>(
        configObject.job_exp_group_db,
        jobKeys
      );
    }
  }

  // Helper method to parse each exp group dictionary
  private parseExpGroupDict<K extends string>(
    expGroupDictObj: any,
    keys: K[]
  ): { [key in K]: ExpGroup } {
    const result = {} as { [key in K]: ExpGroup };
    for (const key of keys) {
      const groupObj = expGroupDictObj[key];
      if (groupObj) {
        const expGroup: ExpGroup = {
          MaxLevel: groupObj.MaxLevel,
          Exp: groupObj.Exp,
        };
        result[key] = expGroup;
      } else {
        throw new Error(`Missing key '${key}' in exp group data`);
      }
    }
    return result;
  }

  // You can add methods to access the data if needed
  public getBaseExpGroup(key: BaseExpGroupKey): ExpGroup {
    return this.BaseExpGroupDict[key];
  }

  public getJobExpGroup(key: JobExpGroupKey): ExpGroup {
    return this.JobExpGroupDict[key];
  }
}

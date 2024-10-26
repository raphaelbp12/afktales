import { ItemDB } from "../ItemDB/ItemDB";
import { ExpGroupDB } from "./ExpGroupDB/ExpGroupDB";
import { IExpGroupDB } from "./ExpGroupDB/IExpGroupDB";
import { IJobDB } from "./JobDB/IJobDB";
import { JobDB } from "./JobDB/JobDB";
import { IJobDBStats } from "./JobDBStats/IJobDBStats";
import { JobDBStats } from "./JobDBStats/JobDBStats";

// Databases.ts
export class Databases {
  public expGroupDB!: IExpGroupDB;
  public jobDB!: IJobDB;
  public jobDBStats!: IJobDBStats;
  public itemDB!: ItemDB;

  private static instance: Databases | null = null;
  private static instancePromise: Promise<Databases> | null = null;

  private constructor() {}

  public static async create(): Promise<Databases> {
    if (this.instance) {
      console.log("Databases.create(): Returning existing instance");
      return this.instance;
    }

    if (this.instancePromise) {
      console.log("JobDBStats.create(): Returning existing promise");
      return this.instancePromise;
    }

    console.log("Databases.create(): Initializing new singleton instance");

    this.instancePromise = (async () => {
      const dbs = new Databases();

      dbs.expGroupDB = await ExpGroupDB.create();
      dbs.jobDB = await JobDB.create();
      dbs.jobDBStats = await JobDBStats.create();
      dbs.itemDB = await ItemDB.create();

      // Cache the instance
      this.instance = dbs;
      this.instancePromise = null; // Clear the promise after initialization
      return dbs;
    })();

    return this.instancePromise;
  }
}

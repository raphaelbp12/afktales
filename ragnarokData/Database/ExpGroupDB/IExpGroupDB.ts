import { BaseExpGroupKey, ExpGroup, JobExpGroupKey } from "./ExpGroupDB";

export interface IExpGroupDB {
  BaseExpGroupDict: { [key in BaseExpGroupKey]: ExpGroup };
  JobExpGroupDict: { [key in JobExpGroupKey]: ExpGroup };
  getBaseExpGroup(key: BaseExpGroupKey): ExpGroup;
  getJobExpGroup(key: JobExpGroupKey): ExpGroup;
  getBaseExpGroupByString(key: string): ExpGroup;
  getJobExpGroupByString(key: string): ExpGroup;
}

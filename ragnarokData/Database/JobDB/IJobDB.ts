export interface JobInfo {
  BaseExpGroup?: string;
  JobExpGroup?: string;
  ParametersGroup?: string;
  Weight?: number;
  InheritHP?: string;
  InheritSP?: string;
  Inherit?: string;
  BaseASPD?: { [weaponType: string]: number };
  HPTable?: number[];
  SPTable?: number[];
}

export interface IJobDB {
  jobsDict: { [jobName: string]: JobInfo };
  getJobValueById(id: number): number | null;
  getJobIDByName(name: string): number | null;
  getJobNameById(id: number): string | null;
}

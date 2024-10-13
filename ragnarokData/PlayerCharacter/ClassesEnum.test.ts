import {
  ClassesEnumString,
  classStringToEnum,
  MAPID_BASEMASK,
  MAPID_UPPERMASK,
  pc_mapid2jobid,
} from "./ClassesEnum";

describe("ClassesEnum", () => {
  it("should evaluate baseJob from Job_Swordman correctly", () => {
    const classId = "Job_Swordman";
    const classEnum = classStringToEnum(classId);
    const baseJob = pc_mapid2jobid(classEnum! & MAPID_UPPERMASK);

    expect(baseJob).toBe(ClassesEnumString[classId]);
  });

  it("should evaluate baseJob from Job_Paladin correctly", () => {
    const classId = "Job_Paladin";
    const classBaseId = "Job_Crusader";
    const classEnum = classStringToEnum(classId);
    const baseJob = pc_mapid2jobid(classEnum! & MAPID_UPPERMASK);

    expect(baseJob).toBe(ClassesEnumString[classBaseId]);
  });

  it("should evaluate baseClass from Job_Paladin correctly", () => {
    const classId = "Job_Paladin";
    const classBaseId = "Job_Swordman";
    const classEnum = classStringToEnum(classId);
    const baseClass = pc_mapid2jobid(classEnum! & MAPID_BASEMASK);

    expect(baseClass).toBe(ClassesEnumString[classBaseId]);
  });

  it("should evaluate baseClass from Job_Knight correctly", () => {
    const classId = "Job_Knight";
    const classBaseId = "Job_Swordman";
    const classEnum = classStringToEnum(classId);
    const baseClass = pc_mapid2jobid(classEnum! & MAPID_BASEMASK);

    expect(baseClass).toBe(ClassesEnumString[classBaseId]);
  });
});

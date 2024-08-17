import { map_race_id2mask, Race, RaceMask } from "./map_race_id2mask";

describe("map_race_id2mask", () => {
  test("should return correct mask for base races", () => {
    expect(map_race_id2mask(Race.RC_FORMLESS)).toBe(1 << Race.RC_FORMLESS);
    expect(map_race_id2mask(Race.RC_UNDEAD)).toBe(1 << Race.RC_UNDEAD);
    expect(map_race_id2mask(Race.RC_BRUTE)).toBe(1 << Race.RC_BRUTE);
    // Add more tests for other base races...
  });

  test("should return RCMASK_ALL for RC_ALL", () => {
    expect(map_race_id2mask(Race.RC_ALL)).toBe(RaceMask.RCMASK_ALL);
  });

  test("should return RCMASK_NONPLAYER for RC_NONPLAYER", () => {
    expect(map_race_id2mask(Race.RC_NONPLAYER)).toBe(RaceMask.RCMASK_NONPLAYER);
  });

  test("should return RCMASK_NONDEMIHUMAN for RC_NONDEMIHUMAN", () => {
    expect(map_race_id2mask(Race.RC_NONDEMIHUMAN)).toBe(
      RaceMask.RCMASK_NONDEMIHUMAN
    );
  });

  test("should return RCMASK_DEMIPLAYER for RC_DEMIPLAYER", () => {
    expect(map_race_id2mask(Race.RC_DEMIPLAYER)).toBe(
      RaceMask.RCMASK_DEMIPLAYER
    );
  });

  test("should return RCMASK_NONDEMIPLAYER for RC_NONDEMIPLAYER", () => {
    expect(map_race_id2mask(Race.RC_NONDEMIPLAYER)).toBe(
      RaceMask.RCMASK_NONDEMIPLAYER
    );
  });

  test("should return RCMASK_NONE for invalid race", () => {
    expect(map_race_id2mask(Race.RC_ALL - 10)).toBe(RaceMask.RCMASK_NONE); // Invalid race value
    expect(map_race_id2mask(Race.RC_MAX)).toBe(RaceMask.RCMASK_NONE); // RC_MAX is not a valid race value
  });
});

import { tryParseLoc, equip_pos } from "./types";
import { tryParseWeaponType, weapon_type } from "./weapon_type";

describe("weapon_type", () => {
  it("tryParseWeaponType W_DAGGER", () => {
    const weaponType = "W_DAGGER";
    const result = tryParseWeaponType(weaponType);
    expect(result).toBe(weapon_type.W_DAGGER);
  });

  it("tryParseWeaponType weapon_type.W_STAFF", () => {
    const weaponType = weapon_type.W_STAFF;
    const result = tryParseWeaponType(weaponType);
    expect(result).toBe(weapon_type.W_STAFF);
  });
});

export enum weapon_type {
  W_FIST = 0, ///< Bare hands
  W_DAGGER, //1
  W_1HSWORD, //2
  W_2HSWORD, //3
  W_1HSPEAR, //4
  W_2HSPEAR, //5
  W_1HAXE, //6
  W_2HAXE, //7
  W_MACE, //8
  W_2HMACE, //9 (unused)
  W_STAFF, //10
  W_BOW, //11
  W_KNUCKLE, //12
  W_MUSICAL, //13
  W_WHIP, //14
  W_BOOK, //15
  W_KATAR, //16
  W_REVOLVER, //17
  W_RIFLE, //18
  W_GATLING, //19
  W_SHOTGUN, //20
  W_GRENADE, //21
  W_HUUMA, //22
  W_2HSTAFF, //23
  MAX_SINGLE_WEAPON_TYPE,
  // dual-wield constants
  W_DOUBLE_DD, ///< 2 daggers
  W_DOUBLE_SS, ///< 2 swords
  W_DOUBLE_AA, ///< 2 axes
  W_DOUBLE_DS, ///< dagger + sword
  W_DOUBLE_DA, ///< dagger + axe
  W_DOUBLE_SA, ///< sword + axe
  MAX_WEAPON_TYPE,
}

export function weaponTypeStringToEnum(
  weaponTypeString: string
): weapon_type | null {
  if (
    typeof weaponTypeString === "string" &&
    isNaN(Number(weaponTypeString)) && // Ensures that the string is not a numeric value
    weaponTypeString in weapon_type
  ) {
    return weapon_type[weaponTypeString as keyof typeof weapon_type];
  } else {
    return null;
  }
}

export function tryParseWeaponType(value: string | weapon_type): weapon_type {
  if (typeof value === "string") {
    return weaponTypeStringToEnum(value) ?? weapon_type.W_FIST;
  } else {
    return value;
  }
}

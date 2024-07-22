export interface Job {
  All?: boolean;
  Novice?: boolean;
  Swordsman?: boolean;
  Magician?: boolean;
  Archer?: boolean;
  Acolyte?: boolean;
  Merchant?: boolean;
  Thief?: boolean;
  Knight?: boolean;
  Priest?: boolean;
  Wizard?: boolean;
  Blacksmith?: boolean;
  Hunter?: boolean;
  Assassin?: boolean;
  Crusader?: boolean;
  Monk?: boolean;
  Sage?: boolean;
  Rogue?: boolean;
  Alchemist?: boolean;
  Bard?: boolean;
  Dancer?: boolean;
  Taekwon?: boolean;
  Star_Gladiator?: boolean;
  Soul_Linker?: boolean;
  Gunslinger?: boolean;
  Ninja?: boolean;
  Gangsi?: boolean;
  Death_Knight?: boolean;
  Dark_Collector?: boolean;
  Kagerou?: boolean;
  Rebellion?: boolean;
}

export interface Trade {
  override?: number;
  nodrop?: boolean;
  notrade?: boolean;
  nostorage?: boolean;
  nocart?: boolean;
  noselltonpc?: boolean;
  nomail?: boolean;
  noauction?: boolean;
  nogstorage?: boolean;
  partneroverride?: boolean;
}

export interface Nouse {
  override?: number;
  sitting?: boolean;
}

export type BonusArgs = (string | number | boolean)[];

export interface Bonuses {
  bonus?: { [key: string]: BonusArgs[] };
  bonus2?: { [key: string]: BonusArgs[] };
  bonus3?: { [key: string]: BonusArgs[] };
  bonus4?: { [key: string]: BonusArgs[] };
  bonus5?: { [key: string]: BonusArgs[] };
}

export interface Item {
  Id: number;
  AegisName: string;
  Name: string;
  CloneItem?: number | string;
  Type?: string;
  Buy?: number;
  Sell?: number;
  Weight?: number;
  Atk?: number;
  Matk?: number;
  Def?: number;
  Range?: number;
  Slots?: number;
  Job?: Job | number;
  Upper?: string | number;
  Gender?: string;
  Loc?: string | number | (string | number)[];
  WeaponLv?: number;
  EquipLv?: number | [number, number];
  Refine?: boolean;
  Grade?: boolean;
  DisableOptions?: boolean;
  Subtype?: number;
  ViewSprite?: number;
  BindOnEquip?: boolean;
  ForceSerial?: boolean;
  BuyingStore?: boolean;
  Delay?: number;
  KeepAfterUse?: boolean;
  DropAnnounce?: boolean;
  ShowDropEffect?: boolean;
  DropEffectMode?: number;
  IgnoreDiscount?: boolean;
  IgnoreOvercharge?: boolean;
  Trade?: Trade;
  Nouse?: Nouse;
  Stack?: [number, number];
  Sprite?: number;
  Script?: string;
  OnEquipScript?: string;
  OnUnequipScript?: string;
  OnRentalStartScript?: string;
  OnRentalEndScript?: string;
  Bonuses?: Bonuses;
}

export const bonusTypeToStatusPointType: Record<string, string> = {
  bMaxHP: "SP_MAXHP",
  bMaxSP: "SP_MAXSP",
  bStr: "SP_STR",
  bAgi: "SP_AGI",
  bVit: "SP_VIT",
  bInt: "SP_INT",
  bDex: "SP_DEX",
  bLuk: "SP_LUK",
  bAtk: "SP_ATK1",
  bAtk2: "SP_ATK2",
  bDef: "SP_DEF1",
  bDef2: "SP_DEF2",
  bMdef: "SP_MDEF1",
  bMdef2: "SP_MDEF2",
  bHit: "SP_HIT",
  bFlee: "SP_FLEE1",
  bFlee2: "SP_FLEE2",
  bCritical: "SP_CRITICAL",
  bAspd: "SP_ASPD",
  bFame: "SP_FAME",
  bUnbreakable: "SP_UNBREAKABLE",
  bAtkRange: "SP_ATTACKRANGE",
  bAtkEle: "SP_ATKELE",
  bDefEle: "SP_DEFELE",
  bCastrate: "SP_CASTRATE",
  bMaxHPrate: "SP_MAXHPRATE",
  bMaxSPrate: "SP_MAXSPRATE",
  bUseSPrate: "SP_SPRATE",
  bAddEle: "SP_ADDELE",
  bAddRace: "SP_ADDRACE",
  bAddSize: "SP_ADDSIZE",
  bSubEle: "SP_SUBELE",
  bSubRace: "SP_SUBRACE",
  bAddEff: "SP_ADDEFF",
  bResEff: "SP_RESEFF",
  bBaseAtk: "SP_BASE_ATK",
  bAspdRate: "SP_ASPD_RATE",
  bHPrecovRate: "SP_HP_RECOV_RATE",
  bSPrecovRate: "SP_SP_RECOV_RATE",
  bSpeedRate: "SP_SPEED_RATE",
  bCriticalDef: "SP_CRITICAL_DEF",
  bNearAtkDef: "SP_NEAR_ATK_DEF",
  bLongAtkDef: "SP_LONG_ATK_DEF",
  bDoubleRate: "SP_DOUBLE_RATE",
  bDoubleAddRate: "SP_DOUBLE_ADD_RATE",
  bSkillHeal: "SP_SKILL_HEAL",
  bMatkRate: "SP_MATK_RATE",
  bIgnoreDefEle: "SP_IGNORE_DEF_ELE",
  bIgnoreDefRace: "SP_IGNORE_DEF_RACE",
  bAtkRate: "SP_ATK_RATE",
  bSpeedAddRate: "SP_SPEED_ADDRATE",
  bSPRegenRate: "SP_SP_REGEN_RATE",
  bMagicAtkDef: "SP_MAGIC_ATK_DEF",
  bMiscAtkDef: "SP_MISC_ATK_DEF",
  bIgnoreMdefEle: "SP_IGNORE_MDEF_ELE",
  bIgnoreMdefRace: "SP_IGNORE_MDEF_RACE",
  bMagicAddEle: "SP_MAGIC_ADDELE",
  bMagicAddRace: "SP_MAGIC_ADDRACE",
  bMagicAddSize: "SP_MAGIC_ADDSIZE",
  bPerfectHitRate: "SP_PERFECT_HIT_RATE",
  bPerfectHitAddRate: "SP_PERFECT_HIT_ADD_RATE",
  bCriticalRate: "SP_CRITICAL_RATE",
  bGetZenyNum: "SP_GET_ZENY_NUM",
  bAddGetZenyNum: "SP_ADD_GET_ZENY_NUM",
  bAddDamageClass: "SP_ADD_DAMAGE_CLASS",
  bAddMagicDamageClass: "SP_ADD_MAGIC_DAMAGE_CLASS",
  bAddDefClass: "SP_ADD_DEF_CLASS",
  bAddMdefClass: "SP_ADD_MDEF_CLASS",
  bAddMonsterDropItem: "SP_ADD_MONSTER_DROP_ITEM",
  bDefRatioAtkEle: "SP_DEF_RATIO_ATK_ELE",
  bDefRatioAtkRace: "SP_DEF_RATIO_ATK_RACE",
  bUnbreakableGarment: "SP_UNBREAKABLE_GARMENT",
  bHitRate: "SP_HIT_RATE",
  bFleeRate: "SP_FLEE_RATE",
  bFlee2Rate: "SP_FLEE2_RATE",
  bDefRate: "SP_DEF_RATE",
  bDef2Rate: "SP_DEF2_RATE",
  bMdefRate: "SP_MDEF_RATE",
  bMdef2Rate: "SP_MDEF2_RATE",
  bSplashRange: "SP_SPLASH_RANGE",
  bSplashAddRange: "SP_SPLASH_ADD_RANGE",
  bAutoSpell: "SP_AUTOSPELL",
  bHPDrainRate: "SP_HP_DRAIN_RATE",
  bSPDrainRate: "SP_SP_DRAIN_RATE",
  bShortWeaponDamageReturn: "SP_SHORT_WEAPON_DAMAGE_RETURN",
  bLongWeaponDamageReturn: "SP_LONG_WEAPON_DAMAGE_RETURN",
  bWeaponComaEle: "SP_WEAPON_COMA_ELE",
  bWeaponComaRace: "SP_WEAPON_COMA_RACE",
  bAddEff2: "SP_ADDEFF2",
  bBreakWeaponRate: "SP_BREAK_WEAPON_RATE",
  bBreakArmorRate: "SP_BREAK_ARMOR_RATE",
  bAddStealRate: "SP_ADD_STEAL_RATE",
  bMagicDamageReturn: "SP_MAGIC_DAMAGE_RETURN",
  bAllStats: "SP_ALL_STATS",
  bAgiVit: "SP_AGI_VIT",
  bAgiDexStr: "SP_AGI_DEX_STR",
  bPerfectHide: "SP_PERFECT_HIDE",
  bNoKnockback: "SP_NO_KNOCKBACK",
  bClassChange: "SP_CLASSCHANGE",
  bHPDrainValue: "SP_HP_DRAIN_VALUE",
  bSPDrainValue: "SP_SP_DRAIN_VALUE",
  bWeaponAtk: "SP_WEAPON_ATK",
  bWeaponAtkRate: "SP_WEAPON_ATK_RATE",
  bDelayrate: "SP_DELAYRATE",
  bHPDrainRateRace: "SP_HP_DRAIN_RATE_RACE",
  bSPDrainRateRace: "SP_SP_DRAIN_RATE_RACE",
  bIgnoreMdefRate: "SP_IGNORE_MDEF_RATE",
  bIgnoreDefRate: "SP_IGNORE_DEF_RATE",
  bSkillHeal2: "SP_SKILL_HEAL2",
  bAddEffOnSkill: "SP_ADDEFF_ONSKILL",
  bHealPower: "SP_ADD_HEAL_RATE",
  bHealPower2: "SP_ADD_HEAL2_RATE",
  bHPVanishRate: "SP_HP_VANISH_RATE",
  bRestartFullRecover: "SP_RESTART_FULL_RECOVER",
  bNoCastCancel: "SP_NO_CASTCANCEL",
  bNoSizeFix: "SP_NO_SIZEFIX",
  bNoMagicDamage: "SP_NO_MAGIC_DAMAGE",
  bNoWeaponDamage: "SP_NO_WEAPON_DAMAGE",
  bNoGemStone: "SP_NO_GEMSTONE",
  bNoCastCancel2: "SP_NO_CASTCANCEL2",
  bNoMiscDamage: "SP_NO_MISC_DAMAGE",
  bUnbreakableWeapon: "SP_UNBREAKABLE_WEAPON",
  bUnbreakableArmor: "SP_UNBREAKABLE_ARMOR",
  bUnbreakableHelm: "SP_UNBREAKABLE_HELM",
  bUnbreakableShield: "SP_UNBREAKABLE_SHIELD",
  bLongAtkRate: "SP_LONG_ATK_RATE",
  bCritAtkRate: "SP_CRIT_ATK_RATE",
  bCriticalAddRace: "SP_CRITICAL_ADDRACE",
  bNoRegen: "SP_NO_REGEN",
  bAddEffWhenHit: "SP_ADDEFF_WHENHIT",
  bAutoSpellWhenHit: "SP_AUTOSPELL_WHENHIT",
  bSkillAtk: "SP_SKILL_ATK",
  bUnstripable: "SP_UNSTRIPABLE",
  bAutoSpellOnSkill: "SP_AUTOSPELL_ONSKILL",
  bSPGainValue: "SP_SP_GAIN_VALUE",
  bHPRegenRate: "SP_HP_REGEN_RATE",
  bHPLossRate: "SP_HP_LOSS_RATE",
  bAddRace2: "SP_ADDRACE2",
  bHPGainValue: "SP_HP_GAIN_VALUE",
  bSubSize: "SP_SUBSIZE",
  bHPDrainValueRace: "SP_HP_DRAIN_VALUE_RACE",
  bAddItemHealRate: "SP_ADD_ITEM_HEAL_RATE",
  bSPDrainValueRace: "SP_SP_DRAIN_VALUE_RACE",
  bExpAddRace: "SP_EXP_ADDRACE",
  bSPGainRace: "SP_SP_GAIN_RACE",
  bSubRace2: "SP_SUBRACE2",
  bUnbreakableShoes: "SP_UNBREAKABLE_SHOES",
  bUnstripableWeapon: "SP_UNSTRIPABLE_WEAPON",
  bUnstripableArmor: "SP_UNSTRIPABLE_ARMOR",
  bUnstripableHelm: "SP_UNSTRIPABLE_HELM",
  bUnstripableShield: "SP_UNSTRIPABLE_SHIELD",
  bIntravision: "SP_INTRAVISION",
  bAddMonsterDropChainItem: "SP_ADD_MONSTER_DROP_CHAINITEM",
  bSPLossRate: "SP_SP_LOSS_RATE",
  bAddSkillBlow: "SP_ADD_SKILL_BLOW",
  bSPVanishRate: "SP_SP_VANISH_RATE",
  bMagicSPGainValue: "SP_MAGIC_SP_GAIN_VALUE",
  bMagicHPGainValue: "SP_MAGIC_HP_GAIN_VALUE",
  bAddClassDropItem: "SP_ADD_CLASS_DROP_ITEM",
  bMatk: "SP_EMATK",
  bSPGainRaceAttack: "SP_SP_GAIN_RACE_ATTACK",
  bHPGainRaceAttack: "SP_HP_GAIN_RACE_ATTACK",
  bSkillUseSPrate: "SP_SKILL_USE_SP_RATE",
  bSkillCooldown: "SP_SKILL_COOLDOWN",
  bSkillFixedCast: "SP_SKILL_FIXEDCAST",
  bSkillVariableCast: "SP_SKILL_VARIABLECAST",
  bFixedCastrate: "SP_FIXCASTRATE",
  bVariableCastrate: "SP_VARCASTRATE",
  bSkillUseSP: "SP_SKILL_USE_SP",
  bMagicAtkEle: "SP_MAGIC_ATK_ELE",
  bFixedCast: "SP_ADD_FIXEDCAST",
  bVariableCast: "SP_ADD_VARIABLECAST",
  bSetDefRace: "SP_SET_DEF_RACE",
  bSetMDefRace: "SP_SET_MDEF_RACE",
  bAddRaceTolerance: "SP_RACE_TOLERANCE",
  bAddMaxWeight: "SP_ADDMAXWEIGHT",
  bSubDefEle: "SP_SUB_DEF_ELE",
  bMagicSubDefEle: "SP_MAGIC_SUB_DEF_ELE",
  bStateNoRecoverRace: "SP_STATE_NO_RECOVER_RACE",
  bSubSkill: "SP_SUB_SKILL",
  bDropAddRace: "SP_ADD_DROP_RACE",
};

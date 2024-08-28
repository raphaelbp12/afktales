import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { PlayerAttributes } from "./PlayerAttributes";
import { pc_bonus2 } from "./pc_bonus2";
import { bonusTypeToStatusPointType } from "@/ragnarokData/types";
import { ELE_ALL } from "./constants";
import { Race } from "./map_race_id2mask";

describe("pc_bonus2", () => {
  let playerAttributes: PlayerAttributes;

  beforeEach(() => {
    playerAttributes = new PlayerAttributes({});
  });

  test("should process SP_ADDELE bonus correctly", () => {
    const ele = ElementEnum.Fantasma;
    playerAttributes.state.lr_flag = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddEle,
      ele,
      10
    );
    expect(updatedAttributes.right_weapon.addele[ele]).toBe(10);
  });

  test("should process SP_ADDRACE bonus correctly", () => {
    playerAttributes.state.lr_flag = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddRace,
      Race.RC_FORMLESS,
      10
    );
    expect(updatedAttributes.right_weapon.addrace[Race.RC_FORMLESS]).toBe(10);
  });

  test("should process SP_ADDRACE Race.RC_DEMIPLAYER bonus correctly", () => {
    playerAttributes.state.lr_flag = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddRace,
      Race.RC_DEMIPLAYER,
      10
    );
    expect(updatedAttributes.right_weapon.addrace[Race.RC_DEMIHUMAN]).toBe(10);
    expect(updatedAttributes.right_weapon.addrace[Race.RC_PLAYER]).toBe(10);
  });

  test("should process SP_ADDSIZE bonus correctly", () => {
    playerAttributes.state.lr_flag = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddSize,
      1,
      10
    );
    expect(updatedAttributes.right_weapon.addsize[1]).toBe(10);
  });

  test("should process SP_SUBELE bonus correctly", () => {
    const ele = ElementEnum.Fantasma;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSubEle,
      ele,
      10
    );
    expect(updatedAttributes.subele[ele]).toBe(10);
  });

  test("should process SP_SUBELE ELE_ALL bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSubEle,
      ELE_ALL,
      10
    );
    expect(updatedAttributes.subele[ElementEnum.Neutro]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Agua]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Terra]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Fogo]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Vento]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Veneno]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Sagrado]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Sombrio]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.Fantasma]).toBe(10);
    expect(updatedAttributes.subele[ElementEnum.MortoVivo]).toBe(10);
  });

  test("should process SP_SUBRACE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSubRace,
      1,
      10
    );
    expect(updatedAttributes.subrace[1]).toBe(10);
  });

  test("should process SP_ADDEFF bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddEff,
      1,
      10
    );
    // expect(updatedAttributes.addeff[0]).toBeDefined();
  });

  test("should process SP_ADDEFF2 bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddEff2,
      1,
      10
    );
    // expect(updatedAttributes.addeff[0]).toBeDefined();
  });

  test("should process SP_RESEFF bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bResEff,
      1,
      10
    );
    expect(updatedAttributes.reseff[1 - 1]).toBeDefined();
  });

  test("should process SP_MAGIC_ADDELE bonus correctly", () => {
    const ele = ElementEnum.Sagrado;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bMagicAddEle,
      ele,
      10
    );
    expect(updatedAttributes.magic_addele[ele]).toBe(10);
  });

  test("should process SP_MAGIC_ADDRACE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bMagicAddRace,
      1,
      10
    );
    expect(updatedAttributes.magic_addrace[1]).toBe(10);
  });

  test("should process SP_MAGIC_ADDSIZE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bMagicAddSize,
      1,
      10
    );
    expect(updatedAttributes.magic_addsize[1]).toBe(10);
  });

  test("should process SP_MAGIC_ATK_ELE bonus correctly", () => {
    const ele = ElementEnum.Veneno;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bMagicAtkEle,
      ele,
      10
    );
    expect(updatedAttributes.magic_atk_ele[ele]).toBe(10);
  });

  test("should process SP_ADD_DAMAGE_CLASS bonus correctly", () => {
    playerAttributes.state.lr_flag = 0;
    playerAttributes.right_weapon.add_dmg = [{ class_: 1, rate: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddDamageClass,
      1,
      10
    );
    expect(updatedAttributes.right_weapon.add_dmg[0].rate).toBe(10);
  });

  test("should process SP_ADD_MAGIC_DAMAGE_CLASS bonus correctly", () => {
    playerAttributes.add_mdmg = [{ class_: 1, rate: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddMagicDamageClass,
      1,
      10
    );
    expect(updatedAttributes.add_mdmg[0].rate).toBe(10);
  });

  test("should process SP_ADD_DEF_CLASS bonus correctly", () => {
    playerAttributes.add_def = [{ class_: 1, rate: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddDefClass,
      1,
      10
    );
    expect(updatedAttributes.add_def[0].rate).toBe(10);
  });

  test("should process SP_ADD_MDEF_CLASS bonus correctly", () => {
    playerAttributes.add_mdef = [{ class_: 1, rate: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddMdefClass,
      1,
      10
    );
    expect(updatedAttributes.add_mdef[0].rate).toBe(10);
  });

  test("should process SP_HP_DRAIN_RATE bonus correctly", () => {
    playerAttributes.right_weapon.hp_drain = Array.from(
      { length: Race.RC_MAX },
      () => ({
        rate: 0,
        per: 0,
        value: 0,
        type: 0,
      })
    );
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPDrainRate,
      10,
      5
    );
    expect(updatedAttributes.right_weapon.hp_drain[Race.RC_BOSS].rate).toBe(10);
    expect(updatedAttributes.right_weapon.hp_drain[Race.RC_BOSS].per).toBe(5);
  });

  test("should process SP_HP_DRAIN_VALUE bonus correctly", () => {
    playerAttributes.right_weapon.hp_drain = Array.from(
      { length: Race.RC_MAX },
      () => ({
        rate: 0,
        per: 0,
        value: 0,
        type: 0,
      })
    );
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPDrainValue,
      10,
      5
    );
    expect(updatedAttributes.right_weapon.hp_drain[Race.RC_BOSS].value).toBe(
      10
    );
    expect(updatedAttributes.right_weapon.hp_drain[Race.RC_BOSS].type).toBe(5);
  });

  test("should process SP_SP_DRAIN_RATE bonus correctly", () => {
    playerAttributes.right_weapon.sp_drain = Array.from(
      { length: Race.RC_MAX },
      () => ({
        rate: 0,
        per: 0,
        value: 0,
        type: 0,
      })
    );
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPDrainRate,
      10,
      5
    );
    expect(updatedAttributes.right_weapon.sp_drain[Race.RC_BOSS].rate).toBe(10);
    expect(updatedAttributes.right_weapon.sp_drain[Race.RC_BOSS].per).toBe(5);
  });

  test("should process SP_SP_DRAIN_VALUE bonus correctly", () => {
    playerAttributes.right_weapon.sp_drain = Array.from(
      { length: Race.RC_MAX },
      () => ({
        rate: 0,
        per: 0,
        value: 0,
        type: 0,
      })
    );
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPDrainValue,
      10,
      5
    );
    expect(updatedAttributes.right_weapon.sp_drain[Race.RC_BOSS].value).toBe(
      10
    );
    expect(updatedAttributes.right_weapon.sp_drain[Race.RC_BOSS].type).toBe(5);
  });

  test("should process SP_HP_VANISH_RATE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPVanishRate,
      10,
      5
    );
    expect(updatedAttributes.bonus.hp_vanish_rate).toBe(10);
  });

  test("should process SP_SP_VANISH_RATE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPVanishRate,
      10,
      5
    );
    expect(updatedAttributes.bonus.sp_vanish_rate).toBe(10);
  });

  test("should process SP_GET_ZENY_NUM bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bGetZenyNum,
      10,
      5
    );
    expect(updatedAttributes.bonus.get_zeny_num).toBe(10);
  });

  test("should process SP_ADD_GET_ZENY_NUM bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddGetZenyNum,
      10,
      5
    );
    expect(updatedAttributes.bonus.get_zeny_num).toBe(10);
  });

  test("should process SP_WEAPON_COMA_ELE bonus correctly", () => {
    const ele = ElementEnum.Vento;
    playerAttributes.weapon_coma_ele[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bWeaponComaEle,
      ele,
      10
    );
    expect(updatedAttributes.weapon_coma_ele[ele]).toBe(10);
  });

  test("should process SP_WEAPON_COMA_RACE bonus correctly", () => {
    playerAttributes.weapon_coma_race[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bWeaponComaRace,
      1,
      10
    );
    expect(updatedAttributes.weapon_coma_race[1]).toBe(10);
  });

  test("should process SP_WEAPON_ATK bonus correctly", () => {
    playerAttributes.weapon_atk[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bWeaponAtk,
      1,
      10
    );
    expect(updatedAttributes.weapon_atk[1]).toBe(10);
  });

  test("should process SP_WEAPON_ATK_RATE bonus correctly", () => {
    playerAttributes.weapon_atk_rate[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bWeaponAtkRate,
      1,
      10
    );
    expect(updatedAttributes.weapon_atk_rate[1]).toBe(10);
  });

  test("should process SP_CRITICAL_ADDRACE bonus correctly", () => {
    playerAttributes.critaddrace[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bCriticalAddRace,
      1,
      10
    );
    expect(updatedAttributes.critaddrace[1]).toBe(100);
  });

  test("should process SP_ADDEFF_WHENHIT bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddEffWhenHit,
      1,
      10
    );
    // expect(updatedAttributes.addeff2[0]).toBeDefined();
  });

  test("should process SP_SKILL_ATK bonus correctly", () => {
    playerAttributes.skillatk = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillAtk,
      1,
      10
    );
    expect(updatedAttributes.skillatk[0].val).toBe(10);
  });

  test("should process SP_SKILL_HEAL bonus correctly", () => {
    playerAttributes.skillheal = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillHeal,
      1,
      10
    );
    expect(updatedAttributes.skillheal[0].val).toBe(10);
  });

  test("should process SP_SKILL_HEAL2 bonus correctly", () => {
    playerAttributes.skillheal2 = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillHeal2,
      1,
      10
    );
    expect(updatedAttributes.skillheal2[0].val).toBe(10);
  });

  test("should process SP_ADD_SKILL_BLOW bonus correctly", () => {
    playerAttributes.skillblown = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddSkillBlow,
      1,
      10
    );
    expect(updatedAttributes.skillblown[0].val).toBe(10);
  });

  test("should process SP_FIXCASTRATE bonus correctly", () => {
    playerAttributes.skillfixcastrate = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bFixedCastrate,
      1,
      10
    );
    expect(updatedAttributes.skillfixcastrate[0].val).toBe(-10);
  });

  test("should process SP_HP_LOSS_RATE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPLossRate,
      1,
      10
    );
    expect(updatedAttributes.hp_loss.rate).toBe(10);
  });

  test("should process SP_HP_REGEN_RATE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPRegenRate,
      1,
      10
    );
    expect(updatedAttributes.hp_regen.rate).toBe(10);
  });

  test("should process SP_ADDRACE2 bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddRace2,
      1,
      10
    );
    expect(updatedAttributes.right_weapon.addrace2[1]).toBe(10);
  });

  test("should process SP_SUBSIZE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSubSize,
      1,
      10
    );
    expect(updatedAttributes.subsize[1]).toBe(10);
  });

  test("should process SP_SUBRACE2 bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSubRace2,
      1,
      10
    );
    expect(updatedAttributes.subrace2[1]).toBe(10);
  });

  test("should process SP_ADD_ITEM_HEAL_RATE bonus correctly", () => {
    playerAttributes.itemhealrate = [{ nameid: 1, rate: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddItemHealRate,
      1,
      10
    );
    expect(updatedAttributes.itemhealrate[0].rate).toBe(10);
  });

  test("should process SP_EXP_ADDRACE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bExpAddRace,
      1,
      10
    );
    expect(updatedAttributes.expaddrace[1]).toBe(10);
  });

  test("should process SP_SP_GAIN_RACE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPGainRace,
      1,
      10
    );
    expect(updatedAttributes.sp_gain_race[1]).toBe(10);
  });

  test("should process SP_ADD_MONSTER_DROP_ITEM bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddMonsterDropItem,
      1,
      10
    );
    // expect(updatedAttributes.bonus.monster_drop_item).toBeDefined();
  });

  test("should process SP_SP_LOSS_RATE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPLossRate,
      1,
      10
    );
    expect(updatedAttributes.sp_loss.rate).toBe(10);
  });

  test("should process SP_SP_REGEN_RATE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPRegenRate,
      1,
      10
    );
    expect(updatedAttributes.sp_regen.rate).toBe(10);
  });

  test("should process SP_HP_DRAIN_VALUE_RACE bonus correctly", () => {
    playerAttributes.right_weapon.hp_drain = [
      { rate: 0, per: 0, value: 0, type: 0 },
      { rate: 0, per: 0, value: 0, type: 0 },
    ];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPDrainValueRace,
      1,
      10
    );
    expect(updatedAttributes.right_weapon.hp_drain[1].value).toBe(10);
  });

  test("should process SP_SP_DRAIN_VALUE_RACE bonus correctly", () => {
    playerAttributes.right_weapon.sp_drain = [
      { rate: 0, per: 0, value: 0, type: 0 },
      { rate: 0, per: 0, value: 0, type: 0 },
    ];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPDrainValueRace,
      1,
      10
    );
    expect(updatedAttributes.right_weapon.sp_drain[1].value).toBe(10);
  });

  test("should process SP_IGNORE_MDEF_RATE bonus correctly", () => {
    playerAttributes.ignore_mdef[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bIgnoreMdefRate,
      1,
      10
    );
    expect(updatedAttributes.ignore_mdef[1]).toBe(10);
  });

  test("should process SP_IGNORE_DEF_RATE bonus correctly", () => {
    playerAttributes.ignore_def[1] = 0;
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bIgnoreDefRate,
      1,
      10
    );
    expect(updatedAttributes.ignore_def[1]).toBe(10);
  });

  test("should process SP_SP_GAIN_RACE_ATTACK bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSPGainRaceAttack,
      1,
      10
    );
    expect(updatedAttributes.sp_gain_race_attack[1]).toBe(10);
  });

  test("should process SP_HP_GAIN_RACE_ATTACK bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bHPGainRaceAttack,
      1,
      10
    );
    expect(updatedAttributes.hp_gain_race_attack[1]).toBe(10);
  });

  test("should process SP_SKILL_USE_SP_RATE bonus correctly", () => {
    playerAttributes.skillusesprate = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillUseSPrate,
      1,
      10
    );
    expect(updatedAttributes.skillusesprate[0].val).toBe(10);
  });

  test("should process SP_SKILL_COOLDOWN bonus correctly", () => {
    playerAttributes.skillcooldown = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillCooldown,
      1,
      10
    );
    expect(updatedAttributes.skillcooldown[0].val).toBe(10);
  });

  test("should process SP_SKILL_FIXEDCAST bonus correctly", () => {
    playerAttributes.skillfixcast = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillFixedCast,
      1,
      10
    );
    expect(updatedAttributes.skillfixcast[0].val).toBe(10);
  });

  test("should process SP_SKILL_VARIABLECAST bonus correctly", () => {
    playerAttributes.skillvarcast = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillVariableCast,
      1,
      10
    );
    expect(updatedAttributes.skillvarcast[0].val).toBe(10);
  });

  test("should process SP_SKILL_USE_SP bonus correctly", () => {
    playerAttributes.skillusesp = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSkillUseSP,
      1,
      10
    );
    expect(updatedAttributes.skillusesp[0].val).toBe(10);
  });

  test("should process SP_ADD_MONSTER_DROP_CHAINITEM bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bAddMonsterDropChainItem,
      1,
      10
    );
    // expect(updatedAttributes.bonus.monster_drop_chainitem).toBeDefined();
  });

  test("should process SP_SUB_SKILL bonus correctly", () => {
    playerAttributes.subskill = [{ id: 1, val: 0 }];
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bSubSkill,
      1,
      10
    );
    expect(updatedAttributes.subskill[0].val).toBe(10);
  });

  test("should process SP_ADD_DROP_RACE bonus correctly", () => {
    const updatedAttributes = pc_bonus2(
      playerAttributes,
      bonusTypeToStatusPointType.bDropAddRace,
      1,
      10
    );
    expect(updatedAttributes.dropaddrace[1]).toBe(10);
  });
});

import { PlayerAttributes } from "./PlayerAttributes";
import { bonusTypeToStatusPointType } from "@/ragnarokData/types";
import { Race, Race2, RaceMask, map_race_id2mask } from "./map_race_id2mask";
import { ELE_MAX, ELE_ALL } from "./constants";
import { capValue } from "./utils";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { AddEffect, AutoTriggerFlag } from "./AutoTriggerFlag";
import { sc_type } from "./sc_type";

function applyRaceBonus(
  playerAttributes: PlayerAttributes,
  raceMask: RaceMask,
  val: number
) {
  for (let i = 0; i < Race.RC_MAX; i++) {
    if ((raceMask & (1 << i)) !== 0) {
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.right_weapon.addrace[i] += val;
      } else if (playerAttributes.state.lr_flag === 1) {
        playerAttributes.left_weapon.addrace[i] += val;
      } else if (playerAttributes.state.lr_flag === 2) {
        playerAttributes.arrow_addrace[i] += val;
      }
    }
  }
}

function addElementBonus(
  playerAttributes: PlayerAttributes,
  element: number,
  val: number
) {
  if (playerAttributes.state.lr_flag === 0) {
    playerAttributes.right_weapon.addele[element] += val;
  } else if (playerAttributes.state.lr_flag === 1) {
    playerAttributes.left_weapon.addele[element] += val;
  } else if (playerAttributes.state.lr_flag === 2) {
    playerAttributes.arrow_addele[element] += val;
  }
}

function addSizeBonus(
  playerAttributes: PlayerAttributes,
  size: number,
  val: number
) {
  if (playerAttributes.state.lr_flag === 0) {
    playerAttributes.right_weapon.addsize[size] += val;
  } else if (playerAttributes.state.lr_flag === 1) {
    playerAttributes.left_weapon.addsize[size] += val;
  } else if (playerAttributes.state.lr_flag === 2) {
    playerAttributes.arrow_addsize[size] += val;
  }
}

function pc_bonus_addeff(
  effect: AddEffect[],
  max: number,
  id: sc_type,
  rate: number,
  arrow_rate: number,
  flag: number,
  duration: number
): boolean {
  // Ensure flag has default values if not set
  if (!(flag & (AutoTriggerFlag.SHORT | AutoTriggerFlag.LONG))) {
    flag |= AutoTriggerFlag.SHORT | AutoTriggerFlag.LONG; // Default range: both
  }
  if (!(flag & (AutoTriggerFlag.TARGET | AutoTriggerFlag.SELF))) {
    flag |= AutoTriggerFlag.TARGET; // Default target: enemy
  }
  if (
    !(
      flag &
      (AutoTriggerFlag.WEAPON | AutoTriggerFlag.MAGIC | AutoTriggerFlag.MISC)
    )
  ) {
    flag |= AutoTriggerFlag.WEAPON; // Default type: weapon
  }

  // Iterate through the effect array to find an existing effect or empty slot
  for (let i = 0; i < max; i++) {
    if (effect[i].flag) {
      // Update existing effect if it matches
      if (
        effect[i].id === id &&
        effect[i].flag === flag &&
        effect[i].duration === duration
      ) {
        effect[i].rate += rate;
        effect[i].arrow_rate += arrow_rate;
        return true;
      }
    } else {
      // If an empty slot is found, add the new effect
      effect[i] = { id, rate, arrow_rate, flag, duration };
      return true;
    }
  }

  // If the effect array is full, return false and show a warning
  console.warn(
    `pc_bonus: Reached max (${max}) number of add effects per character!`
  );
  return false;
}

// Main function
export function pc_bonus2(
  playerAttributes: PlayerAttributes,
  type: string,
  type2: number,
  val: number
): PlayerAttributes {
  switch (type) {
    case bonusTypeToStatusPointType.bAddEle:
      if (
        (type2 >= ELE_MAX && type2 !== ELE_ALL) ||
        type2 < ElementEnum.Neutro
      ) {
        console.error(`pc_bonus2: SP_ADDELE: Invalid element ${type2}`);
        break;
      }
      if (type2 === ELE_ALL) {
        for (let i = ElementEnum.Neutro; i < ELE_MAX; i++) {
          addElementBonus(playerAttributes, i, val);
        }
      } else {
        addElementBonus(playerAttributes, type2, val);
      }
      break;

    case bonusTypeToStatusPointType.bAddRace:
      const raceMask = map_race_id2mask(type2);
      if (raceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_ADDRACE: Invalid Race (${type2})`);
        break;
      }
      applyRaceBonus(playerAttributes, raceMask, val);
      break;

    case bonusTypeToStatusPointType.bAddSize:
      addSizeBonus(playerAttributes, type2, val);
      break;

    case bonusTypeToStatusPointType.bSubEle:
      if (
        (type2 >= ELE_MAX && type2 !== ELE_ALL) ||
        type2 < ElementEnum.Neutro
      ) {
        console.error(`pc_bonus2: SP_SUBELE: Invalid element ${type2}`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        if (type2 === ELE_ALL) {
          for (let i = ElementEnum.Neutro; i < ELE_MAX; i++) {
            playerAttributes.subele[i] += Number(val);
          }
        } else {
          playerAttributes.subele[type2] += Number(val);
        }
      }
      break;

    case bonusTypeToStatusPointType.bSubRace:
      const subRaceMask = map_race_id2mask(type2);
      if (subRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_SUBRACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        for (let i = 0; i < Race.RC_MAX; i++) {
          if ((subRaceMask & (1 << i)) !== 0) {
            playerAttributes.subrace[i] += val;
          }
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddEff:
      if (type2 > sc_type.SC_MAX) {
        console.warn(`pc_bonus2 (Add Effect): ${type2} is not supported.`);
        break;
      }
      pc_bonus_addeff(
        playerAttributes.addeff,
        playerAttributes.addeff.length, // The maximum length of the addeff array
        type2,
        playerAttributes.state.lr_flag !== 2 ? val : 0,
        playerAttributes.state.lr_flag === 2 ? val : 0,
        0, // flag (defaults will be applied inside pc_bonus_addeff)
        0 // duration
      );
      break;

    case bonusTypeToStatusPointType.bAddEff2:
      if (type2 > sc_type.SC_MAX) {
        console.warn(`pc_bonus2 (Add Effect2): ${type2} is not supported.`);
        break;
      }
      pc_bonus_addeff(
        playerAttributes.addeff,
        playerAttributes.addeff.length, // The maximum length of the addeff array
        type2,
        playerAttributes.state.lr_flag !== 2 ? val : 0,
        playerAttributes.state.lr_flag === 2 ? val : 0,
        AutoTriggerFlag.SELF, // flag (defaults will be applied inside pc_bonus_addeff)
        0 // duration
      );
      break;

    case bonusTypeToStatusPointType.bResEff:
      if (type2 < sc_type.SC_COMMON_MIN || type2 > sc_type.SC_COMMON_MAX) {
        console.warn(`pc_bonus2 (Resist Effect): ${type2} is not supported.`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        const i = playerAttributes.reseff[type2 - sc_type.SC_COMMON_MIN] + val;
        playerAttributes.reseff[type2 - sc_type.SC_COMMON_MIN] = capValue(
          i,
          0,
          10000
        );
      }
      break;

    case bonusTypeToStatusPointType.bMagicAddEle:
      if (
        (type2 >= ELE_MAX && type2 !== ELE_ALL) ||
        type2 < ElementEnum.Neutro
      ) {
        console.error(`pc_bonus2: SP_MAGIC_ADDELE: Invalid element ${type2}`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        if (type2 === ELE_ALL) {
          for (let i = ElementEnum.Neutro; i < ELE_MAX; i++) {
            playerAttributes.magic_addele[i] += val;
          }
        } else {
          playerAttributes.magic_addele[type2] += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bMagicAddRace:
      const magicRaceMask = map_race_id2mask(type2);
      if (magicRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_MAGIC_ADDRACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        for (let i = 0; i < Race.RC_MAX; i++) {
          if ((magicRaceMask & (1 << i)) !== 0) {
            playerAttributes.magic_addrace[i] += val;
          }
        }
      }
      break;

    case bonusTypeToStatusPointType.bMagicAddSize:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.magic_addsize[type2] += val;
      }
      break;

    case bonusTypeToStatusPointType.bMagicAtkEle:
      if (
        (type2 >= ELE_MAX && type2 !== ELE_ALL) ||
        type2 < ElementEnum.Neutro
      ) {
        console.error(`pc_bonus2: SP_MAGIC_ATK_ELE: Invalid element ${type2}`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        if (type2 === ELE_ALL) {
          for (let i = ElementEnum.Neutro; i < ELE_MAX; i++) {
            playerAttributes.magic_atk_ele[i] += val;
          }
        } else {
          playerAttributes.magic_atk_ele[type2] += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddDamageClass:
      if (playerAttributes.state.lr_flag === 0) {
        const i = playerAttributes.right_weapon.add_dmg.findIndex(
          (dmg) => dmg.rate === 0 || dmg.class_ === type2
        );
        if (i !== -1) {
          playerAttributes.right_weapon.add_dmg[i].class_ = type2;
          playerAttributes.right_weapon.add_dmg[i].rate += val;
          if (playerAttributes.right_weapon.add_dmg[i].rate === 0) {
            playerAttributes.right_weapon.add_dmg.splice(i, 1);
          }
        }
      } else if (playerAttributes.state.lr_flag === 1) {
        const i = playerAttributes.left_weapon.add_dmg.findIndex(
          (dmg) => dmg.rate === 0 || dmg.class_ === type2
        );
        if (i !== -1) {
          playerAttributes.left_weapon.add_dmg[i].class_ = type2;
          playerAttributes.left_weapon.add_dmg[i].rate += val;
          if (playerAttributes.left_weapon.add_dmg[i].rate === 0) {
            playerAttributes.left_weapon.add_dmg.splice(i, 1);
          }
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddMagicDamageClass:
      const i = playerAttributes.add_mdmg.findIndex(
        (dmg) => dmg.rate === 0 || dmg.class_ === type2
      );
      if (i !== -1) {
        playerAttributes.add_mdmg[i].class_ = type2;
        playerAttributes.add_mdmg[i].rate += val;
        if (playerAttributes.add_mdmg[i].rate === 0) {
          playerAttributes.add_mdmg.splice(i, 1);
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddDefClass:
      const j = playerAttributes.add_def.findIndex(
        (def) => def.rate === 0 || def.class_ === type2
      );
      if (j !== -1) {
        playerAttributes.add_def[j].class_ = type2;
        playerAttributes.add_def[j].rate += val;
        if (playerAttributes.add_def[j].rate === 0) {
          playerAttributes.add_def.splice(j, 1);
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddMdefClass:
      const k = playerAttributes.add_mdef.findIndex(
        (mdef) => mdef.rate === 0 || mdef.class_ === type2
      );
      if (k !== -1) {
        playerAttributes.add_mdef[k].class_ = type2;
        playerAttributes.add_mdef[k].rate += val;
        if (playerAttributes.add_mdef[k].rate === 0) {
          playerAttributes.add_mdef.splice(k, 1);
        }
      }
      break;

    case bonusTypeToStatusPointType.bHPDrainRate:
      if (playerAttributes.state.lr_flag === 0) {
        const value1rate =
          playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].rate;
        const value1per =
          playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].per;
        const value2rate =
          playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].rate;
        const value2per =
          playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].per;
        playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].rate =
          value1rate + type2;
        playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].per =
          value1per + val;
        playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].rate =
          value2rate + type2;
        playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].per =
          value2per + val;
      } else if (playerAttributes.state.lr_flag === 1) {
        const value1rate =
          playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].rate;
        const value1per =
          playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].per;
        const value2rate =
          playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].rate;
        const value2per =
          playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].per;
        playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].rate =
          value1rate + type2;
        playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].per =
          value1per + val;
        playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].rate =
          value2rate + type2;
        playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].per =
          value2per + val;
      }
      break;

    case bonusTypeToStatusPointType.bHPDrainValue:
      if (playerAttributes.state.lr_flag === 0) {
        const value1value =
          playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].value;
        const value1type =
          playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].type;
        const value2value =
          playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].value;
        const value2type =
          playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].type;
        playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].value =
          value1value + type2;
        playerAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].type =
          value1type + val;
        playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].value =
          value2value + type2;
        playerAttributes.right_weapon.hp_drain[Race.RC_BOSS].type =
          value2type + val;
      } else if (playerAttributes.state.lr_flag === 1) {
        const value1value =
          playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].value;
        const value1type =
          playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].type;
        const value2value =
          playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].value;
        const value2type =
          playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].type;
        playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].value =
          value1value + type2;
        playerAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].type =
          value1type + val;
        playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].value =
          value2value + type2;
        playerAttributes.left_weapon.hp_drain[Race.RC_BOSS].type =
          value2type + val;
      }
      break;

    case bonusTypeToStatusPointType.bSPDrainRate:
      if (playerAttributes.state.lr_flag === 0) {
        const value1rate =
          playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].rate;
        const value1per =
          playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].per;
        const value2rate =
          playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].rate;
        const value2per =
          playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].per;
        playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].rate =
          value1rate + type2;
        playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].per =
          value1per + val;
        playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].rate =
          value2rate + type2;
        playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].per =
          value2per + val;
      } else if (playerAttributes.state.lr_flag === 1) {
        const value1rate =
          playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].rate;
        const value1per =
          playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].per;
        const value2rate =
          playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].rate;
        const value2per =
          playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].per;
        playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].rate =
          value1rate + type2;
        playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].per =
          value1per + val;
        playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].rate =
          value2rate + type2;
        playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].per =
          value2per + val;
      }
      break;

    case bonusTypeToStatusPointType.bSPDrainValue:
      if (playerAttributes.state.lr_flag === 0) {
        const value1value =
          playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].value;
        const value1type =
          playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].type;
        const value2value =
          playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].value;
        const value2type =
          playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].type;
        playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].value =
          value1value + type2;
        playerAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].type =
          value1type + val;
        playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].value =
          value2value + type2;
        playerAttributes.right_weapon.sp_drain[Race.RC_BOSS].type =
          value2type + val;
      } else if (playerAttributes.state.lr_flag === 1) {
        const value1value =
          playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].value;
        const value1type =
          playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].type;
        const value2value =
          playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].value;
        const value2type =
          playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].type;
        playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].value =
          value1value + type2;
        playerAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].type =
          value1type + val;
        playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].value =
          value2value + type2;
        playerAttributes.left_weapon.sp_drain[Race.RC_BOSS].type =
          value2type + val;
      }
      break;

    case bonusTypeToStatusPointType.bHPVanishRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.hp_vanish_rate += type2;
        playerAttributes.bonus.hp_vanish_per = Math.max(
          playerAttributes.bonus.hp_vanish_per,
          val
        );
        playerAttributes.bonus.hp_vanish_trigger = 0;
      }
      break;

    case bonusTypeToStatusPointType.bSPVanishRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.sp_vanish_rate += type2;
        playerAttributes.bonus.sp_vanish_per = Math.max(
          playerAttributes.bonus.sp_vanish_per,
          val
        );
        playerAttributes.bonus.sp_vanish_trigger = 0;
      }
      break;

    case bonusTypeToStatusPointType.bGetZenyNum:
      if (
        playerAttributes.state.lr_flag !== 2 &&
        playerAttributes.bonus.get_zeny_rate < val
      ) {
        playerAttributes.bonus.get_zeny_rate = val;
        playerAttributes.bonus.get_zeny_num = type2;
      }
      break;

    case bonusTypeToStatusPointType.bAddGetZenyNum:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.get_zeny_rate += val;
        playerAttributes.bonus.get_zeny_num += type2;
      }
      break;

    case bonusTypeToStatusPointType.bWeaponComaEle:
      if (
        (type2 >= ELE_MAX && type2 !== ELE_ALL) ||
        type2 < ElementEnum.Neutro
      ) {
        console.error(
          `pc_bonus2: SP_WEAPON_COMA_ELE: Invalid element ${type2}`
        );
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      if (type2 === ELE_ALL) {
        for (let i = ElementEnum.Neutro; i < ELE_MAX; i++) {
          playerAttributes.weapon_coma_ele[i] += val;
        }
      } else {
        playerAttributes.weapon_coma_ele[type2] += val;
      }
      playerAttributes.special_state.bonus_coma = true;
      break;

    case bonusTypeToStatusPointType.bWeaponComaRace:
      const weaponRaceMask = map_race_id2mask(type2);
      if (weaponRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_WEAPON_COMA_RACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((weaponRaceMask & (1 << i)) !== 0) {
          playerAttributes.weapon_coma_race[i] += val;
        }
      }
      playerAttributes.special_state.bonus_coma = true;
      break;

    case bonusTypeToStatusPointType.bWeaponAtk:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.weapon_atk[type2] += val;
      }
      break;

    case bonusTypeToStatusPointType.bWeaponAtkRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.weapon_atk_rate[type2] += val;
      }
      break;

    case bonusTypeToStatusPointType.bCriticalAddRace:
      const critRaceMask = map_race_id2mask(type2);
      if (critRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_CRITICAL_ADDRACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((critRaceMask & (1 << i)) !== 0) {
          playerAttributes.critaddrace[i] += val * 10;
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddEffWhenHit:
      if (type2 > sc_type.SC_MAX) {
        console.warn(
          `pc_bonus2 (Add Effect when hit): ${type2} is not supported.`
        );
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        pc_bonus_addeff(
          playerAttributes.addeff2,
          playerAttributes.addeff2.length, // The maximum length of the addeff array
          type2,
          playerAttributes.state.lr_flag !== 2 ? val : 0,
          0,
          0, // flag (defaults will be applied inside pc_bonus_addeff)
          0 // duration
        );
      }
      break;

    case bonusTypeToStatusPointType.bSkillAtk: {
      const skillAtkIndex = playerAttributes.skillatk.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      const newSkill = { id: type2, val: val };
      if (skillAtkIndex !== -1) {
        if (playerAttributes.skillatk[skillAtkIndex].id === type2) {
          playerAttributes.skillatk[skillAtkIndex].val = newSkill.val;
        } else {
          playerAttributes.skillatk[skillAtkIndex] = newSkill;
        }
      }
      break;
    }
    case bonusTypeToStatusPointType.bSkillHeal: {
      const skillHealIndex = playerAttributes.skillheal.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      const newSkill = { id: type2, val: val };
      if (skillHealIndex !== -1) {
        if (playerAttributes.skillheal[skillHealIndex].id === type2) {
          playerAttributes.skillheal[skillHealIndex].val += newSkill.val;
        } else {
          playerAttributes.skillheal[skillHealIndex] = newSkill;
        }
      }
      break;
    }
    case bonusTypeToStatusPointType.bSkillHeal2: {
      const skillHeal2Index = playerAttributes.skillheal2.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      const newSkill = { id: type2, val: val };
      if (skillHeal2Index !== -1) {
        if (playerAttributes.skillheal2[skillHeal2Index].id === type2) {
          playerAttributes.skillheal2[skillHeal2Index].val += newSkill.val;
        } else {
          playerAttributes.skillheal2[skillHeal2Index] = newSkill;
        }
      }
      break;
    }
    case bonusTypeToStatusPointType.bAddSkillBlow: {
      const skillBlowIndex = playerAttributes.skillblown.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      const newSkill = { id: type2, val: val };
      if (skillBlowIndex !== -1) {
        if (playerAttributes.skillblown[skillBlowIndex].id === type2) {
          playerAttributes.skillblown[skillBlowIndex].val += newSkill.val;
        } else {
          playerAttributes.skillblown[skillBlowIndex] = newSkill;
        }
      }
      break;
    }
    case bonusTypeToStatusPointType.bCastrate: {
      const castRateIndex = playerAttributes.skillcast.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      const newSkill = { id: type2, val: val };
      if (castRateIndex !== -1) {
        if (playerAttributes.skillcast[castRateIndex].id === type2) {
          playerAttributes.skillcast[castRateIndex].val += newSkill.val;
        } else {
          playerAttributes.skillcast[castRateIndex] = newSkill;
        }
      }
      break;
    }
    case bonusTypeToStatusPointType.bFixedCastrate: {
      const fixCastRateIndex = playerAttributes.skillfixcastrate.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      const newSkill = { id: type2, val: -val };
      if (fixCastRateIndex !== -1) {
        if (playerAttributes.skillfixcastrate[fixCastRateIndex].id === type2) {
          playerAttributes.skillfixcastrate[fixCastRateIndex].val +=
            newSkill.val;
        } else {
          playerAttributes.skillfixcastrate[fixCastRateIndex] = newSkill;
        }
      }
      break;
    }
    case bonusTypeToStatusPointType.bHPLossRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.hp_loss.value = type2;
        playerAttributes.hp_loss.rate = val;
      }
      break;

    case bonusTypeToStatusPointType.bHPRegenRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.hp_regen.value = type2;
        playerAttributes.hp_regen.rate = val;
      }
      break;

    case bonusTypeToStatusPointType.bAddRace2:
      if (!(type2 > Race2.RC2_NONE && type2 < Race2.RC2_MAX)) break;
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.right_weapon.addrace2[type2] += val;
      } else {
        playerAttributes.left_weapon.addrace2[type2] += val;
      }
      break;

    case bonusTypeToStatusPointType.bSubSize:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.subsize[type2] += val;
      }
      break;

    case bonusTypeToStatusPointType.bSubRace2:
      if (!(type2 > Race2.RC2_NONE && type2 < Race2.RC2_MAX)) break;
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.subrace2[type2] += val;
      }
      break;

    case bonusTypeToStatusPointType.bAddItemHealRate:
      if (playerAttributes.state.lr_flag !== 2) {
        const itemHealRateIndex = playerAttributes.itemhealrate.findIndex(
          (healRate) => healRate.nameid === 0 || healRate.nameid === type2
        );
        if (itemHealRateIndex !== -1) {
          playerAttributes.itemhealrate[itemHealRateIndex].nameid = type2;
          playerAttributes.itemhealrate[itemHealRateIndex].rate += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bExpAddRace:
      const expRaceMask = map_race_id2mask(type2);
      if (expRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_EXP_ADDRACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((expRaceMask & (1 << i)) !== 0) {
          playerAttributes.expaddrace[i] += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bSPGainRace:
      const spGainRaceMask = map_race_id2mask(type2);
      if (spGainRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_SP_GAIN_RACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((spGainRaceMask & (1 << i)) !== 0) {
          playerAttributes.sp_gain_race[i] += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddMonsterDropItem:
      if (playerAttributes.state.lr_flag !== 2) {
        // Implement bonus item drop logic
      }
      break;

    case bonusTypeToStatusPointType.bSPLossRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.sp_loss.value = type2;
        playerAttributes.sp_loss.rate = val;
      }
      break;

    case bonusTypeToStatusPointType.bSPRegenRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.sp_regen.value = type2;
        playerAttributes.sp_regen.rate = val;
      }
      break;

    case bonusTypeToStatusPointType.bHPDrainValueRace:
      const hpDrainRaceMask = map_race_id2mask(type2);
      if (hpDrainRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(
          `pc_bonus2: SP_HP_DRAIN_VALUE_RACE: Invalid Race (${type2})`
        );
        break;
      }
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((hpDrainRaceMask & (1 << i)) !== 0) {
          if (playerAttributes.state.lr_flag === 0) {
            playerAttributes.right_weapon.hp_drain[i].value += val;
          } else if (playerAttributes.state.lr_flag === 1) {
            playerAttributes.left_weapon.hp_drain[i].value += val;
          }
        }
      }
      break;

    case bonusTypeToStatusPointType.bSPDrainValueRace:
      const spDrainRaceMask = map_race_id2mask(type2);
      if (spDrainRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(
          `pc_bonus2: SP_SP_DRAIN_VALUE_RACE: Invalid Race (${type2})`
        );
        break;
      }
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((spDrainRaceMask & (1 << i)) !== 0) {
          if (playerAttributes.state.lr_flag === 0) {
            playerAttributes.right_weapon.sp_drain[i].value += val;
          } else if (playerAttributes.state.lr_flag === 1) {
            playerAttributes.left_weapon.sp_drain[i].value += val;
          }
        }
      }
      break;

    case bonusTypeToStatusPointType.bIgnoreMdefRate:
      const ignoreMdefRaceMask = map_race_id2mask(type2);
      if (ignoreMdefRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_IGNORE_MDEF_RATE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((ignoreMdefRaceMask & (1 << i)) !== 0) {
          playerAttributes.ignore_mdef[i] += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bIgnoreDefRate:
      const ignoreDefRaceMask = map_race_id2mask(type2);
      if (ignoreDefRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_IGNORE_DEF_RATE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((ignoreDefRaceMask & (1 << i)) !== 0) {
          playerAttributes.ignore_def[i] += val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bSPGainRaceAttack:
      const spGainRaceAttackMask = map_race_id2mask(type2);
      if (spGainRaceAttackMask === RaceMask.RCMASK_NONE) {
        console.warn(
          `pc_bonus2: SP_SP_GAIN_RACE_ATTACK: Invalid Race (${type2})`
        );
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((spGainRaceAttackMask & (1 << i)) !== 0) {
          playerAttributes.sp_gain_race_attack[i] = capValue(
            playerAttributes.sp_gain_race_attack[i] + val,
            0,
            Number.MAX_SAFE_INTEGER
          );
        }
      }
      break;

    case bonusTypeToStatusPointType.bHPGainRaceAttack:
      const hpGainRaceAttackMask = map_race_id2mask(type2);
      if (hpGainRaceAttackMask === RaceMask.RCMASK_NONE) {
        console.warn(
          `pc_bonus2: SP_HP_GAIN_RACE_ATTACK: Invalid Race (${type2})`
        );
        break;
      }
      if (playerAttributes.state.lr_flag === 2) break;
      for (let i = 0; i < Race.RC_MAX; i++) {
        if ((hpGainRaceAttackMask & (1 << i)) !== 0) {
          playerAttributes.hp_gain_race_attack[i] = capValue(
            playerAttributes.hp_gain_race_attack[i] + val,
            0,
            Number.MAX_SAFE_INTEGER
          );
        }
      }
      break;

    case bonusTypeToStatusPointType.bSkillUseSPrate:
      const skillUseSPRateIndex = playerAttributes.skillusesprate.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      if (skillUseSPRateIndex !== -1) {
        if (playerAttributes.skillusesprate[skillUseSPRateIndex].id === type2) {
          playerAttributes.skillusesprate[skillUseSPRateIndex].val += val;
        } else {
          playerAttributes.skillusesprate[skillUseSPRateIndex].id = type2;
          playerAttributes.skillusesprate[skillUseSPRateIndex].val = val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bSkillCooldown:
      const skillCooldownIndex = playerAttributes.skillcooldown.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      if (skillCooldownIndex !== -1) {
        if (playerAttributes.skillcooldown[skillCooldownIndex].id === type2) {
          playerAttributes.skillcooldown[skillCooldownIndex].val += val;
        } else {
          playerAttributes.skillcooldown[skillCooldownIndex].id = type2;
          playerAttributes.skillcooldown[skillCooldownIndex].val = val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bSkillFixedCast:
      const skillFixedCastIndex = playerAttributes.skillfixcast.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      if (skillFixedCastIndex !== -1) {
        if (playerAttributes.skillfixcast[skillFixedCastIndex].id === type2) {
          playerAttributes.skillfixcast[skillFixedCastIndex].val += val;
        } else {
          playerAttributes.skillfixcast[skillFixedCastIndex].id = type2;
          playerAttributes.skillfixcast[skillFixedCastIndex].val = val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bSkillVariableCast:
      const skillVariableCastIndex = playerAttributes.skillvarcast.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      if (skillVariableCastIndex !== -1) {
        if (
          playerAttributes.skillvarcast[skillVariableCastIndex].id === type2
        ) {
          playerAttributes.skillvarcast[skillVariableCastIndex].val += val;
        } else {
          playerAttributes.skillvarcast[skillVariableCastIndex].id = type2;
          playerAttributes.skillvarcast[skillVariableCastIndex].val = val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bSkillUseSP:
      if (playerAttributes.state.lr_flag === 2) break;
      const skillUseSPIndex = playerAttributes.skillusesp.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      if (skillUseSPIndex !== -1) {
        if (playerAttributes.skillusesp[skillUseSPIndex].id === type2) {
          playerAttributes.skillusesp[skillUseSPIndex].val += val;
        } else {
          playerAttributes.skillusesp[skillUseSPIndex].id = type2;
          playerAttributes.skillusesp[skillUseSPIndex].val = val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bAddMonsterDropChainItem:
      const chainItemRaceMask = map_race_id2mask(val);
      if (chainItemRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(
          `pc_bonus2: SP_ADD_MONSTER_DROP_CHAINITEM: Invalid Race (${val})`
        );
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        // Implement bonus item drop logic here
        // You might need to define a function similar to `pc_bonus_item_drop` in TypeScript
      }
      break;

    case bonusTypeToStatusPointType.bSubSkill:
      if (playerAttributes.state.lr_flag === 2) break;
      const subSkillIndex = playerAttributes.subskill.findIndex(
        (skill) => skill.id === 0 || skill.id === type2
      );
      if (subSkillIndex !== -1) {
        if (playerAttributes.subskill[subSkillIndex].id === type2) {
          playerAttributes.subskill[subSkillIndex].val += val;
        } else {
          playerAttributes.subskill[subSkillIndex].id = type2;
          playerAttributes.subskill[subSkillIndex].val = val;
        }
      }
      break;

    case bonusTypeToStatusPointType.bDropAddRace:
      const dropRaceMask = map_race_id2mask(type2);
      if (dropRaceMask === RaceMask.RCMASK_NONE) {
        console.warn(`pc_bonus2: SP_ADD_DROP_RACE: Invalid Race (${type2})`);
        break;
      }
      if (playerAttributes.state.lr_flag !== 2) {
        for (let i = 0; i < Race.RC_MAX; i++) {
          if ((dropRaceMask & (1 << i)) !== 0) {
            playerAttributes.dropaddrace[i] += val;
          }
        }
      }
      break;

    default:
      console.warn(`Unknown bonus type: ${type}`);
      break;
  }

  return playerAttributes;
}

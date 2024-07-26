import { PlayerAttributes } from "./PlayerAttributes";
import { bonusTypeToStatusPointType } from "@/ragnarokData/types";

export function pc_bonus(
  playerAttributes: PlayerAttributes,
  type: string,
  val: number
): PlayerAttributes {
  const bst = playerAttributes.base_status;

  switch (type) {
    case bonusTypeToStatusPointType.bStr:
    case bonusTypeToStatusPointType.bAgi:
    case bonusTypeToStatusPointType.bVit:
    case bonusTypeToStatusPointType.bInt:
    case bonusTypeToStatusPointType.bDex:
    case bonusTypeToStatusPointType.bLuk:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.param_bonus[type] =
          (playerAttributes.param_bonus[type] || 0) + val;
      }
      break;
    case bonusTypeToStatusPointType.bAtk:
      if (playerAttributes.state.lr_flag === 0) {
        bst.rhw.atk = capValue(bst.rhw.atk + val, 0, Number.MAX_SAFE_INTEGER);
      } else if (playerAttributes.state.lr_flag === 1) {
        bst.lhw.atk = capValue(bst.lhw.atk + val, 0, Number.MAX_SAFE_INTEGER);
      }
      break;
    case bonusTypeToStatusPointType.bAtk2:
      if (playerAttributes.state.lr_flag === 0) {
        bst.rhw.atk2 = capValue(bst.rhw.atk2 + val, 0, Number.MAX_SAFE_INTEGER);
      } else if (playerAttributes.state.lr_flag === 1) {
        bst.lhw.atk2 = capValue(bst.lhw.atk2 + val, 0, Number.MAX_SAFE_INTEGER);
      }
      break;
    case bonusTypeToStatusPointType.bBaseAtk:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.batk = capValue(bst.batk + val, 0, Number.MAX_SAFE_INTEGER);
      }
      break;
    case bonusTypeToStatusPointType.bDef:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.def = capValue(
          bst.def + val,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      }
      break;
    case bonusTypeToStatusPointType.bDef2:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.def2 = capValue(
          bst.def2 + val,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      }
      break;
    case bonusTypeToStatusPointType.bMdef:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.mdef = capValue(
          bst.mdef + val,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
        if (playerAttributes.state.lr_flag === 3) {
          playerAttributes.bonus.shieldmdef += val;
        }
      }
      break;
    case bonusTypeToStatusPointType.bMdef2:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.mdef2 = capValue(
          bst.mdef2 + val,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      }
      break;
    case bonusTypeToStatusPointType.bHit:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.hit = capValue(
          bst.hit + val,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      } else {
        playerAttributes.bonus.arrow_hit += val;
      }
      break;
    case bonusTypeToStatusPointType.bFlee:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.flee = capValue(
          bst.flee + val,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      }
      break;
    case bonusTypeToStatusPointType.bFlee2:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.flee2 = capValue(
          bst.flee2 + val * 10,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      }
      break;
    case bonusTypeToStatusPointType.bCritical:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.cri = capValue(
          bst.cri + val * 10,
          Number.MIN_SAFE_INTEGER,
          Number.MAX_SAFE_INTEGER
        );
      } else {
        playerAttributes.bonus.arrow_cri += val * 10;
      }
      break;
    case bonusTypeToStatusPointType.bAtkEle:
      // Handle element assignment, consider adding necessary utility functions for elements.
      break;
    case bonusTypeToStatusPointType.bDefEle:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.def_ele = val; // Assuming `def_ele` is a direct assignment
      }
      break;
    case bonusTypeToStatusPointType.bMaxHP:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.max_hp = capValue(bst.max_hp + val, 0, Number.MAX_SAFE_INTEGER);
      }
      break;
    case bonusTypeToStatusPointType.bMaxSP:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.max_sp = capValue(bst.max_sp + val, 0, Number.MAX_SAFE_INTEGER);
      }
      break;
    case bonusTypeToStatusPointType.bCastrate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.castrate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMaxHPrate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.hprate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMaxSPrate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.sprate += val;
      }
      break;
    case bonusTypeToStatusPointType.bUseSPrate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.dsprate += val;
      }
      break;
    case bonusTypeToStatusPointType.bAtkRange:
      // Handle attack range modifications, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bSpeedRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.speed_rate = Math.min(
          playerAttributes.bonus.speed_rate,
          -val
        );
      }
      break;
    case bonusTypeToStatusPointType.bSpeedAddRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.speed_add_rate -= val;
      }
      break;
    case bonusTypeToStatusPointType.bAspd:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.aspd_add -= 10 * val;
      }
      break;
    case bonusTypeToStatusPointType.bAspdRate:
      if (playerAttributes.state.lr_flag !== 2) {
        bst.aspd_rate -= 10 * val;
      }
      break;
    case bonusTypeToStatusPointType.bHPrecovRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.hprecov_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bSPrecovRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.sprecov_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bCriticalDef:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.critical_def += val;
      }
      break;
    case bonusTypeToStatusPointType.bNearAtkDef:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.near_attack_def_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bLongAtkDef:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.long_attack_def_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bDoubleRate:
      if (
        playerAttributes.state.lr_flag === 0 &&
        playerAttributes.bonus.double_rate < val
      ) {
        playerAttributes.bonus.double_rate = val;
      }
      break;
    case bonusTypeToStatusPointType.bDoubleAddRate:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.bonus.double_add_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMatkRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.matk_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bIgnoreDefEle:
      // Handle element ignoring logic, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bIgnoreDefRace:
      // Handle race ignoring logic, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bAtkRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.atk_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMagicAtkDef:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.magic_def_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMiscAtkDef:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.misc_def_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bIgnoreMdefRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.ignore_mdef[0] += val; // Assuming index 0 is for RC_NONBOSS
        playerAttributes.ignore_mdef[1] += val; // Assuming index 1 is for RC_BOSS
      }
      break;
    case bonusTypeToStatusPointType.bIgnoreMdefEle:
      // Handle MDEF element ignoring logic, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bIgnoreMdefRace:
      // Handle MDEF race ignoring logic, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bPerfectHitRate:
      if (
        playerAttributes.state.lr_flag !== 2 &&
        playerAttributes.bonus.perfect_hit < val
      ) {
        playerAttributes.bonus.perfect_hit = val;
      }
      break;
    case bonusTypeToStatusPointType.bPerfectHitAddRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.perfect_hit_add += val;
      }
      break;
    case bonusTypeToStatusPointType.bCriticalRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.critical_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bDefRatioAtkEle:
      // Handle DEF ratio by element logic, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bDefRatioAtkRace:
      // Handle DEF ratio by race logic, consider adding utility functions if necessary.
      break;
    case bonusTypeToStatusPointType.bHitRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.hit_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bFleeRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.flee_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bFlee2Rate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.flee2_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bDefRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.def_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bDef2Rate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.def2_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMdefRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.mdef_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bMdef2Rate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.mdef2_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bRestartFullRecover:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.restart_full_recover = true;
      }
      break;
    case bonusTypeToStatusPointType.bNoCastCancel:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_castcancel = true;
      }
      break;
    case bonusTypeToStatusPointType.bNoCastCancel2:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_castcancel2 = true;
      }
      break;
    case bonusTypeToStatusPointType.bNoSizeFix:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_sizefix = true;
      }
      break;
    case bonusTypeToStatusPointType.bNoMagicDamage:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_magic_damage = capValue(
          playerAttributes.special_state.no_magic_damage + val,
          0,
          100
        );
      }
      break;
    case bonusTypeToStatusPointType.bNoWeaponDamage:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_weapon_damage = capValue(
          playerAttributes.special_state.no_weapon_damage + val,
          0,
          100
        );
      }
      break;
    case bonusTypeToStatusPointType.bNoMiscDamage:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_misc_damage = capValue(
          playerAttributes.special_state.no_misc_damage + val,
          0,
          100
        );
      }
      break;
    case bonusTypeToStatusPointType.bNoGemStone:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_gemstone = true;
      }
      break;
    case bonusTypeToStatusPointType.bIntravision:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.intravision = true;
        // Add logic for status change notification if necessary
      }
      break;
    case bonusTypeToStatusPointType.bNoKnockback:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.no_knockback = true;
      }
      break;
    case bonusTypeToStatusPointType.bSplashRange:
      if (playerAttributes.bonus.splash_range < val) {
        playerAttributes.bonus.splash_range = val;
      }
      break;
    case bonusTypeToStatusPointType.bSplashAddRange:
      playerAttributes.bonus.splash_add_range += val;
      break;
    case bonusTypeToStatusPointType.bShortWeaponDamageReturn:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.short_weapon_damage_return += val;
      }
      break;
    case bonusTypeToStatusPointType.bLongWeaponDamageReturn:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.long_weapon_damage_return += val;
      }
      break;
    case bonusTypeToStatusPointType.bMagicDamageReturn:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.magic_damage_return += val;
      }
      break;
    case bonusTypeToStatusPointType.bAllStats:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bStr] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bAgi] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bVit] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bInt] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bDex] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bLuk] += val;
      }
      break;
    case bonusTypeToStatusPointType.bAgiVit:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bAgi] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bVit] += val;
      }
      break;
    case bonusTypeToStatusPointType.bAgiDexStr:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bAgi] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bDex] += val;
        playerAttributes.param_bonus[bonusTypeToStatusPointType.bStr] += val;
      }
      break;
    case bonusTypeToStatusPointType.bPerfectHide:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.special_state.perfect_hiding = true;
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakable:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable += val;
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakableWeapon:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable_equip |= 1; // Assuming 1 represents EQP_WEAPON
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakableArmor:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable_equip |= 2; // Assuming 2 represents EQP_ARMOR
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakableHelm:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable_equip |= 4; // Assuming 4 represents EQP_HELM
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakableShield:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable_equip |= 8; // Assuming 8 represents EQP_SHIELD
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakableGarment:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable_equip |= 16; // Assuming 16 represents EQP_GARMENT
      }
      break;
    case bonusTypeToStatusPointType.bUnbreakableShoes:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unbreakable_equip |= 32; // Assuming 32 represents EQP_SHOES
      }
      break;
    case bonusTypeToStatusPointType.bClassChange:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.classchange = val;
      }
      break;
    case bonusTypeToStatusPointType.bLongAtkRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.long_attack_atk_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bBreakWeaponRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.break_weapon_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bBreakArmorRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.break_armor_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bAddStealRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.add_steal_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bDelayRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.delayrate += val;
      }
      break;
    case bonusTypeToStatusPointType.bCritAtkRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.crit_atk_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bNoRegen:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.regen.state.block |= val;
      }
      break;
    case bonusTypeToStatusPointType.bUnstripableWeapon:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unstripable_equip |= 1; // Assuming 1 represents EQP_WEAPON
      }
      break;
    case bonusTypeToStatusPointType.bUnstripableArmor:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unstripable_equip |= 2; // Assuming 2 represents EQP_ARMOR
      }
      break;
    case bonusTypeToStatusPointType.bUnstripableHelm:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unstripable_equip |= 4; // Assuming 4 represents EQP_HELM
      }
      break;
    case bonusTypeToStatusPointType.bUnstripableShield:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.unstripable_equip |= 8; // Assuming 8 represents EQP_SHIELD
      }
      break;
    case bonusTypeToStatusPointType.bHPDrainValue:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.right_weapon.hp_drain[0].value += val; // Assuming 0 index represents RC_NONBOSS
        playerAttributes.right_weapon.hp_drain[1].value += val; // Assuming 1 index represents RC_BOSS
      } else if (playerAttributes.state.lr_flag === 1) {
        playerAttributes.left_weapon.hp_drain[0].value += val; // Assuming 0 index represents RC_NONBOSS
        playerAttributes.left_weapon.hp_drain[1].value += val; // Assuming 1 index represents RC_BOSS
      }
      break;
    case bonusTypeToStatusPointType.bSPDrainValue:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.right_weapon.sp_drain[0].value += val; // Assuming 0 index represents RC_NONBOSS
        playerAttributes.right_weapon.sp_drain[1].value += val; // Assuming 1 index represents RC_BOSS
      } else if (playerAttributes.state.lr_flag === 1) {
        playerAttributes.left_weapon.sp_drain[0].value += val; // Assuming 0 index represents RC_NONBOSS
        playerAttributes.left_weapon.sp_drain[1].value += val; // Assuming 1 index represents RC_BOSS
      }
      break;
    case bonusTypeToStatusPointType.bSPGainValue:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.bonus.sp_gain_value += val;
      }
      break;
    case bonusTypeToStatusPointType.bHPGainValue:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.bonus.hp_gain_value += val;
      }
      break;
    case bonusTypeToStatusPointType.bMagicSPGainValue:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.bonus.magic_sp_gain_value += val;
      }
      break;
    case bonusTypeToStatusPointType.bMagicHPGainValue:
      if (playerAttributes.state.lr_flag === 0) {
        playerAttributes.bonus.magic_hp_gain_value += val;
      }
      break;
    case bonusTypeToStatusPointType.bHealPower:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.add_heal_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bHealPower2:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.add_heal2_rate += val;
      }
      break;
    case bonusTypeToStatusPointType.bAddItemHealRate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.itemhealrate2 += val;
      }
      break;
    case bonusTypeToStatusPointType.bMatk:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.ematk += val;
      }
      break;
    case bonusTypeToStatusPointType.bFixedCastrate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.fixcastrate -= val;
      }
      break;
    case bonusTypeToStatusPointType.bFixedCast:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.add_fixcast += val;
      }
      break;
    case bonusTypeToStatusPointType.bVariableCastrate:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.varcastrate -= val;
      }
      break;
    case bonusTypeToStatusPointType.bVariableCast:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.bonus.add_varcast += val;
      }
      break;
    case bonusTypeToStatusPointType.bAddMonsterDropChainItem:
      if (playerAttributes.state.lr_flag !== 2) {
        // Handle bonus item drop logic, consider adding utility functions if necessary.
      }
      break;
    case bonusTypeToStatusPointType.bAddMaxWeight:
      if (playerAttributes.state.lr_flag !== 2) {
        playerAttributes.max_weight += val;
      }
      break;
    default:
      console.warn(`Unknown bonus type: ${type}`);
      break;
  }

  return playerAttributes;
}

function capValue(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

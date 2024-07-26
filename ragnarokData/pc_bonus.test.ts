import { PlayerAttributes } from "./PlayerAttributes";
import { BonusHelpers } from "./BonusHelpers";
import { Bonuses, bonusTypeToStatusPointType } from "@/ragnarokData/types";

describe("BonusHelpers", () => {
  let playerAttributes: PlayerAttributes;

  beforeEach(() => {
    playerAttributes = new PlayerAttributes({});
  });

  test("should process SP_STR bonus correctly", () => {
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bStr]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bStr]).toBe(
      10
    );
  });

  test("should process SP_AGI bonus correctly", () => {
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAgi]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bAgi]).toBe(
      5
    );
  });

  test("should process SP_ATK1 bonus correctly for right hand", () => {
    playerAttributes.state.lr_flag = 0; // Right hand
    playerAttributes.base_status.rhw.atk = 50;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAtk]: [[20]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.rhw.atk).toBe(70);
  });

  test("should process SP_ATK1 bonus correctly for left hand", () => {
    playerAttributes.state.lr_flag = 1; // Left hand
    playerAttributes.base_status.lhw.atk = 30;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAtk]: [[15]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.lhw.atk).toBe(45);
  });

  test("should process SP_DEF1 bonus correctly", () => {
    playerAttributes.base_status.def = 100;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bDef]: [[25]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.def).toBe(125);
  });

  test("should process SP_DEF2 bonus correctly", () => {
    playerAttributes.base_status.def2 = 50;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bDef2]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.def2).toBe(60);
  });

  test("should process SP_MDEF1 bonus correctly", () => {
    playerAttributes.base_status.mdef = 30;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMdef]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.mdef).toBe(40);
  });

  test("should process SP_MDEF2 bonus correctly", () => {
    playerAttributes.base_status.mdef2 = 20;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMdef2]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.mdef2).toBe(25);
  });

  test("should process SP_HIT bonus correctly", () => {
    playerAttributes.base_status.hit = 150;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHit]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.hit).toBe(160);
  });

  test("should process SP_FLEE1 bonus correctly", () => {
    playerAttributes.base_status.flee = 80;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bFlee]: [[15]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.flee).toBe(95);
  });

  test("should process SP_FLEE2 bonus correctly", () => {
    playerAttributes.base_status.flee2 = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bFlee2]: [[2]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.flee2).toBe(30);
  });

  test("should process SP_CRITICAL bonus correctly", () => {
    playerAttributes.base_status.cri = 5;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bCritical]: [[2]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.cri).toBe(25);
  });

  test("should process SP_MAXHP bonus correctly", () => {
    playerAttributes.base_status.max_hp = 500;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMaxHP]: [[200]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.max_hp).toBe(700);
  });

  test("should process SP_MAXSP bonus correctly", () => {
    playerAttributes.base_status.max_sp = 100;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMaxSP]: [[50]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.base_status.max_sp).toBe(150);
  });

  test("should process SP_CASTRATE bonus correctly", () => {
    playerAttributes.castrate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bCastrate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.castrate).toBe(15);
  });

  test("should process SP_MAXHPRATE bonus correctly", () => {
    playerAttributes.hprate = 20;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMaxHPrate]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.hprate).toBe(30);
  });

  test("should process SP_MAXSPRATE bonus correctly", () => {
    playerAttributes.sprate = 15;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMaxSPrate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.sprate).toBe(20);
  });

  test("should process SP_SPEED_RATE bonus correctly", () => {
    playerAttributes.bonus.speed_rate = 5;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSpeedRate]: [[25]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.speed_rate).toBe(-25);
  });

  test("should process SP_ASPD bonus correctly", () => {
    playerAttributes.bonus.aspd_add = 20;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAspd]: [[3]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.aspd_add).toBe(-10);
  });

  test("should process SP_HP_RECOV_RATE bonus correctly", () => {
    playerAttributes.hprecov_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHPrecovRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.hprecov_rate).toBe(15);
  });

  test("should process SP_SP_RECOV_RATE bonus correctly", () => {
    playerAttributes.sprecov_rate = 5;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSPrecovRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.sprecov_rate).toBe(10);
  });

  test("should process SP_CRITICAL_DEF bonus correctly", () => {
    playerAttributes.bonus.critical_def = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bCriticalDef]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.critical_def).toBe(15);
  });

  test("should process SP_NEAR_ATK_DEF bonus correctly", () => {
    playerAttributes.bonus.near_attack_def_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNearAtkDef]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.near_attack_def_rate).toBe(15);
  });

  test("should process SP_LONG_ATK_DEF bonus correctly", () => {
    playerAttributes.bonus.long_attack_def_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bLongAtkDef]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.long_attack_def_rate).toBe(15);
  });

  test("should process SP_DOUBLE_RATE bonus correctly", () => {
    playerAttributes.bonus.double_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bDoubleRate]: [[15]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.double_rate).toBe(15);
  });

  test("should process SP_MATK_RATE bonus correctly", () => {
    playerAttributes.matk_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMatkRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.matk_rate).toBe(15);
  });

  test("should process SP_IGNORE_DEF_ELE bonus correctly", () => {
    // Implement logic to test element ignoring
  });

  test("should process SP_IGNORE_DEF_RACE bonus correctly", () => {
    // Implement logic to test race ignoring
  });

  test("should process SP_ATK_RATE bonus correctly", () => {
    playerAttributes.bonus.atk_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAtkRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.atk_rate).toBe(15);
  });

  test("should process SP_MAGIC_ATK_DEF bonus correctly", () => {
    playerAttributes.bonus.magic_def_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMagicAtkDef]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.magic_def_rate).toBe(15);
  });

  test("should process SP_MISC_ATK_DEF bonus correctly", () => {
    playerAttributes.bonus.misc_def_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMiscAtkDef]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.misc_def_rate).toBe(15);
  });

  test("should process SP_IGNORE_MDEF_RATE bonus correctly", () => {
    playerAttributes.ignore_mdef = [10, 10];
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bIgnoreMdefRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.ignore_mdef[0]).toBe(15);
    expect(updatedAttributes.ignore_mdef[1]).toBe(15);
  });

  test("should process SP_IGNORE_MDEF_ELE bonus correctly", () => {
    // Implement logic to test MDEF element ignoring
  });

  test("should process SP_IGNORE_MDEF_RACE bonus correctly", () => {
    // Implement logic to test MDEF race ignoring
  });

  test("should process SP_PERFECT_HIT_RATE bonus correctly with a lower value", () => {
    playerAttributes.bonus.perfect_hit = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bPerfectHitRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.perfect_hit).toBe(10);
  });

  test("should process SP_PERFECT_HIT_RATE bonus correctly with a higher value", () => {
    playerAttributes.bonus.perfect_hit = 5;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bPerfectHitRate]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.perfect_hit).toBe(10);
  });

  test("should process SP_PERFECT_HIT_ADD_RATE bonus correctly", () => {
    playerAttributes.bonus.perfect_hit_add = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bPerfectHitAddRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.perfect_hit_add).toBe(15);
  });

  test("should process SP_CRITICAL_RATE bonus correctly", () => {
    playerAttributes.critical_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bCriticalRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.critical_rate).toBe(15);
  });

  test("should process SP_DEF_RATIO_ATK_ELE bonus correctly", () => {
    // Implement logic to test DEF ratio by element
  });

  test("should process SP_DEF_RATIO_ATK_RACE bonus correctly", () => {
    // Implement logic to test DEF ratio by race
  });

  test("should process SP_HIT_RATE bonus correctly", () => {
    playerAttributes.hit_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHitRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.hit_rate).toBe(15);
  });

  test("should process SP_FLEE_RATE bonus correctly", () => {
    playerAttributes.flee_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bFleeRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.flee_rate).toBe(15);
  });

  test("should process SP_FLEE2_RATE bonus correctly", () => {
    playerAttributes.flee2_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bFlee2Rate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.flee2_rate).toBe(15);
  });

  test("should process SP_DEF_RATE bonus correctly", () => {
    playerAttributes.def_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bDefRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.def_rate).toBe(15);
  });

  test("should process SP_DEF2_RATE bonus correctly", () => {
    playerAttributes.def2_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bDef2Rate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.def2_rate).toBe(15);
  });

  test("should process SP_MDEF_RATE bonus correctly", () => {
    playerAttributes.mdef_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMdefRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.mdef_rate).toBe(15);
  });

  test("should process SP_MDEF2_RATE bonus correctly", () => {
    playerAttributes.mdef2_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMdef2Rate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.mdef2_rate).toBe(15);
  });

  test("should process SP_RESTART_FULL_RECOVER bonus correctly", () => {
    playerAttributes.special_state.restart_full_recover = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bRestartFullRecover]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.restart_full_recover).toBe(true);
  });

  test("should process SP_NO_CASTCANCEL bonus correctly", () => {
    playerAttributes.special_state.no_castcancel = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoCastCancel]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_castcancel).toBe(true);
  });

  test("should process SP_NO_CASTCANCEL2 bonus correctly", () => {
    playerAttributes.special_state.no_castcancel2 = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoCastCancel2]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_castcancel2).toBe(true);
  });

  test("should process SP_NO_SIZEFIX bonus correctly", () => {
    playerAttributes.special_state.no_sizefix = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoSizeFix]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_sizefix).toBe(true);
  });

  test("should process SP_NO_MAGIC_DAMAGE bonus correctly", () => {
    playerAttributes.special_state.no_magic_damage = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoMagicDamage]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_magic_damage).toBe(10);
  });

  test("should process SP_NO_WEAPON_DAMAGE bonus correctly", () => {
    playerAttributes.special_state.no_weapon_damage = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoWeaponDamage]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_weapon_damage).toBe(10);
  });

  test("should process SP_NO_MISC_DAMAGE bonus correctly", () => {
    playerAttributes.special_state.no_misc_damage = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoMiscDamage]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_misc_damage).toBe(10);
  });

  test("should process SP_NO_GEMSTONE bonus correctly", () => {
    playerAttributes.special_state.no_gemstone = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoGemStone]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_gemstone).toBe(true);
  });

  test("should process SP_INTRAVISION bonus correctly", () => {
    playerAttributes.special_state.intravision = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bIntravision]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.intravision).toBe(true);
  });

  test("should process SP_NO_KNOCKBACK bonus correctly", () => {
    playerAttributes.special_state.no_knockback = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoKnockback]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.no_knockback).toBe(true);
  });

  test("should process SP_SPLASH_RANGE bonus correctly", () => {
    playerAttributes.bonus.splash_range = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSplashRange]: [[15]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.splash_range).toBe(15);
  });

  test("should process SP_SPLASH_ADD_RANGE bonus correctly", () => {
    playerAttributes.bonus.splash_add_range = 5;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSplashAddRange]: [[3]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.splash_add_range).toBe(8);
  });

  test("should process SP_SHORT_WEAPON_DAMAGE_RETURN bonus correctly", () => {
    playerAttributes.bonus.short_weapon_damage_return = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bShortWeaponDamageReturn]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.short_weapon_damage_return).toBe(15);
  });

  test("should process SP_LONG_WEAPON_DAMAGE_RETURN bonus correctly", () => {
    playerAttributes.bonus.long_weapon_damage_return = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bLongWeaponDamageReturn]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.long_weapon_damage_return).toBe(15);
  });

  test("should process SP_MAGIC_DAMAGE_RETURN bonus correctly", () => {
    playerAttributes.bonus.magic_damage_return = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMagicDamageReturn]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.magic_damage_return).toBe(15);
  });

  test("should process SP_ALL_STATS bonus correctly", () => {
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bStr] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bAgi] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bVit] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bInt] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bDex] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bLuk] = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAllStats]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bStr]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bAgi]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bVit]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bInt]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bDex]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bLuk]).toBe(
      10
    );
  });

  test("should process SP_AGI_VIT bonus correctly", () => {
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bAgi] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bVit] = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAgiVit]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bAgi]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bVit]).toBe(
      10
    );
  });

  test("should process SP_AGI_DEX_STR bonus correctly", () => {
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bAgi] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bDex] = 0;
    playerAttributes.param_bonus[bonusTypeToStatusPointType.bStr] = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAgiDexStr]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bAgi]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bDex]).toBe(
      10
    );
    expect(updatedAttributes.param_bonus[bonusTypeToStatusPointType.bStr]).toBe(
      10
    );
  });

  test("should process SP_PERFECT_HIDE bonus correctly", () => {
    playerAttributes.special_state.perfect_hiding = false;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bPerfectHide]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.special_state.perfect_hiding).toBe(true);
  });

  test("should process SP_UNBREAKABLE bonus correctly", () => {
    playerAttributes.bonus.unbreakable = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakable]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable).toBe(5);
  });

  test("should process SP_UNBREAKABLE_WEAPON bonus correctly", () => {
    playerAttributes.bonus.unbreakable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakableWeapon]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable_equip).toBe(1); // Assuming 1 represents EQP_WEAPON
  });

  test("should process SP_UNBREAKABLE_ARMOR bonus correctly", () => {
    playerAttributes.bonus.unbreakable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakableArmor]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable_equip).toBe(2); // Assuming 2 represents EQP_ARMOR
  });

  test("should process SP_UNBREAKABLE_HELM bonus correctly", () => {
    playerAttributes.bonus.unbreakable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakableHelm]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable_equip).toBe(4); // Assuming 4 represents EQP_HELM
  });

  test("should process SP_UNBREAKABLE_SHIELD bonus correctly", () => {
    playerAttributes.bonus.unbreakable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakableShield]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable_equip).toBe(8); // Assuming 8 represents EQP_SHIELD
  });

  test("should process SP_UNBREAKABLE_GARMENT bonus correctly", () => {
    playerAttributes.bonus.unbreakable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakableGarment]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable_equip).toBe(16); // Assuming 16 represents EQP_GARMENT
  });

  test("should process SP_UNBREAKABLE_SHOES bonus correctly", () => {
    playerAttributes.bonus.unbreakable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnbreakableShoes]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unbreakable_equip).toBe(32); // Assuming 32 represents EQP_SHOES
  });

  test("should process SP_CLASSCHANGE bonus correctly", () => {
    playerAttributes.bonus.classchange = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bClassChange]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.classchange).toBe(1);
  });

  test("should process SP_LONG_ATK_RATE bonus correctly", () => {
    playerAttributes.bonus.long_attack_atk_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bLongAtkRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.long_attack_atk_rate).toBe(15);
  });

  test("should process SP_BREAK_WEAPON_RATE bonus correctly", () => {
    playerAttributes.bonus.break_weapon_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bBreakWeaponRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.break_weapon_rate).toBe(15);
  });

  test("should process SP_BREAK_ARMOR_RATE bonus correctly", () => {
    playerAttributes.bonus.break_armor_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bBreakArmorRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.break_armor_rate).toBe(15);
  });

  test("should process SP_ADD_STEAL_RATE bonus correctly", () => {
    playerAttributes.bonus.add_steal_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAddStealRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.add_steal_rate).toBe(15);
  });

  test("should process SP_DELAYRATE bonus correctly", () => {
    playerAttributes.delayrate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bDelayRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.delayrate).toBe(15);
  });

  test("should process SP_CRIT_ATK_RATE bonus correctly", () => {
    playerAttributes.bonus.crit_atk_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bCritAtkRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.crit_atk_rate).toBe(15);
  });

  test("should process SP_NO_REGEN bonus correctly", () => {
    playerAttributes.regen.state.block = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bNoRegen]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.regen.state.block).toBe(1);
  });

  test("should process SP_UNSTRIPABLE_WEAPON bonus correctly", () => {
    playerAttributes.bonus.unstripable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnstripableWeapon]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unstripable_equip).toBe(1); // Assuming 1 represents EQP_WEAPON
  });

  test("should process SP_UNSTRIPABLE_ARMOR bonus correctly", () => {
    playerAttributes.bonus.unstripable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnstripableArmor]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unstripable_equip).toBe(2); // Assuming 2 represents EQP_ARMOR
  });

  test("should process SP_UNSTRIPABLE_HELM bonus correctly", () => {
    playerAttributes.bonus.unstripable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnstripableHelm]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unstripable_equip).toBe(4); // Assuming 4 represents EQP_HELM
  });

  test("should process SP_UNSTRIPABLE_SHIELD bonus correctly", () => {
    playerAttributes.bonus.unstripable_equip = 0;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bUnstripableShield]: [[1]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.unstripable_equip).toBe(8); // Assuming 8 represents EQP_SHIELD
  });

  test("should process SP_HP_DRAIN_VALUE bonus correctly for right hand", () => {
    playerAttributes.state.lr_flag = 0;
    playerAttributes.right_weapon.hp_drain = [
      { rate: 0, per: 0, value: 0 },
      { rate: 0, per: 0, value: 0 },
    ];
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHPDrainValue]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.right_weapon.hp_drain[0].value).toBe(10);
    expect(updatedAttributes.right_weapon.hp_drain[1].value).toBe(10);
  });

  test("should process SP_HP_DRAIN_VALUE bonus correctly for left hand", () => {
    playerAttributes.state.lr_flag = 1;
    playerAttributes.left_weapon.hp_drain = [
      { rate: 0, per: 0, value: 0 },
      { rate: 0, per: 0, value: 0 },
    ];
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHPDrainValue]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.left_weapon.hp_drain[0].value).toBe(10);
    expect(updatedAttributes.left_weapon.hp_drain[1].value).toBe(10);
  });

  test("should process SP_SP_DRAIN_VALUE bonus correctly for right hand", () => {
    playerAttributes.state.lr_flag = 0;
    playerAttributes.right_weapon.sp_drain = [
      { rate: 0, per: 0, type: 0, value: 0 },
      { rate: 0, per: 0, type: 0, value: 0 },
    ];
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSPDrainValue]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.right_weapon.sp_drain[0].value).toBe(10);
    expect(updatedAttributes.right_weapon.sp_drain[1].value).toBe(10);
  });

  test("should process SP_SP_DRAIN_VALUE bonus correctly for left hand", () => {
    playerAttributes.state.lr_flag = 1;
    playerAttributes.left_weapon.sp_drain = [
      { rate: 0, per: 0, type: 0, value: 0 },
      { rate: 0, per: 0, type: 0, value: 0 },
    ];
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSPDrainValue]: [[10]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.left_weapon.sp_drain[0].value).toBe(10);
    expect(updatedAttributes.left_weapon.sp_drain[1].value).toBe(10);
  });

  test("should process SP_SP_GAIN_VALUE bonus correctly", () => {
    playerAttributes.bonus.sp_gain_value = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bSPGainValue]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.sp_gain_value).toBe(15);
  });

  test("should process SP_HP_GAIN_VALUE bonus correctly", () => {
    playerAttributes.bonus.hp_gain_value = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHPGainValue]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.hp_gain_value).toBe(15);
  });

  test("should process SP_MAGIC_SP_GAIN_VALUE bonus correctly", () => {
    playerAttributes.bonus.magic_sp_gain_value = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMagicSPGainValue]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.magic_sp_gain_value).toBe(15);
  });

  test("should process SP_MAGIC_HP_GAIN_VALUE bonus correctly", () => {
    playerAttributes.bonus.magic_hp_gain_value = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMagicHPGainValue]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.magic_hp_gain_value).toBe(15);
  });

  test("should process SP_ADD_HEAL_RATE bonus correctly", () => {
    playerAttributes.bonus.add_heal_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHealPower]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.add_heal_rate).toBe(15);
  });

  test("should process SP_ADD_HEAL2_RATE bonus correctly", () => {
    playerAttributes.bonus.add_heal2_rate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bHealPower2]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.add_heal2_rate).toBe(15);
  });

  test("should process SP_ADD_ITEM_HEAL_RATE bonus correctly", () => {
    playerAttributes.bonus.itemhealrate2 = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAddItemHealRate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.itemhealrate2).toBe(15);
  });

  test("should process SP_EMATK bonus correctly", () => {
    playerAttributes.bonus.ematk = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bMatk]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.ematk).toBe(15);
  });

  test("should process SP_FIXCASTRATE bonus correctly", () => {
    playerAttributes.bonus.fixcastrate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bFixedCastrate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.fixcastrate).toBe(5);
  });

  test("should process SP_ADD_FIXEDCAST bonus correctly", () => {
    playerAttributes.bonus.add_fixcast = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bFixedCast]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.add_fixcast).toBe(15);
  });

  test("should process SP_VARCASTRATE bonus correctly", () => {
    playerAttributes.bonus.varcastrate = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bVariableCastrate]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.varcastrate).toBe(5);
  });

  test("should process SP_ADD_VARIABLECAST bonus correctly", () => {
    playerAttributes.bonus.add_varcast = 10;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bVariableCast]: [[5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.add_varcast).toBe(15);
  });

  test("should process SP_ADD_MONSTER_DROP_CHAINITEM bonus correctly", () => {
    // Implement logic to test bonus item drop
  });

  test("should process SP_ADDMAXWEIGHT bonus correctly", () => {
    playerAttributes.max_weight = 1000;
    const bonuses: Bonuses = {
      bonus: {
        [bonusTypeToStatusPointType.bAddMaxWeight]: [[200]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.max_weight).toBe(1200);
  });

  test("should handle unknown bonus type gracefully", () => {
    const bonuses: Bonuses = {
      bonus: {
        UNKNOWN_BONUS: [[10]],
      },
    };

    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Unknown bonus type: UNKNOWN_BONUS"
    );
    consoleWarnSpy.mockRestore();
  });
});

function capValue(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

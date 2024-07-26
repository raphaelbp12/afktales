// PlayerAttributes.ts
import { Bonuses } from "@/ragnarokData/types";
import { BaseStatus } from "./BaseStatus";

export class PlayerAttributes {
  add_drop: any[];
  autospell: any[];
  autospell2: any[];
  autospell3: any[];
  autoSpellWhenHit: any[];
  state: { lr_flag: number };
  right_weapon: {
    sp_drain: { rate: number; per: number; type: number; value: number }[];
    hp_drain: { rate: number; per: number; value: number }[];
  };
  left_weapon: {
    sp_drain: { rate: number; per: number; type: number; value: number }[];
    hp_drain: { rate: number; per: number; value: number }[];
  };
  addeff: any[];
  addeff2: any[];
  addeff3: any[];
  addEffWhenHit: any[];
  addEffOnSkill: any[];
  bonus: {
    hp_vanish_rate: number;
    hp_vanish_per: number;
    hp_vanish_trigger: number;
    sp_vanish_rate: number;
    sp_vanish_per: number;
    sp_vanish_trigger: number;
    atk_rate: number;
    arrow_atk: number;
    arrow_ele: number;
    arrow_cri: number;
    arrow_hit: number;
    nsshealhp: number;
    nsshealsp: number;
    critical_def: number;
    double_rate: number;
    long_attack_atk_rate: number;
    near_attack_def_rate: number;
    long_attack_def_rate: number;
    magic_def_rate: number;
    misc_def_rate: number;
    ignore_mdef_ele: number;
    ignore_mdef_race: number;
    perfect_hit: number;
    perfect_hit_add: number;
    get_zeny_rate: number;
    get_zeny_num: number;
    double_add_rate: number;
    short_weapon_damage_return: number;
    long_weapon_damage_return: number;
    magic_damage_return: number;
    break_weapon_rate: number;
    break_armor_rate: number;
    crit_atk_rate: number;
    classchange: number;
    speed_rate: number;
    speed_add_rate: number;
    aspd_add: number;
    itemhealrate2: number;
    shieldmdef: number;
    setitem_hash: number;
    setitem_hash2: number;
    splash_range: number;
    splash_add_range: number;
    add_steal_rate: number;
    add_heal_rate: number;
    add_heal2_rate: number;
    sp_gain_value: number;
    hp_gain_value: number;
    magic_sp_gain_value: number;
    magic_hp_gain_value: number;
    unbreakable: number;
    unbreakable_equip: number;
    unstripable_equip: number;
    fixcastrate: number;
    varcastrate: number;
    add_fixcast: number;
    add_varcast: number;
    ematk: number;
  };
  sub_def_ele: { rate_mob: number; rate_pc: number }[];
  magic_sub_def_ele: { rate_mob: number; rate_pc: number }[];
  no_recover_state_race: { rate: number; tick: number }[];
  bonuses: Bonuses;
  base_status: BaseStatus;
  param_bonus: { [key: string]: number };
  castrate: number;
  hprate: number;
  sprate: number;
  dsprate: number;
  hprecov_rate: number;
  sprecov_rate: number;
  matk_rate: number;
  ignore_mdef: number[];
  critical_rate: number;
  hit_rate: number;
  flee_rate: number;
  flee2_rate: number;
  def_rate: number;
  def2_rate: number;
  mdef_rate: number;
  mdef2_rate: number;
  delayrate: number;
  weight: number;
  max_weight: number;
  special_state: {
    no_weapon_damage: number;
    no_magic_damage: number;
    no_misc_damage: number;
    restart_full_recover: boolean;
    no_castcancel: boolean;
    no_castcancel2: boolean;
    no_sizefix: boolean;
    no_gemstone: boolean;
    intravision: boolean; // Maya Purple Card effect [DracoRPG]
    perfect_hiding: boolean; // [Valaris]
    no_knockback: boolean;
    bonus_coma: boolean;
  };
  regen: {
    flag: number;
    hp: number;
    sp: number;
    tick: {
      hp: number;
      sp: number;
    };
    rate: {
      hp: number;
      sp: number;
    };
    state: {
      walk: boolean;
      overweight: number;
      block: number;
    };
    skill: {
      hp: number;
      sp: number;
      tick: {
        hp: number;
        sp: number;
      };
      rate: {
        hp: number;
        sp: number;
      };
    };
    sitting: {
      hp: number;
      sp: number;
      tick: {
        hp: number;
        sp: number;
      };
      rate: {
        hp: number;
        sp: number;
      };
    };
  };

  constructor(bonuses: Bonuses) {
    this.castrate = 0;
    this.hprate = 0;
    this.sprate = 0;
    this.dsprate = 0;
    this.hprecov_rate = 0;
    this.sprecov_rate = 0;
    this.matk_rate = 0;
    this.ignore_mdef = [0, 0];
    this.critical_rate = 0;
    this.hit_rate = 0;
    this.flee_rate = 0;
    this.flee2_rate = 0;
    this.def_rate = 0;
    this.def2_rate = 0;
    this.mdef_rate = 0;
    this.mdef2_rate = 0;
    this.delayrate = 0;
    this.weight = 0;
    this.max_weight = 0;
    this.add_drop = [];
    this.autospell = [];
    this.autospell2 = [];
    this.autospell3 = [];
    this.autoSpellWhenHit = [];
    this.addEffOnSkill = [];
    this.state = { lr_flag: 0 };
    this.right_weapon = { sp_drain: [], hp_drain: [] };
    this.left_weapon = { sp_drain: [], hp_drain: [] };
    this.addeff = [];
    this.addeff2 = [];
    this.addeff3 = [];
    this.addEffWhenHit = [];
    this.bonus = {
      hp_vanish_rate: 0,
      hp_vanish_per: 0,
      hp_vanish_trigger: 0,
      sp_vanish_rate: 0,
      sp_vanish_per: 0,
      sp_vanish_trigger: 0,
      atk_rate: 0,
      arrow_atk: 0,
      arrow_ele: 0,
      arrow_cri: 0,
      arrow_hit: 0,
      nsshealhp: 0,
      nsshealsp: 0,
      critical_def: 0,
      double_rate: 0,
      long_attack_atk_rate: 0,
      near_attack_def_rate: 0,
      long_attack_def_rate: 0,
      magic_def_rate: 0,
      misc_def_rate: 0,
      ignore_mdef_ele: 0,
      ignore_mdef_race: 0,
      perfect_hit: 0,
      perfect_hit_add: 0,
      get_zeny_rate: 0,
      get_zeny_num: 0,
      double_add_rate: 0,
      short_weapon_damage_return: 0,
      long_weapon_damage_return: 0,
      magic_damage_return: 0,
      break_weapon_rate: 0,
      break_armor_rate: 0,
      crit_atk_rate: 0,
      classchange: 0,
      speed_rate: 0,
      speed_add_rate: 0,
      aspd_add: 0,
      itemhealrate2: 0,
      shieldmdef: 0,
      setitem_hash: 0,
      setitem_hash2: 0,
      splash_range: 0,
      splash_add_range: 0,
      add_steal_rate: 0,
      add_heal_rate: 0,
      add_heal2_rate: 0,
      sp_gain_value: 0,
      hp_gain_value: 0,
      magic_sp_gain_value: 0,
      magic_hp_gain_value: 0,
      unbreakable: 0,
      unbreakable_equip: 0,
      unstripable_equip: 0,
      fixcastrate: 0,
      varcastrate: 0,
      add_fixcast: 0,
      add_varcast: 0,
      ematk: 0,
    };
    this.sub_def_ele = [];
    this.magic_sub_def_ele = [];
    this.no_recover_state_race = [];
    this.bonuses = bonuses;

    // Initialize base_status
    this.base_status = {
      hp: 0,
      sp: 0,
      max_hp: 0,
      max_sp: 0,
      str: 0,
      agi: 0,
      vit: 0,
      int_: 0,
      dex: 0,
      luk: 0,
      atk_percent: 0,
      matk_percent: 0,
      def_percent: 0,
      mdef_percent: 0,
      batk: 0,
      matk_min: 0,
      matk_max: 0,
      speed: 0,
      amotion: 0,
      adelay: 0,
      dmotion: 0,
      mode: 0,
      hit: 0,
      flee: 0,
      cri: 0,
      flee2: 0,
      def2: 0,
      mdef2: 0,
      aspd_rate: 0,
      def: 0,
      mdef: 0,
      def_ele: 0,
      ele_lv: 0,
      size: 0,
      race: 0,
      rhw: { atk: 0, atk2: 0 },
      lhw: { atk: 0, atk2: 0 },
      equip_atk: 0,
    };

    // Initialize param_bonus
    this.param_bonus = {
      SP_STR: 0,
      SP_AGI: 0,
      SP_VIT: 0,
      SP_INT: 0,
      SP_DEX: 0,
      SP_LUK: 0,
    };

    // Initialize special_state
    this.special_state = {
      no_weapon_damage: 0,
      no_magic_damage: 0,
      no_misc_damage: 0,
      restart_full_recover: false,
      no_castcancel: false,
      no_castcancel2: false,
      no_sizefix: false,
      no_gemstone: false,
      intravision: false, // Maya Purple Card effect [DracoRPG]
      perfect_hiding: false, // [Valaris]
      no_knockback: false,
      bonus_coma: false,
    };

    // Initialize regen
    this.regen = {
      flag: 0,
      hp: 0,
      sp: 0,
      tick: {
        hp: 0,
        sp: 0,
      },
      rate: {
        hp: 0,
        sp: 0,
      },
      state: {
        walk: false,
        overweight: 0,
        block: 0,
      },
      skill: {
        hp: 0,
        sp: 0,
        tick: {
          hp: 0,
          sp: 0,
        },
        rate: {
          hp: 0,
          sp: 0,
        },
      },
      sitting: {
        hp: 0,
        sp: 0,
        tick: {
          hp: 0,
          sp: 0,
        },
        rate: {
          hp: 0,
          sp: 0,
        },
      },
    };
  }
}

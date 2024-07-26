// PlayerAttributes.ts
import { Bonuses } from "@/ragnarokData/types";

export class PlayerAttributes {
  add_drop: any[];
  autospell: any[];
  autospell2: any[];
  autospell3: any[];
  autoSpellWhenHit: any[];
  state: { lr_flag: number };
  right_weapon: {
    sp_drain: { rate: number; per: number; type: number }[];
    hp_drain: { rate: number; per: number }[];
  };
  left_weapon: {
    sp_drain: { rate: number; per: number; type: number }[];
    hp_drain: { rate: number; per: number }[];
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
  };
  sub_def_ele: { rate_mob: number; rate_pc: number }[];
  magic_sub_def_ele: { rate_mob: number; rate_pc: number }[];
  no_recover_state_race: { rate: number; tick: number }[];
  bonuses: Bonuses;

  constructor(bonuses: Bonuses) {
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
    };
    this.sub_def_ele = [];
    this.magic_sub_def_ele = [];
    this.no_recover_state_race = [];
    this.bonuses = bonuses;
  }
}

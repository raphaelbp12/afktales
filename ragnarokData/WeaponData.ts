// WeaponData.ts
import {
  ELE_MAX,
  RC_MAX,
  RC2_MAX,
  MAX_PC_BONUS,
} from "@/ragnarokData/constants"; // Make sure to define or import these constants

export interface DrainData {
  rate: number;
  per: number;
  value: number;
  type: number; // Assuming type is a number, adjust as necessary
}

export interface AddDamage {
  class_: number;
  rate: number;
}

export interface AddElement {
  flag: number;
  rate: number;
  ele: number;
}

export interface WeaponData {
  atkmods: number[]; // Assuming it has 3 elements
  overrefine: number;
  star: number;
  ignore_def_ele: number;
  ignore_def_race: number;
  ignore_mdef_ele: number;
  ignore_mdef_race: number;
  def_ratio_atk_ele: number;
  def_ratio_atk_race: number;
  addele: number[];
  addrace: number[];
  addrace2: number[];
  addsize: number[];
  hp_drain: DrainData[];
  sp_drain: DrainData[];
  add_dmg: AddDamage[];
  addele2: AddElement[];
}

export function initializeWeaponData(): WeaponData {
  return {
    atkmods: [0, 0, 0],
    overrefine: 0,
    star: 0,
    ignore_def_ele: 0,
    ignore_def_race: 0,
    ignore_mdef_ele: 0,
    ignore_mdef_race: 0,
    def_ratio_atk_ele: 0,
    def_ratio_atk_race: 0,
    addele: new Array(ELE_MAX).fill(0),
    addrace: new Array(RC_MAX).fill(0),
    addrace2: new Array(RC2_MAX).fill(0),
    addsize: [0, 0, 0],
    hp_drain: new Array(RC_MAX).fill({ rate: 0, per: 0, value: 0, type: 0 }),
    sp_drain: new Array(RC_MAX).fill({ rate: 0, per: 0, value: 0, type: 0 }),
    add_dmg: new Array(MAX_PC_BONUS).fill({ class_: 0, rate: 0 }),
    addele2: new Array(MAX_PC_BONUS).fill({ flag: 0, rate: 0, ele: 0 }),
  };
}

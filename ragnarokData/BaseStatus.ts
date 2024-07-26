// BaseStatus.ts

export interface WeaponAtk {
  atk: number;
  atk2: number;
}

export interface BaseStatus {
  hp: number;
  sp: number;
  max_hp: number;
  max_sp: number;
  str: number;
  agi: number;
  vit: number;
  int_: number;
  dex: number;
  luk: number;
  atk_percent: number;
  matk_percent: number;
  def_percent: number;
  mdef_percent: number;
  batk: number;
  matk_min: number;
  matk_max: number;
  speed: number;
  amotion: number;
  adelay: number;
  dmotion: number;
  mode: number;
  hit: number;
  flee: number;
  cri: number;
  flee2: number;
  def2: number;
  mdef2: number;
  aspd_rate: number;
  def: number;
  mdef: number;
  def_ele: number;
  ele_lv: number;
  size: number;
  race: number;
  rhw: WeaponAtk;
  lhw: WeaponAtk;
  equip_atk: number;
}

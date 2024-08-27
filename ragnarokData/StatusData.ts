// Assuming that `defType` and `weapon_atk` are already defined elsewhere in your code,
// they should be imported or defined above this interface.

export interface StatusData {
  hp: number;
  sp: number;
  max_hp: number;
  max_sp: number;

  str: number; // uint16
  agi: number; // uint16
  vit: number; // uint16
  int_: number; // uint16 (int is a reserved keyword in JavaScript/TypeScript)
  dex: number; // uint16
  luk: number; // uint16

  atk_percent: number; // int
  matk_percent: number; // int
  def_percent: number; // int
  mdef_percent: number; // int

  batk: number; // uint32
  matk_min: number; // uint32
  matk_max: number; // uint32
  speed: number; // uint32
  amotion: number; // uint32
  adelay: number; // uint32
  dmotion: number; // uint32
  mode: number; // uint32

  hit: number; // int32
  flee: number; // int32
  cri: number; // int32
  flee2: number; // int32
  def: number; // int32
  mdef: number; // int32
  def2: number; // int32
  mdef2: number; // int32

  aspd_rate: number; // int32

  def_ele: number; // unsigned char
  ele_lv: number; // unsigned char
  size: number; // unsigned char
  race: number; // unsigned char

  rhw: WeaponAtk; // Right Hand Weapon - assumed to be a defined type
  lhw: WeaponAtk; // Left Hand Weapon - assumed to be a defined type
}

// Example `DefType` enum (this should match your actual implementation)

// Example `WeaponAtk` type (this should match your actual implementation)
interface WeaponAtk {
  atk: number;
  atk2: number;
  range: number;
  ele: number;
}

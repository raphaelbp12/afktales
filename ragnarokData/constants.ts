export const ELE_MAX = 10; // Replace with the actual value
export const ELE_ALL = 0xff; // Replace with the actual value
export const MAX_PC_BONUS = 10; // Replace with the actual value

export enum equip_pos {
  EQP_NONE = 0x000000,
  EQP_HEAD_LOW = 0x000001,
  EQP_HEAD_MID = 0x000200, // 512
  EQP_HEAD_TOP = 0x000100, // 256
  EQP_HAND_R = 0x000002, // 2
  EQP_HAND_L = 0x000020, // 32
  EQP_ARMOR = 0x000010, // 16
  EQP_SHOES = 0x000040, // 64
  EQP_GARMENT = 0x000004, // 4
  EQP_ACC_L = 0x000008, // 8
  EQP_ACC_R = 0x000080, // 128
  EQP_COSTUME_HEAD_TOP = 0x000400, // 1024
  EQP_COSTUME_HEAD_MID = 0x000800, // 2048
  EQP_COSTUME_HEAD_LOW = 0x001000, // 4096
  EQP_COSTUME_GARMENT = 0x002000, // 8192
  EQP_AMMO = 0x008000, // 32768
  EQP_SHADOW_ARMOR = 0x010000, // 65536
  EQP_SHADOW_WEAPON = 0x020000, // 131072
  EQP_SHADOW_SHIELD = 0x040000, // 262144
  EQP_SHADOW_SHOES = 0x080000, // 524288
  EQP_SHADOW_ACC_R = 0x100000, // 1048576
  EQP_SHADOW_ACC_L = 0x200000, // 2097152
}

export const EQP_WEAPON = equip_pos.EQP_HAND_R;
export const EQP_SHIELD = equip_pos.EQP_HAND_L;
export const EQP_ARMS = equip_pos.EQP_HAND_R | equip_pos.EQP_HAND_L;
export const EQP_HELM =
  equip_pos.EQP_HEAD_LOW | equip_pos.EQP_HEAD_MID | equip_pos.EQP_HEAD_TOP;
export const EQP_ACC = equip_pos.EQP_ACC_L | equip_pos.EQP_ACC_R;
export const EQP_COSTUME =
  equip_pos.EQP_COSTUME_HEAD_TOP |
  equip_pos.EQP_COSTUME_HEAD_MID |
  equip_pos.EQP_COSTUME_HEAD_LOW |
  equip_pos.EQP_COSTUME_GARMENT;
export const EQP_SHADOW_ACC =
  equip_pos.EQP_SHADOW_ACC_R | equip_pos.EQP_SHADOW_ACC_L;
export const EQP_SHADOW_ARMS =
  equip_pos.EQP_SHADOW_WEAPON | equip_pos.EQP_SHADOW_SHIELD;

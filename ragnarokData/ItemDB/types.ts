import { Job, Trade, Nouse, Bonuses } from "../types";

// item_data in itemdb.h
export interface ItemData {
  nameid: number;
  Id: number;
  AegisName: string;
  Name: string;
  CloneItem?: number | string;
  Type?: string;
  Buy?: number;
  Sell?: number;
  Weight?: number;
  Atk?: number;
  Matk?: number;
  Def?: number;
  Range?: number;
  Slots?: number;
  Job?: Job | number;
  Upper?: string | number;
  Gender?: string;
  Loc?: string | number | (string | number)[];
  WeaponLv?: number;
  EquipLv?: number | [number, number];
  Refine?: boolean;
  Grade?: boolean;
  DisableOptions?: boolean;
  Subtype?: number;
  ViewSprite?: number;
  BindOnEquip?: boolean;
  ForceSerial?: boolean;
  BuyingStore?: boolean;
  Delay?: number;
  KeepAfterUse?: boolean;
  DropAnnounce?: boolean;
  ShowDropEffect?: boolean;
  DropEffectMode?: number;
  IgnoreDiscount?: boolean;
  IgnoreOvercharge?: boolean;
  Trade?: Trade;
  Nouse?: Nouse;
  Stack?: [number, number];
  Sprite?: number;
  Script?: string;
  OnEquipScript?: string;
  OnUnequipScript?: string;
  OnRentalStartScript?: string;
  OnRentalEndScript?: string;
  Bonuses?: Bonuses;
}

// from item struct in mmo.h
export class item_persistent {
  id: number;
  nameid: number;
  amount: number;
  equip: equip_pos;
  identify: string;
  refine: string;
  grade: string;
  attribute: string;
  card: number[];
  expire_time: number;
  favorite: string;
  bound: string;
  unique_id: number;
  option: item_option[];

  constructor() {
    this.id = 0;
    this.nameid = 0;
    this.amount = 0;
    this.equip = equip_pos.EQP_NONE;
    this.identify = "";
    this.refine = "";
    this.grade = "";
    this.attribute = "";
    this.card = [];
    this.expire_time = 0;
    this.favorite = "";
    this.bound = "";
    this.unique_id = 0;
    this.option = [];
  }
}

export type item_option = {
  index: number;
  value: number;
  param: number;
};

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

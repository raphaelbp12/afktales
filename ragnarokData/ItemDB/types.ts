import { tryParseWeaponType, weapon_type } from "./weapon_type";
import { Job, Trade, Nouse, Bonuses } from "../types";
import { ItemDB } from "./ItemDB";

// item_data in itemdb.h
export class ItemData {
  itemDB?: ItemDB;

  nameid: number;
  guid: string;
  Id: number;
  AegisName: string;
  Name: string;
  CloneItem?: number | string;
  Type?: string | item_types;
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
  Loc?: equip_pos | string | number | (string | number)[];
  WeaponLv?: number;
  EquipLv?: number | [number, number];
  Refine?: boolean;
  Grade?: boolean;
  DisableOptions?: boolean;
  Subtype?: string | weapon_type;
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

  Amount?: number;
  Options?: item_option[];
  EquipPosWhenEquipped?: equip_pos;
  Cards?: number[];
  RefineLevel?: number;

  constructor(data?: Partial<ItemData>, persistentData?: item_persistent) {
    // Assign default values or provided values
    this.itemDB = data?.itemDB;
    this.nameid = data?.Id ?? 0;
    this.guid = data ? generateGUID() : "";
    this.Id = data?.Id ?? 0;
    this.AegisName = data?.AegisName ?? "";
    this.Name = data?.Name ?? "";
    this.CloneItem = data?.CloneItem;
    this.Type = data?.Type
      ? tryParseItemType(data.Type)
      : item_types.IT_UNKNOWN;
    this.Buy = data?.Buy;
    this.Sell = data?.Sell;
    this.Weight = data?.Weight;
    this.Atk = data?.Atk;
    this.Matk = data?.Matk;
    this.Def = data?.Def;
    this.Range = data?.Range;
    this.Slots = data?.Slots;
    this.Job = data?.Job;
    this.Upper = data?.Upper;
    this.Gender = data?.Gender;
    this.Loc = tryParseLoc(data?.Loc);
    this.EquipPosWhenEquipped = equip_pos.EQP_NONE;
    this.WeaponLv = data?.WeaponLv;
    this.EquipLv = data?.EquipLv;
    this.Refine = data?.Refine;
    this.Grade = data?.Grade;
    this.DisableOptions = data?.DisableOptions;
    this.Subtype = data?.Subtype
      ? tryParseWeaponType(data.Subtype)
      : weapon_type.W_FIST;
    this.ViewSprite = data?.ViewSprite;
    this.BindOnEquip = data?.BindOnEquip;
    this.ForceSerial = data?.ForceSerial;
    this.BuyingStore = data?.BuyingStore;
    this.Delay = data?.Delay;
    this.KeepAfterUse = data?.KeepAfterUse;
    this.DropAnnounce = data?.DropAnnounce;
    this.ShowDropEffect = data?.ShowDropEffect;
    this.DropEffectMode = data?.DropEffectMode;
    this.IgnoreDiscount = data?.IgnoreDiscount;
    this.IgnoreOvercharge = data?.IgnoreOvercharge;
    this.Trade = data?.Trade;
    this.Nouse = data?.Nouse;
    this.Stack = data?.Stack;
    this.Sprite = data?.Sprite;
    this.Script = data?.Script;
    this.OnEquipScript = data?.OnEquipScript;
    this.OnUnequipScript = data?.OnUnequipScript;
    this.OnRentalStartScript = data?.OnRentalStartScript;
    this.OnRentalEndScript = data?.OnRentalEndScript;
    this.Bonuses = data?.Bonuses;
    this.Cards = data?.Cards ?? Array(this.Slots).fill(0);

    if (persistentData) {
      this.nameid = persistentData.nameid;
      this.Id = persistentData.id;
      this.Amount = persistentData.amount;
      this.Options = persistentData.option;
      this.EquipPosWhenEquipped = persistentData.equip;
      this.Cards = persistentData.card;
      this.RefineLevel = persistentData.refine;
    }
  }

  public addItemDB(itemDB: ItemDB): void {
    if (this.itemDB) {
      console.log(`ItemDB already set for this item. ${this.getName()}`);
      return;
    }
    this.itemDB = itemDB;
  }

  public getName(): string {
    let stringToAppend: string = "";
    if (this.itemDB && this.Cards && this.Cards.length > 0) {
      this.Cards.forEach((cardId) => {
        const card = this.itemDB!.getItemByNameid(cardId);
        if (card && card.Name !== "") {
          stringToAppend += ` [${card.Name}]`;
        }
      });
    }

    return `${this.Name}${
      this.Slots && this.Slots > 0 ? ` [${this.Slots}]` : ""
    }${stringToAppend !== "" ? ` - ${stringToAppend}` : ""}`;
  }

  public copy(): ItemData {
    return new ItemData(this);
  }

  public isCard(): boolean {
    return this.Type === item_types.IT_CARD;
  }

  public isEquip(): boolean {
    if (this.Type === undefined || typeof this.Type === "string") {
      throw new Error("Item type was not parsed correctly.");
    }

    switch (this.Type) {
      case item_types.IT_WEAPON:
      case item_types.IT_ARMOR:
      case item_types.IT_AMMO:
        return true;
      case item_types.IT_HEALING:
      case item_types.IT_UNKNOWN:
      case item_types.IT_USABLE:
      case item_types.IT_ETC:
      case item_types.IT_CARD:
      case item_types.IT_PETEGG:
      case item_types.IT_PETARMOR:
      case item_types.IT_UNKNOWN2:
      case item_types.IT_DELAYCONSUME:
      case item_types.IT_SELECTPACKAGE:
      case item_types.IT_CASH:
      case item_types.IT_MAX:
      default:
        return false;
    }
  }

  public isTwoHanded(): boolean {
    if (!this.isEquip()) return false;
    if (this.Loc !== equip_pos.EQP_ARMS) return false;
    if (this.Subtype === undefined || typeof this.Subtype === "string") {
      throw new Error("Item subtype was not parsed correctly.");
    }

    switch (this.Subtype) {
      case weapon_type.W_BOW:
      case weapon_type.W_KATAR:
      case weapon_type.W_BOOK:
      case weapon_type.W_REVOLVER:
      case weapon_type.W_RIFLE:
      case weapon_type.W_GATLING:
      case weapon_type.W_SHOTGUN:
      case weapon_type.W_GRENADE:
      case weapon_type.W_HUUMA:
      case weapon_type.W_WHIP:
      case weapon_type.W_WHIP:
      case weapon_type.W_DAGGER:
      case weapon_type.W_1HSWORD:
      case weapon_type.W_1HAXE:
      case weapon_type.W_1HSPEAR:
      case weapon_type.W_2HSWORD:
      case weapon_type.W_2HAXE:
      case weapon_type.W_2HSPEAR:
      case weapon_type.W_2HSTAFF:
      case weapon_type.W_2HSWORD:
        return true;
      case weapon_type.W_FIST:
      case weapon_type.W_MACE:
      case weapon_type.W_STAFF:
      case weapon_type.W_BOW:
      case weapon_type.W_KATAR:
      case weapon_type.W_BOOK:
      case weapon_type.W_REVOLVER:
      case weapon_type.W_RIFLE:
      case weapon_type.W_GATLING:
      case weapon_type.W_SHOTGUN:
      case weapon_type.W_GRENADE:
      case weapon_type.W_HUUMA:
      case weapon_type.W_WHIP:
      case weapon_type.W_WHIP:
      default:
        return false;
    }
  }

  public equip(loc: equip_pos): void {
    if (!this.isEquip()) {
      return;
    }

    this.EquipPosWhenEquipped = loc;
  }

  public unequip(): void {
    if (!this.isEquip()) {
      return;
    }

    this.EquipPosWhenEquipped = equip_pos.EQP_NONE;
  }

  public getLoc(): equip_pos {
    return tryParseLoc(this.Loc);
  }

  public getEquipPosIfEquipped(): equip_pos {
    if (!this.isEquip()) {
      return equip_pos.EQP_NONE;
    }

    //TODO: check pc_item_equippoint
    // if (
    //   this.Subtype !== undefined &&
    //   (this.Subtype === weapon_type.W_DAGGER ||
    //     this.Subtype === weapon_type.W_1HSWORD ||
    //     this.Subtype === weapon_type.W_1HAXE)
    // ) {

    // }

    return this.EquipPosWhenEquipped ?? equip_pos.EQP_NONE;
  }

  public isEquipped(): boolean {
    return this.getEquipPosIfEquipped() !== equip_pos.EQP_NONE;
  }

  public toPersistentItem(): item_persistent {
    return {
      id: this.Id,
      nameid: this.nameid,
      guid: this.guid,
      amount: this.Amount ?? 1,
      equip: this.EquipPosWhenEquipped ?? equip_pos.EQP_NONE,
      identify: "",
      refine: this.RefineLevel ?? 0,
      grade: "",
      attribute: "",
      card: this.Cards ?? [],
      expire_time: 0,
      favorite: "",
      bound: "",
      unique_id: 0,
      option: this.Options ?? [],
    };
  }
}

// from item struct in mmo.h
export class item_persistent {
  id: number;
  nameid: number;
  guid: string;
  amount: number;
  equip: equip_pos;
  identify: string;
  refine: number;
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
    this.guid = "";
    this.amount = 0;
    this.equip = equip_pos.EQP_NONE;
    this.identify = "";
    this.refine = 0;
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
  EQP_SHADOW_ACC_L = 0x200000, // 2097152,

  // Combined values
  EQP_WEAPON = 0x000002, // EQP_HAND_R
  EQP_SHIELD = 0x000020, // EQP_HAND_L
  EQP_ARMS = 0x000002 | 0x000020, // EQP_HAND_R | EQP_HAND_L
  EQP_HELM = 0x000001 | 0x000200 | 0x000100, // EQP_HEAD_LOW | EQP_HEAD_MID | EQP_HEAD_TOP
  EQP_ACC = 0x000008 | 0x000080, // EQP_ACC_L | EQP_ACC_R
  EQP_COSTUME = 0x000400 | 0x000800 | 0x001000 | 0x002000, // Costume items combined
  EQP_SHADOW_ACC = 0x100000 | 0x200000, // EQP_SHADOW_ACC_R | EQP_SHADOW_ACC_L
  EQP_SHADOW_ARMS = 0x020000 | 0x040000, // EQP_SHADOW_WEAPON | EQP_SHADOW_SHIELD
}

export function tryParseLoc(
  value: string | number | (string | number)[] | undefined
): equip_pos {
  if (value === undefined) {
    return equip_pos.EQP_NONE;
  }

  if (Array.isArray(value)) {
    const newVal = value.reduce(
      (acc: equip_pos, val) => acc | tryParseLoc(val),
      equip_pos.EQP_NONE
    );
    return newVal;
  }

  if (typeof value === "string") {
    return equipPosStringToEnum(value) ?? equip_pos.EQP_NONE;
  } else {
    return value;
  }
}

export function equipPosStringToEnum(equipPosString: string): equip_pos | null {
  if (
    typeof equipPosString === "string" &&
    isNaN(Number(equipPosString)) && // Ensures that the string is not a numeric value
    equipPosString in equip_pos
  ) {
    return equip_pos[equipPosString as keyof typeof equip_pos];
  }

  return equip_pos.EQP_NONE;
}

export enum item_types {
  IT_HEALING = 0,
  IT_UNKNOWN, //1
  IT_USABLE, //2
  IT_ETC, //3
  IT_WEAPON, //4
  IT_ARMOR, //5
  IT_CARD, //6
  IT_PETEGG, //7
  IT_PETARMOR, //8
  IT_UNKNOWN2, //9
  IT_AMMO, //10
  IT_DELAYCONSUME, //11
  IT_SELECTPACKAGE, //12
  IT_CASH = 18,
  IT_MAX,
}

function tryParseItemType(value: string | item_types): item_types {
  if (typeof value === "string") {
    return itemTypeStringToEnum(value) ?? item_types.IT_UNKNOWN;
  } else {
    return value;
  }
}

export function itemTypeStringToEnum(
  itemTypeString: string
): item_types | null {
  if (
    typeof itemTypeString === "string" &&
    isNaN(Number(itemTypeString)) && // Ensures that the string is not a numeric value
    itemTypeString in item_types
  ) {
    return item_types[itemTypeString as keyof typeof item_types];
  } else {
    return null;
  }
}

function generateGUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

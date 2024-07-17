// types.ts
export interface Job {
  All?: boolean;
  Novice?: boolean;
  Swordsman?: boolean;
  Magician?: boolean;
  Archer?: boolean;
  Acolyte?: boolean;
  Merchant?: boolean;
  Thief?: boolean;
  Knight?: boolean;
  Priest?: boolean;
  Wizard?: boolean;
  Blacksmith?: boolean;
  Hunter?: boolean;
  Assassin?: boolean;
  Crusader?: boolean;
  Monk?: boolean;
  Sage?: boolean;
  Rogue?: boolean;
  Alchemist?: boolean;
  Bard?: boolean;
  Taekwon?: boolean;
  Star_Gladiator?: boolean;
  Soul_Linker?: boolean;
  Gunslinger?: boolean;
  Ninja?: boolean;
  Gangsi?: boolean;
  Death_Knight?: boolean;
  Dark_Collector?: boolean;
  Kagerou?: boolean;
  Rebellion?: boolean;
}

export interface Trade {
  override?: number;
  nodrop?: boolean;
  notrade?: boolean;
  nostorage?: boolean;
  nocart?: boolean;
  noselltonpc?: boolean;
  nomail?: boolean;
  noauction?: boolean;
  nogstorage?: boolean;
  partneroverride?: boolean;
}

export interface Nouse {
  override?: number;
  sitting?: boolean;
}

export interface Item {
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
  Job?: Job;
  Upper?: string | number | string[];
  Gender?: string;
  Loc?: string | number | string[];
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
}

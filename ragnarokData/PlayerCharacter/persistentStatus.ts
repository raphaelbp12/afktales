import { equip_pos, MAX_INVENTORY } from "../constants";

export class persistent_status {
  hp: number;
  max_hp: number;
  sp: number;
  max_sp: number;

  str: number;
  agi: number;
  vit: number;
  int_: number;
  dex: number;
  luk: number;

  inventory: item[];

  constructor() {
    this.hp = 0;
    this.max_hp = 0;
    this.sp = 0;
    this.max_sp = 0;

    this.str = 0;
    this.agi = 0;
    this.vit = 0;
    this.int_ = 0;
    this.dex = 0;
    this.luk = 0;

    this.inventory = Array.from({ length: MAX_INVENTORY }, () => new item());
  }
}

class item {
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

type item_option = {
  index: number;
  value: number;
  param: number;
};

// Function to serialize the class to a string
export function serializePersistentStatus(status: persistent_status): string {
  return JSON.stringify(status);
}

// Function to deserialize the string back to a class instance
export function deserializePersistentStatus(data: string): persistent_status {
  const parsedData = JSON.parse(data);

  const status = new persistent_status();
  status.hp = parsedData.hp;
  status.max_hp = parsedData.max_hp;
  status.sp = parsedData.sp;
  status.max_sp = parsedData.max_sp;

  status.str = parsedData.str;
  status.agi = parsedData.agi;
  status.vit = parsedData.vit;
  status.int_ = parsedData.int_;
  status.dex = parsedData.dex;
  status.luk = parsedData.luk;

  status.inventory = parsedData.inventory.map((itemData: any) => {
    const itm = new item();
    itm.id = itemData.id;
    itm.nameid = itemData.nameid;
    itm.amount = itemData.amount;
    itm.equip = itemData.equip;
    itm.identify = itemData.identify;
    itm.refine = itemData.refine;
    itm.grade = itemData.grade;
    itm.attribute = itemData.attribute;
    itm.card = itemData.card;
    itm.expire_time = itemData.expire_time;
    itm.favorite = itemData.favorite;
    itm.bound = itemData.bound;
    itm.unique_id = itemData.unique_id;
    itm.option = itemData.option.map((opt: item_option) => ({
      index: opt.index,
      value: opt.value,
      param: opt.param,
    }));
    return itm;
  });

  return status;
}

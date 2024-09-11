import { MAX_INVENTORY } from "../constants";
import { item_persistent, item_option } from "../ItemDB/types";

export class persistent_status {
  id: number;
  name: string;
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

  inventory: item_persistent[];

  constructor() {
    this.id = 0;
    this.name = "";
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

    this.inventory = [];
  }
}

// Function to deserialize the string back to a class instance
export function deserializePersistentStatus(
  parsedData: any
): persistent_status {
  const status = new persistent_status();
  status.id = parsedData.id;
  status.name = parsedData.name;
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

  status.inventory = parsedData.inventory;

  return status;
}

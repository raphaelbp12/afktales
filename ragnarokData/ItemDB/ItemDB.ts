import { parseConfig } from "../parserItemConfig";
import { item_db } from "./item_db";
import { ItemData } from "./types";

export class ItemDB {
  private itemList: ItemData[];
  private itemsDict: {
    [key: number]: ItemData;
  };
  private itemsDictAegisNameKey: Record<string, number>;
  constructor() {
    const configString = item_db;
    const parsedData = parseConfig(configString);

    this.itemList = parsedData.itemsList;
    this.itemsDict = parsedData.itemsDict;
    this.itemsDictAegisNameKey = parsedData.itemsDictAegisNameKey;
  }

  public getItemByNameid(nameid: number): ItemData {
    const item = this.itemsDict[nameid];
    return item.copy();
  }

  public getFilteredItems(filter: (item: ItemData) => boolean): ItemData[] {
    return this.itemList.filter(filter);
  }
}

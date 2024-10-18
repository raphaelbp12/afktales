import { parse } from "@/configParser";
import { parseConfigFromConf } from "../parserItemConfig";
import { ItemData } from "./types";
// Import the generated parser

export class ItemDB {
  public itemList: ItemData[];
  public itemsDict: { [key: number]: ItemData };
  public itemsDictAegisNameKey: Record<string, number>;
  public emptyItem: ItemData = new ItemData();

  // Static variables for singleton pattern
  private static instance: ItemDB | null = null;
  private static instancePromise: Promise<ItemDB> | null = null;

  // Make the constructor private to prevent direct instantiation
  private constructor() {
    console.log("ItemDB constructor");
    this.itemList = [];
    this.itemsDict = {};
    this.itemsDictAegisNameKey = {};
  }

  // Static async factory method to create an instance
  public static async create(overrideConfig?: string): Promise<ItemDB> {
    if (overrideConfig) {
      // If overrideConfig is provided, create a new instance without affecting the singleton
      console.log("ItemDB.create(): Creating new instance with overrideConfig");
      const itemDB = new ItemDB();

      const configString = overrideConfig;

      const configObject = parse(configString) as any;
      const parsedData = parseConfigFromConf(configObject);

      itemDB.itemList = parsedData.itemsList;
      itemDB.itemsDict = parsedData.itemsDict;
      itemDB.itemsDictAegisNameKey = parsedData.itemsDictAegisNameKey;

      return itemDB;
    }

    if (this.instance) {
      console.log("ItemDB.create(): Returning existing instance");
      return this.instance;
    }

    if (this.instancePromise) {
      console.log("ItemDB.create(): Returning existing promise");
      return this.instancePromise;
    }

    console.log("ItemDB.create(): Initializing new singleton instance");

    this.instancePromise = (async () => {
      const itemDB = new ItemDB();
      let configString = "";

      const response = await fetch("/item_db.conf");
      configString = await response.text();

      const configObject = parse(configString) as any;
      const parsedData = parseConfigFromConf(configObject);

      itemDB.itemList = parsedData.itemsList;
      itemDB.itemsDict = parsedData.itemsDict;
      itemDB.itemsDictAegisNameKey = parsedData.itemsDictAegisNameKey;

      // Cache the instance
      this.instance = itemDB;
      this.instancePromise = null; // Clear the promise after initialization
      return itemDB;
    })();

    return this.instancePromise;
  }

  public getItemByNameid(nameid: number): ItemData {
    if (nameid === 0) {
      return this.emptyItem;
    }
    const item = this.itemsDict[nameid];
    return item.copy();
  }

  public getFilteredItems(filter: (item: ItemData) => boolean): ItemData[] {
    return this.itemList.filter(filter);
  }
}

export async function parseConfig(configString: string): Promise<{
  itemsList: ItemData[];
  itemsDict: { [key: number]: ItemData };
  itemsDictAegisNameKey: Record<string, number>;
}> {
  const increasedStr = `item_db: (
  ${configString}
)`;
  const itemDB = await ItemDB.create(increasedStr);

  return {
    itemsList: itemDB.itemList,
    itemsDict: itemDB.itemsDict,
    itemsDictAegisNameKey: itemDB.itemsDictAegisNameKey,
  };
}

import { ItemData } from "../ItemDB/types";

export class Inventory {
  private items: ItemData[];

  constructor(length: number) {
    this.items = Array.from({ length }, () => new ItemData());
  }

  public getItems(): ItemData[] {
    return this.items;
  }

  public searchByNameId(nameid: number): ItemData | undefined {
    const item = this.items.find((item) => item.nameid === nameid);
    return item;
  }

  public getNextEmptySlot(): number {
    return this.items.findIndex((item) => item.nameid === 0);
  }

  public getItemInSlot(slot: number): ItemData | undefined {
    try {
      const item = this.items[slot];
      if (!item || item.nameid === 0) {
        return undefined;
      }
      return item;
    } catch (error) {
      console.error(`Error while getting item in slot ${slot}: ${error}`);
      return undefined;
    }
  }

  public addItem(item: ItemData, amount: number): number {
    const existingItem = this.searchByNameId(item.nameid);
    if (existingItem) {
      if (!existingItem.Amount) {
        existingItem.Amount = 0;
      }
      existingItem.Amount += amount;
      return this.items.findIndex((i) => i.nameid === item.nameid);
    }

    const emptySlot = this.getNextEmptySlot();
    if (emptySlot === -1) {
      throw new Error("Inventory is full");
    }

    this.items[emptySlot] = item;
    this.items[emptySlot].Amount = amount;
    return emptySlot;
  }
}

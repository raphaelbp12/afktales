// Inventory.ts
import { ItemDB } from "../ItemDB/ItemDB";
import { item_persistent, ItemData } from "../ItemDB/types";

export class Inventory {
  private items: ItemData[];

  constructor(length: number, persistentItems?: item_persistent[]) {
    this.items = Array.from({ length }, () => new ItemData());

    if (persistentItems) {
      const itemDB = new ItemDB();
      persistentItems.forEach((itemPersistent) => {
        const item = itemDB.getItemByNameid(itemPersistent.nameid);
        const newItem = new ItemData(item, itemPersistent);
        const emptySlot = this.getNextEmptySlot();
        if (emptySlot === -1) {
          throw new Error("Inventory is full");
        }
        this.items[emptySlot] = newItem;
      });
    }
  }

  public getCurrentLength(): number {
    return this.items.filter((item) => item.nameid !== 0).length;
  }

  public getMaxLength(): number {
    return this.items.length;
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
    const itemCopy = item.copy();
    if (!itemCopy.isEquip()) {
      const existingItem = this.searchByNameId(itemCopy.nameid);
      if (existingItem) {
        if (!existingItem.Amount) {
          existingItem.Amount = 0;
        }
        existingItem.Amount += amount;
        return this.items.findIndex((i) => i.nameid === itemCopy.nameid);
      }
    }

    const emptySlot = this.getNextEmptySlot();
    if (emptySlot === -1) {
      throw new Error("Inventory is full");
    }

    this.items[emptySlot] = itemCopy;
    this.items[emptySlot].Amount = amount;
    return emptySlot;
  }

  public removeItemInSlot(slot: number): void {
    if (slot >= 0 && slot < this.items.length) {
      this.items[slot] = new ItemData(); // Reset the item in the slot
    } else {
      throw new Error(`Invalid slot: ${slot}`);
    }
  }

  public removeAmountFromItemInSlot(slot: number, amount: number): void {
    if (slot >= 0 && slot < this.items.length) {
      const item = this.items[slot];
      if (item && item.Amount) {
        item.Amount -= amount;
        if (item.Amount <= 0) {
          this.removeItemInSlot(slot);
        }
      }
    } else {
      throw new Error(`Invalid slot: ${slot}`);
    }
  }

  public moveItemTo(slotIndex: number, targetInventory: Inventory): void {
    const item = this.getItemInSlot(slotIndex);
    if (!item) {
      throw new Error(`No item found in slot ${slotIndex}`);
    }

    // Add item to target inventory
    targetInventory.addItem(item, item.Amount ?? 1);

    // Remove item from current inventory
    this.removeItemInSlot(slotIndex);
  }

  // Serialize the inventory by converting each item to a persistent form
  public serialize(): string {
    const serializedItems = this.items
      .filter((item) => item.nameid !== 0)
      .map((item) => item.toPersistentItem());
    return JSON.stringify({ items: serializedItems });
  }

  // Deserialize the inventory from persistent items
  public static deserialize(
    invLenght: number,
    serializedData: string
  ): Inventory {
    const parsedData = JSON.parse(serializedData);
    const inventory = new Inventory(invLenght, parsedData.items);

    return inventory;
  }
}

// Inventory.ts
import { ItemDB } from "../ItemDB/ItemDB";
import {
  equip_pos,
  item_persistent,
  item_types,
  ItemData,
} from "../ItemDB/types";

export class Inventory {
  public itemDB!: ItemDB;
  public items: ItemData[];

  private constructor() {
    this.items = [];
  }

  public static async create(
    length: number,
    persistentItems?: item_persistent[]
  ): Promise<Inventory> {
    const inventory = new Inventory();
    inventory.items = Array.from({ length }, () => new ItemData());
    inventory.itemDB = await ItemDB.create();
    if (persistentItems) {
      persistentItems.forEach((itemPersistent) => {
        const item = inventory.itemDB.getItemByNameid(itemPersistent.nameid);
        item.addItemDB(inventory.itemDB);
        const newItem = new ItemData(item, itemPersistent);
        const emptySlot = inventory.getNextEmptySlot();
        if (emptySlot === -1) {
          throw new Error("Inventory is full");
        }
        inventory.items[emptySlot] = newItem;
      });
    }
    return inventory;
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

  public searchByGuid(guid: string): ItemData | undefined {
    const item = this.items.find((item) => item.guid === guid);
    return item;
  }

  public getNextEmptySlot(): number {
    return this.items.findIndex((item) => item.nameid === 0);
  }

  public getSlotByGuid(guid: string): number {
    return this.items.findIndex((item) => item.guid === guid);
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

  public getEquippedItems(): { invSlot: number; pos: number }[] {
    const items: { invSlot: number; pos: number }[] = [];
    this.items.forEach((item, index) => {
      if (item.EquipPosWhenEquipped === equip_pos.EQP_NONE) return;

      items.push({ invSlot: index, pos: item.EquipPosWhenEquipped! });
    });

    return items;
  }

  public getCardsInEquip(equipGuid: string): ItemData[] {
    const item = this.searchByGuid(equipGuid);
    if (!item) {
      return [];
    }
    const cardIds = item.Cards ?? [];
    return (
      cardIds?.map((cardId) => {
        const card = this.itemDB.getItemByNameid(cardId);
        return card;
      }) ?? []
    );
  }

  // pc_can_insert_card
  public canInsertCard(cardInvSlot: number): boolean {
    const cardItem = this.getItemInSlot(cardInvSlot);
    if (!cardItem) return false;
    if (!cardItem.Amount || cardItem.Amount <= 0) return false;
    if (cardItem.Type !== item_types.IT_CARD) return false;
    return true;
  }

  // pc_can_insert_card_into
  public canInsertCardInto(cardInvSlot: number, equipInvSlot: number): boolean {
    if (!this.canInsertCard(cardInvSlot)) return false;

    const cardItem = this.getItemInSlot(cardInvSlot);
    const equipItem = this.getItemInSlot(equipInvSlot);

    if (!cardItem) return false;
    if (!equipItem) return false;

    if (
      equipItem.Type !== item_types.IT_WEAPON &&
      equipItem.Type !== item_types.IT_ARMOR
    )
      return false;
    if (((equipItem.Loc as equip_pos) & (cardItem.Loc as equip_pos)) === 0)
      return false;
    if (
      equipItem.Type === item_types.IT_WEAPON &&
      cardItem.Loc === equip_pos.EQP_SHIELD
    )
      return false;

    const cardSlots = equipItem.Cards?.filter((card) => card === 0).length;
    if (!cardSlots || cardSlots <= 0) return false;

    return true;
  }

  public filterEquipsToReceiveCard(cardSlot: number): ItemData[] {
    return this.items.filter((_, itemSlot) => {
      if (!this.canInsertCardInto(cardSlot, itemSlot)) return false;
      return true;
    });
  }

  public setRefineLevelToItem(guid: string, refineLevel: number): boolean {
    const item = this.searchByGuid(guid);
    if (!item) return false;
    if (!item.GetRefine()) return false;
    item.setRefineLevel(refineLevel);
    return true;
  }

  public addItem(item: ItemData, amount: number): number {
    const itemCopy = item.copy();
    itemCopy.addItemDB(this.itemDB);
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
    if (!itemCopy.isEquip()) {
      this.items[emptySlot].Amount = amount;
    } else {
      this.items[emptySlot].Amount = 1;
      if (amount - 1 > 0) {
        this.addItem(itemCopy, amount - 1);
      }
    }
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
    item.addItemDB(this.itemDB);

    // Add item to target inventory
    targetInventory.addItem(item, item.Amount ?? 1);

    // Remove item from current inventory
    this.removeItemInSlot(slotIndex);
  }

  // Serialize the inventory by converting each item to a persistent form
  public prepareToSerialize(): item_persistent[] {
    const serializedItems = this.items
      .filter((item) => item.nameid !== 0)
      .map((item) => item.toPersistentItem());
    return serializedItems;
  }

  // Deserialize the inventory from persistent items
  public static async deserialize(
    invLenght: number,
    serializedData: item_persistent[]
  ): Promise<Inventory> {
    const inventory = await Inventory.create(invLenght, serializedData);

    return inventory;
  }
}

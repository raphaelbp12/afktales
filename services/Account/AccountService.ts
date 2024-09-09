// AccountService.ts
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";
import { Account } from "@/ragnarokData/Account/Account";
import { ItemData } from "@/ragnarokData/ItemDB/types";

export class AccountService {
  private account: Account;

  constructor() {
    this.account = new Account();
  }

  // Fetch all characters
  fetchCharacters(): Promise<PlayerAttributes[]> {
    try {
      const characters = this.account.getCharacters();
      return Promise.resolve(characters);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Fetch a single character by index
  fetchCharacter(index: number): Promise<PlayerAttributes> {
    try {
      const character = this.account.getCharacter(index);
      return Promise.resolve(character);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Create a new character
  createCharacter(name: string): Promise<PlayerAttributes> {
    try {
      const newCharacter = this.account.newCharacter(name);
      return Promise.resolve(newCharacter);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Remove a character by index
  deleteCharacter(index: number): Promise<void> {
    try {
      this.account.removeCharacter(index);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Update a character's attribute
  updateCharacter(
    index: number,
    key: keyof PlayerAttributes,
    value: any
  ): Promise<PlayerAttributes> {
    try {
      const character = this.account.getCharacter(index);
      character.updateAttribute(key, value);
      return Promise.resolve(character);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Fetch the storage inventory
  fetchStorage(): Promise<Inventory> {
    try {
      const storage = this.account.getStorage();
      return Promise.resolve(storage);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Add an item to the storage inventory
  addItemToStorage(item: ItemData, amount: number = 1): void {
    this.account.addItem(item, amount);
  }

  // Move an item from storage to a player's inventory
  moveItemFromStorageToPlayer(
    slotIndex: number,
    playerIndex: number
  ): Promise<void> {
    try {
      const player = this.account.getCharacter(playerIndex);
      const storage = this.account.getStorage();
      storage.moveItemTo(slotIndex, player.inventory);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  moveItemFromPlayerToStorage(
    playerIndex: number,
    slotIndex: number
  ): Promise<void> {
    try {
      const player = this.account.getCharacter(playerIndex);
      const storage = this.account.getStorage();
      player.inventory.moveItemTo(slotIndex, storage);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  addItemToPlayerInventory(
    playerIndex: number,
    item: ItemData,
    amount: number = 1
  ): Promise<void> {
    try {
      const player = this.account.getCharacter(playerIndex);
      player.inventory.addItem(item, amount);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  equipItemInPlayerInventory(
    playerIndex: number,
    inventorySlot: number
  ): Promise<void> {
    try {
      const player = this.account.getCharacter(playerIndex);
      player.equipItem(inventorySlot); // Call the equip method
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Method to unequip an item
  unequipItemFromPlayer(
    playerIndex: number,
    inventorySlot: number
  ): Promise<void> {
    try {
      const player = this.account.getCharacter(playerIndex);
      player.unequipItem(inventorySlot); // Call the unequip method
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

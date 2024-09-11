// Account.ts
import { Inventory } from "../PlayerCharacter/Inventory";
import {
  deserializePersistentStatus,
  persistent_status,
} from "../PlayerCharacter/persistentStatus";
import { PlayerAttributes } from "../PlayerCharacter/PlayerAttributes";
import { ItemData } from "@/ragnarokData/ItemDB/types";

const MAX_STORAGE = 1000;

export class Account {
  private characters: PlayerAttributes[];
  private storage: Inventory;

  constructor() {
    this.characters = [];
    this.storage = new Inventory(MAX_STORAGE);
  }

  public getStorage(): Inventory {
    return this.storage;
  }

  public getCharacter(index: number): PlayerAttributes {
    if (index < 0 || index >= this.characters.length) {
      throw new Error(`Character index ${index} out of bounds`);
    }
    return this.characters[index];
  }

  public getCharacters(): PlayerAttributes[] {
    return this.characters;
  }

  public newCharacter(name: string): PlayerAttributes {
    console.log("Creating new character", name);
    const newCharacter = new PlayerAttributes(name, this.characters.length, {});
    this.characters.push(newCharacter);
    return newCharacter;
  }

  public removeCharacter(index: number): void {
    console.log("Removing character", index);
    if (index < 0 || index >= this.characters.length) {
      throw new Error(`Character index ${index} out of bounds`);
    }
    this.characters.splice(index, 1);
  }

  public addItem(item: ItemData, amount: number = 1): void {
    this.storage.addItem(item, amount);
  }

  // Serialize the account by serializing the characters and the inventory
  public serialize(): string {
    const serializedCharacters = this.characters.map((char) =>
      char.toPersistentStatus()
    );
    const serializedStorage = this.storage.prepareToSerialize();

    return JSON.stringify({
      characters: serializedCharacters,
      storage: serializedStorage,
    });
  }

  // Deserialize the account by reconstructing characters and the inventory
  public static deserialize(serializedData: string): Account {
    const parsedData = JSON.parse(serializedData);
    const account = new Account();
    const persistent_status_characters: persistent_status[] =
      parsedData.characters.map((charData: string) =>
        deserializePersistentStatus(charData)
      );
    account.characters = persistent_status_characters.map((status) => {
      const char = PlayerAttributes.fromPersistentStatus(
        status,
        status.name,
        status.id
      );
      return char;
    });
    account.storage = Inventory.deserialize(MAX_STORAGE, parsedData.storage);
    return account;
  }
}

// Account.ts
import { ItemDB } from "../ItemDB/ItemDB";
import { Inventory } from "../PlayerCharacter/Inventory";
import {
  deserializePersistentStatus,
  persistent_status,
} from "../PlayerCharacter/persistentStatus";
import { PlayerAttributes } from "../PlayerCharacter/PlayerAttributes";
import { ItemData } from "@/ragnarokData/ItemDB/types";

const MAX_STORAGE = 1000;

export class Account {
  public characters: PlayerAttributes[];
  public storage!: Inventory;
  public itemDB!: ItemDB;

  private constructor() {
    this.characters = [];
  }

  public static async create(itemDB: ItemDB): Promise<Account> {
    const account = new Account();
    account.itemDB = itemDB;
    account.storage = await Inventory.create(account.itemDB, MAX_STORAGE);
    return account;
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

  public async newCharacter(name: string): Promise<PlayerAttributes> {
    console.log("Creating new character", name);
    const newCharacter = await PlayerAttributes.create(
      this.itemDB,
      name,
      this.characters.length,
      {}
    );
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
  public static async deserialize(
    itemDB: ItemDB,
    serializedData: string
  ): Promise<Account> {
    let parsedData: any = {};

    try {
      parsedData = JSON.parse(serializedData);
    } catch (error) {
      console.error("Error parsing account data", error);
      parsedData = { characters: [], storage: [] };
    }
    const account = await Account.create(itemDB);
    const persistent_status_characters: persistent_status[] =
      parsedData.characters.map((charData: string) =>
        deserializePersistentStatus(charData)
      );

    const newCharacters: PlayerAttributes[] = [];
    for (const status of persistent_status_characters) {
      const char = await PlayerAttributes.fromPersistentStatus(
        itemDB,
        status,
        status.name,
        status.id
      );
      newCharacters.push(char);
    }
    account.characters = newCharacters;

    account.storage = await Inventory.deserialize(
      itemDB,
      MAX_STORAGE,
      parsedData.storage
    );
    return account;
  }
}

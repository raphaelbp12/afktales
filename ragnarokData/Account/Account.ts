// Account.ts
import { Inventory } from "../PlayerCharacter/Inventory";
import { PlayerAttributes } from "../PlayerCharacter/PlayerAttributes";
import { ItemData } from "@/ragnarokData/ItemDB/types";

export class Account {
  private characters: PlayerAttributes[];
  private storage: Inventory;

  constructor() {
    this.characters = [];
    this.storage = new Inventory(1000);
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
}

import { Inventory } from "../PlayerCharacter/Inventory";
import { PlayerAttributes } from "../PlayerCharacter/PlayerAttributes";

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
        const newCharacter = new PlayerAttributes(name);
        this.characters.push(newCharacter);
        return newCharacter;
    }

    public removeCharacter(index: number): void {
        if (index < 0 || index >= this.characters.length) {
            throw new Error(`Character index ${index} out of bounds`);
        }
        this.characters.splice(index, 1);
    }
}
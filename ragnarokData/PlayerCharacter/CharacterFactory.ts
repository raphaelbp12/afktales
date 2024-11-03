// PlayerAttributesFactory.ts
import { PlayerAttributes } from "./PlayerAttributes";
import { Databases } from "../Database/Databases";
import { Bonuses } from "../types";
import { persistent_status } from "./persistentStatus";

export class CharacterFactory {
  private databases: Databases;

  private constructor(databases: Databases) {
    this.databases = databases;
  }

  public static create(databases: Databases): CharacterFactory {
    return new CharacterFactory(databases);
  }

  public async createPlayerAttributes(
    name?: string,
    id?: number,
    bonuses?: Bonuses
  ): Promise<PlayerAttributes> {
    return await PlayerAttributes.create(this.databases, name, id, bonuses);
  }

  public async createPlayerFromStatus(
    status: persistent_status,
    name: string,
    id: number
  ): Promise<PlayerAttributes> {
    return await PlayerAttributes.fromPersistentStatus(
      this.databases,
      status,
      name,
      id
    );
  }
}

import { equip_pos } from "../ItemDB/types";
import {
  persistent_status,
  serializePersistentStatus,
  deserializePersistentStatus,
} from "./persistentStatus";

describe("PersistentStatus Serialization and Deserialization", () => {
  it("should serialize a persistent_status instance to a string", () => {
    const status = new persistent_status();
    status.hp = 150;
    status.max_hp = 200;
    status.sp = 75;
    status.max_sp = 100;
    status.str = 10;
    status.agi = 15;
    status.vit = 20;
    status.int_ = 25;
    status.dex = 30;
    status.luk = 35;

    const serialized = serializePersistentStatus(status);
    expect(typeof serialized).toBe("string");
    expect(serialized).toContain('"hp":150');
    expect(serialized).toContain('"max_hp":200');
    expect(serialized).toContain('"inventory":""');
  });

  it("should deserialize a string back to a persistent_status instance", () => {
    const serialized = `{
      "hp":150,
      "max_hp":200,
      "sp":75,
      "max_sp":100,
      "str":10,
      "agi":15,
      "vit":20,
      "int_":25,
      "dex":30,
      "luk":35,
      "inventory":""
    }`;

    const status = deserializePersistentStatus(serialized);

    expect(status.hp).toBe(150);
    expect(status.max_hp).toBe(200);
    expect(status.inventory.length).toBe(0);
  });

  it("should correctly serialize and deserialize the persistent_status instance", () => {
    const originalStatus = new persistent_status();
    originalStatus.hp = 200;
    originalStatus.sp = 50;

    const serialized = serializePersistentStatus(originalStatus);
    const deserializedStatus = deserializePersistentStatus(serialized);

    expect(deserializedStatus.hp).toBe(200);
    expect(deserializedStatus.sp).toBe(50);
  });
});

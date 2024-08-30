import { equip_pos } from "../constants";
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

    status.inventory[0].id = 1;
    status.inventory[0].nameid = 500;
    status.inventory[0].amount = 2;
    status.inventory[0].equip = equip_pos.EQP_ARMOR;
    status.inventory[0].identify = "Identified";
    status.inventory[0].refine = "Refined";
    status.inventory[0].grade = "Grade A";
    status.inventory[0].attribute = "Fire";
    status.inventory[0].card = [100, 101, 102, 103];
    status.inventory[0].expire_time = 1234567890;
    status.inventory[0].favorite = "Favorite";
    status.inventory[0].bound = "Bound";
    status.inventory[0].unique_id = 9999;
    status.inventory[0].option = [{ index: 1, value: 10, param: 5 }];

    const serialized = serializePersistentStatus(status);
    expect(typeof serialized).toBe("string");
    expect(serialized).toContain('"hp":150');
    expect(serialized).toContain('"max_hp":200');
    expect(serialized).toContain('"inventory":[{"id":1');
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
      "inventory":[{
        "id":1,
        "nameid":500,
        "amount":2,
        "equip":16,
        "identify":"Identified",
        "refine":"Refined",
        "grade":"Grade A",
        "attribute":"Fire",
        "card":[100,101,102,103],
        "expire_time":1234567890,
        "favorite":"Favorite",
        "bound":"Bound",
        "unique_id":9999,
        "option":[{"index":1,"value":10,"param":5}]
      }]
    }`;

    const status = deserializePersistentStatus(serialized);

    expect(status.hp).toBe(150);
    expect(status.max_hp).toBe(200);
    expect(status.inventory.length).toBeGreaterThan(0);
    expect(status.inventory[0].id).toBe(1);
    expect(status.inventory[0].nameid).toBe(500);
    expect(status.inventory[0].equip).toBe(equip_pos.EQP_ARMOR);
    expect(status.inventory[0].identify).toBe("Identified");
    expect(status.inventory[0].option.length).toBe(1);
    expect(status.inventory[0].option[0].index).toBe(1);
    expect(status.inventory[0].option[0].value).toBe(10);
  });

  it("should correctly serialize and deserialize the persistent_status instance", () => {
    const originalStatus = new persistent_status();
    originalStatus.hp = 200;
    originalStatus.sp = 50;
    originalStatus.inventory[0].id = 1;
    originalStatus.inventory[0].nameid = 123;

    const serialized = serializePersistentStatus(originalStatus);
    const deserializedStatus = deserializePersistentStatus(serialized);

    expect(deserializedStatus.hp).toBe(200);
    expect(deserializedStatus.sp).toBe(50);
    expect(deserializedStatus.inventory[0].id).toBe(1);
    expect(deserializedStatus.inventory[0].nameid).toBe(123);
  });
});

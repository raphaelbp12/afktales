import { Account } from "./Account";
import { Inventory } from "../PlayerCharacter/Inventory";
import { equip_pos } from "../ItemDB/types";
import fs from "fs";

describe("Account", () => {
  let account: Account;

  beforeAll(async () => {
    global.fetch = jest.fn(() => {
      const configContent = fs.readFileSync(
        "./public/configs/item_db.conf",
        "utf8"
      );
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({}),
        text: async () => configContent,
        // Include other properties if needed
      } as Response);
    });
  });

  beforeEach(async () => {
    account = await Account.create();
  });

  it("should initialize with an empty characters array and a storage with capacity 1000", () => {
    expect(account.getCharacters()).toEqual([]);
    expect(account.getStorage()).toBeInstanceOf(Inventory);
    expect(account.getStorage().getItems().length).toBe(1000);
  });

  describe("getCharacter", () => {
    it("should return the correct character by index", async () => {
      const char = await account.newCharacter("TestChar");
      expect(account.getCharacter(0)).toBe(char);
    });

    it("should throw an error if index is out of bounds", () => {
      expect(() => account.getCharacter(0)).toThrow(
        "Character index 0 out of bounds"
      );
      expect(() => account.getCharacter(-1)).toThrow(
        "Character index -1 out of bounds"
      );
    });
  });

  describe("getCharacters", () => {
    it("should return an empty array if no characters have been added", () => {
      expect(account.getCharacters()).toEqual([]);
    });

    it("should return all characters added", async () => {
      const char1 = await account.newCharacter("TestChar1");
      const char2 = await account.newCharacter("TestChar2");
      expect(account.getCharacters()).toEqual([char1, char2]);
    });
  });

  describe("newCharacter", () => {
    it("should add a new character to the characters array", async () => {
      const char = await account.newCharacter("NewChar");
      expect(account.getCharacters()).toContain(char);
    });

    it("should allow adding a character with an empty name", async () => {
      const char = await account.newCharacter("");
      expect(account.getCharacters()).toContain(char);
    });

    it("should allow adding a character with a long name", async () => {
      const longName = "a".repeat(1000);
      const char = await account.newCharacter(longName);
      expect(account.getCharacters()).toContain(char);
      expect(account.getCharacter(0).name).toBe(longName);
    });
  });

  describe("removeCharacter", () => {
    it("should remove a character from the characters array", async () => {
      const char = await account.newCharacter("RemovableChar");
      account.removeCharacter(0);
      expect(account.getCharacters()).not.toContain(char);
    });

    it("should throw an error if trying to remove a character from an empty array", () => {
      expect(() => account.removeCharacter(0)).toThrow(
        "Character index 0 out of bounds"
      );
    });

    it("should throw an error if index is out of bounds", async () => {
      await account.newCharacter("Char1");
      expect(() => account.removeCharacter(1)).toThrow(
        "Character index 1 out of bounds"
      );
      expect(() => account.removeCharacter(-1)).toThrow(
        "Character index -1 out of bounds"
      );
    });
  });

  describe("deserialize", () => {
    it("should serialize an empty new account, deserialize a string and return an Account instance", async () => {
      const acc = await Account.create();
      await acc.newCharacter("TestChar");
      const string = acc.serialize();
      const deserialized = await Account.deserialize(string);
      expect(deserialized).toBeInstanceOf(Account);
      expect(deserialized.getCharacters().length).toEqual(1);
      expect(deserialized.getCharacter(0).name).toEqual("TestChar");
      expect(deserialized.getStorage().getItems().length).toEqual(1000);
    });
    it("should serialize real data", async () => {
      const acc = await Account.create();
      const string = `{"characters":[{"id":0,"name":"TestChar","hp":0,"max_hp":0,"sp":0,"max_sp":0,"str":0,"agi":0,"vit":0,"int_":0,"dex":0,"luk":0,"inventory":[{"id":504,"nameid":504,"amount":100,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2102,"nameid":2102,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2104,"nameid":2104,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1202,"nameid":1202,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1208,"nameid":1208,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1606,"nameid":1606,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1705,"nameid":1705,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1138,"nameid":1138,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1151,"nameid":1151,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1251,"nameid":1251,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":13150,"nameid":13150,"amount":1,"equip":34,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2601,"nameid":2601,"amount":1,"equip":128,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2602,"nameid":2602,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2604,"nameid":2604,"amount":1,"equip":8,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2506,"nameid":2506,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2504,"nameid":2504,"amount":1,"equip":4,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2406,"nameid":2406,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2404,"nameid":2404,"amount":1,"equip":64,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2302,"nameid":2302,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2306,"nameid":2306,"amount":1,"equip":16,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2202,"nameid":2202,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2205,"nameid":2205,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2209,"nameid":2209,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2224,"nameid":2224,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2264,"nameid":2264,"amount":1,"equip":769,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2269,"nameid":2269,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":4043,"nameid":4043,"amount":4,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]}]}],"storage":[{"id":504,"nameid":504,"amount":200,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2102,"nameid":2102,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2104,"nameid":2104,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1202,"nameid":1202,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1208,"nameid":1208,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1606,"nameid":1606,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1705,"nameid":1705,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1138,"nameid":1138,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1151,"nameid":1151,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1251,"nameid":1251,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":13150,"nameid":13150,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2601,"nameid":2601,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2602,"nameid":2602,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2604,"nameid":2604,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2506,"nameid":2506,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2504,"nameid":2504,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2406,"nameid":2406,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2404,"nameid":2404,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2302,"nameid":2302,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2306,"nameid":2306,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2202,"nameid":2202,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2205,"nameid":2205,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2209,"nameid":2209,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2224,"nameid":2224,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2264,"nameid":2264,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2269,"nameid":2269,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":4043,"nameid":4043,"amount":8,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2102,"nameid":2102,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2104,"nameid":2104,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1202,"nameid":1202,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1208,"nameid":1208,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1606,"nameid":1606,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1705,"nameid":1705,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1138,"nameid":1138,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1151,"nameid":1151,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":1251,"nameid":1251,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":13150,"nameid":13150,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0,0,0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2601,"nameid":2601,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2602,"nameid":2602,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2604,"nameid":2604,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2506,"nameid":2506,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2504,"nameid":2504,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2406,"nameid":2406,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2404,"nameid":2404,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2302,"nameid":2302,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2306,"nameid":2306,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2202,"nameid":2202,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2205,"nameid":2205,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2209,"nameid":2209,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2224,"nameid":2224,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2264,"nameid":2264,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]},{"id":2269,"nameid":2269,"amount":1,"equip":0,"identify":"","refine":0,"grade":"","attribute":"","card":[0],"expire_time":0,"favorite":"","bound":"","unique_id":0,"option":[]}]}`;
      const deserialized = await Account.deserialize(string);
      expect(deserialized).toBeInstanceOf(Account);
      expect(deserialized.getStorage().getItemInSlot(0)?.nameid).toEqual(504);
      expect(deserialized.getStorage().getItemInSlot(0)?.Amount).toEqual(200);

      expect(deserialized.getCharacters().length).toEqual(1);
      expect(deserialized.getCharacter(0).name).toEqual("TestChar");
      expect(deserialized.getStorage().getItems().length).toEqual(1000);

      const char = deserialized.getCharacter(0);
      expect(char.inventory.getCurrentLength()).toEqual(27);
      expect(char.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)).toEqual([24]);
    });
  });
});

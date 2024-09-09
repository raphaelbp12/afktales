import { Account } from "./Account";
import { Inventory } from "../PlayerCharacter/Inventory";

describe("Account", () => {
  let account: Account;

  beforeEach(() => {
    account = new Account();
  });

  it("should initialize with an empty characters array and a storage with capacity 1000", () => {
    expect(account.getCharacters()).toEqual([]);
    expect(account.getStorage()).toBeInstanceOf(Inventory);
    expect(account.getStorage().getItems().length).toBe(1000);
  });

  describe("getCharacter", () => {
    it("should return the correct character by index", () => {
      const char = account.newCharacter("TestChar");
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

    it("should return all characters added", () => {
      const char1 = account.newCharacter("TestChar1");
      const char2 = account.newCharacter("TestChar2");
      expect(account.getCharacters()).toEqual([char1, char2]);
    });
  });

  describe("newCharacter", () => {
    it("should add a new character to the characters array", () => {
      const char = account.newCharacter("NewChar");
      expect(account.getCharacters()).toContain(char);
    });

    it("should allow adding a character with an empty name", () => {
      const char = account.newCharacter("");
      expect(account.getCharacters()).toContain(char);
    });

    it("should allow adding a character with a long name", () => {
      const longName = "a".repeat(1000);
      const char = account.newCharacter(longName);
      expect(account.getCharacters()).toContain(char);
      expect(account.getCharacter(0).name).toBe(longName);
    });
  });

  describe("removeCharacter", () => {
    it("should remove a character from the characters array", () => {
      const char = account.newCharacter("RemovableChar");
      account.removeCharacter(0);
      expect(account.getCharacters()).not.toContain(char);
    });

    it("should throw an error if trying to remove a character from an empty array", () => {
      expect(() => account.removeCharacter(0)).toThrow(
        "Character index 0 out of bounds"
      );
    });

    it("should throw an error if index is out of bounds", () => {
      account.newCharacter("Char1");
      expect(() => account.removeCharacter(1)).toThrow(
        "Character index 1 out of bounds"
      );
      expect(() => account.removeCharacter(-1)).toThrow(
        "Character index -1 out of bounds"
      );
    });
  });
});

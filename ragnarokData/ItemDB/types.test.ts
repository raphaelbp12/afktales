import { ItemDB } from "./ItemDB";
import { tryParseLoc, equip_pos } from "./types";

describe("ItemDB types", () => {
  it("tryParseLoc EQP_WEAPON", () => {
    const pos = "EQP_WEAPON";
    const result = tryParseLoc(pos);
    expect(result).toBe(equip_pos.EQP_WEAPON);
  });

  it("tryParseLoc EQP_ARMS", () => {
    const pos = "EQP_ARMS";
    const result = tryParseLoc(pos);
    expect(result).toBe(equip_pos.EQP_ARMS);
  });

  it("tryParseLoc EQP_ARMS", () => {
    const pos = "EQP_ARMS";
    const result = tryParseLoc(pos);
    expect(result).toBe(equip_pos.EQP_ARMS);
  });

  it("tryParseLoc array of locs", () => {
    const pos = ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"];
    const result = tryParseLoc(pos);
    expect(result).toBe(equip_pos.EQP_HELM);
  });
});

describe("ItemData", () => {
  const itemDB = new ItemDB();

  it("isTwoHanded Gakkung", () => {
    const itemGakkung = itemDB.getItemByNameid(1714);
    expect(itemGakkung.isTwoHanded()).toBe(true);
  });

  it("isTwoHanded Guard", () => {
    const itemGuard = itemDB.getItemByNameid(2102);
    expect(itemGuard.isTwoHanded()).toBe(false);
  });

  it("isTwoHanded Slayer", () => {
    const itemSlayer = itemDB.getItemByNameid(1151);
    expect(itemSlayer.isTwoHanded()).toBe(true);
  });

  it("isTwoHanded Ring", () => {
    const itemRing = itemDB.getItemByNameid(2601);
    expect(itemRing.isTwoHanded()).toBe(false);
  });
});

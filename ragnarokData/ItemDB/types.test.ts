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
});

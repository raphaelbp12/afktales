import { ItemDB } from "./ItemDB";

describe("ItemDB", () => {
  it("initialize ItemDB", () => {
    const itemDB = new ItemDB();

    expect(itemDB.search(503).AegisName).toBe("Yellow_Potion");
  });
});

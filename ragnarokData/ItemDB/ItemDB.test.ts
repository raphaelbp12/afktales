import { ItemDB } from "./ItemDB";

describe("ItemDB", () => {
  it("initialize ItemDB", () => {
    const itemDB = new ItemDB();

    expect(itemDB.getItemByNameid(503).AegisName).toBe("Yellow_Potion");
  });

  it("initialize ItemDB only with Glove", () => {
    const dbString = `{
	Id: 2604
	AegisName: "Glove"
	Name: "Glove"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus bDex,2; ">
}`;
    const itemDB = new ItemDB(dbString);

    const glove = itemDB.getItemByNameid(2604);
    expect(glove.AegisName).toBe("Glove");
    expect(glove.GetRefine()).toBe(false);
  });
});

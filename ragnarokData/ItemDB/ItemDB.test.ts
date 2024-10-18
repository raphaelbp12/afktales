import { ItemDB } from "./ItemDB";
import fs from "fs";

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

describe("ItemDB", () => {
  it("initialize ItemDB", async () => {
    const itemDB = await ItemDB.create();

    expect(itemDB.getItemByNameid(503).AegisName).toBe("Yellow_Potion");
  });

  it("initialize ItemDB only with Glove", async () => {
    const dbString = `item_db: (
		{
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
},
	)`;
    const itemDB = await ItemDB.create(dbString);

    const glove = itemDB.getItemByNameid(2604);
    expect(glove.AegisName).toBe("Glove");
    expect(glove.GetRefine()).toBe(false);
  });
});

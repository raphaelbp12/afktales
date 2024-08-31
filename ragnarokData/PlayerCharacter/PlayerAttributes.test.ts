import { ItemDB } from "../ItemDB/ItemDB";
import { PlayerAttributes } from "./PlayerAttributes";

describe("PlayerAttributes", () => {
  it("add item", () => {
    const playerAttributes = new PlayerAttributes();
    const itemDB = new ItemDB();

    const item503 = itemDB.search(503);
    const item12014 = itemDB.search(12014);
    playerAttributes.addItem(item503.toPersistentItem(), 10);
    playerAttributes.addItem(item12014.toPersistentItem(), 100);

    expect(playerAttributes.persistent_status.inventory[0].amount).toBe(10);
    expect(playerAttributes.persistent_status.inventory[0].nameid).toBe(
      item503.nameid
    );
    expect(playerAttributes.persistent_status.inventory[1].amount).toBe(100);
    expect(playerAttributes.persistent_status.inventory[1].nameid).toBe(
      item12014.nameid
    );
  });
});

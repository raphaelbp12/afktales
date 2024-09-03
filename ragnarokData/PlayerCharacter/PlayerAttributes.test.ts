import { ItemDB } from "../ItemDB/ItemDB";
import { equip_pos } from "../ItemDB/types";
import { PlayerAttributes } from "./PlayerAttributes";

describe("PlayerAttributes", () => {
  it("add item", () => {
    const playerAttributes = new PlayerAttributes("test");
    const itemDB = new ItemDB();

    const item503 = itemDB.getItemByNameid(503);
    const item12014 = itemDB.getItemByNameid(12014);
    playerAttributes.addItem(item503, 10);
    playerAttributes.addItem(item12014, 100);

    expect(playerAttributes.persistent_status.inventory[0].amount).toBe(10);
    expect(playerAttributes.persistent_status.inventory[0].nameid).toBe(
      item503.nameid
    );
    expect(playerAttributes.persistent_status.inventory[1].amount).toBe(100);
    expect(playerAttributes.persistent_status.inventory[1].nameid).toBe(
      item12014.nameid
    );

    expect(playerAttributes.inventory.getItemInSlot(0)?.nameid).toBe(503);
    expect(playerAttributes.inventory.getItemInSlot(0)?.AegisName).toBe(
      item503.AegisName
    );
    expect(playerAttributes.inventory.getItemInSlot(0)?.Amount).toBe(10);
    expect(playerAttributes.inventory.getItemInSlot(1)?.nameid).toBe(12014);
    expect(playerAttributes.inventory.getItemInSlot(1)?.AegisName).toBe(
      item12014.AegisName
    );
    expect(playerAttributes.inventory.getItemInSlot(1)?.Amount).toBe(100);
  });

  it("equip yellow potion", () => {
    const playerAttributes = new PlayerAttributes("test");
    const itemDB = new ItemDB();

    const item503 = itemDB.getItemByNameid(503);
    const item12014 = itemDB.getItemByNameid(12014);
    const item503Slot = playerAttributes.addItem(item503, 10);
    const item12014Slot = playerAttributes.addItem(item12014, 100);

    playerAttributes.equipItem(item503Slot);

    expect(playerAttributes.inventory.getItemInSlot(item503Slot)?.nameid).toBe(
      503
    );
    expect(
      playerAttributes.inventory
        .getItemInSlot(item503Slot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip knife", () => {
    const playerAttributes = new PlayerAttributes("test");
    const itemDB = new ItemDB();

    const item503 = itemDB.getItemByNameid(503);
    const item1201 = itemDB.getItemByNameid(1201);
    const item503Slot = playerAttributes.addItem(item503, 10);
    const item1201Slot = playerAttributes.addItem(item1201);

    playerAttributes.equipItem(item1201Slot);

    expect(playerAttributes.inventory.getItemInSlot(item1201Slot)?.nameid).toBe(
      1201
    );

    expect(
      playerAttributes.inventory
        .getItemInSlot(item1201Slot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_WEAPON);
    expect(playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_WEAPON)).toBe(
      item1201Slot
    );
  });

  it("equip knife unequip equip Gaia_Sword", () => {
    const playerAttributes = new PlayerAttributes("test");
    const itemDB = new ItemDB();

    const item1201 = itemDB.getItemByNameid(1201);
    const item1143 = itemDB.getItemByNameid(1143);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const item1201Slot = playerAttributes.addItem(item1201);
    const item1143Slot = playerAttributes.addItem(item1143);

    playerAttributes.equipItem(item1201Slot);

    expect(playerAttributes.inventory.getItemInSlot(item1201Slot)?.nameid).toBe(
      1201
    );
    expect(
      playerAttributes.inventory
        .getItemInSlot(item1201Slot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_WEAPON);

    playerAttributes.unequipItem(item1201Slot);

    expect(playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_WEAPON)).toBe(
      -1
    );

    playerAttributes.equipItem(item1143Slot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(item1143Slot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_WEAPON);
  });
});

import { ItemDB } from "../ItemDB/ItemDB";
import { equip_pos } from "../ItemDB/types";
import { PlayerAttributes } from "./PlayerAttributes";

describe("PlayerAttributes", () => {
  const itemDB = new ItemDB();

  it("add item", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

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
    const playerAttributes = new PlayerAttributes("test", 1, {});

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
    const playerAttributes = new PlayerAttributes("test", 1, {});

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
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_WEAPON)
    ).toStrictEqual([item1201Slot]);
  });

  it("equip knife unequip equip Gaia_Sword", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

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

    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_WEAPON)
    ).toStrictEqual([]);

    playerAttributes.equipItem(item1143Slot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(item1143Slot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_WEAPON);
  });

  it("equip 3 accs", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemRing = itemDB.getItemByNameid(2601);
    const itemEarring = itemDB.getItemByNameid(2602);
    const itemGlove = itemDB.getItemByNameid(2604);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemRingSlot = playerAttributes.addItem(itemRing);
    const itemEarringSlot = playerAttributes.addItem(itemEarring);
    const itemGloveSlot = playerAttributes.addItem(itemGlove);

    playerAttributes.equipItem(itemRingSlot);
    expect(playerAttributes.inventory.getItemInSlot(itemRingSlot)?.nameid).toBe(
      2601
    );
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemRingSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_R);

    playerAttributes.equipItem(itemEarringSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemEarringSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_L);

    playerAttributes.equipItem(itemGloveSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloveSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_L);

    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_ACC_L)
    ).toStrictEqual([itemGloveSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_ACC_R)
    ).toStrictEqual([itemRingSlot]);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemEarringSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip knife mg guard and slayer", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemKnife = itemDB.getItemByNameid(1202);
    const itemMainGauche = itemDB.getItemByNameid(1208);
    const itemGuard = itemDB.getItemByNameid(2102);
    const itemSlayer = itemDB.getItemByNameid(1151);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemKnifeSlot = playerAttributes.addItem(itemKnife);
    const itemMainGaucheSlot = playerAttributes.addItem(itemMainGauche);
    const itemGuardSlot = playerAttributes.addItem(itemGuard);
    const itemSlayerSlot = playerAttributes.addItem(itemSlayer);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)?.nameid
    ).toBe(1202);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);

    playerAttributes.equipItem(itemMainGaucheSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMainGaucheSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);

    playerAttributes.equipItem(itemGuardSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMainGaucheSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);

    playerAttributes.equipItem(itemSlayerSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSlayerSlot)
        ?.getEquipPosIfEquipped()
    ).toBeGreaterThan(equip_pos.EQP_NONE);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMainGaucheSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip slayer and gakkung", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemGakkung = itemDB.getItemByNameid(1714);
    const itemSlayer = itemDB.getItemByNameid(1151);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemGakkungSlot = playerAttributes.addItem(itemGakkung);
    const itemSlayerSlot = playerAttributes.addItem(itemSlayer);

    playerAttributes.equipItem(itemGakkungSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);

    playerAttributes.equipItem(itemSlayerSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSlayerSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip guard and gakkung", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemGakkung = itemDB.getItemByNameid(1714);
    const itemGuard = itemDB.getItemByNameid(2102);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemGakkungSlot = playerAttributes.addItem(itemGakkung);
    const itemGuardSlot = playerAttributes.addItem(itemGuard);

    playerAttributes.equipItem(itemGuardSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);

    playerAttributes.equipItem(itemGakkungSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip gakkung guard knife", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemGakkung = itemDB.getItemByNameid(1714);
    const itemGuard = itemDB.getItemByNameid(2102);
    const itemKnife = itemDB.getItemByNameid(1202);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemGakkungSlot = playerAttributes.addItem(itemGakkung);
    const itemGuardSlot = playerAttributes.addItem(itemGuard);
    const itemKnifeSlot = playerAttributes.addItem(itemKnife);

    playerAttributes.equipItem(itemGakkungSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGakkungSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGakkungSlot]);

    playerAttributes.equipItem(itemGuardSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGuardSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([]);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGuardSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemKnifeSlot]);
  });

  it("equip gakkung glove", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemGakkung = itemDB.getItemByNameid(1714);
    const itemGlove = itemDB.getItemByNameid(2604);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemGakkungSlot = playerAttributes.addItem(itemGakkung);
    const itemGloveSlot = playerAttributes.addItem(itemGlove);

    playerAttributes.equipItem(itemGakkungSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGakkungSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGakkungSlot]);

    playerAttributes.equipItem(itemGloveSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloveSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGakkungSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGakkungSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
  });

  it("equip gakkung guard knife", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemGakkung = itemDB.getItemByNameid(1714);
    const itemGuard = itemDB.getItemByNameid(2102);
    const itemKnife = itemDB.getItemByNameid(1202);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemGakkungSlot = playerAttributes.addItem(itemGakkung);
    const itemGuardSlot = playerAttributes.addItem(itemGuard);
    const itemKnifeSlot = playerAttributes.addItem(itemKnife);

    playerAttributes.equipItem(itemGakkungSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGakkungSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGakkungSlot]);

    playerAttributes.equipItem(itemGuardSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGuardSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemKnifeSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGuardSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip gakkung knife guard", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemGakkung = itemDB.getItemByNameid(1714);
    const itemGuard = itemDB.getItemByNameid(2102);
    const itemKnife = itemDB.getItemByNameid(1202);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemGakkungSlot = playerAttributes.addItem(itemGakkung);
    const itemGuardSlot = playerAttributes.addItem(itemGuard);
    const itemKnifeSlot = playerAttributes.addItem(itemKnife);

    playerAttributes.equipItem(itemGakkungSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGakkungSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGakkungSlot]);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemKnifeSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);

    playerAttributes.equipItem(itemGuardSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemKnifeSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGuardSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_L);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGuardSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGakkungSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
  });

  it("equip munark_hat", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemMunak = itemDB.getItemByNameid(2264);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemMunakSlot = playerAttributes.addItem(itemMunak);

    playerAttributes.equipItem(itemMunakSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMunakSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HELM);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_TOP)
    ).toStrictEqual([itemMunakSlot]);
  });

  it("equip munark_hat sunglasses", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemMunak = itemDB.getItemByNameid(2264);
    const itemSunglasses = itemDB.getItemByNameid(2202);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemMunakSlot = playerAttributes.addItem(itemMunak);
    const itemSunglassesSlot = playerAttributes.addItem(itemSunglasses);

    playerAttributes.equipItem(itemMunakSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMunakSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HELM);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_TOP)
    ).toStrictEqual([itemMunakSlot]);

    playerAttributes.equipItem(itemSunglassesSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSunglassesSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HEAD_MID);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMunakSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_TOP)
    ).toStrictEqual([]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)
    ).toStrictEqual([]);
  });

  it("equip manteau munark_hat sunglasses ribbon", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemMunak = itemDB.getItemByNameid(2264);
    const itemManteau = itemDB.getItemByNameid(2506);
    const itemSunglasses = itemDB.getItemByNameid(2202);
    const itemRibbon = itemDB.getItemByNameid(2209);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemMunakSlot = playerAttributes.addItem(itemMunak);
    const itemManteauSlot = playerAttributes.addItem(itemManteau);
    const itemSunglassesSlot = playerAttributes.addItem(itemSunglasses);
    const itemRibbonSlot = playerAttributes.addItem(itemRibbon);

    playerAttributes.equipItem(itemManteauSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemManteauSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_GARMENT);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_GARMENT)
    ).toStrictEqual([itemManteauSlot]);

    playerAttributes.equipItem(itemMunakSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMunakSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HELM);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_TOP)
    ).toStrictEqual([itemMunakSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_GARMENT)
    ).toStrictEqual([itemManteauSlot]);

    playerAttributes.equipItem(itemSunglassesSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSunglassesSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HEAD_MID);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMunakSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemSunglassesSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_TOP)
    ).toStrictEqual([]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)
    ).toStrictEqual([]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_GARMENT)
    ).toStrictEqual([itemManteauSlot]);

    playerAttributes.equipItem(itemRibbonSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemRibbonSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HEAD_TOP);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMunakSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_NONE);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemSunglassesSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_TOP)
    ).toStrictEqual([itemRibbonSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_LOW)
    ).toStrictEqual([]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_GARMENT)
    ).toStrictEqual([itemManteauSlot]);
  });

  it("insert raydric card into manteau", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemManteau = itemDB.getItemByNameid(2506);
    const itemRaydricCard = itemDB.getItemByNameid(4133);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemManteauSlot = playerAttributes.addItem(itemManteau);
    const itemRaydricCardSlot = playerAttributes.addItem(itemRaydricCard);

    playerAttributes.equipItem(itemManteauSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemManteauSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_GARMENT);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_GARMENT)
    ).toStrictEqual([itemManteauSlot]);

    playerAttributes.insertCard(itemRaydricCardSlot, itemManteauSlot);
    expect(playerAttributes.inventory.getItemInSlot(itemRaydricCardSlot)).toBe(
      undefined
    );
    expect(
      playerAttributes.inventory.getItemInSlot(itemManteauSlot)?.Cards
    ).not.toBeNull();
    expect(
      playerAttributes.inventory.getItemInSlot(itemManteauSlot)!.Cards![0]
    ).toBe(4133);
  });

  it("insert 4 andre card into knife", () => {
    const playerAttributes = new PlayerAttributes("test", 1, {});

    const itemKnife = itemDB.getItemByNameid(1202);
    const itemAndreCard = itemDB.getItemByNameid(4043);
    playerAttributes.addItem(itemDB.getItemByNameid(503));
    playerAttributes.addItem(itemDB.getItemByNameid(504));
    playerAttributes.addItem(itemDB.getItemByNameid(505));
    playerAttributes.addItem(itemDB.getItemByNameid(506));
    playerAttributes.addItem(itemDB.getItemByNameid(507));
    const itemKnifeSlot = playerAttributes.addItem(itemKnife);
    const itemAndreCardSlot = playerAttributes.addItem(itemAndreCard, 4);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemKnifeSlot]);

    playerAttributes.insertCard(itemAndreCardSlot, itemKnifeSlot);
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Amount
    ).toBe(3);
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Cards
    ).not.toBeNull();
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![0]
    ).toBe(4043);

    playerAttributes.insertCard(itemAndreCardSlot, itemKnifeSlot);
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Amount
    ).toBe(2);
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Cards
    ).not.toBeNull();
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![0]
    ).toBe(4043);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![1]
    ).toBe(4043);

    playerAttributes.insertCard(itemAndreCardSlot, itemKnifeSlot);
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Amount
    ).toBe(1);
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Cards
    ).not.toBeNull();
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![0]
    ).toBe(4043);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![1]
    ).toBe(4043);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![2]
    ).toBe(4043);

    playerAttributes.insertCard(itemAndreCardSlot, itemKnifeSlot);
    expect(playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)).toBe(
      undefined
    );
    expect(
      playerAttributes.inventory.getItemInSlot(itemAndreCardSlot)?.Cards
    ).not.toBeNull();
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![0]
    ).toBe(4043);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![1]
    ).toBe(4043);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![2]
    ).toBe(4043);
    expect(
      playerAttributes.inventory.getItemInSlot(itemKnifeSlot)!.Cards![3]
    ).toBe(4043);
  });
});

import { Databases } from "../Database/Databases";
import { equip_pos } from "../ItemDB/types";
import { Race } from "../map_race_id2mask";
import { ClassesEnum } from "./ClassesEnum";
import { PlayerAttributes } from "./PlayerAttributes";
import fs from "fs";
import { INITIAL_STATUS_POINTS } from "../constants";
import { StatsType } from "./StatsTypeEnum";
import { CharacterFactory } from "./CharacterFactory";

describe("PlayerAttributes", () => {
  let databases: Databases;
  let characterFactory: CharacterFactory; // Add the factory
  let playerAttributes: PlayerAttributes;

  beforeAll(async () => {
    // Mock the global.fetch function
    global.fetch = jest.fn((input: RequestInfo | URL, init?: RequestInit) => {
      let url: string;
      if (typeof input === "string") {
        url = input;
      } else if (input instanceof URL) {
        url = input.toString();
      } else if ("url" in input) {
        // For Request objects
        url = input.url;
      } else {
        throw new Error("Invalid input to fetch");
      }
      // Adjust the path to your actual config files location
      const basePath = "./public"; // Adjust this path as necessary
      let filePath = "";
      if (url.endsWith("/configs/job_db.conf")) {
        filePath = `${basePath}/configs/job_db.conf`;
      } else if (url.endsWith("/configs/job_db2.txt")) {
        filePath = `${basePath}/configs/job_db2.txt`;
      } else if (url.endsWith("/configs/exp_group_db.conf")) {
        filePath = `${basePath}/configs/exp_group_db.conf`;
      } else if (url.endsWith("/configs/item_db.conf")) {
        filePath = `${basePath}/configs/item_db.conf`;
      } else if (url.endsWith("/configs/item_db2.conf")) {
        filePath = `${basePath}/configs/item_db2.conf`;
      } else {
        throw new Error(`Unexpected fetch URL: ${url}`);
      }
      const configContent = fs.readFileSync(filePath, "utf8");
      return Promise.resolve({
        ok: true,
        status: 200,
        text: async () => configContent,
      } as Response);
    });

    databases = await Databases.create();
    characterFactory = CharacterFactory.create(databases); // Initialize the factory
  });

  afterAll(() => {
    // Restore the original fetch function after tests
    (global.fetch as jest.Mock).mockRestore();
  });

  beforeEach(async () => {
    playerAttributes = await characterFactory.createPlayerAttributes(
      "test",
      1,
      {}
    );
  });

  it("add item", async () => {
    const item503 = databases.itemDB.getItemByNameid(503);
    const item12014 = databases.itemDB.getItemByNameid(12014);
    playerAttributes.addItem(item503, 10);
    playerAttributes.addItem(item12014, 100);

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

  it("equip yellow potion", async () => {
    const item503 = databases.itemDB.getItemByNameid(503);
    const item12014 = databases.itemDB.getItemByNameid(12014);
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

  it("equip knife", async () => {
    const item503 = databases.itemDB.getItemByNameid(503);
    const item1201 = databases.itemDB.getItemByNameid(1201);
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

  it("equip knife unequip equip Gaia_Sword", async () => {
    const item1201 = databases.itemDB.getItemByNameid(1201);
    const item1143 = databases.itemDB.getItemByNameid(1143);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip 3 accs", async () => {
    const itemRing = databases.itemDB.getItemByNameid(2601);
    const itemEarring = databases.itemDB.getItemByNameid(2602);
    const itemGlove = databases.itemDB.getItemByNameid(2604);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip knife mg guard and slayer", async () => {
    const itemKnife = databases.itemDB.getItemByNameid(1202);
    const itemMainGauche = databases.itemDB.getItemByNameid(1208);
    const itemGuard = databases.itemDB.getItemByNameid(2102);
    const itemSlayer = databases.itemDB.getItemByNameid(1151);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip slayer and gakkung", async () => {
    const itemGakkung = databases.itemDB.getItemByNameid(1714);
    const itemSlayer = databases.itemDB.getItemByNameid(1151);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip guard and gakkung", async () => {
    const itemGakkung = databases.itemDB.getItemByNameid(1714);
    const itemGuard = databases.itemDB.getItemByNameid(2102);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip gakkung guard knife", async () => {
    const itemGakkung = databases.itemDB.getItemByNameid(1714);
    const itemGuard = databases.itemDB.getItemByNameid(2102);
    const itemKnife = databases.itemDB.getItemByNameid(1202);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip gakkung glove", async () => {
    const itemGakkung = databases.itemDB.getItemByNameid(1714);
    const itemGlove = databases.itemDB.getItemByNameid(2604);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip gakkung guard knife", async () => {
    const itemGakkung = databases.itemDB.getItemByNameid(1714);
    const itemGuard = databases.itemDB.getItemByNameid(2102);
    const itemKnife = databases.itemDB.getItemByNameid(1202);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip gakkung knife guard", async () => {
    const itemGakkung = databases.itemDB.getItemByNameid(1714);
    const itemGuard = databases.itemDB.getItemByNameid(2102);
    const itemKnife = databases.itemDB.getItemByNameid(1202);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip munark_hat", async () => {
    const itemMunak = databases.itemDB.getItemByNameid(2264);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip munark_hat sunglasses", async () => {
    const itemMunak = databases.itemDB.getItemByNameid(2264);
    const itemSunglasses = databases.itemDB.getItemByNameid(2202);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("equip manteau munark_hat sunglasses ribbon", async () => {
    const itemMunak = databases.itemDB.getItemByNameid(2264);
    const itemManteau = databases.itemDB.getItemByNameid(2506);
    const itemSunglasses = databases.itemDB.getItemByNameid(2202);
    const itemRibbon = databases.itemDB.getItemByNameid(2209);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("insert raydric card into manteau", async () => {
    const itemManteau = databases.itemDB.getItemByNameid(2506);
    const itemRaydricCard = databases.itemDB.getItemByNameid(4133);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("insert 4 andre card into knife", async () => {
    const itemKnife = databases.itemDB.getItemByNameid(1202);
    const itemAndreCard = databases.itemDB.getItemByNameid(4043);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
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

  it("calculateItemBonuses Diabolus Manteau Slipper", async () => {
    const itemDiabolusManteau = databases.itemDB.getItemByNameid(2537);
    const itemSlipper = databases.itemDB.getItemByNameid(2415);
    const itemDiabolusManteauSlot =
      playerAttributes.addItem(itemDiabolusManteau);
    const itemSlipperSlot = playerAttributes.addItem(itemSlipper);

    playerAttributes.equipItem(itemSlipperSlot);
    playerAttributes.equipItem(itemDiabolusManteauSlot);
    expect(playerAttributes.param_bonus["SP_LUK"]).toBe(3);
  });

  it("insert raydric card to muffler - add another muffler and check if it has cards", async () => {
    const itemMuffler = databases.itemDB.getItemByNameid(2504);
    const itemRaydricCard = databases.itemDB.getItemByNameid(4133);
    const itemMufflerSlot = playerAttributes.addItem(itemMuffler);
    const itemRaydricCardSlot = playerAttributes.addItem(itemRaydricCard, 10);

    playerAttributes.insertCard(itemRaydricCardSlot, itemMufflerSlot);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMufflerSlot)
        ?.getCardItems()[0].nameid
    ).not.toBe(0);

    const itemMufflerSlot2 = playerAttributes.addItem(itemMuffler);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemMufflerSlot2)
        ?.getCardItems()[0]
    ).toBe(undefined);
  });

  it("equip 3 gloves + insert 4 drops card into knife equip knife", async () => {
    const itemKnife = databases.itemDB.getItemByNameid(1202);
    const itemDropsCard = databases.itemDB.getItemByNameid(4004);
    const itemGlove = databases.itemDB.getItemByNameid(2604);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
    const itemKnifeSlot = playerAttributes.addItem(itemKnife);
    const itemGloveSlot = playerAttributes.addItem(itemGlove);
    const itemGloveSlot2 = playerAttributes.addItem(itemGlove);
    const itemGloveSlot3 = playerAttributes.addItem(itemGlove);
    const itemDropsCardSlot = playerAttributes.addItem(itemDropsCard, 4);

    playerAttributes.equipItem(itemGloveSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloveSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_ACC_R)
    ).toStrictEqual([itemGloveSlot]);

    playerAttributes.equipItem(itemGloveSlot2);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloveSlot2)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_L);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_ACC_L)
    ).toStrictEqual([itemGloveSlot2]);

    expect(playerAttributes.param_bonus["SP_DEX"]).toBe(4);

    playerAttributes.equipItem(itemGloveSlot3);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloveSlot3)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ACC_L);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_ACC_L)
    ).toStrictEqual([itemGloveSlot3]);

    expect(playerAttributes.param_bonus["SP_DEX"]).toBe(4);

    playerAttributes.equipItem(itemKnifeSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemKnifeSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HAND_R);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemKnifeSlot]);

    playerAttributes.insertCard(itemDropsCardSlot, itemKnifeSlot);

    playerAttributes.insertCard(itemDropsCardSlot, itemKnifeSlot);

    playerAttributes.insertCard(itemDropsCardSlot, itemKnifeSlot);

    playerAttributes.insertCard(itemDropsCardSlot, itemKnifeSlot);

    playerAttributes.unequipItem(itemKnifeSlot);

    expect(playerAttributes.param_bonus["SP_DEX"]).toBe(4);
  });

  it("equip a branch with 2 andre cards", async () => {
    const itemBranch = databases.itemDB.getItemByNameid(13150);
    const itemAndreCard = databases.itemDB.getItemByNameid(4043);
    playerAttributes.addItem(databases.itemDB.getItemByNameid(503));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(504));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(505));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(506));
    playerAttributes.addItem(databases.itemDB.getItemByNameid(507));
    const itemBranchSlot = playerAttributes.addItem(itemBranch);
    const itemAndreCardSlot = playerAttributes.addItem(itemAndreCard, 4);

    playerAttributes.equipItem(itemBranchSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemBranchSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemBranchSlot]);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemBranchSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemBranchSlot]);

    playerAttributes.insertCard(itemAndreCardSlot, itemBranchSlot);
    playerAttributes.insertCard(itemAndreCardSlot, itemBranchSlot);

    expect(playerAttributes.base_status.batk).toBe(40);
  });

  it("equip a +0 Tae Goo Lyeon and check for bCastrate and bDelayrate", async () => {
    const itemTaeGoo = databases.itemDB.getItemByNameid(1181);
    const itemTaeGooSlot = playerAttributes.addItem(itemTaeGoo);

    playerAttributes.equipItem(itemTaeGooSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemTaeGooSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemTaeGooSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemTaeGooSlot]);

    expect(itemTaeGoo.getRefineLevel()).toBe(0);
    expect(playerAttributes.castrate).toBe(0);
    expect(playerAttributes.delayrate).toBe(0);
  });

  it("equip a +10 Tae Goo Lyeon and check for bCastrate and bDelayrate", async () => {
    const itemTaeGoo = databases.itemDB.getItemByNameid(1181);
    itemTaeGoo.setRefineLevel(10);

    const itemTaeGooSlot = playerAttributes.addItem(itemTaeGoo);

    playerAttributes.equipItem(itemTaeGooSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemTaeGooSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemTaeGooSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemTaeGooSlot]);

    expect(itemTaeGoo.getRefineLevel()).toBe(10);
    expect(playerAttributes.castrate).toBe(-20);
    expect(playerAttributes.delayrate).toBe(-20);
  });

  it("equip a +0 Glorious Bloody Roar and check for bAddRace,RC_DemiPlayer and bIgnoreDefRate,RC_DemiPlayer", async () => {
    const itemGloriousBloodyRoar = databases.itemDB.getItemByNameid(1281);

    const itemGloriousBloodyRoarSlot = playerAttributes.addItem(
      itemGloriousBloodyRoar
    );

    playerAttributes.equipItem(itemGloriousBloodyRoarSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloriousBloodyRoarSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGloriousBloodyRoarSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGloriousBloodyRoarSlot]);

    expect(itemGloriousBloodyRoar.getRefineLevel()).toBe(0);
    expect(playerAttributes.bonus.unbreakable_equip).toBe(equip_pos.EQP_WEAPON);
    expect(playerAttributes.right_weapon.addrace[Race.RC_DEMIHUMAN]).toBe(70);
    expect(playerAttributes.ignore_def[Race.RC_DEMIHUMAN]).toBe(20);

    expect(playerAttributes.right_weapon.addrace[Race.RC_PLAYER]).toBe(70);
    expect(playerAttributes.ignore_def[Race.RC_PLAYER]).toBe(20);
  });

  it("equip a +10 Glorious Bloody Roar and check for bAddRace,RC_DemiPlayer and bIgnoreDefRate,RC_DemiPlayer", async () => {
    const itemGloriousBloodyRoar = databases.itemDB.getItemByNameid(1281);
    itemGloriousBloodyRoar.setRefineLevel(10);

    const itemGloriousBloodyRoarSlot = playerAttributes.addItem(
      itemGloriousBloodyRoar
    );

    playerAttributes.equipItem(itemGloriousBloodyRoarSlot);
    expect(
      playerAttributes.inventory
        .getItemInSlot(itemGloriousBloodyRoarSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_ARMS);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_R)
    ).toStrictEqual([itemGloriousBloodyRoarSlot]);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HAND_L)
    ).toStrictEqual([itemGloriousBloodyRoarSlot]);

    expect(itemGloriousBloodyRoar.getRefineLevel()).toBe(10);
    expect(playerAttributes.bonus.unbreakable_equip).toBe(equip_pos.EQP_WEAPON);
    expect(playerAttributes.ignore_def[Race.RC_DEMIHUMAN]).toBe(25);
    expect(playerAttributes.ignore_def[Race.RC_PLAYER]).toBe(25);

    expect(playerAttributes.right_weapon.addrace[Race.RC_DEMIHUMAN]).toBe(106);
    expect(playerAttributes.right_weapon.addrace[Race.RC_PLAYER]).toBe(106);
  });

  it("equip a +0 Glorious Bloody Roar and check for bAddRace,RC_DemiPlayer and bIgnoreDefRate,RC_DemiPlayer", async () => {
    const itemGloriousBloodyRoar = databases.itemDB.getItemByNameid(1281);
    itemGloriousBloodyRoar.setRefineLevel(10);

    const itemGloriousBloodyRoar2 = databases.itemDB.getItemByNameid(1281);

    expect(itemGloriousBloodyRoar.getRefineLevel()).toBe(10);
    expect(itemGloriousBloodyRoar2.getRefineLevel()).toBe(0);
  });

  it("equip a Sigrun's Wings as a Knight", async () => {
    playerAttributes.job = ClassesEnum.MAPID_KNIGHT;

    const itemSigrunsWings = databases.itemDB.getItemByNameid(5592);

    const itemSigrunsWingsSlot = playerAttributes.addItem(itemSigrunsWings);

    playerAttributes.equipItem(itemSigrunsWingsSlot);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSigrunsWingsSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HEAD_MID);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemSigrunsWingsSlot]);

    expect(playerAttributes.param_bonus["SP_INT"]).toBe(0);
    expect(playerAttributes.param_bonus["SP_DEX"]).toBe(0);
    expect(playerAttributes.param_bonus["SP_STR"]).toBe(1);
  });

  it("equip a Sigrun's Wings as a Soul Linker", async () => {
    playerAttributes.job = ClassesEnum.MAPID_SOUL_LINKER;

    const itemSigrunsWings = databases.itemDB.getItemByNameid(5592);

    const itemSigrunsWingsSlot = playerAttributes.addItem(itemSigrunsWings);

    playerAttributes.equipItem(itemSigrunsWingsSlot);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSigrunsWingsSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HEAD_MID);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemSigrunsWingsSlot]);

    expect(playerAttributes.param_bonus["SP_INT"]).toBe(1);
    expect(playerAttributes.param_bonus["SP_DEX"]).toBe(0);
    expect(playerAttributes.param_bonus["SP_STR"]).toBe(0);
  });

  it("equip a Sigrun's Wings as a Sniper", async () => {
    playerAttributes.job = ClassesEnum.MAPID_SNIPER;

    const itemSigrunsWings = databases.itemDB.getItemByNameid(5592);

    const itemSigrunsWingsSlot = playerAttributes.addItem(itemSigrunsWings);

    playerAttributes.equipItem(itemSigrunsWingsSlot);

    expect(
      playerAttributes.inventory
        .getItemInSlot(itemSigrunsWingsSlot)
        ?.getEquipPosIfEquipped()
    ).toBe(equip_pos.EQP_HEAD_MID);
    expect(
      playerAttributes.getInvSlotInEquipPos(equip_pos.EQP_HEAD_MID)
    ).toStrictEqual([itemSigrunsWingsSlot]);

    expect(playerAttributes.param_bonus["SP_INT"]).toBe(0);
    expect(playerAttributes.param_bonus["SP_DEX"]).toBe(1);
    expect(playerAttributes.param_bonus["SP_STR"]).toBe(0);
  });

  it("set job class to knight", async () => {
    playerAttributes.setJobClass(ClassesEnum.MAPID_KNIGHT);

    expect(playerAttributes.job).toBe(ClassesEnum.MAPID_KNIGHT);
    expect(playerAttributes.baseExpGroup.MaxLevel).toBe(99);
    expect(playerAttributes.jobExpGroup.MaxLevel).toBe(50);
  });

  it("set job class to creator", async () => {
    playerAttributes.setJobClass(ClassesEnum.MAPID_CREATOR);

    expect(playerAttributes.job).toBe(ClassesEnum.MAPID_CREATOR);
    expect(playerAttributes.baseExpGroup.MaxLevel).toBe(99);
    expect(playerAttributes.jobExpGroup.MaxLevel).toBe(70);
  });

  it("get status point", async () => {
    expect(playerAttributes.getStatusPoint(1)).toBe(3);
    expect(playerAttributes.getStatusPoint(4)).toBe(3);
    expect(playerAttributes.getStatusPoint(5)).toBe(4);
    expect(playerAttributes.getStatusPoint(8)).toBe(4);
    expect(playerAttributes.getStatusPoint(10)).toBe(5);
  });

  it("get status point needed to change", async () => {
    playerAttributes.setStat(StatsType.SP_DEX, 90);

    expect(
      playerAttributes.getStatusPointNeededToChange(StatsType.SP_DEX, 1)
    ).toBe(10);
    expect(
      playerAttributes.getStatusPointNeededToChange(StatsType.SP_DEX, 2)
    ).toBe(21);
    expect(
      playerAttributes.getStatusPointNeededToChange(StatsType.SP_DEX, 3)
    ).toBe(32);
  });

  it("get total status point spent", async () => {
    expect(playerAttributes.getTotalStatusPointSpent(45)).toBe(
      116 + INITIAL_STATUS_POINTS
    );
    expect(playerAttributes.getTotalStatusPointSpent(90)).toBe(
      482 + INITIAL_STATUS_POINTS
    );
    expect(playerAttributes.getTotalStatusPointSpent(98)).toBe(
      569 + INITIAL_STATUS_POINTS
    );
  });

  it("get total status point spent in all stats - all stats 1", async () => {
    expect(playerAttributes.getTotalStatusPointSpentInAllStats()).toBe(0);
  });

  it("get total status point spent in all stats - all stats 5", async () => {
    playerAttributes.setStat(StatsType.SP_STR, 2);
    playerAttributes.setStat(StatsType.SP_AGI, 1);
    playerAttributes.setStat(StatsType.SP_VIT, 1);
    playerAttributes.setStat(StatsType.SP_INT, 1);
    playerAttributes.setStat(StatsType.SP_DEX, 1);
    playerAttributes.setStat(StatsType.SP_LUK, 1);

    expect(playerAttributes.getTotalStatusPointSpentInAllStats()).toBe(2);
  });

  it("get total status point spent in all stats - all stats 30", async () => {
    playerAttributes.setStat(StatsType.SP_STR, 30);
    playerAttributes.setStat(StatsType.SP_AGI, 30);
    playerAttributes.setStat(StatsType.SP_VIT, 30);
    playerAttributes.setStat(StatsType.SP_INT, 30);
    playerAttributes.setStat(StatsType.SP_DEX, 30);
    playerAttributes.setStat(StatsType.SP_LUK, 30);

    expect(playerAttributes.getTotalStatusPointSpentInAllStats()).toBe(
      468 + INITIAL_STATUS_POINTS
    );
  });

  it("base level up to 2 - distribute points", async () => {
    playerAttributes.baseLevelUp(1);

    expect(playerAttributes.persistent_status.base_level).toBe(2);
    expect(playerAttributes.persistent_status.status_point).toBe(51);

    playerAttributes.increaseStats(StatsType.SP_STR, 9);
    playerAttributes.increaseStats(StatsType.SP_AGI, 9);
    playerAttributes.increaseStats(StatsType.SP_VIT, 7);

    expect(playerAttributes.persistent_status.status_point).toBe(1);
  });

  it("base level up to 60 - distribute points", async () => {
    playerAttributes.baseLevelUp(59);

    expect(playerAttributes.persistent_status.base_level).toBe(60);
    expect(playerAttributes.persistent_status.status_point).toBe(555);

    playerAttributes.increaseStats(StatsType.SP_STR, 30);
    playerAttributes.increaseStats(StatsType.SP_AGI, 30);
    playerAttributes.increaseStats(StatsType.SP_VIT, 30);
    playerAttributes.increaseStats(StatsType.SP_INT, 30);
    playerAttributes.increaseStats(StatsType.SP_DEX, 30);
    playerAttributes.increaseStats(StatsType.SP_LUK, 30);

    expect(playerAttributes.persistent_status.status_point).toBe(15);
  });

  it("increase stats more than max", async () => {
    playerAttributes.baseLevelUp(200);

    expect(playerAttributes.persistent_status.base_level).toBe(99);
    expect(playerAttributes.persistent_status.status_point).toBe(1273);

    playerAttributes.increaseStats(StatsType.SP_STR, 200);

    expect(playerAttributes.persistent_status.str).toBe(99);
    expect(playerAttributes.persistent_status.status_point).toBe(645);
  });
});

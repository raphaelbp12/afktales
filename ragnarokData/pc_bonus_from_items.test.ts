import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { BonusHelpers } from "./BonusHelpers";
import { parseTestScript } from "./parserItemConfig";
import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { weapon_type } from "./ItemDB/weapon_type";
import { map_race_id2mask, Race } from "./map_race_id2mask";
import { equip_pos } from "./ItemDB/types";
import fs from "fs";

describe("pc_bonus from items", () => {
  beforeAll(async () => {
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
  });

  it("should test bonus bStr", async () => {
    const itemString = `bonus bStr,2;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_STR"]).toBe(2);
  });

  it("should test bonus bAgi", async () => {
    const itemString = `bonus bAgi,2;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_AGI"]).toBe(2);
  });

  it("should test bonus bVit", async () => {
    const itemString = `bonus bVit,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_VIT"]).toBe(10);
  });

  it("should test bonus bInt", async () => {
    const itemString = `bonus bInt,2;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_INT"]).toBe(2);
  });

  it("should test bonus bDex", async () => {
    const itemString = `bonus bDex,-1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_DEX"]).toBe(-1);
  });

  it("should test bonus bLuk", async () => {
    const itemString = `bonus bLuk,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_LUK"]).toBe(10);
  });

  it("should test bonus bAtk with lr_flag 0", async () => {
    const itemString = `bonus bAtk,7;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.atk).toBe(7);
  });

  it("should test bonus bAtk with lr_flag 1", async () => {
    const itemString = `bonus bAtk,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.atk).toBe(8);
  });

  it("should test bonus bAtk2 with lr_flag 0", async () => {
    const itemString = `bonus bAtk2,7;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.atk2).toBe(7);
  });

  it("should test bonus bAtk2 with lr_flag 1", async () => {
    const itemString = `bonus bAtk2,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.atk2).toBe(8);
  });

  it("should test bonus bBaseAtk with lr_flag 1", async () => {
    const itemString = `bonus bBaseAtk,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.batk).toBe(8);
  });

  it("should test bonus bDef with lr_flag 1", async () => {
    const itemString = `bonus bDef,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.def).toBe(8);
  });

  it("should test bonus bDef2 with lr_flag 1", async () => {
    const itemString = `bonus bDef2,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.def2).toBe(8);
  });

  it("should test bonus bMdef with lr_flag 1", async () => {
    const itemString = `bonus bMdef,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.mdef).toBe(8);
  });

  it("should test bonus bMdef2 with lr_flag 1", async () => {
    const itemString = `bonus bMdef2,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.mdef2 = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.mdef2).toBe(18);
  });

  it("should test bonus bHit with lr_flag 1", async () => {
    const itemString = `bonus bHit,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.hit = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.hit).toBe(18);
  });

  it("should test bonus bHit with lr_flag 2 arrow_hit", async () => {
    const itemString = `bonus bHit,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.bonus.arrow_hit = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(processedAttributes.bonus.arrow_hit).toBe(18);
  });

  it("should test bonus bFlee with lr_flag 1", async () => {
    const itemString = `bonus bFlee,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.flee = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.flee).toBe(18);
  });

  it("should test bonus bFlee2 with lr_flag 1", async () => {
    const itemString = `bonus bFlee2,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.flee2 = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.flee2).toBe(90); // Adjusted to match the logic of bonus being multiplied by 10
  });

  it("should test bonus bCritical with lr_flag 1", async () => {
    const itemString = `bonus bCritical,5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.cri = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.cri).toBe(60); // Adjusted to match the logic of bonus being multiplied by 10
  });

  // Continue implementing tests for each bonusTypeToStatusPointType case in the switch statement in the same way.

  // For example:

  it("should test bonus bAtkEle with lr_flag 0", async () => {
    const itemString = `bonus bAtkEle,Ele_Wind;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.ele).toBe(ElementEnum.Vento);
  });

  it("should test bonus bAtkEle with lr_flag 1", async () => {
    const itemString = `bonus bAtkEle,Ele_Ghost;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.ele).toBe(ElementEnum.Fantasma);
  });

  it("should test bonus bAtkEle with lr_flag 2", async () => {
    const itemString = `bonus bAtkEle,Ele_Undead;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.arrow_ele).toBe(ElementEnum.MortoVivo); // Depending on weapon type, this could also affect arrow_ele
  });

  // Continue with similar structure for all other cases in the pc_bonus function.
  it("should test bonus bAtkEle with lr_flag 2 and bow", async () => {
    const itemString = `bonus bAtkEle,Ele_Holy;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.weapontype = weapon_type.W_BOW; // Assuming this is a bow type

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.ele).toBe(ElementEnum.Sagrado);
  });

  // Continue with similar structure for all other cases in the pc_bonus function.
  it("should test bonus bAtkEle with lr_flag 2 and musical", async () => {
    const itemString = `bonus bAtkEle,Ele_Holy;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.weapontype = weapon_type.W_MUSICAL; // Assuming this is a bow type

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.arrow_ele).toBe(ElementEnum.Sagrado);
  });

  it("should test bonus bDefEle", async () => {
    const itemString = `bonus bDefEle,Ele_Fire;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.def_ele).toBe(ElementEnum.Fogo);
  });

  it("should test bonus bMaxHP", async () => {
    const itemString = `bonus bMaxHP,100;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.base_status.max_hp = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.max_hp).toBe(110);
  });

  it("should test bonus bMaxSP", async () => {
    const itemString = `bonus bMaxSP,50;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.base_status.max_sp = 23;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.max_sp).toBe(73);
  });

  it("should test bonus bCastrate", async () => {
    const itemString = `bonus bCastrate,-10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.castrate).toBe(-10);
  });

  it("should test bonus bMaxHPrate", async () => {
    const itemString = `bonus bMaxHPrate,5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hprate).toBe(5);
  });

  it("should test bonus bMaxSPrate", async () => {
    const itemString = `bonus bMaxSPrate,3;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sprate).toBe(3);
  });

  it("should test bonus bUseSPrate", async () => {
    const itemString = `bonus bUseSPrate,-5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.dsprate).toBe(-5);
  });

  it("should test bonus bAtkRange with lr_flag 0", async () => {
    const itemString = `bonus bAtkRange,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.range).toBe(10);
  });

  it("should test bonus bAtkRange with lr_flag 1", async () => {
    const itemString = `bonus bAtkRange,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.range).toBe(10);
  });

  it("should test bonus bAtkRange with lr_flag 2", async () => {
    const itemString = `bonus bAtkRange,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.range).toBe(0); // Depending on weapon type, this could also affect arrow_ele
    expect(bst.rhw.range).toBe(0);
  });

  // Continue with similar structure for all other cases in the pc_bonus function.
  it("should test bonus bAtkRange with lr_flag 2 and bow", async () => {
    const itemString = `bonus bAtkRange,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.weapontype = weapon_type.W_BOW; // Assuming this is a bow type

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.range).toBe(10);
  });

  // Continue with similar structure for all other cases in the pc_bonus function.
  it("should test bonus bAtkRange with lr_flag 2 and musical", async () => {
    const itemString = `bonus bAtkRange,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.weapontype = weapon_type.W_MUSICAL; // Assuming this is a bow type

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.range).toBe(0);
  });

  it("should test bonus bSpeedRate", async () => {
    const itemString = `bonus bSpeedRate,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.speed_rate).toBe(-10);
  });

  it("should test bonus bSpeedAddRate", async () => {
    const itemString = `bonus bSpeedAddRate,5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.speed_add_rate).toBe(-5);
  });

  it("should test bonus bAspd", async () => {
    const itemString = `bonus bAspd,2;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.aspd_add).toBe(-20);
  });

  it("should test bonus bAspdRate", async () => {
    const itemString = `bonus bAspdRate,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.aspd_rate).toBe(-10);
  });

  it("should test bonus bHPrecovRate", async () => {
    const itemString = `bonus bHPrecovRate,3;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hprecov_rate).toBe(3);
  });

  it("should test bonus bSPrecovRate", async () => {
    const itemString = `bonus bSPrecovRate,4;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sprecov_rate).toBe(4);
  });

  it("should test bonus bCriticalDef", async () => {
    const itemString = `bonus bCriticalDef,5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.critical_def).toBe(5);
  });

  it("should test bonus bNearAtkDef", async () => {
    const itemString = `bonus bNearAtkDef,6;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.near_attack_def_rate).toBe(6);
  });

  it("should test bonus bLongAtkDef", async () => {
    const itemString = `bonus bLongAtkDef,7;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.long_attack_def_rate).toBe(7);
  });

  it("should test bonus bDoubleRate with lr_flag 0", async () => {
    const itemString = `bonus bDoubleRate,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;
    attributes.bonus.double_rate = 5;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.double_rate).toBe(8);
  });

  it("should test bonus bDoubleRate decrease with lr_flag 0", async () => {
    const itemString = `bonus bDoubleRate,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;
    attributes.bonus.double_rate = 15;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.double_rate).toBe(15);
  });

  it("should test bonus bDoubleAddRate with lr_flag 0", async () => {
    const itemString = `bonus bDoubleAddRate,3;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.double_add_rate).toBe(3);
  });

  it("should test bonus bMatkRate", async () => {
    const itemString = `bonus bMatkRate,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.matk_rate).toBe(10);
    // expect(processedAttributes.matk_rate).toBe(0);
  });

  it("should test bonus bIgnoreDefEle", async () => {
    const itemString = `bonus bIgnoreDefEle,Ele_Dark;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_def_ele).toBe(
      1 << ElementEnum.Sombrio
    );
  });

  it("should test bonus bIgnoreDefEle all", async () => {
    const itemString = `bonus bIgnoreDefEle,Ele_All;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_def_ele).toBe(
      (1 << ElementEnum.Neutro) |
        (1 << ElementEnum.Agua) |
        (1 << ElementEnum.Terra) |
        (1 << ElementEnum.Fogo) |
        (1 << ElementEnum.Vento) |
        (1 << ElementEnum.Veneno) |
        (1 << ElementEnum.Sagrado) |
        (1 << ElementEnum.Sombrio) |
        (1 << ElementEnum.Fantasma) |
        (1 << ElementEnum.MortoVivo)
    );
  });

  it("should test bonus bIgnoreDefRace", async () => {
    const itemString = `bonus bIgnoreDefRace,RC_Plant;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_def_race).toBe(
      map_race_id2mask(Race.RC_PLANT)
    );
  });

  it("should test bonus bAtkRate", async () => {
    const itemString = `bonus bAtkRate,15;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.atk_rate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.atk_rate).toBe(25);
  });

  it("should test bonus bMagicAtkDef", async () => {
    const itemString = `bonus bMagicAtkDef,15;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.magic_def_rate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_def_rate).toBe(25);
  });

  it("should test bonus bMiscAtkDef", async () => {
    const itemString = `bonus bMiscAtkDef,15;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.misc_def_rate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.misc_def_rate).toBe(25);
  });

  it("should test bonus bIgnoreMdefRate", async () => {
    const itemString = `bonus bIgnoreMdefRate,20;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.ignore_mdef[0]).toBe(20); // For RC_NONBOSS
    expect(processedAttributes.ignore_mdef[1]).toBe(20); // For RC_BOSS
  });

  it("should test bonus bIgnoreMdefEle", async () => {
    const itemString = `bonus bIgnoreMdefEle,Ele_Holy;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_mdef_ele).toBe(
      1 << ElementEnum.Sagrado
    );
  });

  it("should test bonus bIgnoreMdefEle all", async () => {
    const itemString = `bonus bIgnoreMdefEle,Ele_All;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_mdef_ele).toBe(
      (1 << ElementEnum.Neutro) |
        (1 << ElementEnum.Agua) |
        (1 << ElementEnum.Terra) |
        (1 << ElementEnum.Fogo) |
        (1 << ElementEnum.Vento) |
        (1 << ElementEnum.Veneno) |
        (1 << ElementEnum.Sagrado) |
        (1 << ElementEnum.Sombrio) |
        (1 << ElementEnum.Fantasma) |
        (1 << ElementEnum.MortoVivo)
    );
  });

  it("should test bonus bIgnoreMdefRace", async () => {
    const itemString = `bonus bIgnoreMdefRace,RC_NonBoss;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_mdef_race).toBe(
      map_race_id2mask(Race.RC_NONBOSS)
    );
  });

  it("should test bonus bPerfectHitRate", async () => {
    const itemString = `bonus bPerfectHitRate,15;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.perfect_hit = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.perfect_hit).toBe(15);
  });

  it("should test bonus bPerfectHitAddRate", async () => {
    const itemString = `bonus bPerfectHitAddRate,7;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.perfect_hit_add).toBe(7);
  });

  it("should test bonus bCriticalRate", async () => {
    const itemString = `bonus bCriticalRate,12;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.critical_rate).toBe(12);
  });

  it("should test bonus bDefRatioAtkEle", async () => {
    const itemString = `bonus bDefRatioAtkEle,Ele_Poison;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.def_ratio_atk_ele).toBe(
      1 << ElementEnum.Veneno
    );
  });

  it("should test bonus bDefRatioAtkEle all", async () => {
    const itemString = `bonus bDefRatioAtkEle,Ele_All;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.def_ratio_atk_ele).toBe(
      (1 << ElementEnum.Neutro) |
        (1 << ElementEnum.Agua) |
        (1 << ElementEnum.Terra) |
        (1 << ElementEnum.Fogo) |
        (1 << ElementEnum.Vento) |
        (1 << ElementEnum.Veneno) |
        (1 << ElementEnum.Sagrado) |
        (1 << ElementEnum.Sombrio) |
        (1 << ElementEnum.Fantasma) |
        (1 << ElementEnum.MortoVivo)
    );
  });

  it("should test bonus bDefRatioAtkRace", async () => {
    const itemString = `bonus bDefRatioAtkRace,RC_All;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.def_ratio_atk_race).toBe(
      map_race_id2mask(Race.RC_ALL)
    );
  });

  it("should test bonus bHitRate", async () => {
    const itemString = `bonus bHitRate,14;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hit_rate).toBe(14);
  });

  it("should test bonus bFleeRate", async () => {
    const itemString = `bonus bFleeRate,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.flee_rate).toBe(8);
  });

  it("should test bonus bFlee2Rate", async () => {
    const itemString = `bonus bFlee2Rate,9;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.flee2_rate).toBe(9);
  });

  it("should test bonus bDefRate", async () => {
    const itemString = `bonus bDefRate,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.def_rate).toBe(10);
  });

  it("should test bonus bDef2Rate", async () => {
    const itemString = `bonus bDef2Rate,11;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.def2_rate).toBe(11);
  });

  it("should test bonus bMdefRate", async () => {
    const itemString = `bonus bMdefRate,12;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.mdef_rate).toBe(12);
  });

  it("should test bonus bMdef2Rate", async () => {
    const itemString = `bonus bMdef2Rate,13;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.mdef2_rate).toBe(13);
  });

  it("should test bonus bRestartFullRecover", async () => {
    const itemString = `bonus bRestartFullRecover,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.restart_full_recover).toBe(true);
  });

  it("should test bonus bNoCastCancel", async () => {
    const itemString = `bonus bNoCastCancel,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_castcancel).toBe(true);
  });

  it("should test bonus bNoCastCancel2", async () => {
    const itemString = `bonus bNoCastCancel2,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_castcancel2).toBe(true);
  });

  it("should test bonus bNoSizeFix", async () => {
    const itemString = `bonus bNoSizeFix,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_sizefix).toBe(true);
  });

  it("should test bonus bNoMagicDamage", async () => {
    const itemString = `bonus bNoMagicDamage,30;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.special_state.no_magic_damage = 20;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_magic_damage).toBe(50);
  });

  it("should test bonus bNoWeaponDamage", async () => {
    const itemString = `bonus bNoWeaponDamage,40;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.special_state.no_weapon_damage = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_weapon_damage).toBe(50);
  });

  it("should test bonus bNoMiscDamage", async () => {
    const itemString = `bonus bNoMiscDamage,25;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.special_state.no_misc_damage = 25;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_misc_damage).toBe(50);
  });

  it("should test bonus bNoGemStone", async () => {
    const itemString = `bonus bNoGemStone,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_gemstone).toBe(true);
  });

  it("should test bonus bIntravision", async () => {
    const itemString = `bonus bIntravision,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.intravision).toBe(true);
  });

  it("should test bonus bNoKnockback", async () => {
    const itemString = `bonus bNoKnockback,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_knockback).toBe(true);
  });

  it("should test bonus bSplashRange", async () => {
    const itemString = `bonus bSplashRange,4;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.splash_range = 3;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.splash_range).toBe(4);
  });

  it("should test bonus bSplashAddRange", async () => {
    const itemString = `bonus bSplashAddRange,2;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.splash_add_range).toBe(2);
  });

  it("should test bonus bShortWeaponDamageReturn", async () => {
    const itemString = `bonus bShortWeaponDamageReturn,5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.short_weapon_damage_return).toBe(5);
  });

  it("should test bonus bLongWeaponDamageReturn", async () => {
    const itemString = `bonus bLongWeaponDamageReturn,6;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.long_weapon_damage_return).toBe(6);
  });

  it("should test bonus bMagicDamageReturn", async () => {
    const itemString = `bonus bMagicDamageReturn,7;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_damage_return).toBe(7);
  });

  it("should test bonus bAllStats", async () => {
    const itemString = `bonus bAllStats,3;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.param_bonus["SP_STR"] = 1;
    attributes.param_bonus["SP_AGI"] = 1;
    attributes.param_bonus["SP_VIT"] = 1;
    attributes.param_bonus["SP_INT"] = 1;
    attributes.param_bonus["SP_DEX"] = 1;
    attributes.param_bonus["SP_LUK"] = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_STR"]).toBe(4);
    expect(processedAttributes.param_bonus["SP_AGI"]).toBe(4);
    expect(processedAttributes.param_bonus["SP_VIT"]).toBe(4);
    expect(processedAttributes.param_bonus["SP_INT"]).toBe(4);
    expect(processedAttributes.param_bonus["SP_DEX"]).toBe(4);
    expect(processedAttributes.param_bonus["SP_LUK"]).toBe(4);
  });

  it("should test bonus bAgiVit", async () => {
    const itemString = `bonus bAgiVit,2;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.param_bonus["SP_AGI"] = 3;
    attributes.param_bonus["SP_VIT"] = 3;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_AGI"]).toBe(5);
    expect(processedAttributes.param_bonus["SP_VIT"]).toBe(5);
  });

  it("should test bonus bAgiDexStr", async () => {
    const itemString = `bonus bAgiDexStr,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.param_bonus["SP_AGI"] = 4;
    attributes.param_bonus["SP_DEX"] = 4;
    attributes.param_bonus["SP_STR"] = 4;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_AGI"]).toBe(5);
    expect(processedAttributes.param_bonus["SP_DEX"]).toBe(5);
    expect(processedAttributes.param_bonus["SP_STR"]).toBe(5);
  });

  it("should test bonus bPerfectHide", async () => {
    const itemString = `bonus bPerfectHide,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.perfect_hiding).toBe(true);
  });

  it("should test bonus bUnbreakable", async () => {
    const itemString = `bonus bUnbreakable,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.unbreakable = 5;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.unbreakable).toBe(15);
  });

  it("should test bonus bUnbreakableWeapon", async () => {
    const itemString = `bonus bUnbreakableWeapon,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_HAND_R
    ).toBe(equip_pos.EQP_HAND_R); // EQP_WEAPON
  });

  it("should test bonus bUnbreakableArmor", async () => {
    const itemString = `bonus bUnbreakableArmor,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_ARMOR
    ).toBe(equip_pos.EQP_ARMOR); // EQP_ARMOR
  });

  it("should test bonus bUnbreakableHelm", async () => {
    const itemString = `bonus bUnbreakableHelm,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip &
        (equip_pos.EQP_HEAD_LOW |
          equip_pos.EQP_HEAD_MID |
          equip_pos.EQP_HEAD_TOP)
    ).toBe(equip_pos.EQP_HELM); // EQP_HELM
  });

  it("should test bonus bUnbreakableShield", async () => {
    const itemString = `bonus bUnbreakableShield,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_SHIELD
    ).toBe(equip_pos.EQP_SHIELD); // EQP_SHIELD
  });

  it("should test bonus bUnbreakableGarment", async () => {
    const itemString = `bonus bUnbreakableGarment,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_GARMENT
    ).toBe(equip_pos.EQP_GARMENT); // EQP_GARMENT
  });

  it("should test bonus bUnbreakableShoes", async () => {
    const itemString = `bonus bUnbreakableShoes,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_SHOES
    ).toBe(equip_pos.EQP_SHOES); // EQP_SHOES
  });

  it("should test bonus bClassChange", async () => {
    const itemString = `bonus bClassChange,300;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.classchange).toBe(300);
  });

  it("should test bonus bLongAtkRate", async () => {
    const itemString = `bonus bLongAtkRate,8;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.long_attack_atk_rate).toBe(8);
  });

  it("should test bonus bBreakWeaponRate", async () => {
    const itemString = `bonus bBreakWeaponRate,9;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.break_weapon_rate).toBe(9);
  });

  it("should test bonus bBreakArmorRate", async () => {
    const itemString = `bonus bBreakArmorRate,7;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.break_armor_rate).toBe(7);
  });

  it("should test bonus bAddStealRate", async () => {
    const itemString = `bonus bAddStealRate,6;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_steal_rate).toBe(6);
  });

  it("should test bonus bDelayRate", async () => {
    const itemString = `bonus bDelayRate,5;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.delayrate).toBe(5);
  });

  it("should test bonus bCritAtkRate", async () => {
    const itemString = `bonus bCritAtkRate,4;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.crit_atk_rate).toBe(4);
  });

  it("should test bonus bNoRegen", async () => {
    const itemString = `bonus bNoRegen,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.regen.state.block & 1).toBe(1);
  });

  it("should test bonus bUnstripableWeapon", async () => {
    const itemString = `bonus bUnstripableWeapon,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_WEAPON
    ).toBe(equip_pos.EQP_WEAPON); // EQP_WEAPON
  });

  it("should test bonus bUnstripableArmor", async () => {
    const itemString = `bonus bUnstripableArmor,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_ARMOR
    ).toBe(equip_pos.EQP_ARMOR); // EQP_ARMOR
  });

  it("should test bonus bUnstripableHelm", async () => {
    const itemString = `bonus bUnstripableHelm,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_HELM
    ).toBe(equip_pos.EQP_HELM); // EQP_HELM
  });

  it("should test bonus bUnstripableShield", async () => {
    const itemString = `bonus bUnstripableShield,1;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_SHIELD
    ).toBe(equip_pos.EQP_SHIELD); // EQP_SHIELD
  });

  it("should test bonus bHPDrainValue with lr_flag 0", async () => {
    const itemString = `bonus bHPDrainValue,10;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].value
    ).toBe(10);
    expect(processedAttributes.right_weapon.hp_drain[Race.RC_BOSS].value).toBe(
      10
    );
  });

  it("should test bonus bHPDrainValue with lr_flag 1", async () => {
    const itemString = `bonus bHPDrainValue,15;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.left_weapon.hp_drain[Race.RC_NONBOSS].value
    ).toBe(15);
    expect(processedAttributes.left_weapon.hp_drain[Race.RC_BOSS].value).toBe(
      15
    );
  });

  it("should test bonus bSPDrainValue with lr_flag 0", async () => {
    const itemString = `bonus bSPDrainValue,20;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].value
    ).toBe(20);
    expect(processedAttributes.right_weapon.sp_drain[Race.RC_BOSS].value).toBe(
      20
    );
  });

  it("should test bonus bSPDrainValue with lr_flag 1", async () => {
    const itemString = `bonus bSPDrainValue,25;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.left_weapon.sp_drain[Race.RC_NONBOSS].value
    ).toBe(25);
    expect(processedAttributes.left_weapon.sp_drain[Race.RC_BOSS].value).toBe(
      25
    );
  });

  it("should test bonus bSPGainValue", async () => {
    const itemString = `bonus bSPGainValue,30;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.sp_gain_value).toBe(30);
  });

  it("should test bonus bHPGainValue", async () => {
    const itemString = `bonus bHPGainValue,35;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.hp_gain_value).toBe(35);
  });

  it("should test bonus bMagicSPGainValue", async () => {
    const itemString = `bonus bMagicSPGainValue,40;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_sp_gain_value).toBe(40);
  });

  it("should test bonus bMagicHPGainValue", async () => {
    const itemString = `bonus bMagicHPGainValue,45;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_hp_gain_value).toBe(45);
  });

  it("should test bonus bHealPower", async () => {
    const itemString = `bonus bHealPower,50;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_heal_rate).toBe(50);
  });

  it("should test bonus bHealPower2", async () => {
    const itemString = `bonus bHealPower2,55;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_heal2_rate).toBe(55);
  });

  it("should test bonus bAddItemHealRate", async () => {
    const itemString = `bonus bAddItemHealRate,60;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.itemhealrate2).toBe(60);
  });

  it("should test bonus bMatk", async () => {
    const itemString = `bonus bMatk,65;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.ematk).toBe(65);
  });

  it("should test bonus bFixedCastrate", async () => {
    const itemString = `bonus bFixedCastrate,-20;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.fixcastrate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.fixcastrate).toBe(30);
  });

  it("should test bonus bFixedCast", async () => {
    const itemString = `bonus bFixedCast,30;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.add_fixcast = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_fixcast).toBe(40);
  });

  it("should test bonus bVariableCastrate", async () => {
    const itemString = `bonus bVariableCastrate,-40;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.varcastrate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.varcastrate).toBe(50);
  });

  it("should test bonus bVariableCast", async () => {
    const itemString = `bonus bVariableCast,50;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.bonus.add_varcast = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_varcast).toBe(60);
  });

  it("should test bonus bAddMaxWeight", async () => {
    const itemString = `bonus bAddMaxWeight,100;`;
    const item = parseTestScript(itemString);
    const attributes = await PlayerAttributes.create("test", 1, item.Bonuses!);
    attributes.max_weight = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.max_weight).toBe(100);
  });
});

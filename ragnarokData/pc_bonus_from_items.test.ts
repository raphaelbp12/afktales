import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { BonusHelpers } from "./BonusHelpers";
import { parseItem } from "./parserItemConfig";
import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { weapon_type } from "./ItemDB/weapon_type";
import { map_race_id2mask, Race } from "./map_race_id2mask";
import { equip_pos } from "./ItemDB/types";

describe("pc_bonus from items", () => {
  it("should test bonus bStr", () => {
    const itemString = `
    Script: <"
      bonus bStr,2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_STR"]).toBe(2);
  });

  it("should test bonus bAgi", () => {
    const itemString = `
    Script: <"
      bonus bAgi,2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_AGI"]).toBe(2);
  });

  it("should test bonus bVit", () => {
    const itemString = `
    Script: <"
      bonus bVit,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_VIT"]).toBe(10);
  });

  it("should test bonus bInt", () => {
    const itemString = `
    Script: <" bonus bInt,2; ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_INT"]).toBe(2);
  });

  it("should test bonus bDex", () => {
    const itemString = `
    Script: <"
      bonus bDex,-1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_DEX"]).toBe(-1);
  });

  it("should test bonus bLuk", () => {
    const itemString = `
    Script: <"
      bonus bLuk,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_LUK"]).toBe(10);
  });

  it("should test bonus bAtk with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bAtk,7;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.atk).toBe(7);
  });

  it("should test bonus bAtk with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bAtk,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.atk).toBe(8);
  });

  it("should test bonus bAtk2 with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bAtk2,7;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.atk2).toBe(7);
  });

  it("should test bonus bAtk2 with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bAtk2,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.atk2).toBe(8);
  });

  it("should test bonus bBaseAtk with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bBaseAtk,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.batk).toBe(8);
  });

  it("should test bonus bDef with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bDef,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.def).toBe(8);
  });

  it("should test bonus bDef2 with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bDef2,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.def2).toBe(8);
  });

  it("should test bonus bMdef with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bMdef,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.mdef).toBe(8);
  });

  it("should test bonus bMdef2 with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bMdef2,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.mdef2 = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.mdef2).toBe(18);
  });

  it("should test bonus bHit with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bHit,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.hit = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.hit).toBe(18);
  });

  it("should test bonus bHit with lr_flag 2 arrow_hit", () => {
    const itemString = `
    Script: <"
      bonus bHit,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.bonus.arrow_hit = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(processedAttributes.bonus.arrow_hit).toBe(18);
  });

  it("should test bonus bFlee with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bFlee,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.flee = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.flee).toBe(18);
  });

  it("should test bonus bFlee2 with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bFlee2,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;
    attributes.base_status.flee2 = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.flee2).toBe(90); // Adjusted to match the logic of bonus being multiplied by 10
  });

  it("should test bonus bCritical with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bCritical,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bAtkEle with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bAtkEle,Ele_Wind;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.ele).toBe(ElementEnum.Vento);
  });

  it("should test bonus bAtkEle with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bAtkEle,Ele_Ghost;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.ele).toBe(ElementEnum.Fantasma);
  });

  it("should test bonus bAtkEle with lr_flag 2", () => {
    const itemString = `
    Script: <"
      bonus bAtkEle,Ele_Undead;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.arrow_ele).toBe(ElementEnum.MortoVivo); // Depending on weapon type, this could also affect arrow_ele
  });

  // Continue with similar structure for all other cases in the pc_bonus function.
  it("should test bonus bAtkEle with lr_flag 2 and bow", () => {
    const itemString = `
    Script: <"
      bonus bAtkEle,Ele_Holy;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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
  it("should test bonus bAtkEle with lr_flag 2 and musical", () => {
    const itemString = `
    Script: <"
      bonus bAtkEle,Ele_Holy;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.weapontype = weapon_type.W_MUSICAL; // Assuming this is a bow type

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.arrow_ele).toBe(ElementEnum.Sagrado);
  });

  it("should test bonus bDefEle", () => {
    const itemString = `
    Script: <"
      bonus bDefEle,Ele_Fire;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.def_ele).toBe(ElementEnum.Fogo);
  });

  it("should test bonus bMaxHP", () => {
    const itemString = `
    Script: <"
      bonus bMaxHP,100;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.base_status.max_hp = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.max_hp).toBe(110);
  });

  it("should test bonus bMaxSP", () => {
    const itemString = `
    Script: <"
      bonus bMaxSP,50;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.base_status.max_sp = 23;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.max_sp).toBe(73);
  });

  it("should test bonus bCastrate", () => {
    const itemString = `
    Script: <"
      bonus bCastrate,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.castrate).toBe(-10);
  });

  it("should test bonus bMaxHPrate", () => {
    const itemString = `
    Script: <"
      bonus bMaxHPrate,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hprate).toBe(5);
  });

  it("should test bonus bMaxSPrate", () => {
    const itemString = `
    Script: <"
      bonus bMaxSPrate,3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sprate).toBe(3);
  });

  it("should test bonus bUseSPrate", () => {
    const itemString = `
    Script: <"
      bonus bUseSPrate,-5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.dsprate).toBe(-5);
  });

  it("should test bonus bAtkRange with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bAtkRange,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.range).toBe(10);
  });

  it("should test bonus bAtkRange with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bAtkRange,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.lhw.range).toBe(10);
  });

  it("should test bonus bAtkRange with lr_flag 2", () => {
    const itemString = `
    Script: <"
      bonus bAtkRange,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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
  it("should test bonus bAtkRange with lr_flag 2 and bow", () => {
    const itemString = `
    Script: <"
      bonus bAtkRange,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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
  it("should test bonus bAtkRange with lr_flag 2 and musical", () => {
    const itemString = `
    Script: <"
      bonus bAtkRange,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 2;
    attributes.weapontype = weapon_type.W_MUSICAL; // Assuming this is a bow type

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.rhw.range).toBe(0);
  });

  it("should test bonus bSpeedRate", () => {
    const itemString = `
    Script: <"
      bonus bSpeedRate,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.speed_rate).toBe(-10);
  });

  it("should test bonus bSpeedAddRate", () => {
    const itemString = `
    Script: <"
      bonus bSpeedAddRate,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.speed_add_rate).toBe(-5);
  });

  it("should test bonus bAspd", () => {
    const itemString = `
    Script: <"
      bonus bAspd,2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.aspd_add).toBe(-20);
  });

  it("should test bonus bAspdRate", () => {
    const itemString = `
    Script: <"
      bonus bAspdRate,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );
    const bst = processedAttributes.base_status;

    expect(bst.aspd_rate).toBe(-10);
  });

  it("should test bonus bHPrecovRate", () => {
    const itemString = `
    Script: <"
      bonus bHPrecovRate,3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hprecov_rate).toBe(3);
  });

  it("should test bonus bSPrecovRate", () => {
    const itemString = `
    Script: <"
      bonus bSPrecovRate,4;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sprecov_rate).toBe(4);
  });

  it("should test bonus bCriticalDef", () => {
    const itemString = `
    Script: <"
      bonus bCriticalDef,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.critical_def).toBe(5);
  });

  it("should test bonus bNearAtkDef", () => {
    const itemString = `
    Script: <"
      bonus bNearAtkDef,6;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.near_attack_def_rate).toBe(6);
  });

  it("should test bonus bLongAtkDef", () => {
    const itemString = `
    Script: <"
      bonus bLongAtkDef,7;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.long_attack_def_rate).toBe(7);
  });

  it("should test bonus bDoubleRate with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bDoubleRate,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;
    attributes.bonus.double_rate = 5;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.double_rate).toBe(8);
  });

  it("should test bonus bDoubleRate decrease with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bDoubleRate,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;
    attributes.bonus.double_rate = 15;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.double_rate).toBe(15);
  });

  it("should test bonus bDoubleAddRate with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bDoubleAddRate,3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.double_add_rate).toBe(3);
  });

  it("should test bonus bMatkRate", () => {
    const itemString = `
    Script: <"
      bonus bMatkRate,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.matk_rate).toBe(10);
    // expect(processedAttributes.matk_rate).toBe(0);
  });

  it("should test bonus bIgnoreDefEle", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreDefEle,Ele_Dark;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_def_ele).toBe(
      1 << ElementEnum.Sombrio
    );
  });

  it("should test bonus bIgnoreDefEle all", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreDefEle,Ele_All;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bIgnoreDefRace", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreDefRace,RC_Plant;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_def_race).toBe(
      map_race_id2mask(Race.RC_PLANT)
    );
  });

  it("should test bonus bAtkRate", () => {
    const itemString = `
    Script: <"
      bonus bAtkRate,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.atk_rate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.atk_rate).toBe(25);
  });

  it("should test bonus bMagicAtkDef", () => {
    const itemString = `
    Script: <"
      bonus bMagicAtkDef,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.magic_def_rate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_def_rate).toBe(25);
  });

  it("should test bonus bMiscAtkDef", () => {
    const itemString = `
    Script: <"
      bonus bMiscAtkDef,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.misc_def_rate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.misc_def_rate).toBe(25);
  });

  it("should test bonus bIgnoreMdefRate", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreMdefRate,20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.ignore_mdef[0]).toBe(20); // For RC_NONBOSS
    expect(processedAttributes.ignore_mdef[1]).toBe(20); // For RC_BOSS
  });

  it("should test bonus bIgnoreMdefEle", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreMdefEle,Ele_Holy;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_mdef_ele).toBe(
      1 << ElementEnum.Sagrado
    );
  });

  it("should test bonus bIgnoreMdefEle all", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreMdefEle,Ele_All;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bIgnoreMdefRace", () => {
    const itemString = `
    Script: <"
      bonus bIgnoreMdefRace,RC_NonBoss;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.ignore_mdef_race).toBe(
      map_race_id2mask(Race.RC_NONBOSS)
    );
  });

  it("should test bonus bPerfectHitRate", () => {
    const itemString = `
    Script: <"
      bonus bPerfectHitRate,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.perfect_hit = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.perfect_hit).toBe(15);
  });

  it("should test bonus bPerfectHitAddRate", () => {
    const itemString = `
    Script: <"
      bonus bPerfectHitAddRate,7;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.perfect_hit_add).toBe(7);
  });

  it("should test bonus bCriticalRate", () => {
    const itemString = `
    Script: <"
      bonus bCriticalRate,12;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.critical_rate).toBe(12);
  });

  it("should test bonus bDefRatioAtkEle", () => {
    const itemString = `
    Script: <"
      bonus bDefRatioAtkEle,Ele_Poison;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.def_ratio_atk_ele).toBe(
      1 << ElementEnum.Veneno
    );
  });

  it("should test bonus bDefRatioAtkEle all", () => {
    const itemString = `
    Script: <"
      bonus bDefRatioAtkEle,Ele_All;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bDefRatioAtkRace", () => {
    const itemString = `
    Script: <"
      bonus bDefRatioAtkRace,RC_All;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.def_ratio_atk_race).toBe(
      map_race_id2mask(Race.RC_ALL)
    );
  });

  it("should test bonus bHitRate", () => {
    const itemString = `
    Script: <"
      bonus bHitRate,14;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hit_rate).toBe(14);
  });

  it("should test bonus bFleeRate", () => {
    const itemString = `
    Script: <"
      bonus bFleeRate,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.flee_rate).toBe(8);
  });

  it("should test bonus bFlee2Rate", () => {
    const itemString = `
    Script: <"
      bonus bFlee2Rate,9;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.flee2_rate).toBe(9);
  });

  it("should test bonus bDefRate", () => {
    const itemString = `
    Script: <"
      bonus bDefRate,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.def_rate).toBe(10);
  });

  it("should test bonus bDef2Rate", () => {
    const itemString = `
    Script: <"
      bonus bDef2Rate,11;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.def2_rate).toBe(11);
  });

  it("should test bonus bMdefRate", () => {
    const itemString = `
    Script: <"
      bonus bMdefRate,12;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.mdef_rate).toBe(12);
  });

  it("should test bonus bMdef2Rate", () => {
    const itemString = `
    Script: <"
      bonus bMdef2Rate,13;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.mdef2_rate).toBe(13);
  });

  it("should test bonus bRestartFullRecover", () => {
    const itemString = `
    Script: <"
      bonus bRestartFullRecover,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.restart_full_recover).toBe(true);
  });

  it("should test bonus bNoCastCancel", () => {
    const itemString = `
    Script: <"
      bonus bNoCastCancel,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_castcancel).toBe(true);
  });

  it("should test bonus bNoCastCancel2", () => {
    const itemString = `
    Script: <"
      bonus bNoCastCancel2,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_castcancel2).toBe(true);
  });

  it("should test bonus bNoSizeFix", () => {
    const itemString = `
    Script: <"
      bonus bNoSizeFix,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_sizefix).toBe(true);
  });

  it("should test bonus bNoMagicDamage", () => {
    const itemString = `
    Script: <"
      bonus bNoMagicDamage,30;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.special_state.no_magic_damage = 20;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_magic_damage).toBe(50);
  });

  it("should test bonus bNoWeaponDamage", () => {
    const itemString = `
    Script: <"
      bonus bNoWeaponDamage,40;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.special_state.no_weapon_damage = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_weapon_damage).toBe(50);
  });

  it("should test bonus bNoMiscDamage", () => {
    const itemString = `
    Script: <"
      bonus bNoMiscDamage,25;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.special_state.no_misc_damage = 25;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_misc_damage).toBe(50);
  });

  it("should test bonus bNoGemStone", () => {
    const itemString = `
    Script: <"
      bonus bNoGemStone,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_gemstone).toBe(true);
  });

  it("should test bonus bIntravision", () => {
    const itemString = `
    Script: <"
      bonus bIntravision,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.intravision).toBe(true);
  });

  it("should test bonus bNoKnockback", () => {
    const itemString = `
    Script: <"
      bonus bNoKnockback,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.no_knockback).toBe(true);
  });

  it("should test bonus bSplashRange", () => {
    const itemString = `
    Script: <"
      bonus bSplashRange,4;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.splash_range = 3;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.splash_range).toBe(4);
  });

  it("should test bonus bSplashAddRange", () => {
    const itemString = `
    Script: <"
      bonus bSplashAddRange,2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.splash_add_range).toBe(2);
  });

  it("should test bonus bShortWeaponDamageReturn", () => {
    const itemString = `
    Script: <"
      bonus bShortWeaponDamageReturn,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.short_weapon_damage_return).toBe(5);
  });

  it("should test bonus bLongWeaponDamageReturn", () => {
    const itemString = `
    Script: <"
      bonus bLongWeaponDamageReturn,6;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.long_weapon_damage_return).toBe(6);
  });

  it("should test bonus bMagicDamageReturn", () => {
    const itemString = `
    Script: <"
      bonus bMagicDamageReturn,7;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_damage_return).toBe(7);
  });

  it("should test bonus bAllStats", () => {
    const itemString = `
    Script: <"
      bonus bAllStats,3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bAgiVit", () => {
    const itemString = `
    Script: <"
      bonus bAgiVit,2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.param_bonus["SP_AGI"] = 3;
    attributes.param_bonus["SP_VIT"] = 3;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.param_bonus["SP_AGI"]).toBe(5);
    expect(processedAttributes.param_bonus["SP_VIT"]).toBe(5);
  });

  it("should test bonus bAgiDexStr", () => {
    const itemString = `
    Script: <"
      bonus bAgiDexStr,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bPerfectHide", () => {
    const itemString = `
    Script: <"
      bonus bPerfectHide,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.special_state.perfect_hiding).toBe(true);
  });

  it("should test bonus bUnbreakable", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakable,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.unbreakable = 5;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.unbreakable).toBe(15);
  });

  it("should test bonus bUnbreakableWeapon", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakableWeapon,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_HAND_R
    ).toBe(equip_pos.EQP_HAND_R); // EQP_WEAPON
  });

  it("should test bonus bUnbreakableArmor", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakableArmor,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_ARMOR
    ).toBe(equip_pos.EQP_ARMOR); // EQP_ARMOR
  });

  it("should test bonus bUnbreakableHelm", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakableHelm,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

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

  it("should test bonus bUnbreakableShield", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakableShield,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_SHIELD
    ).toBe(equip_pos.EQP_SHIELD); // EQP_SHIELD
  });

  it("should test bonus bUnbreakableGarment", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakableGarment,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_GARMENT
    ).toBe(equip_pos.EQP_GARMENT); // EQP_GARMENT
  });

  it("should test bonus bUnbreakableShoes", () => {
    const itemString = `
    Script: <"
      bonus bUnbreakableShoes,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unbreakable_equip & equip_pos.EQP_SHOES
    ).toBe(equip_pos.EQP_SHOES); // EQP_SHOES
  });

  it("should test bonus bClassChange", () => {
    const itemString = `
    Script: <"
      bonus bClassChange,300;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.classchange).toBe(300);
  });

  it("should test bonus bLongAtkRate", () => {
    const itemString = `
    Script: <"
      bonus bLongAtkRate,8;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.long_attack_atk_rate).toBe(8);
  });

  it("should test bonus bBreakWeaponRate", () => {
    const itemString = `
    Script: <"
      bonus bBreakWeaponRate,9;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.break_weapon_rate).toBe(9);
  });

  it("should test bonus bBreakArmorRate", () => {
    const itemString = `
    Script: <"
      bonus bBreakArmorRate,7;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.break_armor_rate).toBe(7);
  });

  it("should test bonus bAddStealRate", () => {
    const itemString = `
    Script: <"
      bonus bAddStealRate,6;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_steal_rate).toBe(6);
  });

  it("should test bonus bDelayRate", () => {
    const itemString = `
    Script: <"
      bonus bDelayRate,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.delayrate).toBe(5);
  });

  it("should test bonus bCritAtkRate", () => {
    const itemString = `
    Script: <"
      bonus bCritAtkRate,4;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.crit_atk_rate).toBe(4);
  });

  it("should test bonus bNoRegen", () => {
    const itemString = `
    Script: <"
      bonus bNoRegen,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.regen.state.block & 1).toBe(1);
  });

  it("should test bonus bUnstripableWeapon", () => {
    const itemString = `
    Script: <"
      bonus bUnstripableWeapon,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_WEAPON
    ).toBe(equip_pos.EQP_WEAPON); // EQP_WEAPON
  });

  it("should test bonus bUnstripableArmor", () => {
    const itemString = `
    Script: <"
      bonus bUnstripableArmor,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_ARMOR
    ).toBe(equip_pos.EQP_ARMOR); // EQP_ARMOR
  });

  it("should test bonus bUnstripableHelm", () => {
    const itemString = `
    Script: <"
      bonus bUnstripableHelm,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_HELM
    ).toBe(equip_pos.EQP_HELM); // EQP_HELM
  });

  it("should test bonus bUnstripableShield", () => {
    const itemString = `
    Script: <"
      bonus bUnstripableShield,1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.bonus.unstripable_equip & equip_pos.EQP_SHIELD
    ).toBe(equip_pos.EQP_SHIELD); // EQP_SHIELD
  });

  it("should test bonus bHPDrainValue with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bHPDrainValue,10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bHPDrainValue with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bHPDrainValue,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bSPDrainValue with lr_flag 0", () => {
    const itemString = `
    Script: <"
      bonus bSPDrainValue,20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bSPDrainValue with lr_flag 1", () => {
    const itemString = `
    Script: <"
      bonus bSPDrainValue,25;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
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

  it("should test bonus bSPGainValue", () => {
    const itemString = `
    Script: <"
      bonus bSPGainValue,30;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.sp_gain_value).toBe(30);
  });

  it("should test bonus bHPGainValue", () => {
    const itemString = `
    Script: <"
      bonus bHPGainValue,35;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.hp_gain_value).toBe(35);
  });

  it("should test bonus bMagicSPGainValue", () => {
    const itemString = `
    Script: <"
      bonus bMagicSPGainValue,40;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_sp_gain_value).toBe(40);
  });

  it("should test bonus bMagicHPGainValue", () => {
    const itemString = `
    Script: <"
      bonus bMagicHPGainValue,45;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.magic_hp_gain_value).toBe(45);
  });

  it("should test bonus bHealPower", () => {
    const itemString = `
    Script: <"
      bonus bHealPower,50;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_heal_rate).toBe(50);
  });

  it("should test bonus bHealPower2", () => {
    const itemString = `
    Script: <"
      bonus bHealPower2,55;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_heal2_rate).toBe(55);
  });

  it("should test bonus bAddItemHealRate", () => {
    const itemString = `
    Script: <"
      bonus bAddItemHealRate,60;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.itemhealrate2).toBe(60);
  });

  it("should test bonus bMatk", () => {
    const itemString = `
    Script: <"
      bonus bMatk,65;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.ematk).toBe(65);
  });

  it("should test bonus bFixedCastrate", () => {
    const itemString = `
    Script: <"
      bonus bFixedCastrate,-20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.fixcastrate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.fixcastrate).toBe(30);
  });

  it("should test bonus bFixedCast", () => {
    const itemString = `
    Script: <"
      bonus bFixedCast,30;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.add_fixcast = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_fixcast).toBe(40);
  });

  it("should test bonus bVariableCastrate", () => {
    const itemString = `
    Script: <"
      bonus bVariableCastrate,-40;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.varcastrate = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.varcastrate).toBe(50);
  });

  it("should test bonus bVariableCast", () => {
    const itemString = `
    Script: <"
      bonus bVariableCast,50;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.bonus.add_varcast = 10;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.add_varcast).toBe(60);
  });

  it("should test bonus bAddMaxWeight", () => {
    const itemString = `
    Script: <"
      bonus bAddMaxWeight,100;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes(item.Bonuses!);
    attributes.max_weight = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.max_weight).toBe(100);
  });
});

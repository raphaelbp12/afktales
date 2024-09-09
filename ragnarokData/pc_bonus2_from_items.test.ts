import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { BonusHelpers } from "./BonusHelpers";
import { parseItem } from "./parserItemConfig";
import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { Race, Race2 } from "./map_race_id2mask";
import { Effect } from "./AutoTriggerFlag";
import { Sizes } from "./utils";
import { e_skill } from "./SkillsEnum";

describe("pc_bonus2 from items", () => {
  it("should test bonus bAddEle positive lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEle,Ele_Ghost,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.addele[ElementEnum.Fantasma]).toBe(
      15
    );
  });

  it("should test bonus bAddEle negative lr_flag 1", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEle,Ele_Neutral,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.left_weapon.addele[ElementEnum.Neutro]).toBe(
      -10
    );
  });

  it("should test bonus bAddEle negative lr_flag 2", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEle,Ele_Neutral,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.arrow_addele[ElementEnum.Neutro]).toBe(-10);
  });
  it("should test bonus bAddRace positive lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddRace, RC_All, 4;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.addrace[Race.RC_BOSS]).toBe(4);
    expect(processedAttributes.right_weapon.addrace[Race.RC_NONBOSS]).toBe(4);
  });

  it("should test bonus bAddRace lr_flag 1", () => {
    const itemString = `
    Script: <"
		bonus2 bAddRace, RC_Dragon, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.left_weapon.addrace[Race.RC_DRAGON]).toBe(5);
  });

  it("should test bonus bAddRace negative lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddRace,RC_DemiPlayer,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.addrace[Race.RC_DEMIHUMAN]).toBe(
      -10
    );
    expect(processedAttributes.right_weapon.addrace[Race.RC_PLAYER]).toBe(-10);
  });

  it("should test bonus bAddRace negative lr_flag 2", () => {
    const itemString = `
    Script: <"
		bonus2 bAddRace,RC_DemiPlayer,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.arrow_addrace[Race.RC_DEMIHUMAN]).toBe(-10);
    expect(processedAttributes.arrow_addrace[Race.RC_PLAYER]).toBe(-10);
  });

  it("should test bonus bAddSize Size_Medium lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddSize,Size_Medium,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.addsize[Sizes.Size_Medium]).toBe(
      15
    );
  });

  it("should test bonus bSubEle Ele_All negative lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSubEle,Ele_All,-20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subele[ElementEnum.Neutro]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Agua]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Terra]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Fogo]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Vento]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Veneno]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Sagrado]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Sombrio]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.Fantasma]).toBe(-20);
    expect(processedAttributes.subele[ElementEnum.MortoVivo]).toBe(-20);
  });

  it("should test bonus bAddEle positive lr_flag 1", () => {
    const itemString = `
    Script: <"
		bonus2 bSubEle,Ele_Undead,20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subele[ElementEnum.MortoVivo]).toBe(20);
  });

  it("should test bonus bAddEle negative lr_flag 2", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEle,Ele_Neutral,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subele[ElementEnum.Neutro]).toBe(0);
  });

  it("should test bonus bSubRace positive lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSubRace, RC_All, 4;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subrace[Race.RC_BOSS]).toBe(4);
    expect(processedAttributes.subrace[Race.RC_NONBOSS]).toBe(4);
  });

  it("should test bonus bSubRace lr_flag 1", () => {
    const itemString = `
    Script: <"
		bonus2 bSubRace, RC_Dragon, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 1;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subrace[Race.RC_DRAGON]).toBe(5);
  });

  it("should test bonus bSubRace negative lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSubRace, RC_NonDemiPlayer, -300;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subrace[Race.RC_FORMLESS]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_UNDEAD]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_BRUTE]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_PLANT]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_INSECT]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_FISH]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_DEMON]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_ANGEL]).toBe(-300);
    expect(processedAttributes.subrace[Race.RC_DRAGON]).toBe(-300);
  });

  it("should test bonus bSubRace negative lr_flag 2", () => {
    const itemString = `
    Script: <"
		bonus2 bSubRace,RC_DemiPlayer,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 2;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subrace[Race.RC_DEMIHUMAN]).toBe(0);
    expect(processedAttributes.subrace[Race.RC_PLAYER]).toBe(0);
  });

  it("should test bonus bSubRace negative lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSubRace,RC_DemiPlayer,-10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subrace[Race.RC_DEMIHUMAN]).toBe(-10);
    expect(processedAttributes.subrace[Race.RC_PLAYER]).toBe(-10);
  });

  it("should test bonus bAddEff Eff_Fear lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEff, Eff_Fear, 1000;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    const effect = processedAttributes.addeff[0];
    expect(effect.id).toBe(Effect.Eff_Fear);
    expect(effect.rate).toBe(1000);
    expect(effect.flag).toBe(30);
  });

  it("should test bonus bAddEff Eff_Blind Eff_Stun Eff_Poison Eff_Freeze lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddEff,Eff_Blind,100;
		bonus2 bAddEff,Eff_Stun,100;
		bonus2 bAddEff,Eff_Poison,100;
		bonus2 bAddEff,Eff_Freeze,100;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    const effect0 = processedAttributes.addeff[0];
    expect(effect0.id).toBe(Effect.Eff_Blind);
    expect(effect0.rate).toBe(100);
    expect(effect0.flag).toBe(30);

    const effect1 = processedAttributes.addeff[1];
    expect(effect1.id).toBe(Effect.Eff_Stun);
    expect(effect1.rate).toBe(100);
    expect(effect1.flag).toBe(30);

    const effect2 = processedAttributes.addeff[2];
    expect(effect2.id).toBe(Effect.Eff_Poison);
    expect(effect2.rate).toBe(100);
    expect(effect2.flag).toBe(30);

    const effect3 = processedAttributes.addeff[3];
    expect(effect3.id).toBe(Effect.Eff_Freeze);
    expect(effect3.rate).toBe(100);
    expect(effect3.flag).toBe(30);
  });

  it("should test bonus bAddEff2 Eff_Fear lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEff2, Eff_Fear, 1000;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    const effect = processedAttributes.addeff[0];
    expect(effect.id).toBe(Effect.Eff_Fear);
    expect(effect.rate).toBe(1000);
    expect(effect.flag).toBe(29);
  });

  it("should test bonus bAddEff2 Eff_Blind Eff_Stun Eff_Poison Eff_Freeze lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddEff2,Eff_Blind,100;
		bonus2 bAddEff2,Eff_Stun,100;
		bonus2 bAddEff2,Eff_Poison,100;
		bonus2 bAddEff2,Eff_Freeze,100;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    const effect0 = processedAttributes.addeff[0];
    expect(effect0.id).toBe(Effect.Eff_Blind);
    expect(effect0.rate).toBe(100);
    expect(effect0.flag).toBe(29);

    const effect1 = processedAttributes.addeff[1];
    expect(effect1.id).toBe(Effect.Eff_Stun);
    expect(effect1.rate).toBe(100);
    expect(effect1.flag).toBe(29);

    const effect2 = processedAttributes.addeff[2];
    expect(effect2.id).toBe(Effect.Eff_Poison);
    expect(effect2.rate).toBe(100);
    expect(effect2.flag).toBe(29);

    const effect3 = processedAttributes.addeff[3];
    expect(effect3.id).toBe(Effect.Eff_Freeze);
    expect(effect3.rate).toBe(100);
    expect(effect3.flag).toBe(29);
  });

  it("should test bonus bResEff Eff_Fear lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bResEff,Eff_Confusion,5000;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.reseff[Effect.Eff_Confusion]).toBe(5000);
  });

  it("should test bonus bResEff Eff_Poison Eff_Curse Eff_Silence Eff_Confusion Eff_Blind lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bResEff,Eff_Poison,5000;
		bonus2 bResEff,Eff_Curse,5000;
		bonus2 bResEff,Eff_Silence,5000;
		bonus2 bResEff,Eff_Confusion,5000;
		bonus2 bResEff,Eff_Blind,5000;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.reseff[Effect.Eff_Poison]).toBe(5000);
    expect(processedAttributes.reseff[Effect.Eff_Curse]).toBe(5000);
    expect(processedAttributes.reseff[Effect.Eff_Silence]).toBe(5000);
    expect(processedAttributes.reseff[Effect.Eff_Confusion]).toBe(5000);
    expect(processedAttributes.reseff[Effect.Eff_Blind]).toBe(5000);
  });

  it("should test bonus bMagicAddEle Ele_Wind lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bMagicAddEle,Ele_Wind,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addele[ElementEnum.Vento]).toBe(5);
  });

  it("should test bonus bMagicAddEle Ele_Fire Ele_Wind Ele_Water Ele_Earth lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bMagicAddEle,Ele_Fire,5;
		bonus2 bMagicAddEle,Ele_Wind,5;
		bonus2 bMagicAddEle,Ele_Water,5;
		bonus2 bMagicAddEle,Ele_Earth,5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addele[ElementEnum.Fogo]).toBe(5);
    expect(processedAttributes.magic_addele[ElementEnum.Vento]).toBe(5);
    expect(processedAttributes.magic_addele[ElementEnum.Agua]).toBe(5);
    expect(processedAttributes.magic_addele[ElementEnum.Terra]).toBe(5);
  });

  it("should test bonus bMagicAddRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bMagicAddRace,RC_DemiPlayer,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addrace[Race.RC_DEMIHUMAN]).toBe(15);
    expect(processedAttributes.magic_addrace[Race.RC_PLAYER]).toBe(15);
  });

  it("should test bonus bMagicAddRace RC_All lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bMagicAddRace,RC_All,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addrace[Race.RC_BOSS]).toBe(15);
    expect(processedAttributes.magic_addrace[Race.RC_NONBOSS]).toBe(15);
  });

  it("should test bonus bMagicAddRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bMagicAddRace,RC_DemiPlayer,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addrace[Race.RC_DEMIHUMAN]).toBe(15);
    expect(processedAttributes.magic_addrace[Race.RC_PLAYER]).toBe(15);
  });

  it("should test bonus bMagicAddSize Size_Medium lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bMagicAddSize,Size_Medium,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addsize[Sizes.Size_Medium]).toBe(15);
  });

  it("should test bonus bMagicAddSize Size_Small Size_Medium Size_Large lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bMagicAddSize,Size_Small,15;
		bonus2 bMagicAddSize,Size_Medium,15;
		bonus2 bMagicAddSize,Size_Large,15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_addsize[Sizes.Size_Small]).toBe(15);
    expect(processedAttributes.magic_addsize[Sizes.Size_Medium]).toBe(15);
    expect(processedAttributes.magic_addsize[Sizes.Size_Large]).toBe(15);
  });
  //*********************************************** */

  it("should test bonus bMagicAtkEle Ele_Fire lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bMagicAtkEle, Ele_Fire, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.magic_atk_ele[ElementEnum.Fogo]).toBe(10);
  });

  it("should test bonus bAddDamageClass 1916 lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddDamageClass, 1916, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.add_dmg[0].class_).toBe(1916); // Assuming Class_Archer corresponds to 4
    expect(processedAttributes.right_weapon.add_dmg[0].rate).toBe(5);
  });

  it("should test bonus bAddMagicDamageClass 1917 lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddMagicDamageClass, 1917, 20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.add_mdmg[0].class_).toBe(1917); // Assuming Class_Mage corresponds to 2
    expect(processedAttributes.add_mdmg[0].rate).toBe(20);
  });

  it("should test bonus bAddDefClass 1026 lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddDefClass, 1026, -100;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.add_def[0].class_).toBe(1026); // Assuming Class_Swordsman corresponds to 1
    expect(processedAttributes.add_def[0].rate).toBe(-100);
  });

  it("should test bonus bAddMdefClass 1026 lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddMdefClass, 1026, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.add_mdef[0].class_).toBe(1026); // Assuming Class_Priest corresponds to 5
    expect(processedAttributes.add_mdef[0].rate).toBe(15);
  });

  it("should test bonus bHPDrainRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPDrainRate, 10, 2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].rate
    ).toBe(10);
    expect(processedAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].per).toBe(
      2
    );
  });

  it("should test bonus bHPDrainValue lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPDrainValue, 50, 1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].value
    ).toBe(50);
    expect(
      processedAttributes.right_weapon.hp_drain[Race.RC_NONBOSS].type
    ).toBe(1);
  });

  it("should test bonus bSPDrainRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPDrainRate, 5, 1;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].rate
    ).toBe(5);
    expect(processedAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].per).toBe(
      1
    );
  });

  it("should test bonus bSPDrainValue lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPDrainValue, 20, 2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].value
    ).toBe(20);
    expect(
      processedAttributes.right_weapon.sp_drain[Race.RC_NONBOSS].type
    ).toBe(2);
  });

  it("should test bonus bHPVanishRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPVanishRate, 10, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.hp_vanish_rate).toBe(10);
    expect(processedAttributes.bonus.hp_vanish_per).toBe(5);
  });

  it("should test bonus bSPVanishRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPVanishRate, 8, 3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.sp_vanish_rate).toBe(8);
    expect(processedAttributes.bonus.sp_vanish_per).toBe(3);
  });

  it("should test bonus bGetZenyNum lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bGetZenyNum, 100, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.get_zeny_rate).toBe(5);
    expect(processedAttributes.bonus.get_zeny_num).toBe(100);
  });

  it("should test bonus bAddGetZenyNum lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddGetZenyNum, 50, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.bonus.get_zeny_rate).toBe(10);
    expect(processedAttributes.bonus.get_zeny_num).toBe(50);
  });

  it("should test bonus bWeaponComaEle Ele_Fire lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bWeaponComaEle, Ele_Fire, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.weapon_coma_ele[ElementEnum.Fogo]).toBe(5);
  });

  it("should test bonus bWeaponComaRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bWeaponComaRace, RC_DemiPlayer, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.weapon_coma_race[Race.RC_DEMIHUMAN]).toBe(10);
    expect(processedAttributes.weapon_coma_race[Race.RC_PLAYER]).toBe(10);
  });

  it("should test bonus bWeaponAtk lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bWeaponAtk, 0, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.weapon_atk[0]).toBe(15);
  });

  it("should test bonus bWeaponAtkRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bWeaponAtkRate, 1, 20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.weapon_atk_rate[1]).toBe(20);
  });

  it("should test bonus bCriticalAddRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bCriticalAddRace, RC_DemiPlayer, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.critaddrace[Race.RC_DEMIHUMAN]).toBe(100);
    expect(processedAttributes.critaddrace[Race.RC_PLAYER]).toBe(100);
  });

  it("should test bonus bAddEffWhenHit Eff_Stun lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddEffWhenHit, Eff_Stun, 1000;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    const effect = processedAttributes.addeff2[0];
    expect(effect.id).toBe(Effect.Eff_Stun);
    expect(effect.rate).toBe(1000);
    expect(effect.flag).toBe(30);
  });

  it("should test bonus bSkillAtk PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillAtk, "PR_MAGNUS", 30;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillatk[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillatk[0].val).toBe(30);
  });

  it("should test bonus bSkillAtk PR_MAGNUS MC_MAMMONITE lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillAtk, "PR_MAGNUS", 30;
		bonus2 bSkillAtk, "MC_MAMMONITE", 20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillatk[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillatk[0].val).toBe(30);
    expect(processedAttributes.skillatk[1].id).toBe(e_skill.MC_MAMMONITE);
    expect(processedAttributes.skillatk[1].val).toBe(20);
  });

  it("should test bonus bSkillHeal AL_HEAL lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSkillHeal,AL_HEAL,3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillheal[0].id).toBe(e_skill.AL_HEAL);
    expect(processedAttributes.skillheal[0].val).toBe(3);
  });

  it("should test bonus bSkillHeal AL_HEAL AM_POTIONPITCHER lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSkillHeal,AL_HEAL,3;
		bonus2 bSkillHeal, "AM_POTIONPITCHER", 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillheal[0].id).toBe(e_skill.AL_HEAL);
    expect(processedAttributes.skillheal[0].val).toBe(3);
    expect(processedAttributes.skillheal[1].id).toBe(e_skill.AM_POTIONPITCHER);
    expect(processedAttributes.skillheal[1].val).toBe(10);
  });

  it("should test bonus bSkillHeal2 skill_id lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSkillHeal2, "AM_POTIONPITCHER", 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillheal2[0].id).toBe(e_skill.AM_POTIONPITCHER);
    expect(processedAttributes.skillheal2[0].val).toBe(10);
  });

  it("should test bonus bSkillHeal2 skill_id lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bSkillHeal2, "AM_POTIONPITCHER", 10;
		bonus2 bSkillHeal2, "AL_HEAL", 10;
		bonus2 bSkillHeal2, "AM_POTIONPITCHER", 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillheal2[0].id).toBe(e_skill.AM_POTIONPITCHER);
    expect(processedAttributes.skillheal2[0].val).toBe(20);
    expect(processedAttributes.skillheal2[1].id).toBe(e_skill.AL_HEAL);
    expect(processedAttributes.skillheal2[1].val).toBe(10);
  });

  it("should test bonus bAddSkillBlow BA_MUSICALSTRIKE lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddSkillBlow, BA_MUSICALSTRIKE, 25;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillblown[0].id).toBe(e_skill.BA_MUSICALSTRIKE);
    expect(processedAttributes.skillblown[0].val).toBe(25);
  });

  it("should test bonus bAddSkillBlow BA_MUSICALSTRIKE CG_ARROWVULCAN lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddSkillBlow,BA_MUSICALSTRIKE,2;
		bonus2 bAddSkillBlow,CG_ARROWVULCAN,3;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillblown[0].id).toBe(e_skill.BA_MUSICALSTRIKE);
    expect(processedAttributes.skillblown[0].val).toBe(2);
    expect(processedAttributes.skillblown[1].id).toBe(e_skill.CG_ARROWVULCAN);
    expect(processedAttributes.skillblown[1].val).toBe(3);
  });

  it("should test bonus bCastrate HW_MAGICPOWER lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bCastrate, HW_MAGICPOWER, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillcast[0].id).toBe(e_skill.HW_MAGICPOWER);
    expect(processedAttributes.skillcast[0].val).toBe(10);
  });

  it("should test bonus bCastrate HW_MAGICPOWER PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bCastrate, HW_MAGICPOWER, -10;
		bonus2 bCastrate,PR_MAGNUS,-25;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillcast[0].id).toBe(e_skill.HW_MAGICPOWER);
    expect(processedAttributes.skillcast[0].val).toBe(-10);
    expect(processedAttributes.skillcast[1].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillcast[1].val).toBe(-25);
  });

  it("should test bonus bFixedCastrate HW_MAGICPOWER lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bFixedCastrate, HW_MAGICPOWER, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillfixcastrate[0].id).toBe(
      e_skill.HW_MAGICPOWER
    );
    expect(processedAttributes.skillfixcastrate[0].val).toBe(-15);
  });

  it("should test bonus bFixedCastrate HW_MAGICPOWER PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bFixedCastrate, HW_MAGICPOWER, 15;
		  bonus2 bFixedCastrate, PR_MAGNUS, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillfixcastrate[0].id).toBe(
      e_skill.HW_MAGICPOWER
    );
    expect(processedAttributes.skillfixcastrate[0].val).toBe(-15);

    expect(processedAttributes.skillfixcastrate[1].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillfixcastrate[1].val).toBe(-15);
  });

  it("should test bonus bHPLossRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPLossRate, 10, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hp_loss.value).toBe(10);
    expect(processedAttributes.hp_loss.rate).toBe(5);
  });

  it("should test bonus bHPRegenRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPRegenRate, 20, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hp_regen.value).toBe(20);
    expect(processedAttributes.hp_regen.rate).toBe(10);
  });

  it("should test bonus bAddRace2 RC2_Scaraba lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddRace2, RC2_Scaraba, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.addrace2[Race2.RC2_SCARABA]).toBe(
      15
    );
  });

  it("should test bonus bAddRace2 RC2_Scaraba RC2_Guardian lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddRace2, RC2_Scaraba, 15;
      bonus2 bAddRace2,RC2_Guardian,40;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.right_weapon.addrace2[Race2.RC2_SCARABA]).toBe(
      15
    );
    expect(processedAttributes.right_weapon.addrace2[Race2.RC2_GUARDIAN]).toBe(
      40
    );
  });

  it("should test bonus bSubSize Size_Large lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSubSize, Size_Large, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subsize[Sizes.Size_Large]).toBe(10);
  });

  it("should test bonus bSubRace2 RC2_Guardian lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSubRace2, RC2_Guardian, 20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subrace2[Race2.RC2_GUARDIAN]).toBe(20);
  });

  it("should test bonus bAddItemHealRate item_id lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bAddItemHealRate, 501, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.itemhealrate[0].nameid).toBe(501);
    expect(processedAttributes.itemhealrate[0].rate).toBe(10);
  });

  it("should test bonus bAddItemHealRate Yellow_Potion lr_flag 0", () => {
    const itemString = `
    Script: <"
		bonus2 bAddItemHealRate,Yellow_Potion,20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.itemhealrate[0].nameid).toBe(503);
    expect(processedAttributes.itemhealrate[0].rate).toBe(20);
  });

  it("should test bonus bExpAddRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bExpAddRace, RC_DemiPlayer, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.expaddrace[Race.RC_DEMIHUMAN]).toBe(10);
    expect(processedAttributes.expaddrace[Race.RC_PLAYER]).toBe(10);
  });

  it("should test bonus bSPGainRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPGainRace, RC_DemiPlayer, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sp_gain_race[Race.RC_DEMIHUMAN]).toBe(5);
    expect(processedAttributes.sp_gain_race[Race.RC_PLAYER]).toBe(5);
  });

  it("should test bonus bSPLossRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPLossRate, 10, 2;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sp_loss.value).toBe(10);
    expect(processedAttributes.sp_loss.rate).toBe(2);
  });

  it("should test bonus bSPRegenRate lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPRegenRate, 15, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sp_regen.value).toBe(15);
    expect(processedAttributes.sp_regen.rate).toBe(5);
  });

  it("should test bonus bHPDrainValueRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPDrainValueRace, RC_DemiPlayer, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.hp_drain[Race.RC_DEMIHUMAN].value
    ).toBe(5);
    expect(
      processedAttributes.right_weapon.hp_drain[Race.RC_PLAYER].value
    ).toBe(5);
  });

  it("should test bonus bSPDrainValueRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPDrainValueRace, RC_DemiPlayer, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(
      processedAttributes.right_weapon.sp_drain[Race.RC_DEMIHUMAN].value
    ).toBe(10);
    expect(
      processedAttributes.right_weapon.sp_drain[Race.RC_PLAYER].value
    ).toBe(10);
  });

  it("should test bonus bIgnoreMdefRate RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bIgnoreMdefRate, RC_DemiPlayer, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.ignore_mdef[Race.RC_DEMIHUMAN]).toBe(15);
    expect(processedAttributes.ignore_mdef[Race.RC_PLAYER]).toBe(15);
  });

  it("should test bonus bIgnoreDefRate RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bIgnoreDefRate, RC_DemiPlayer, 20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.ignore_def[Race.RC_DEMIHUMAN]).toBe(20);
    expect(processedAttributes.ignore_def[Race.RC_PLAYER]).toBe(20);
  });

  it("should test bonus bSPGainRaceAttack RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSPGainRaceAttack, RC_DemiPlayer, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.sp_gain_race_attack[Race.RC_DEMIHUMAN]).toBe(10);
    expect(processedAttributes.sp_gain_race_attack[Race.RC_PLAYER]).toBe(10);
  });

  it("should test bonus bHPGainRaceAttack RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bHPGainRaceAttack, RC_DemiPlayer, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.hp_gain_race_attack[Race.RC_DEMIHUMAN]).toBe(15);
    expect(processedAttributes.hp_gain_race_attack[Race.RC_PLAYER]).toBe(15);
  });

  it("should test bonus bSkillUseSPrate PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillUseSPrate, PR_MAGNUS, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillusesprate[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillusesprate[0].val).toBe(5);
  });

  it("should test bonus bSkillUseSPrate PR_MAGNUS HW_MAGICPOWER lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillUseSPrate, PR_MAGNUS, 5;
		  bonus2 bSkillUseSPrate, HW_MAGICPOWER, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillusesprate[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillusesprate[0].val).toBe(5);
    expect(processedAttributes.skillusesprate[1].id).toBe(
      e_skill.HW_MAGICPOWER
    );
    expect(processedAttributes.skillusesprate[1].val).toBe(5);
  });

  it("should test bonus bSkillCooldown PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillCooldown, PR_MAGNUS, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillcooldown[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillcooldown[0].val).toBe(10);
  });

  it("should test bonus bSkillFixedCast PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillFixedCast, PR_MAGNUS, 15;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillfixcast[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillfixcast[0].val).toBe(15);
  });

  it("should test bonus bSkillVariableCast PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillVariableCast, PR_MAGNUS, 20;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillvarcast[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillvarcast[0].val).toBe(20);
  });

  it("should test bonus bSkillUseSP PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSkillUseSP, PR_MAGNUS, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.skillusesp[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.skillusesp[0].val).toBe(5);
  });

  it("should test bonus bSubSkill PR_MAGNUS lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bSubSkill, PR_MAGNUS, 10;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.subskill[0].id).toBe(e_skill.PR_MAGNUS);
    expect(processedAttributes.subskill[0].val).toBe(10);
  });

  it("should test bonus bDropAddRace RC_DemiPlayer lr_flag 0", () => {
    const itemString = `
    Script: <"
		  bonus2 bDropAddRace, RC_DemiPlayer, 5;
    ">`;
    const item = parseItem(itemString);
    const attributes = new PlayerAttributes("test", 1, item.Bonuses!);
    attributes.state.lr_flag = 0;

    const processedAttributes = BonusHelpers.processBonuses(
      item.Bonuses!,
      attributes
    );

    expect(processedAttributes.dropaddrace[Race.RC_DEMIHUMAN]).toBe(5);
    expect(processedAttributes.dropaddrace[Race.RC_PLAYER]).toBe(5);
  });
});

import { PlayerAttributes } from "./PlayerAttributes";
import {
  BonusArgs,
  Bonuses,
  bonusTypeToStatusPointType,
} from "@/ragnarokData/types";

export class BonusHelpers {
  static processBonuses(
    bonuses: Bonuses,
    playerAttributes: PlayerAttributes
  ): PlayerAttributes {
    Object.entries(bonuses).forEach(([bonusType, bonusValues]) => {
      Object.keys(bonusValues).forEach((statusTypeKey) => {
        const statusArray: BonusArgs[] = bonusValues[statusTypeKey];
        statusArray.forEach((bonusArray) => {
          if (bonusType.startsWith("bonus3")) {
            BonusHelpers.pc_bonus3(
              playerAttributes,
              statusTypeKey as string,
              bonusArray[0] as number,
              bonusArray[1] as number,
              bonusArray[2] as number
            );
          } else if (bonusType.startsWith("bonus4")) {
            BonusHelpers.pc_bonus4(
              playerAttributes,
              statusTypeKey as string,
              bonusArray[0] as number,
              bonusArray[1] as number,
              bonusArray[2] as number,
              bonusArray[3] as number
            );
          } else if (bonusType.startsWith("bonus5")) {
            BonusHelpers.pc_bonus5(
              playerAttributes,
              statusTypeKey as string,
              bonusArray[0] as number,
              bonusArray[1] as number,
              bonusArray[2] as number,
              bonusArray[3] as number,
              bonusArray[4] as number
            );
          }
        });
      });
    });
    return playerAttributes;
  }

  static pc_bonus3(
    playerAttributes: PlayerAttributes,
    type: string,
    type2: number,
    type3: number,
    val: number
  ) {
    switch (type) {
      case bonusTypeToStatusPointType.bAddMonsterDropItem:
        this.handleAddMonsterDropItem(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAddClassDropItem:
        this.handleAddClassDropItem(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAutoSpell:
        this.handleAutoSpell(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAutoSpellWhenHit:
        this.handleAutoSpellWhenHit(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bSPDrainRate:
        this.handleSPDrainRate(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bHPDrainRateRace:
        this.handleHPDrainRateRace(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bSPDrainRateRace:
        this.handleSPDrainRateRace(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAddEff:
        this.handleAddEff(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAddEffWhenHit:
        this.handleAddEffWhenHit(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAddEffOnSkill:
        this.handleAddEffOnSkill(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bAddEle:
        this.handleAddEle(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bSubEle:
        this.handleSubEle(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bHPVanishRate:
        this.handleHPVanishRate(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bSPVanishRate:
        this.handleSPVanishRate(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bSubDefEle:
        this.handleSubDefEle(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bMagicSubDefEle:
        this.handleMagicSubDefEle(playerAttributes, type2, type3, val);
        break;
      case bonusTypeToStatusPointType.bStateNoRecoverRace:
        this.handleStateNoRecoverRace(playerAttributes, type2, type3, val);
        break;
      default:
        console.warn(`Unknown bonus3 type: ${type}`);
        break;
    }
  }

  static pc_bonus4(
    playerAttributes: PlayerAttributes,
    type: string,
    type2: number,
    type3: number,
    type4: number,
    val: number
  ) {
    switch (type) {
      case bonusTypeToStatusPointType.bAutoSpell:
        this.handleAutoSpell(playerAttributes, type2, type3, type4, val);
        break;
      case bonusTypeToStatusPointType.bAutoSpellWhenHit:
        this.handleAutoSpellWhenHit(playerAttributes, type2, type3, type4, val);
        break;
      case bonusTypeToStatusPointType.bAutoSpellOnSkill:
        // this.handleAutoSpellOnSkill(playerAttributes, type2, type3, type4, val);
        break;
      case bonusTypeToStatusPointType.bAddEffOnSkill:
        this.handleAddEffOnSkill(playerAttributes, type2, type3, type4, val);
        break;
      case bonusTypeToStatusPointType.bSetDefRace:
        this.handleSetDefRace(playerAttributes, type2, type3, type4, val);
        break;
      case bonusTypeToStatusPointType.bSetMDefRace:
        this.handleSetMDefRace(playerAttributes, type2, type3, type4, val);
        break;
      case bonusTypeToStatusPointType.bAddEff:
        // this.handleAddEff(playerAttributes, type2, type3, type4, val);
        break;
      default:
        console.warn(`Unknown bonus4 type: ${type}`);
        break;
    }
  }

  static pc_bonus5(
    playerAttributes: PlayerAttributes,
    type: string,
    type2: number,
    type3: number,
    type4: number,
    type5: number,
    val: number
  ) {
    switch (type) {
      case bonusTypeToStatusPointType.bAutoSpell:
        this.handleAutoSpell(playerAttributes, type2, type3, type4, type5, val);
        break;
      case bonusTypeToStatusPointType.bAutoSpellWhenHit:
        this.handleAutoSpellWhenHit(
          playerAttributes,
          type2,
          type3,
          type4,
          type5,
          val
        );
        break;
      case bonusTypeToStatusPointType.bAutoSpellOnSkill:
        // this.handleAutoSpellOnSkill(
        //   playerAttributes,
        //   type2,
        //   type3,
        //   type4,
        //   type5,
        //   val
        // );
        break;
      default:
        console.warn(`Unknown bonus5 type: ${type}`);
        break;
    }
  }

  static handleAddMonsterDropItem(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type3);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleAddMonsterDropItem: Invalid Race (${type3})`);
      return;
    }
    this.bonusItemDrop(playerAttributes.add_drop, type2, raceMask, val);
  }

  static handleAddClassDropItem(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type3);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleAddMonsterDropItem: Invalid Race (${type3})`);
      return;
    }
    this.bonusItemDrop(playerAttributes.add_drop, type2, raceMask, val);
  }

  static handleAutoSpell(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number,
    type4?: number,
    type5?: number
  ) {
    const target = this.getSkillTarget(type2);
    this.bonusAutoSpell(
      playerAttributes.autospell,
      target ? -type2 : type2,
      type3,
      val,
      type4 || 0,
      type5 || 0
    );
  }

  static handleAutoSpellWhenHit(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number,
    type4?: number,
    type5?: number
  ) {
    const target = this.getSkillTarget(type2);
    this.bonusAutoSpell(
      playerAttributes.autoSpellWhenHit,
      target ? -type2 : type2,
      type3,
      val,
      type4 || 0,
      type5 || 0
    );
  }

  static handleSPDrainRate(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    if (playerAttributes.state.lr_flag === 0) {
      this.updateWeaponDrain(
        playerAttributes.right_weapon.sp_drain,
        type2,
        type3,
        val
      );
    } else if (playerAttributes.state.lr_flag === 1) {
      this.updateWeaponDrain(
        playerAttributes.left_weapon.sp_drain,
        type2,
        type3,
        val
      );
    }
  }

  static handleHPDrainRateRace(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type2);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleHPDrainRateRace: Invalid Race (${type2})`);
      return;
    }
    this.updateRaceDrain(playerAttributes, raceMask, type3, val, "hpDrain");
  }

  static handleSPDrainRateRace(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type2);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleSPDrainRateRace: Invalid Race (${type2})`);
      return;
    }
    this.updateRaceDrain(playerAttributes, raceMask, type3, val, "spDrain");
  }

  static handleAddEff(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    if (type2 > this.SC_MAX) {
      console.warn(`handleAddEff: ${type2} is not supported.`);
      return;
    }
    this.bonusAddEff(playerAttributes.addeff, type2, type3, val);
  }

  static handleAddEffWhenHit(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    if (type2 > this.SC_MAX) {
      console.warn(`handleAddEffWhenHit: ${type2} is not supported.`);
      return;
    }
    this.bonusAddEff(playerAttributes.addEffWhenHit, type2, type3, val);
  }

  static handleAddEffOnSkill(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number,
    type4?: number
  ) {
    if (type3 > this.SC_MAX) {
      console.warn(`handleAddEffOnSkill: ${type3} is not supported.`);
      return;
    }
    this.bonusAddEffOnSkill(
      playerAttributes.addEffOnSkill,
      type2,
      type3,
      val,
      type4 || 0
    );
  }

  static handleAddEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    if (
      (type2 >= this.ELE_MAX && type2 !== this.ELE_ALL) ||
      type2 < this.ELE_NEUTRAL
    ) {
      console.error(`handleAddEle: Invalid element ${type2}`);
      return;
    }
    this.bonusAddEle(playerAttributes, type2, type3, val);
  }

  static handleSubEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    if (
      (type2 >= this.ELE_MAX && type2 !== this.ELE_ALL) ||
      type2 < this.ELE_NEUTRAL
    ) {
      console.error(`handleSubEle: Invalid element ${type2}`);
      return;
    }
    this.bonusSubEle(playerAttributes, type2, type3, val);
  }

  static handleHPVanishRate(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    playerAttributes.bonus.hp_vanish_rate += type2;
    playerAttributes.bonus.hp_vanish_per = Math.max(
      playerAttributes.bonus.hp_vanish_per,
      type3
    );
    playerAttributes.bonus.hp_vanish_trigger = val;
  }

  static handleSPVanishRate(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    playerAttributes.bonus.sp_vanish_rate += type2;
    playerAttributes.bonus.sp_vanish_per = Math.max(
      playerAttributes.bonus.sp_vanish_per,
      type3
    );
    playerAttributes.bonus.sp_vanish_trigger = val;
  }

  static handleSubDefEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    this.bonusSubDefEle(playerAttributes, type2, type3, val);
  }

  static handleMagicSubDefEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    this.bonusMagicSubDefEle(playerAttributes, type2, type3, val);
  }

  static handleStateNoRecoverRace(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type2);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleStateNoRecoverRace: Invalid Race (${type2})`);
      return;
    }
    this.bonusStateNoRecoverRace(playerAttributes, raceMask, type3, val);
  }

  static handleSetDefRace(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    type4: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type2);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleSetDefRace: Invalid Race (${type2})`);
      return;
    }
    this.bonusSetDefRace(playerAttributes, raceMask, type3, type4, val);
  }

  static handleSetMDefRace(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    type4: number,
    val: number
  ) {
    const raceMask = this.getRaceMask(type2);
    if (raceMask === "RCMASK_NONE") {
      console.warn(`handleSetMDefRace: Invalid Race (${type2})`);
      return;
    }
    this.bonusSetMDefRace(playerAttributes, raceMask, type3, type4, val);
  }

  // Additional helper methods for handling different logic can be added here.
  static getRaceMask(type: number): string {
    // Implement logic to get race mask based on type
    return "RCMASK_NONE"; // Placeholder
  }

  static bonusItemDrop(
    addDrop: any,
    type2: number,
    raceMask: string,
    val: number
  ) {
    // Implement logic for item drop bonus
  }

  static bonusAutoSpell(
    autoSpell: any,
    type2: number,
    type3: number,
    val: number,
    type4: number,
    type5: number
  ) {
    // Implement logic for auto spell bonus
  }

  static updateWeaponDrain(
    spDrain: any,
    type2: number,
    type3: number,
    val: number
  ) {
    // Implement logic to update weapon drain attributes
  }

  static updateRaceDrain(
    playerAttributes: PlayerAttributes,
    raceMask: string,
    type3: number,
    val: number,
    drainType: string
  ) {
    // Implement logic to update race drain attributes
  }

  static bonusAddEff(addEff: any, type2: number, type3: number, val: number) {
    // Implement logic for add effect bonus
  }

  static bonusAddEffOnSkill(
    addEffOnSkill: any,
    type2: number,
    type3: number,
    val: number,
    type4: number
  ) {
    // Implement logic for add effect on skill bonus
  }

  static bonusAddEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    // Implement logic for add element bonus
  }

  static bonusSubEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    // Implement logic for sub element bonus
  }

  static bonusSubDefEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    // Implement logic for sub defense element bonus
  }

  static bonusMagicSubDefEle(
    playerAttributes: PlayerAttributes,
    type2: number,
    type3: number,
    val: number
  ) {
    // Implement logic for magic sub defense element bonus
  }

  static bonusStateNoRecoverRace(
    playerAttributes: PlayerAttributes,
    raceMask: string,
    type3: number,
    val: number
  ) {
    // Implement logic for state no recover race bonus
  }

  static bonusSetDefRace(
    playerAttributes: PlayerAttributes,
    raceMask: string,
    type3: number,
    type4: number,
    val: number
  ) {
    // Implement logic for set defense race bonus
  }

  static bonusSetMDefRace(
    playerAttributes: PlayerAttributes,
    raceMask: string,
    type3: number,
    type4: number,
    val: number
  ) {
    // Implement logic for set magic defense race bonus
  }

  static getSkillTarget(type2: number): boolean {
    // Implement logic to get skill target based on type2
    return false; // Placeholder
  }

  static SC_MAX: number = 1000; // Placeholder, set actual value
  static ELE_MAX: number = 10; // Placeholder, set actual value
  static ELE_ALL: number = 999; // Placeholder, set actual value
  static ELE_NEUTRAL: number = 0; // Placeholder, set actual value
}

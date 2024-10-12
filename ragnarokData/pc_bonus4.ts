import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { bonusTypeToStatusPointType } from "@/ragnarokData/types";
import { BonusHelpers } from "./BonusHelpers";

export function pc_bonus4(
  playerAttributes: PlayerAttributes,
  type: string,
  type2: number,
  type3: number,
  type4: number,
  val: number
) {
  if (typeof type4 !== "number") {
    throw new Error(`pc_bonus4: Invalid type4 value ${type4} - type: ${type}`);
  }
  if (typeof type3 !== "number") {
    throw new Error(`pc_bonus4: Invalid type3 value ${type3} - type: ${type}`);
  }
  if (typeof type2 !== "number") {
    throw new Error(`pc_bonus4: Invalid type2 value ${type2} - type: ${type}`);
  }
  if (typeof val !== "number") {
    throw new Error(`pc_bonus4: Invalid val value ${val} - type: ${type}`);
  }

  switch (type) {
    case bonusTypeToStatusPointType.bAutoSpell:
      BonusHelpers.handleAutoSpell(playerAttributes, type2, type3, type4, val);
      break;
    case bonusTypeToStatusPointType.bAutoSpellWhenHit:
      BonusHelpers.handleAutoSpellWhenHit(
        playerAttributes,
        type2,
        type3,
        type4,
        val
      );
      break;
    case bonusTypeToStatusPointType.bAutoSpellOnSkill:
      // BonusHelpers.handleAutoSpellOnSkill(playerAttributes, type2, type3, type4, val);
      break;
    case bonusTypeToStatusPointType.bAddEffOnSkill:
      BonusHelpers.handleAddEffOnSkill(
        playerAttributes,
        type2,
        type3,
        type4,
        val
      );
      break;
    case bonusTypeToStatusPointType.bSetDefRace:
      BonusHelpers.handleSetDefRace(playerAttributes, type2, type3, type4, val);
      break;
    case bonusTypeToStatusPointType.bSetMDefRace:
      BonusHelpers.handleSetMDefRace(
        playerAttributes,
        type2,
        type3,
        type4,
        val
      );
      break;
    case bonusTypeToStatusPointType.bAddEff:
      // BonusHelpers.handleAddEff(playerAttributes, type2, type3, type4, val);
      break;
    default:
      console.warn(`Unknown bonus4 type: ${type}`);
      break;
  }
}

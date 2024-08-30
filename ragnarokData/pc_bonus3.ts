import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { bonusTypeToStatusPointType } from "@/ragnarokData/types";
import { BonusHelpers } from "./BonusHelpers";

export function pc_bonus3(
  playerAttributes: PlayerAttributes,
  type: string,
  type2: number,
  type3: number,
  val: number
) {
  switch (type) {
    case bonusTypeToStatusPointType.bAddMonsterDropItem:
      BonusHelpers.handleAddMonsterDropItem(
        playerAttributes,
        type2,
        type3,
        val
      );
      break;
    case bonusTypeToStatusPointType.bAddClassDropItem:
      BonusHelpers.handleAddClassDropItem(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bAutoSpell:
      BonusHelpers.handleAutoSpell(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bAutoSpellWhenHit:
      BonusHelpers.handleAutoSpellWhenHit(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bSPDrainRate:
      BonusHelpers.handleSPDrainRate(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bHPDrainRateRace:
      BonusHelpers.handleHPDrainRateRace(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bSPDrainRateRace:
      BonusHelpers.handleSPDrainRateRace(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bAddEff:
      BonusHelpers.handleAddEff(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bAddEffWhenHit:
      BonusHelpers.handleAddEffWhenHit(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bAddEffOnSkill:
      BonusHelpers.handleAddEffOnSkill(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bAddEle:
      BonusHelpers.handleAddEle(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bSubEle:
      BonusHelpers.handleSubEle(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bHPVanishRate:
      BonusHelpers.handleHPVanishRate(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bSPVanishRate:
      BonusHelpers.handleSPVanishRate(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bSubDefEle:
      BonusHelpers.handleSubDefEle(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bMagicSubDefEle:
      BonusHelpers.handleMagicSubDefEle(playerAttributes, type2, type3, val);
      break;
    case bonusTypeToStatusPointType.bStateNoRecoverRace:
      BonusHelpers.handleStateNoRecoverRace(
        playerAttributes,
        type2,
        type3,
        val
      );
      break;
    default:
      console.warn(`Unknown bonus3 type: ${type}`);
      break;
  }
}

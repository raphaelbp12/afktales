import { PlayerAttributes } from "./PlayerCharacter/PlayerAttributes";
import { bonusTypeToStatusPointType } from "@/ragnarokData/types";
import { BonusHelpers } from "./BonusHelpers";

export function pc_bonus5(
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
      BonusHelpers.handleAutoSpell(
        playerAttributes,
        type2,
        type3,
        type4,
        type5,
        val
      );
      break;
    case bonusTypeToStatusPointType.bAutoSpellWhenHit:
      BonusHelpers.handleAutoSpellWhenHit(
        playerAttributes,
        type2,
        type3,
        type4,
        type5,
        val
      );
      break;
    case bonusTypeToStatusPointType.bAutoSpellOnSkill:
      // BonusHelpers.handleAutoSpellOnSkill(
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

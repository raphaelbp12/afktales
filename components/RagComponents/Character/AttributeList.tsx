// CharacterCard.tsx
import React from "react";
import AttributeItem from "./AttributeItem";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";
import { StatsType } from "@/ragnarokData/PlayerCharacter/StatsTypeEnum";

interface AttributeListProps {
  persistStats: { [key: string]: number };
  jobBonus: { [key: string]: number };
  param_bonus: { [key: string]: number };
  character: PlayerAttributes;
}

const AttributeList: React.FC<AttributeListProps> = ({
  persistStats,
  jobBonus,
  param_bonus,
  character,
}) => {
  const { increaseCharacterStats } = useAccountService();
  if (!param_bonus) {
    param_bonus = {
      SP_STR: 0,
      SP_AGI: 0,
      SP_VIT: 0,
      SP_INT: 0,
      SP_DEX: 0,
      SP_LUK: 0,
    };
  }

  if (!character) {
    return null;
  }

  const handleAttributeChange = (type: StatsType, valueToAdd: number) => {
    console.log("handleAttributeChange", type, valueToAdd);
    increaseCharacterStats(character.id, type, valueToAdd);
  };

  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">Atributos</h2>
      {/* You can add more character details here if needed */}
      <div className="flex flex-col gap-2 mt-2">
        <AttributeItem
          label="For"
          baseStat={persistStats.SP_STR}
          bonusStat={param_bonus.SP_STR + jobBonus.SP_STR}
          statPointsNeededToChange={character.getStatusPointNeededToChange(
            StatsType.SP_STR,
            1
          )}
          onClick={() => {
            handleAttributeChange(StatsType.SP_STR, 1);
          }}
        />
        <AttributeItem
          label="Agi"
          baseStat={persistStats.SP_AGI}
          bonusStat={param_bonus.SP_AGI + jobBonus.SP_AGI}
          statPointsNeededToChange={character.getStatusPointNeededToChange(
            StatsType.SP_AGI,
            1
          )}
          onClick={() => {
            handleAttributeChange(StatsType.SP_AGI, 1);
          }}
        />
        <AttributeItem
          label="Vit"
          baseStat={persistStats.SP_VIT}
          bonusStat={param_bonus.SP_VIT + jobBonus.SP_VIT}
          statPointsNeededToChange={character.getStatusPointNeededToChange(
            StatsType.SP_VIT,
            1
          )}
          onClick={() => {
            handleAttributeChange(StatsType.SP_VIT, 1);
          }}
        />
        <AttributeItem
          label="Int"
          baseStat={persistStats.SP_INT}
          bonusStat={param_bonus.SP_INT + jobBonus.SP_INT}
          statPointsNeededToChange={character.getStatusPointNeededToChange(
            StatsType.SP_INT,
            1
          )}
          onClick={() => {
            handleAttributeChange(StatsType.SP_INT, 1);
          }}
        />
        <AttributeItem
          label="Des"
          baseStat={persistStats.SP_DEX}
          bonusStat={param_bonus.SP_DEX + jobBonus.SP_DEX}
          statPointsNeededToChange={character.getStatusPointNeededToChange(
            StatsType.SP_DEX,
            1
          )}
          onClick={() => {
            handleAttributeChange(StatsType.SP_DEX, 1);
          }}
        />
        <AttributeItem
          label="Sor"
          baseStat={persistStats.SP_LUK}
          bonusStat={param_bonus.SP_LUK + jobBonus.SP_LUK}
          statPointsNeededToChange={character.getStatusPointNeededToChange(
            StatsType.SP_LUK,
            1
          )}
          onClick={() => {
            handleAttributeChange(StatsType.SP_LUK, 1);
          }}
        />
      </div>
    </div>
  );
};

export default AttributeList;

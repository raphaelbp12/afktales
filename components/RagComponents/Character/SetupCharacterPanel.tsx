// CharacterCard.tsx
import React from "react";
import SelectJobClass from "./SelectJobClass";
import AttributeList from "./AttributeList";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";

interface SetupCharacterPanelProps {
  persistStats: { [key: string]: number };
  jobBonus: { [key: string]: number };
  param_bonus: { [key: string]: number };
  characterId: number;
  character: PlayerAttributes;
}

const SetupCharacterPanel: React.FC<SetupCharacterPanelProps> = ({
  persistStats,
  jobBonus,
  param_bonus,
  characterId,
  character,
}) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-row items-center">
      <div>
        <SelectJobClass characterId={characterId} />
        <div>
          Pontos disponíveis: {character?.persistent_status.status_point}
        </div>
      </div>
      <div>
        <AttributeList
          persistStats={persistStats}
          param_bonus={param_bonus}
          jobBonus={jobBonus}
          character={character}
        />
      </div>
    </div>
  );
};

export default SetupCharacterPanel;

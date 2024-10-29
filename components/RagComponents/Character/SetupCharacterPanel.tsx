// CharacterCard.tsx
import React from "react";
import SelectJobClass from "./SelectJobClass";
import AttributeList from "./AttributeList";

interface SetupCharacterPanelProps {
  persistStats: { [key: string]: number };
  jobBonus: { [key: string]: number };
  param_bonus: { [key: string]: number };
  characterId: number;
}

const SetupCharacterPanel: React.FC<SetupCharacterPanelProps> = ({
  persistStats,
  jobBonus,
  param_bonus,
  characterId,
}) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-row items-center">
      <div>
        <SelectJobClass characterId={characterId} />
      </div>
      <div>
        <AttributeList
          persistStats={persistStats}
          param_bonus={param_bonus}
          jobBonus={jobBonus}
        />
      </div>
    </div>
  );
};

export default SetupCharacterPanel;

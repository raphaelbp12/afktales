// CharacterCard.tsx
import React from "react";
import SelectJobClass from "./SelectJobClass";
import AttributeList from "./AttributeList";

interface SetupCharacterPanelProps {
  param_bonus: { [key: string]: number };
  characterId: number;
}

const SetupCharacterPanel: React.FC<SetupCharacterPanelProps> = ({
  param_bonus,
  characterId,
}) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-row items-center">
      <div>
        <SelectJobClass characterId={characterId} />
      </div>
      <div>
        <AttributeList param_bonus={param_bonus} />
      </div>
    </div>
  );
};

export default SetupCharacterPanel;

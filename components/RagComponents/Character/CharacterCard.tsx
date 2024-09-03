// CharacterCard.tsx
import React from "react";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";

interface CharacterCardProps {
  character: PlayerAttributes;
  onDelete: () => void;
  onNameChange: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onDelete,
  onNameChange,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-gray-700 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">{character.name}</h2>
      {/* You can add more character details here if needed */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={onNameChange}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Change Name
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;

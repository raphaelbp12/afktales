// CharacterCard.tsx
import React from "react";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";
import Link from "next/link";
import { ClassesEnumString } from "@/ragnarokData/PlayerCharacter/ClassesEnum";

interface CharacterCardProps {
  character: PlayerAttributes;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-gray-700 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">{character.name}</h2>
      <p>Classe: {ClassesEnumString[character.job]}</p>
      {/* You can add more character details here if needed */}
      <div className="flex gap-2 mt-2">
        <Link
          href={`/game/character/${character.id}`}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Selecionar
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;

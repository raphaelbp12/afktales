// CharacterList.tsx
import React from "react";
import CharacterCard from "./CharacterCard";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";

interface CharacterListProps {
  characters: PlayerAttributes[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;

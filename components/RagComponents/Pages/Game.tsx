"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React from "react";
import InventoryGrid from "../Inventory/InventoryGrid";
import CharacterList from "../Character/CharacterList";

const Game: React.FC = () => {
  const {
    characters,
    storage,
    loading,
    error,
    createCharacter,
    deleteCharacter,
    updateCharacter,
  } = useAccountService();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleNameChange = (index: number) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      updateCharacter(index, "name", newName);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex-1">
        <h1 className="text-xl font-bold mb-4">My Characters</h1>
        <CharacterList
          characters={characters}
          onDeleteCharacter={deleteCharacter}
          onUpdateCharacterName={handleNameChange}
        />
        <button
          onClick={() => createCharacter("NewCharacter")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Character
        </button>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Inventory</h2>
        <InventoryGrid inventory={storage!} columns={15} />
      </div>
    </div>
  );
};

export default Game;

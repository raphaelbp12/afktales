"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React, { useState } from "react";
import InventoryGrid from "../Inventory/InventoryGrid";
import CharacterList from "../Character/CharacterList";
import AddItemPanel from "../Inventory/AddItemPanel";
import Modal from "@/components/commonComponents/Modal";

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
  const [openAddItemModal, setOpenAddItemModal] = useState<boolean>(false);

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
        <h1 className="text-xl font-bold mb-4">Meus Personagens</h1>
        <CharacterList
          characters={characters}
          onDeleteCharacter={deleteCharacter}
          onUpdateCharacterName={handleNameChange}
        />
        <button
          onClick={() => createCharacter("NewCharacter")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Criar Personagem
        </button>
      </div>
      <div className="flex-1 gap-4">
        <h2 className="text-xl font-bold mb-4">Armazém</h2>
        <button
          onClick={() => setOpenAddItemModal(true)}
          className="my-4 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Criar Item
        </button>
        <InventoryGrid inventory={storage!} columns={15} />
      </div>

      <Modal
        isOpen={openAddItemModal}
        onClose={() => {
          setOpenAddItemModal(false);
        }}
      >
        <AddItemPanel />
      </Modal>
    </div>
  );
};

export default Game;

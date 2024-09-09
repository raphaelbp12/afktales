"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React, { useState } from "react";
import InventoryGrid from "../Inventory/InventoryGrid";
import CharacterList from "../Character/CharacterList";
import AddItemPanel from "../Inventory/AddItemPanel";
import Modal from "@/components/commonComponents/Modal";
import PageWrapper from "@/components/commonComponents/PageWrapper";
import GetBasicItemsButton from "../Inventory/GetBasicItemsButton";

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

  return (
    <PageWrapper overflowAuto>
      <div className="flex flex-col md:flex-row gap-5 w-4/5">
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-4">Meus Personagens</h1>
          <CharacterList characters={characters} />
          <button
            onClick={() => createCharacter("NewCharacter")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Criar Personagem
          </button>
        </div>
        <div className="flex-1 gap-4">
          <button
            onClick={() => setOpenAddItemModal(true)}
            className="my-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Criar Item
          </button>
          <GetBasicItemsButton characterId={null} />
          <InventoryGrid
            title="Armazém"
            inventory={storage!}
            columns={15}
            isPlayerInventory={false}
          />
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
    </PageWrapper>
  );
};

export default Game;

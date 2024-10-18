"use client";
import React, { useState, useEffect } from "react";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import EquipAllButton from "../../Inventory/EquipAllButton";
import GetBasicItemsButton from "../../Inventory/GetBasicItemsButton";
import InventoryGrid from "../../Inventory/InventoryGrid";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";

interface InventoryTabProps {
  characterId: number;
}

const InventoryTab: React.FC<InventoryTabProps> = ({ characterId }) => {
  const { reloadCharacters, characters, storage } = useAccountService();
  const [character, setCharacter] = useState<PlayerAttributes | null>(null);

  useEffect(() => {
    console.log("Character page mounted");
    reloadCharacters();
  }, [reloadCharacters]);

  useEffect(() => {
    console.log("Characters updated", characters);
    if (characters.length <= characterId) {
      console.error("Character not found");
      return;
    }

    const character = characters[characterId];
    setCharacter(character);
  }, [characters, characterId]);

  if (!character) return null;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex gap-4">
        <GetBasicItemsButton characterId={characterId} />
        <EquipAllButton
          characterId={characterId}
          items={character.inventory.getItems()}
        />
      </div>
      {character.inventory && (
        <InventoryGrid
          title="Inventário"
          inventory={character.inventory}
          columns={20}
          characterId={characterId}
          isPlayerInventory
        />
      )}
      {storage && (
        <InventoryGrid
          title="Armazém"
          inventory={storage!}
          columns={20}
          characterId={characterId}
          isPlayerInventory={false}
        />
      )}
    </div>
  );
};

export default InventoryTab;

"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React, { useEffect, useState } from "react";
import InventoryGrid from "../Inventory/InventoryGrid";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PageWrapper from "@/components/commonComponents/PageWrapper";
import GetBasicItemsButton from "../Inventory/GetBasicItemsButton";
import EquipAllButton from "../Inventory/EquipAllButton";
import EquipmentList from "../Character/EquipmentList";

type CharacterProps = {
  characterId: number;
};

const Character: React.FC<CharacterProps> = ({ characterId }) => {
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

  if (!character) {
    return (
      <div>
        <Link href="/game">Voltar</Link>
      </div>
    );
  }

  return (
    <PageWrapper overflowAuto>
      <div className="flex md:flex-row gap-5 w-4/5">
        <div className="flex-1">
          <Link href="/game" className="flex text-white items-center gap-2">
            <FaArrowLeft /> Voltar
          </Link>
          <div className="mt-4">
            Id: {characterId} Name: {character?.name}
          </div>
          <EquipmentList
            equipedItemIndexes={character.equip_index}
            inventory={character.inventory}
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex gap-4">
            <GetBasicItemsButton characterId={characterId} />
            <EquipAllButton
              characterId={characterId}
              items={character.inventory.getItems()}
            />
          </div>
          <InventoryGrid
            title="Inventário"
            inventory={character.inventory}
            columns={20}
            characterId={characterId}
            isPlayerInventory
          />
          <InventoryGrid
            title="Armazém"
            inventory={storage!}
            columns={20}
            characterId={characterId}
            isPlayerInventory={false}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Character;

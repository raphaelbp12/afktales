"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React from "react";
import { ItemData } from "@/ragnarokData/ItemDB/types";

type EquipAllButtonProps = {
  characterId: number | null;
  items: ItemData[];
};

const EquipAllButton: React.FC<EquipAllButtonProps> = ({
  characterId,
  items,
}) => {
  const { equipItem } = useAccountService();

  const handle = () => {
    items.forEach(async (_, slotIndex) => {
      if (characterId !== null) {
        await equipItem(characterId, slotIndex);
      }
    });
  };

  return (
    <button
      onClick={() => handle()}
      className="my-4 px-4 py-2 bg-orange-500 text-white rounded-md"
    >
      Equipar Tudo
    </button>
  );
};

export default EquipAllButton;

"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React from "react";
import { useItemDB } from "@/contexts/RagContexts.tsx/ItemDBContext";

type GetBasicItemsButtonProps = {
  characterId: number | null;
};

const GetBasicItemsButton: React.FC<GetBasicItemsButtonProps> = ({
  characterId,
}) => {
  const { addItemToStorage, addItemToPlayerInventory } = useAccountService();
  const itemDB = useItemDB();

  const handleGetBasicItems = () => {
    const basicItems = [
      { nameid: 504, amount: 100 },
      { nameid: 2102, amount: 1 },
      { nameid: 2104, amount: 1 },
      { nameid: 1202, amount: 1 },
      { nameid: 1208, amount: 1 },
      { nameid: 1606, amount: 1 },
      { nameid: 1705, amount: 1 },
      { nameid: 1138, amount: 1 },
      { nameid: 1151, amount: 1 },
      { nameid: 1251, amount: 1 },
      { nameid: 13150, amount: 1 },
      { nameid: 2601, amount: 1 },
      { nameid: 2602, amount: 1 },
      { nameid: 2604, amount: 1 },
      { nameid: 2506, amount: 1 },
      { nameid: 2504, amount: 1 },
      { nameid: 2406, amount: 1 },
      { nameid: 2404, amount: 1 },
      { nameid: 2302, amount: 1 },
      { nameid: 2306, amount: 1 },
      { nameid: 2202, amount: 1 },
      { nameid: 2205, amount: 1 },
      { nameid: 2209, amount: 1 },
      { nameid: 2224, amount: 1 },
      { nameid: 2264, amount: 1 },
      { nameid: 2269, amount: 1 },
      { nameid: 4043, amount: 4 },
    ];

    basicItems.forEach((basic) => {
      const item = itemDB.getItemByNameid(basic.nameid);
      if (characterId === null) {
        addItemToStorage(item, basic.amount);
      } else {
        addItemToPlayerInventory(characterId, item, basic.amount);
      }
    });
  };

  return (
    <button
      onClick={() => handleGetBasicItems()}
      className="my-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Itens Básicos
    </button>
  );
};

export default GetBasicItemsButton;

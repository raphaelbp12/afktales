// CharacterCard.tsx
import React from "react";
import EquippedItem from "./EquippedItem";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";
import AttributeItem from "./AttributeItem";

type params = {
  SP_STR: number;
  SP_AGI: number;
  SP_VIT: number;
  SP_INT: number;
  SP_DEX: number;
  SP_LUK: number;
};

interface AttributeListProps {
  param_bonus: { [key: string]: number };
}

const AttributeList: React.FC<AttributeListProps> = ({ param_bonus }) => {
  if (!param_bonus) {
    param_bonus = {
      SP_STR: 0,
      SP_AGI: 0,
      SP_VIT: 0,
      SP_INT: 0,
      SP_DEX: 0,
      SP_LUK: 0,
    };
  }
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">Atributos</h2>
      {/* You can add more character details here if needed */}
      <div className="flex flex-col gap-2 mt-2">
        <AttributeItem
          label="For"
          baseStat={1}
          bonusStat={param_bonus.SP_STR}
        />
        <AttributeItem
          label="Agi"
          baseStat={1}
          bonusStat={param_bonus.SP_AGI}
        />
        <AttributeItem
          label="Vit"
          baseStat={1}
          bonusStat={param_bonus.SP_VIT}
        />
        <AttributeItem
          label="Int"
          baseStat={1}
          bonusStat={param_bonus.SP_INT}
        />
        <AttributeItem
          label="Des"
          baseStat={1}
          bonusStat={param_bonus.SP_DEX}
        />
        <AttributeItem
          label="Sor"
          baseStat={1}
          bonusStat={param_bonus.SP_LUK}
        />
      </div>
    </div>
  );
};

export default AttributeList;

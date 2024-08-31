import React from "react";
import { item_db } from "@/ragnarokData/ItemDB/item_db";
import { parseConfig } from "@/ragnarokData/parserItemConfig";
import DropdownSelector from "../commonComponents/DropdownSelector";
import { useCalc } from "@/contexts/calcContext";
import { ItemData } from "@/ragnarokData/ItemDB/types";

const equipmentPlacements: { [key: string]: string } = {
  EQP_HEAD_LOW: "Lower Headgear",
  EQP_HAND_R: "Weapon",
  EQP_WEAPON: "Weapon",
  EQP_GARMENT: "Garment",
  EQP_ACC_L: "Accessory 1",
  EQP_ARMOR: "Armor",
  EQP_HAND_L: "Shield",
  EQP_SHIELD: "Shield",
  EQP_ARMS: "Both Hands",
  EQP_SHOES: "Footgear",
  EQP_ACC_R: "Accessory 2",
  EQP_ACC: "Both Accessories",
  EQP_HEAD_TOP: "Upper Headgear",
  EQP_HEAD_MID: "Middle Headgear",
  EQP_HELM: "T+M+B Headgear",
  EQP_COSTUME_HEAD_TOP: "Costume Top Headgear",
  EQP_COSTUME_HEAD_MID: "Costume Mid Headgear",
  EQP_COSTUME_HEAD_LOW: "Costume Low Headgear",
  EQP_COSTUME_GARMENT: "Costume Garment/Robe",
  EQP_AMMO: "Ammunition",
  EQP_SHADOW_ARMOR: "Shadow Armor",
  EQP_SHADOW_WEAPON: "Shadow Weapon",
  EQP_SHADOW_SHIELD: "Shadow Shield",
  EQP_SHADOW_ARMS: "Shadow 2H Weapon",
  EQP_SHADOW_SHOES: "Shadow Shoes",
  EQP_SHADOW_ACC_R: "Shadow Accessory 2",
  EQP_SHADOW_ACC_L: "Shadow Accessory 1",
  EQP_SHADOW_ACC: "Shadow Accessories",
};

function categorizeItems(items: ItemData[]): { [key: string]: ItemData[] } {
  const categorizedItems: { [key: string]: ItemData[] } = {};

  items.forEach((item) => {
    if (item.Type === "IT_CARD") return;
    if (item.Id === 2316) {
      console.log(item);
    }
    const locs = Array.isArray(item.Loc) ? item.Loc : [item.Loc];
    locs.forEach((loc: string | number | undefined) => {
      if (typeof loc === "undefined") return;
      const placement = equipmentPlacements[loc];
      if (placement) {
        if (!categorizedItems[placement]) {
          categorizedItems[placement] = [];
        }
        categorizedItems[placement].push(item);
      }
    });
  });

  return categorizedItems;
}

const configString = item_db;
const parsedData = parseConfig(configString);
const { itemsList } = parsedData;
const categorizedItems = categorizeItems(itemsList);

const EquipmentDropdowns: React.FC = () => {
  const { selectedItems, setSelectedItems } = useCalc();

  const handleChange =
    (category: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      const item = parsedData.itemsDict[Number(event.target.value)];
      console.log(item);
      setSelectedItems({
        ...selectedItems,
        [category]: event.target.value,
      });
    };

  return (
    <div>
      {Object.keys(categorizedItems).map((category) => (
        <DropdownSelector
          key={category}
          id={category}
          label={category}
          value={selectedItems[category] || ""}
          options={categorizedItems[category].map((item) => ({
            value: item.Id,
            label: `${item.Name} ${item.Slots ? `[${item.Slots}]` : ""}`,
            itemId: item.Id,
          }))}
          onChange={handleChange(category)}
        />
      ))}
    </div>
  );
};

export default EquipmentDropdowns;

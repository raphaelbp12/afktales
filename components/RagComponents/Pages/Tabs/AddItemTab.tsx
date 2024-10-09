"use client";
import React, { useState, useEffect, use } from "react";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import InputField from "@/components/commonComponents/InputField";
import ItemDropdownSelector from "@/components/commonComponents/ItemDropdownSelector";
import { useItemDB } from "@/contexts/RagContexts.tsx/ItemDBContext";
import { equip_pos, item_types, ItemData } from "@/ragnarokData/ItemDB/types";
import { weapon_type } from "@/ragnarokData/ItemDB/weapon_type";

const weaponFilters = [
  { label: "Adagas", type: weapon_type.W_DAGGER },
  { label: "Espadas 1 Mão", type: weapon_type.W_1HSWORD },
  { label: "Espadas 2 Mãos", type: weapon_type.W_2HSWORD },
  { label: "Lanças 1 Mão", type: weapon_type.W_1HSPEAR },
  { label: "Lanças 2 Mãos", type: weapon_type.W_2HSPEAR },
  { label: "Machados 1 Mão", type: weapon_type.W_1HAXE },
  { label: "Machados 2 Mãos", type: weapon_type.W_2HAXE },
  { label: "Maças 1 Mão", type: weapon_type.W_MACE },
  { label: "Maças 2 Mãos", type: weapon_type.W_2HMACE },
  { label: "Cajados", type: weapon_type.W_STAFF },
  { label: "Arcos", type: weapon_type.W_BOW },
  { label: "Soqueiras", type: weapon_type.W_KNUCKLE },
  { label: "Violões", type: weapon_type.W_MUSICAL },
  { label: "Chicotes", type: weapon_type.W_WHIP },
  { label: "Livros", type: weapon_type.W_BOOK },
  { label: "Katares", type: weapon_type.W_KATAR },
  { label: "Revólveres", type: weapon_type.W_REVOLVER },
  { label: "Rifles", type: weapon_type.W_RIFLE },
  { label: "Metralhadoras", type: weapon_type.W_GATLING },
  { label: "Lança-granadas", type: weapon_type.W_GRENADE },
  { label: "Shurikens", type: weapon_type.W_HUUMA },
  { label: "Cajados 2 Mãos", type: weapon_type.W_2HSTAFF },
];

const locFilters = [
  { label: "Hats", type: equip_pos.EQP_HELM },
  { label: "Cabeças Top", type: equip_pos.EQP_HEAD_TOP },
  { label: "Cabeças Meio", type: equip_pos.EQP_HEAD_MID },
  { label: "Cabeças Baixo", type: equip_pos.EQP_HEAD_LOW },
  { label: "Armaduras", type: equip_pos.EQP_ARMOR },
  { label: "Armas", type: equip_pos.EQP_WEAPON },
  { label: "Escudos", type: equip_pos.EQP_SHIELD },
  { label: "Capas", type: equip_pos.EQP_GARMENT },
  { label: "Calçados", type: equip_pos.EQP_SHOES },
  { label: "Acessórios", type: equip_pos.EQP_ACC },
];

interface AddItemTabProps {
  isPlayerTab?: boolean;
  characterId?: number;
}

const AddItemTab: React.FC<AddItemTabProps> = ({
  isPlayerTab,
  characterId,
}) => {
  const itemDB = useItemDB();
  const { addItemToStorage, addItemToPlayerInventory } = useAccountService();
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<item_types | null>(null);
  const [selectWeaponType, setSelectWeaponType] = useState<weapon_type | null>(
    null
  );
  const [selectLocFilter, setSelectLocFilter] = useState<equip_pos | null>(
    null
  );

  useEffect(() => {
    if (selectedFilter !== item_types.IT_WEAPON) {
      setSelectWeaponType(null);
    }
  }, [selectedFilter]);

  const handleAddItem = (amount: number = 1) => {
    if (!selectedItem) {
      alert("Please select an item!");
      return;
    }

    const item = itemDB.getItemByNameid(selectedItem.nameid);
    if (item) {
      if (isPlayerTab) {
        addItemToPlayerInventory(characterId!, item, amount);
        return;
      }
      addItemToStorage(item, amount);
    } else {
      alert("Item not found!");
    }
  };

  const handleChange = (value: ItemData[keyof ItemData] | null) => {
    const nameid = value as string;
    const item = itemDB.getItemByNameid(parseInt(nameid));
    console.log(item);
    setSelectedItem(item);
  };

  const filterItems = (
    itemType?: item_types | null,
    weaponType?: weapon_type | null,
    locType?: equip_pos | null
  ) => {
    return itemDB
      .getFilteredItems((item) => (itemType ? item.Type === itemType : true))
      .filter((item) => (weaponType ? item.Subtype === weaponType : true))
      .filter((item) => (locType ? (item.Loc && locType) === item.Loc : true));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold">Adicionar Item</h2>
      <div className="mt-4 text-center">
        <div className="flex gap-2">
          <AddItemTabFilter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            label={`Cartas (${filterItems(item_types.IT_CARD).length})`}
            filterType={item_types.IT_CARD}
          />
          <AddItemTabFilter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            label={`Armas (${filterItems(item_types.IT_WEAPON).length})`}
            filterType={item_types.IT_WEAPON}
          />
          <AddItemTabFilter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            label={`Equipamentos (${filterItems(item_types.IT_ARMOR).length})`}
            filterType={item_types.IT_ARMOR}
          />
        </div>
        {selectedFilter === item_types.IT_WEAPON && (
          <div className="grid grid-cols-5 gap-2 mt-4">
            {weaponFilters.map(({ label, type }) => {
              const length = filterItems(selectedFilter, type).length;
              if (length === 0) return null;
              return (
                <AddItemTabFilter
                  key={label}
                  selectedFilter={selectWeaponType}
                  setSelectedFilter={setSelectWeaponType}
                  label={`${label} (${length})`}
                  filterType={type}
                />
              );
            })}
          </div>
        )}
        {(selectedFilter === item_types.IT_CARD ||
          selectedFilter === item_types.IT_ARMOR) && (
          <div className="grid grid-cols-5 gap-2 mt-4">
            {locFilters.map(({ label, type }) => {
              const length = filterItems(selectedFilter, null, type).length;
              if (length === 0) return null;
              return (
                <AddItemTabFilter
                  key={label}
                  selectedFilter={selectLocFilter}
                  setSelectedFilter={setSelectLocFilter}
                  label={`${label} (${length})`}
                  filterType={type}
                />
              );
            })}
          </div>
        )}
        <ItemDropdownSelector
          id={"item"}
          label={"Item"}
          selectedItemValue={selectedItem?.nameid || null}
          items={itemDB
            .getFilteredItems((item) =>
              selectedFilter ? item.Type === selectedFilter : true
            )
            .filter((item) =>
              selectWeaponType ? item.Subtype === selectWeaponType : true
            )
            .filter((item) =>
              selectLocFilter
                ? (item.Loc && selectLocFilter) === item.Loc
                : true
            )}
          onChange={handleChange}
          optionValueKey={"nameid"}
        />
        <div className="flex gap-2">
          <button
            onClick={() => handleAddItem(1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            +1
          </button>
          <button
            onClick={() => handleAddItem(10)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            +10
          </button>
          <button
            onClick={() => handleAddItem(100)}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
          >
            +100
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemTab;

interface AddItemTabFilterProps<T> {
  selectedFilter: T | null;
  setSelectedFilter: (filter: T | null) => void;
  label: string;
  filterType: T;
}

const AddItemTabFilter = <T,>({
  selectedFilter,
  setSelectedFilter,
  label,
  filterType,
}: AddItemTabFilterProps<T>) => {
  return (
    <button
      onClick={() =>
        setSelectedFilter(selectedFilter === filterType ? null : filterType)
      }
      className={`px-4 py-2 text-white rounded-md ${
        selectedFilter === filterType ? "bg-blue-500" : "bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

// AddItemPanel.tsx
import React, { useState } from "react";
import { useItemDB } from "@/contexts/RagContexts.tsx/ItemDBContext";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import ItemDropdownSelector from "@/components/commonComponents/ItemDropdownSelector";
import { ItemData } from "@/ragnarokData/ItemDB/types";

interface AddItemPanelProps {}

const AddItemPanel: React.FC<AddItemPanelProps> = ({}) => {
  const { itemDB, loading: loadingItemDB, error: errorItemDB } = useItemDB();
  const { addItemToStorage } = useAccountService();
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  const handleAddItem = (amount: number = 1) => {
    if (!itemDB) {
      alert("ItemDB not loaded!");
      return;
    }

    if (!selectedItem) {
      alert("Please select an item!");
      return;
    }

    const item = itemDB.getItemByNameid(selectedItem.nameid);
    if (item) {
      addItemToStorage(item, amount);
    } else {
      alert("Item not found!");
    }
  };

  const handleChange = (value: ItemData[keyof ItemData] | null) => {
    if (!itemDB) {
      alert("ItemDB not loaded!");
      return;
    }

    const nameid = value as string;
    const item = itemDB.getItemByNameid(parseInt(nameid));
    console.log(item);
    setSelectedItem(item);
  };

  if (loadingItemDB) {
    return <div>Loading ItemDB...</div>;
  }

  if (!itemDB) {
    return <div>{errorItemDB}</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold">Adicionar Item</h2>
      <div className="mt-4 text-center">
        <ItemDropdownSelector
          id={"item"}
          label={"Item"}
          selectedItemValue={selectedItem?.nameid || null}
          items={itemDB.getFilteredItems((item) => true)}
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

export default AddItemPanel;

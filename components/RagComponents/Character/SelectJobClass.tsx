// CharacterCard.tsx
import React from "react";
import DropdownSelector from "@/components/commonComponents/DropdownSelector";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import {
  ClassesEnum,
  ClassesEnumString,
  classStringToEnum,
} from "@/ragnarokData/PlayerCharacter/ClassesEnum";

interface SelectJobClassProps {
  characterId: number;
}

const SelectJobClass: React.FC<SelectJobClassProps> = ({ characterId }) => {
  const { setJobClass, characters } = useAccountService();
  const character = characterId !== undefined ? characters[characterId] : null;

  const handleSetJobClass = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!characterId || !character) return;
    const value = event.target.value;
    const selectedJob = Number(value) as ClassesEnum;
    try {
      await setJobClass(characterId, selectedJob);
      console.log("Job Class set!");
    } catch (error) {
      console.error("Failed to set Job Class:", error);
    }
  };

  // Generate options from ClassesEnumString
  const options = Object.keys(ClassesEnumString)
    .filter((key) => isNaN(Number(key))) // Filters out reverse mappings (numeric keys)
    .map((key) => {
      const value = ClassesEnumString[key as keyof typeof ClassesEnumString];
      return {
        value: value as number,
        label: key,
      };
    });

  return (
    <DropdownSelector
      id="refineLevelSelect"
      label="Selecione a classe"
      value={character?.job as number}
      options={options}
      onChange={handleSetJobClass}
    />
  );
};

export default SelectJobClass;

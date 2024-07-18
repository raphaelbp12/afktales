import React, { createContext, useState, useContext, ReactNode } from "react";
import { Skill } from "@/data/Skill";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { SkillFactory } from "@/data/SkillFactory";
import { predefinedSetups, Setup } from "@/components/Calc/predefinedSetups";

interface CalcContextType {
  minMatk: number | "";
  maxMatk: number | "";
  defendingElement: ElementEnum;
  defendingElementLevel: number;
  selectedSkill: Skill | null;
  targetMdef: number | "";
  ignoreMdefPercent: number | "";
  magicAddSize: number | "";
  magicAddRace: number | "";
  magicAddEle: number | "";
  magicAtkEle: number | "";
  magicDmgBoss: number | "";
  magicDmgNonBoss: number | "";
  addedSkillDamage: number | "";
  isTargetBoss: boolean;
  selectedSetup: string;
  selectedItems: { [key: string]: string | number };
  setMinMatk: React.Dispatch<React.SetStateAction<number | "">>;
  setMaxMatk: React.Dispatch<React.SetStateAction<number | "">>;
  setDefendingElement: React.Dispatch<React.SetStateAction<ElementEnum>>;
  setDefendingElementLevel: React.Dispatch<React.SetStateAction<number>>;
  setSelectedSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
  setTargetMdef: React.Dispatch<React.SetStateAction<number | "">>;
  setIgnoreMdefPercent: React.Dispatch<React.SetStateAction<number | "">>;
  setMagicAddSize: React.Dispatch<React.SetStateAction<number | "">>;
  setMagicAddRace: React.Dispatch<React.SetStateAction<number | "">>;
  setMagicAddEle: React.Dispatch<React.SetStateAction<number | "">>;
  setMagicAtkEle: React.Dispatch<React.SetStateAction<number | "">>;
  setMagicDmgBoss: React.Dispatch<React.SetStateAction<number | "">>;
  setMagicDmgNonBoss: React.Dispatch<React.SetStateAction<number | "">>;
  setAddedSkillDamage: React.Dispatch<React.SetStateAction<number | "">>;
  setIsTargetBoss: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSetup: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: string | number }>
  >;
  handleSetupChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSaveSetup: () => void;
}

const CalcContext = createContext<CalcContextType | undefined>(undefined);

export const CalcProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [minMatk, setMinMatk] = useState<number | "">("");
  const [maxMatk, setMaxMatk] = useState<number | "">("");
  const [defendingElement, setDefendingElement] = useState<ElementEnum>(
    ElementEnum.Neutro
  );
  const [defendingElementLevel, setDefendingElementLevel] = useState<number>(1);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [targetMdef, setTargetMdef] = useState<number | "">("");
  const [ignoreMdefPercent, setIgnoreMdefPercent] = useState<number | "">("");
  const [magicAddSize, setMagicAddSize] = useState<number | "">("");
  const [magicAddRace, setMagicAddRace] = useState<number | "">("");
  const [magicAddEle, setMagicAddEle] = useState<number | "">("");
  const [magicAtkEle, setMagicAtkEle] = useState<number | "">("");
  const [magicDmgBoss, setMagicDmgBoss] = useState<number | "">("");
  const [magicDmgNonBoss, setMagicDmgNonBoss] = useState<number | "">("");
  const [addedSkillDamage, setAddedSkillDamage] = useState<number | "">("");
  const [isTargetBoss, setIsTargetBoss] = useState<boolean>(false);
  const [selectedSetup, setSelectedSetup] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: string | number;
  }>({});

  const handleSetupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const setupLabel = event.target.value;
    const setup = predefinedSetups.find((setup) => setup.label === setupLabel);
    if (setup) {
      setMinMatk(setup.minMatk);
      setMaxMatk(setup.maxMatk);
      setDefendingElement(setup.defendingElement);
      setDefendingElementLevel(setup.defendingElementLevel);
      const skill = SkillFactory.createSkill(setup.selectedSkillName);
      setSelectedSkill(skill);
      setTargetMdef(setup.targetMdef);
      setIgnoreMdefPercent(setup.ignoreMdefPercent);
      setMagicAddSize(setup.magicAddSize);
      setMagicAddRace(setup.magicAddRace);
      setMagicAddEle(setup.magicAddEle);
      setMagicAtkEle(setup.magicAtkEle);
      setMagicDmgBoss(setup.magicDmgBoss);
      setMagicDmgNonBoss(setup.magicDmgNonBoss);
      setAddedSkillDamage(setup.addedSkillDamage);
      setIsTargetBoss(setup.isTargetBoss);
      setSelectedItems(setup.selectedItems);
      setSelectedSetup(setup.label);
    }
  };

  const handleSaveSetup = () => {
    const setup: Setup = {
      label: "New Setup",
      minMatk,
      maxMatk,
      defendingElement,
      defendingElementLevel,
      selectedSkillName: selectedSkill ? selectedSkill.name : "",
      targetMdef,
      ignoreMdefPercent,
      magicAddSize,
      magicAddRace,
      magicAddEle,
      magicAtkEle,
      magicDmgBoss,
      magicDmgNonBoss,
      addedSkillDamage,
      isTargetBoss,
      selectedItems,
    };
    navigator.clipboard.writeText(JSON.stringify(setup)).then(() => {
      alert("Setup copied to clipboard");
    });
  };

  return (
    <CalcContext.Provider
      value={{
        minMatk,
        maxMatk,
        defendingElement,
        defendingElementLevel,
        selectedSkill,
        targetMdef,
        ignoreMdefPercent,
        magicAddSize,
        magicAddRace,
        magicAddEle,
        magicAtkEle,
        magicDmgBoss,
        magicDmgNonBoss,
        addedSkillDamage,
        isTargetBoss,
        selectedSetup,
        selectedItems,
        setMinMatk,
        setMaxMatk,
        setDefendingElement,
        setDefendingElementLevel,
        setSelectedSkill,
        setTargetMdef,
        setIgnoreMdefPercent,
        setMagicAddSize,
        setMagicAddRace,
        setMagicAddEle,
        setMagicAtkEle,
        setMagicDmgBoss,
        setMagicDmgNonBoss,
        setAddedSkillDamage,
        setIsTargetBoss,
        setSelectedSetup,
        setSelectedItems,
        handleSetupChange,
        handleSaveSetup,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export const useCalc = (): CalcContextType => {
  const context = useContext(CalcContext);
  if (context === undefined) {
    throw new Error("useCalc must be used within a CalcProvider");
  }
  return context;
};
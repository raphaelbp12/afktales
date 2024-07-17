"use client";

import React, { useEffect, useState } from "react";
import InputField from "../commonComponents/InputField";
import { Skill } from "@/data/Skill";
import { SkillFactory } from "@/data/SkillFactory";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import DropdownSelector from "../commonComponents/DropdownSelector";
import { calculateMagicDamage } from "./calculateMagicDamage";
import { parseConfig } from "@/ragnarokData/parserItemConfig";
import { item_db } from "@/ragnarokData/item_db";

const configString = item_db;

const parsedData = parseConfig(configString);
const { itemsList, itemsDict } = parsedData;

const predefinedSetups = [
  {
    label: "Default Setup",
    minMatk: 100,
    maxMatk: 200,
    defendingElement: ElementEnum.Neutro,
    defendingElementLevel: 1,
    selectedSkillName: "Storm Gust",
    targetMdef: 10,
    ignoreMdefPercent: 0,
    magicAddSize: 0,
    magicAddRace: 0,
    magicAddEle: 0,
    magicAtkEle: 0,
    magicDmgBoss: 0,
    magicDmgNonBoss: "",
    addedSkillDamage: "",
    isTargetBoss: false,
  },
  {
    label: "HW - cajado val + abissal + esc abism",
    minMatk: 744,
    maxMatk: 744,
    defendingElement: ElementEnum.Sombrio,
    defendingElementLevel: 4,
    selectedSkillName: "Storm Gust",
    targetMdef: "",
    ignoreMdefPercent: 11,
    magicAddSize: "",
    magicAddRace: 20,
    magicAddEle: 20,
    magicAtkEle: "",
    magicDmgBoss: 5,
    magicDmgNonBoss: "",
    addedSkillDamage: "",
    isTargetBoss: true,
  },
  {
    label: "BJ - proff - sem anel de cor e sem bota",
    minMatk: 6132,
    maxMatk: 6132,
    defendingElement: 0,
    defendingElementLevel: 1,
    selectedSkillName: "Cold Bolt",
    targetMdef: 1,
    ignoreMdefPercent: 85,
    magicAddSize: 20,
    magicAddRace: 35,
    magicAddEle: "",
    magicAtkEle: 50,
    magicDmgBoss: "",
    magicDmgNonBoss: "",
    addedSkillDamage: "",
    isTargetBoss: false,
  },
  {
    label: "BJ - proff full",
    minMatk: 6609,
    maxMatk: 6609,
    defendingElement: 0,
    defendingElementLevel: 1,
    selectedSkillName: "Cold Bolt",
    targetMdef: 1,
    ignoreMdefPercent: 100,
    magicAddSize: 20,
    magicAddRace: "",
    magicAddEle: "",
    magicAtkEle: 60,
    magicDmgBoss: "",
    magicDmgNonBoss: 70,
    addedSkillDamage: 45,
    isTargetBoss: false,
  },
  // Add more setups here
];

const convertStringToNumber = (value: string | number): number | "" => {
  if (typeof value === "number") return value;
  return value === "" ? "" : Number(value);
};

const CalcPage: React.FC = () => {
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

  const [itemList, setItemList] = useState<any[]>([]);
  const [itemDict, setItemDict] = useState<{ [key: number]: any }>({});

  useEffect(() => {
    console.log("Parsed items", itemsList, itemsDict);
    // Set the parsed items to state
    setItemList(itemsList);
    setItemDict(itemsDict);
  }, []);

  const handleMinMatkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMinMatk(value === "" ? "" : Number(value));
  };

  const handleMaxMatkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMaxMatk(value === "" ? "" : Number(value));
  };

  const handleTargetMdefChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    if (value === "") {
      setTargetMdef("");
      return;
    }

    const numValue = Number(event.target.value);
    if (numValue >= 1 && numValue <= 127) {
      setTargetMdef(numValue);
    }
  };

  const handleIgnoreMdefPercentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    if (value === "") {
      setIgnoreMdefPercent("");
      return;
    }

    const numValue = Number(event.target.value);
    if (numValue >= 0 && numValue <= 100) {
      setIgnoreMdefPercent(numValue);
    }
  };

  const handleMagicAddSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setMagicAddSize(convertStringToNumber(value));
  };

  const handleMagicAddRaceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setMagicAddRace(convertStringToNumber(value));
  };

  const handleMagicAddEleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setMagicAddEle(convertStringToNumber(value));
  };

  const handleMagicAtkEleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setMagicAtkEle(convertStringToNumber(value));
  };

  const handleMagicDmgBossChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setMagicDmgBoss(convertStringToNumber(value));
  };

  const handleMagicDmgNonBossChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setMagicDmgNonBoss(convertStringToNumber(value));
  };

  const handleAddedSkillDamageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setAddedSkillDamage(convertStringToNumber(value));
  };

  const handleIsTargetBossChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsTargetBoss(event.target.checked);
  };

  const handleSetupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const setupLabel = event.target.value;
    const setup = predefinedSetups.find((setup) => setup.label === setupLabel);
    if (setup) {
      setMinMatk(convertStringToNumber(setup.minMatk));
      setMaxMatk(convertStringToNumber(setup.maxMatk));
      setDefendingElement(setup.defendingElement);
      setDefendingElementLevel(setup.defendingElementLevel);
      const skill = SkillFactory.createSkill(setup.selectedSkillName);
      setSelectedSkill(skill);
      setTargetMdef(convertStringToNumber(setup.targetMdef));
      setIgnoreMdefPercent(convertStringToNumber(setup.ignoreMdefPercent));
      setMagicAddSize(convertStringToNumber(setup.magicAddSize));
      setMagicAddRace(convertStringToNumber(setup.magicAddRace));
      setMagicAddEle(convertStringToNumber(setup.magicAddEle));
      setMagicAtkEle(convertStringToNumber(setup.magicAtkEle));
      setMagicDmgBoss(convertStringToNumber(setup.magicDmgBoss));
      setMagicDmgNonBoss(convertStringToNumber(setup.magicDmgNonBoss));
      setAddedSkillDamage(convertStringToNumber(setup.addedSkillDamage));
      setIsTargetBoss(setup.isTargetBoss);
      setSelectedSetup(setup.label);
    }
  };

  const handleSaveSetup = () => {
    const setup = {
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
    };
    navigator.clipboard.writeText(JSON.stringify(setup)).then(() => {
      alert("Setup copied to clipboard");
    });
  };

  const elements = Object.keys(ElementEnum)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      value: ElementEnum[key as keyof typeof ElementEnum],
      label: key,
    }));

  const skills: Skill[] = [
    SkillFactory.createSkill("Storm Gust"),
    SkillFactory.createSkill("Cold Bolt"),
    // Add other skills here
  ];

  const handleSkillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const skillName = event.target.value;
    const skill = skills.find((s) => s.name === skillName) || null;
    setSelectedSkill(skill);
  };

  const minDamage =
    selectedSkill && minMatk
      ? calculateMagicDamage({
          skill: selectedSkill,
          skillLevel: 10,
          matk: Number(minMatk),
          defendingElement,
          defendingElementLevel,
          targetMdef: targetMdef || 1,
          ignoreMdefPercent: ignoreMdefPercent || 0,
          magicAddSize: magicAddSize || 0,
          magicAddRace: magicAddRace || 0,
          magicAddEle: magicAddEle || 0,
          magicAtkEle: magicAtkEle || 0,
          magicDmgBoss: magicDmgBoss || 0,
          magicDmgNonBoss: magicDmgNonBoss || 0,
          addedSkillDamage: addedSkillDamage || 0,
          isTargetBoss: isTargetBoss,
        })
      : 0;

  const maxDamage =
    selectedSkill && maxMatk
      ? calculateMagicDamage({
          skill: selectedSkill,
          skillLevel: 10,
          matk: Number(maxMatk),
          defendingElement,
          defendingElementLevel,
          targetMdef: targetMdef || 1,
          ignoreMdefPercent: ignoreMdefPercent || 0,
          magicAddSize: magicAddSize || 0,
          magicAddRace: magicAddRace || 0,
          magicAddEle: magicAddEle || 0,
          magicAtkEle: magicAtkEle || 0,
          magicDmgBoss: magicDmgBoss || 0,
          magicDmgNonBoss: magicDmgNonBoss || 0,
          addedSkillDamage: addedSkillDamage || 0,
          isTargetBoss: isTargetBoss,
        })
      : 0;

  const defendingElementLevels = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Calculadora</h1>
      <DropdownSelector
        id="setupSelect"
        label="Select Setup"
        value={selectedSetup}
        options={predefinedSetups.map((setup) => ({
          value: setup.label,
          label: setup.label,
        }))}
        onChange={handleSetupChange}
      />
      <InputField
        label="Min MATK"
        value={minMatk}
        onChange={handleMinMatkChange}
        type="number"
      />
      <InputField
        label="Max MATK"
        value={maxMatk}
        onChange={handleMaxMatkChange}
        type="number"
      />
      <InputField
        label="Ignore MDEF Percent"
        value={ignoreMdefPercent}
        onChange={handleIgnoreMdefPercentChange}
        type="number"
      />
      <h2 className="text-lg md:text-md font-bold my-2">Cartas</h2>
      <InputField
        label="Magic Add Size"
        value={magicAddSize}
        onChange={handleMagicAddSizeChange}
        type="number"
      />
      <InputField
        label="Magic Add Race"
        value={magicAddRace}
        onChange={handleMagicAddRaceChange}
        type="number"
      />
      <InputField
        label="Magic Add Ele"
        value={magicAddEle}
        onChange={handleMagicAddEleChange}
        type="number"
      />
      <InputField
        label="Magic Atk Ele"
        value={magicAtkEle}
        onChange={handleMagicAtkEleChange}
        type="number"
      />
      <InputField
        label="Magic Damage to Boss"
        value={magicDmgBoss}
        onChange={handleMagicDmgBossChange}
        type="number"
      />
      <InputField
        label="Magic Damage to Non-Boss"
        value={magicDmgNonBoss}
        onChange={handleMagicDmgNonBossChange}
        type="number"
      />
      <InputField
        label="Added Skill Damage"
        value={addedSkillDamage}
        onChange={handleAddedSkillDamageChange}
        type="number"
      />
      <div className="w-full flex flex-col items-center mt-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <DropdownSelector
            id="defendingElement"
            label="Defending Element"
            value={defendingElement}
            options={elements}
            onChange={(e) =>
              setDefendingElement(Number(e.target.value) as ElementEnum)
            }
          />
          <DropdownSelector
            id="defendingElementLevel"
            label="Defending Element Level"
            value={defendingElementLevel}
            options={defendingElementLevels}
            onChange={(e) => setDefendingElementLevel(Number(e.target.value))}
          />
          <DropdownSelector
            id="skillSelect"
            label="Select Skill"
            value={selectedSkill ? selectedSkill.name : ""}
            options={skills.map((skill) => ({
              value: skill.name,
              label: skill.name,
            }))}
            onChange={handleSkillChange}
          />
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <h2 className="text-xl font-bold mb-4">Target Properties</h2>
          <InputField
            label="Target MDEF"
            value={targetMdef}
            onChange={handleTargetMdefChange}
            type="number"
          />
          <div className="flex items-center my-2">
            <label htmlFor="isTargetBoss" className="mr-2">
              Is Target Boss
            </label>
            <input
              type="checkbox"
              id="isTargetBoss"
              checked={isTargetBoss}
              onChange={handleIsTargetBossChange}
            />
          </div>
        </div>
        {selectedSkill && (
          <div className="w-full flex flex-col items-center mt-4">
            <h2 className="text-xl font-bold mb-4">
              {selectedSkill.name} Damage
            </h2>
            <p>Element: {ElementEnum[selectedSkill.element]}</p>
            <p>Min Damage: {minDamage}</p>
            <p>Max Damage: {maxDamage}</p>
          </div>
        )}
      </div>
      <button
        onClick={handleSaveSetup}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Copy Setup
      </button>
    </div>
  );
};

export default CalcPage;

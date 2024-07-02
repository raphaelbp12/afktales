"use client";

import React, { useState } from "react";
import InputField from "../commonComponents/InputField";
import { Skill } from "@/data/Skill";
import { SkillFactory } from "@/data/SkillFactory";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import DropdownSelector from "../commonComponents/DropdownSelector";
import { calculateMagicDamage } from "./calculateMagicDamage";

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
    </div>
  );
};

export default CalcPage;

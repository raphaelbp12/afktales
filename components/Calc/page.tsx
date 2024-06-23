// CalcPage.tsx
"use client";

import React, { useState } from "react";
import InputField from "../commonComponents/InputField";
import { Skill } from "@/data/Skill";
import { SkillFactory } from "@/data/SkillFactory";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import DropdownSelector from "../commonComponents/DropdownSelector";
import { calculateDamage } from "./calculateDamage";

const CalcPage: React.FC = () => {
  const [minMatk, setMinMatk] = useState<number | string>("");
  const [maxMatk, setMaxMatk] = useState<number | string>("");
  const [defendingElement, setDefendingElement] = useState<ElementEnum>(
    ElementEnum.Neutro
  );
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleMinMatkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMinMatk(value === "" ? "" : Number(value));
  };

  const handleMaxMatkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMaxMatk(value === "" ? "" : Number(value));
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
      ? calculateDamage({
          skill: selectedSkill,
          matk: Number(minMatk),
          defendingElement,
        })
      : 0;

  const maxDamage =
    selectedSkill && maxMatk
      ? calculateDamage({
          skill: selectedSkill,
          matk: Number(maxMatk),
          defendingElement,
        })
      : 0;

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
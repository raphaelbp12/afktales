"use client";

import React from "react";
import InputField from "../commonComponents/InputField";
import DropdownSelector from "../commonComponents/DropdownSelector";
import { calculateMagicDamage } from "./calculateMagicDamage";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { SkillFactory } from "@/data/SkillFactory";
import { useCalc } from "@/contexts/calcContext";

const DamageCalculation: React.FC = () => {
  const {
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
  } = useCalc();

  const elements = Object.keys(ElementEnum)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      value: ElementEnum[key as keyof typeof ElementEnum],
      label: key,
    }));

  const skills = [
    SkillFactory.createSkill("Storm Gust"),
    SkillFactory.createSkill("Cold Bolt"),
    // Add other skills here
  ];

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

  const handleSkillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const skillName = event.target.value;
    const skill = skills.find((s) => s.name === skillName) || null;
    setSelectedSkill(skill);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <InputField
        label="Min MATK"
        value={minMatk}
        onChange={(e) =>
          setMinMatk(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Max MATK"
        value={maxMatk}
        onChange={(e) =>
          setMaxMatk(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Ignore MDEF Percent"
        value={ignoreMdefPercent}
        onChange={(e) =>
          setIgnoreMdefPercent(
            e.target.value === "" ? "" : Number(e.target.value)
          )
        }
        type="number"
      />
      <h2 className="text-lg md:text-md font-bold my-2">Cartas</h2>
      <InputField
        label="Magic Add Size"
        value={magicAddSize}
        onChange={(e) =>
          setMagicAddSize(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Magic Add Race"
        value={magicAddRace}
        onChange={(e) =>
          setMagicAddRace(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Magic Add Ele"
        value={magicAddEle}
        onChange={(e) =>
          setMagicAddEle(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Magic Atk Ele"
        value={magicAtkEle}
        onChange={(e) =>
          setMagicAtkEle(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Magic Damage to Boss"
        value={magicDmgBoss}
        onChange={(e) =>
          setMagicDmgBoss(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
      />
      <InputField
        label="Magic Damage to Non-Boss"
        value={magicDmgNonBoss}
        onChange={(e) =>
          setMagicDmgNonBoss(
            e.target.value === "" ? "" : Number(e.target.value)
          )
        }
        type="number"
      />
      <InputField
        label="Added Skill Damage"
        value={addedSkillDamage}
        onChange={(e) =>
          setAddedSkillDamage(
            e.target.value === "" ? "" : Number(e.target.value)
          )
        }
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
            options={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
            ]}
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
            onChange={(e) =>
              setTargetMdef(e.target.value === "" ? "" : Number(e.target.value))
            }
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
              onChange={(e) => setIsTargetBoss(e.target.checked)}
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
    </div>
  );
};

export default DamageCalculation;

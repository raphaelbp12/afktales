// utils/calculateDamage.ts
import { Skill } from "@/data/Skill";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { getElementalResistanceValue } from "@/data/Elements/getResistanceValue";

interface MagicDamageCalculationParams {
  skill: Skill;
  skillLevel: number;
  matk: number;
  defendingElement: ElementEnum;
  defendingElementLevel: number;
  targetMdef: number;
  ignoreMdefPercent: number;
}

export const calculateMDEFReduction = (
  targetMdef: number,
  ignoreMdefPercent: number
): number => {
  return (targetMdef * (1 - ignoreMdefPercent)) / 100;
};

export const calculateMagicDamage = ({
  skill,
  skillLevel,
  matk,
  defendingElement,
  defendingElementLevel,
  targetMdef,
  ignoreMdefPercent,
}: MagicDamageCalculationParams): number => {
  const mdefReduction = calculateMDEFReduction(targetMdef, ignoreMdefPercent);
  const matkAfterMdef = matk * (1 - mdefReduction);
  const baseDamage = skill.calculateDamage({
    level: skillLevel,
    matk: matk,
  });
  const matk2 = 1;
  const damage = (baseDamage * (100 - targetMdef)) / 100 - matk2;
  const elementalResistanceValue = getElementalResistanceValue(
    defendingElementLevel,
    skill.element,
    defendingElement
  );
  const adjustedDamage = Math.round(damage) * elementalResistanceValue;

  return adjustedDamage;
};

// utils/calculateDamage.ts
import { Skill } from "@/data/Skill";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { getElementalResistanceValue } from "@/data/Elements/getResistanceValue";

interface MagicDamageCalculationParams {
  skill: Skill;
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
  matk,
  defendingElement,
  defendingElementLevel,
  targetMdef,
  ignoreMdefPercent,
}: MagicDamageCalculationParams): number => {
  const mdefReduction = calculateMDEFReduction(targetMdef, ignoreMdefPercent);
  const matkAfterMdef = matk * (1 - mdefReduction);
  const baseDamage = skill.calculateDamage({
    level: 10,
    matk: Math.round(matkAfterMdef),
  });
  const elementalResistanceValue = getElementalResistanceValue(
    defendingElementLevel,
    skill.element,
    defendingElement
  );
  const adjustedDamage = baseDamage * elementalResistanceValue;

  return adjustedDamage;
};

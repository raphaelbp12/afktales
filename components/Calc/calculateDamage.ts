// utils/calculateDamage.ts
import { Skill } from "@/data/Skill";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { getResistanceValue } from "@/data/Elements/getResistanceValue";

interface DamageCalculationParams {
  skill: Skill;
  matk: number;
  defendingElement: ElementEnum;
}

export const calculateDamage = ({
  skill,
  matk,
  defendingElement,
}: DamageCalculationParams): number => {
  const baseDamage = skill.calculateDamage({ level: 10, matk });
  const resistance = getResistanceValue(1, skill.element, defendingElement);
  const adjustedDamage = baseDamage * resistance;

  return adjustedDamage;
};

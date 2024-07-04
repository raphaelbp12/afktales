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
  isTargetBoss: boolean;
  ignoreMdefPercent: number;
  magicAddSize: number;
  magicAddRace: number;
  magicAddEle: number;
  magicAtkEle: number;
  magicDmgBoss: number;
  magicDmgNonBoss: number;
  addedSkillDamage: number;
}

export const calculateMDEFReduction = (
  targetMdef: number,
  ignoreMdefPercent: number
): number => {
  return targetMdef * (1 - ignoreMdefPercent);
};

// battle.c - battle_calc_cardfix
const calcMagicCards = (
  damage: number,
  magicAddSize: number,
  magicAddRace: number,
  magicAddEle: number,
  magicAtkEle: number,
  magicDmgBoss: number,
  magicDmgNonBoss: number,
  isTargetBoss: boolean
): number => {
  let cardModifier = 1000;

  cardModifier = (cardModifier * (100 + magicAddRace)) / 100;
  cardModifier = (cardModifier * (100 + magicAddEle)) / 100;
  cardModifier = (cardModifier * (100 + magicAddSize)) / 100;
  cardModifier = (cardModifier * (100 + magicAtkEle)) / 100;

  if (isTargetBoss) {
    cardModifier = (cardModifier * (100 + magicDmgBoss)) / 100;
  } else {
    cardModifier = (cardModifier * (100 + magicDmgNonBoss)) / 100;
  }

  let newDamage = damage;
  if (cardModifier !== 1000) {
    newDamage = (newDamage * cardModifier) / 1000;
  }

  return newDamage;
};

export const calculateMagicDamage = ({
  skill,
  skillLevel,
  matk,
  defendingElement,
  defendingElementLevel,
  targetMdef,
  isTargetBoss,
  ignoreMdefPercent,
  magicAddSize,
  magicAddRace,
  magicAddEle,
  magicAtkEle,
  magicDmgBoss,
  magicDmgNonBoss,
  addedSkillDamage,
}: MagicDamageCalculationParams): number => {
  const ignoreMdef = ignoreMdefPercent / 100;
  const targetMdefReduced = calculateMDEFReduction(targetMdef, ignoreMdef);
  const baseDamage = skill.calculateDamage({
    level: skillLevel,
    matk: matk,
  });
  const matk2 = 1;
  const damage = (baseDamage * (100 - targetMdefReduced)) / 100 - matk2;
  const elementalResistanceValue = getElementalResistanceValue(
    defendingElementLevel,
    skill.element,
    defendingElement
  );
  const adjustedDamage = Math.round(damage) * elementalResistanceValue;
  const damageAfterSkillAtkBonus =
    adjustedDamage * ((100 + addedSkillDamage) / 100);

  const damageAfterCards = calcMagicCards(
    damageAfterSkillAtkBonus,
    magicAddSize,
    magicAddRace,
    magicAddEle,
    magicAtkEle,
    magicDmgBoss,
    magicDmgNonBoss,
    isTargetBoss
  );

  return damageAfterCards;
};

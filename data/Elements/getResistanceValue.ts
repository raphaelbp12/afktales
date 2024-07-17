import { ElementEnum } from "./ElementsEnum";
import { resistanceTable } from "./resistanceTable";

export const getElementalResistanceValue = (
  level: number,
  attackingElement: ElementEnum,
  defendingElement: ElementEnum
): number => {
  if (level === 0) {
    level = 1;
  }

  const table = resistanceTable[level];
  if (!table) {
    throw new Error("Invalid level");
  }
  const resistValue = table[defendingElement][attackingElement];
  return resistValue / 100.0;
};

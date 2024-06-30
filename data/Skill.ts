import { ElementEnum } from "./Elements/ElementsEnum";

export interface SkillParams {
  level: number;
  matk: number;
}

export abstract class Skill {
  name: string;
  element: ElementEnum;
  maxLevel: number;
  constructor(name: string, element: ElementEnum, maxLevel: number) {
    this.name = name;
    this.element = element;
    this.maxLevel = maxLevel;
  }

  abstract calculateDamage(params: SkillParams): number;
}

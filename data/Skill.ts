import { ElementEnum } from "./Elements/ElementsEnum";

export interface SkillParams {
  level: number;
  matk: number;
}

export abstract class Skill {
  name: string;
  element: ElementEnum;
  constructor(name: string, element: ElementEnum) {
    this.name = name;
    this.element = element;
  }

  abstract calculateDamage(params: SkillParams): number;
}

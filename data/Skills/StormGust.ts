import { ElementEnum } from "../Elements/ElementsEnum";
import { Skill, SkillParams } from "../Skill";

export class StormGust extends Skill {
  constructor() {
    super("Storm Gust", ElementEnum.Agua);
  }

  calculateDamage(params: SkillParams): number {
    console.log('calculateDamage StormGust', params, this.element)
    const matkMultiplier = [0, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.0]; // Multiplier for each level
    return params.matk * matkMultiplier[params.level];
  }
}
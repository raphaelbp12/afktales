import { ElementEnum } from "../Elements/ElementsEnum";
import { Skill, SkillParams } from "../Skill";

export class ColdBolt extends Skill {
  constructor() {
    super("Cold Bolt", ElementEnum.Agua);
  }

  calculateDamage(params: SkillParams): number {
    return params.matk * params.level;
  }
}
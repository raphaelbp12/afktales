import { ElementEnum } from "../../Elements/ElementsEnum";
import { Skill, SkillParams } from "../../Skill";

export class ColdBolt extends Skill {
  constructor() {
    super("Cold Bolt", ElementEnum.Agua, 10);
  }

  calculateDamage(params: SkillParams): number {
    return Math.floor(params.matk) * params.level;
  }
}

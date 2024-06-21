class ColdBolt extends Skill {
  constructor() {
    super("Cold Bolt");
  }

  calculateDamage(params: SkillParams): number {
    return params.matk * params.level;
  }
}
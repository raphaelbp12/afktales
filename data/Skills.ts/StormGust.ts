class StormGust extends Skill {
  constructor() {
    super("Storm Gust");
  }

  calculateDamage(params: SkillParams): number {
    const matkMultiplier = [0, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6, 5.0]; // Multiplier for each level
    return params.matk * matkMultiplier[params.level];
  }
}
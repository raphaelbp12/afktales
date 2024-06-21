interface SkillParams {
  level: number;
  matk: number;
}

abstract class Skill {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract calculateDamage(params: SkillParams): number;
}

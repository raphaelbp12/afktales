import { Skill } from "./Skill";
import { ColdBolt } from "./Skills/ColdBolt";
import { StormGust } from "./Skills/StormGust";

export class SkillFactory {
  static createSkill(name: string): Skill {
    switch (name) {
      case "Storm Gust":
        return new StormGust();
      case "Cold Bolt":
        return new ColdBolt();
      // Add cases for other skills here
      default:
        throw new Error("Unknown skill");
    }
  }
}

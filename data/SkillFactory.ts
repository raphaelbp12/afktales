import { Skill } from "./Skill";
import { ColdBolt } from "./Skills/mage/ColdBolt";
import { StormGust } from "./Skills/mage/StormGust";

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

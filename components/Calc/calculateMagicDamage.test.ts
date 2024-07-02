import "@testing-library/jest-dom";
import { calculateMagicDamage } from "./calculateMagicDamage";
import { SkillFactory } from "@/data/SkillFactory";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import coldBoltData from "@/data/Skills/mage/ColdBolt.json";
import stormGustData from "@/data/Skills/mage/StormGust.json";

interface TestCase {
  skillName: string;
  skillLevel: number;
  matk: number;
  defendingElement: string;
  defendingElementLevel: number;
  targetMdef: number;
  expectedDamage: number;
  ignoreMdefPercent?: number;
  expectedMargin?: number;
}

const defaultExpectedMargin = 0.002;

const testCases: TestCase[] = [...coldBoltData, ...stormGustData];

describe("calculateMagicDamage", () => {
  testCases.forEach(
    ({
      skillName,
      skillLevel,
      matk,
      defendingElement,
      defendingElementLevel,
      targetMdef,
      expectedDamage,
      ignoreMdefPercent,
      expectedMargin,
    }) => {
      it(`${skillName} - lvl ${skillLevel} - against ${defendingElement} - ${targetMdef}mdef ${
        ignoreMdefPercent ? " - ignoreMdef: " + ignoreMdefPercent + "%" : ""
      } ${
        expectedMargin ? " - expectedMargin: " + expectedMargin * 100 + "%" : ""
      }`, () => {
        const errorMarging = expectedMargin || defaultExpectedMargin;
        const selectedSkill = SkillFactory.createSkill(skillName);

        const damage = calculateMagicDamage({
          skill: selectedSkill,
          skillLevel,
          matk: Number(matk),
          defendingElement:
            ElementEnum[defendingElement as keyof typeof ElementEnum],
          defendingElementLevel,
          targetMdef: targetMdef || 1,
          ignoreMdefPercent: ignoreMdefPercent || 0,
        });

        expect(damage).toBeGreaterThanOrEqual(
          expectedDamage * (1 - errorMarging)
        );
        expect(damage).toBeLessThanOrEqual(expectedDamage * (1 + errorMarging));
      });
    }
  );
});

import "@testing-library/jest-dom";
import { calculateMagicDamage } from "./calculateMagicDamage";
import { SkillFactory } from "@/data/SkillFactory";
import { ElementEnum } from "@/data/Elements/ElementsEnum";
import coldBoltData from "@/data/Skills/mage/ColdBolt.json";
import stormGustData from "@/data/Skills/mage/StormGust.json";

const expectedMargin = 0.002;

const testCases = [...coldBoltData, ...stormGustData];

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
    }) => {
      it(`${skillName} - lvl ${skillLevel} - against ${defendingElement} - ${targetMdef}mdef`, () => {
        const selectedSkill = SkillFactory.createSkill(skillName);

        const damage = calculateMagicDamage({
          skill: selectedSkill,
          skillLevel,
          matk: Number(matk),
          defendingElement:
            ElementEnum[defendingElement as keyof typeof ElementEnum],
          defendingElementLevel,
          targetMdef: targetMdef || 1,
          ignoreMdefPercent: 0,
        });

        expect(damage).toBeGreaterThanOrEqual(
          expectedDamage * (1 - expectedMargin)
        );
        expect(damage).toBeLessThanOrEqual(
          expectedDamage * (1 + expectedMargin)
        );
      });
    }
  );
});

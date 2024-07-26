import { PlayerAttributes } from "./PlayerAttributes";
import { BonusHelpers } from "./BonusHelpers";
import { Bonuses, bonusTypeToStatusPointType } from "@/ragnarokData/types";

describe("BonusHelpers", () => {
  let playerAttributes: PlayerAttributes;

  beforeEach(() => {
    playerAttributes = new PlayerAttributes({});
  });

  test("should process SP_HP_VANISH_RATE bonus correctly", () => {
    const bonuses: Bonuses = {
      bonus3: {
        SP_HP_VANISH_RATE: [[10, 1, 0]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.hp_vanish_rate).toBe(10);
    expect(updatedAttributes.bonus.hp_vanish_per).toBe(1);
    expect(updatedAttributes.bonus.hp_vanish_trigger).toBe(0);
  });

  test("should process SP_SP_VANISH_RATE bonus correctly", () => {
    const bonuses: Bonuses = {
      bonus3: {
        SP_SP_VANISH_RATE: [[10, 1, 0]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.sp_vanish_rate).toBe(10);
    expect(updatedAttributes.bonus.sp_vanish_per).toBe(1);
    expect(updatedAttributes.bonus.sp_vanish_trigger).toBe(0);
  });

  test("should process combinations of bonuses correctly", () => {
    const bonuses: Bonuses = {
      bonus3: {
        SP_HP_VANISH_RATE: [[1, 20, 0]],
        SP_SP_VANISH_RATE: [[1, 15, 1]],
      },
      bonus4: {
        SP_AUTOSPELL: [[1, 2001, 10, 5]],
      },
      bonus5: {
        SP_AUTOSPELL_WHENHIT: [[1, 2002, 20, 10, 5]],
      },
    };

    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(updatedAttributes.bonus.hp_vanish_rate).toBe(1);
    expect(updatedAttributes.bonus.hp_vanish_per).toBe(20);
    expect(updatedAttributes.bonus.hp_vanish_trigger).toBe(0);

    expect(updatedAttributes.bonus.sp_vanish_rate).toBe(1);
    expect(updatedAttributes.bonus.sp_vanish_per).toBe(15);
    expect(updatedAttributes.bonus.sp_vanish_trigger).toBe(1);
  });

  test("should handle unknown bonus type gracefully", () => {
    const bonuses: Bonuses = {
      bonus3: {
        UNKNOWN_BONUS: [[1, 2, 3]],
      },
    };

    const consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    const updatedAttributes = BonusHelpers.processBonuses(
      bonuses,
      playerAttributes
    );

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Unknown bonus3 type: UNKNOWN_BONUS"
    );
    consoleWarnSpy.mockRestore();
  });
});

import { Effect, effectStringToEnum } from "./AutoTriggerFlag";

describe("AutoTriggerFlag", () => {
  it("effectStringToEnum validEffectString", () => {
    const validEffectString = "Eff_Freeze"; // Valid string
    const effect = effectStringToEnum(validEffectString);
    expect(effect).toBe(Effect.Eff_Freeze);
  });

  it("effectStringToEnum invalidEffectString", () => {
    const invalidEffectString = "4"; // Valid string
    const effect = effectStringToEnum(invalidEffectString);
    expect(effect).toBe(null);
  });

  it("effectStringToEnum anotherInvalidString", () => {
    const anotherInvalidString = "Eff_Invalid"; // Valid string
    const effect = effectStringToEnum(anotherInvalidString);
    expect(effect).toBe(null);
  });

  it("effectStringToEnum anotherInvalidString", () => {
    const anotherInvalidString = "Ele_Water"; // Valid string
    const effect = effectStringToEnum(anotherInvalidString);
    expect(effect).toBe(null);
  });
});

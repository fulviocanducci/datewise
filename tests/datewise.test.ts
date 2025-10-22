import { Datewise } from "../src/Datewise";
import { Locales } from "../src/bases/locales";

describe("Datewise", () => {
  test("should create validation and formatted instances", () => {
    const dw = new Datewise({ locale: Locales.EN_US });
    expect(dw.validation()).toBeDefined();
    expect(dw.formatted()).toBeDefined();
  });

  test("should validate a date through Datewise", () => {
    const dw = new Datewise({ locale: Locales.PT_BR });
    expect(dw.validation().isValidDate("2025-10-22")).toBe(true);
  });
});

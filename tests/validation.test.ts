import { Validation } from "../src/validation";
import { Locales } from "../src/bases/locales";

describe("Validation", () => {
  const validation = new Validation({ locale: Locales.PT_BR });

  test("should validate a correct date", () => {
    expect(validation.isValidDate("2025-10-22")).toBe(true);
  });

  test("should invalidate an incorrect date", () => {
    expect(validation.isValidDate("2025-13-99")).toBe(false);
  });

  test("should check if date1 is before date2", () => {
    expect(validation.isBefore("2025-01-01", "2025-12-31")).toBe(true);
  });

  test("should check if date1 is after date2", () => {
    expect(validation.isAfter("2025-12-31", "2025-01-01")).toBe(true);
  });
});

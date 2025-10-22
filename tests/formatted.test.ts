import { Formatted } from "../src/formatted";
import { Locales } from "../src/bases/locales";

describe("Formatted", () => {
  const formatted = new Formatted({ locale: Locales.PT_BR });

  test("should format a valid date", () => {
    const result = formatted.formatDate("2025-10-22");
    expect(result).toContain("2025");
  });

  test("should return null for invalid date", () => {
    const result = formatted.formatDate("invalid-date");
    expect(result).toBeNull();
  });
});

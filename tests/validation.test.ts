import { Validation } from "../src/validation";
import { Locales } from "../src/bases/locales";

describe("Validation", () => {
  const validation = new Validation({ locale: Locales.PT_BR });

  test("should validate a correct time", () => {
    expect(validation.isValidTime("14:14")).toBe(true);
  });

  test("should validate a incorrect time", () => {
    expect(validation.isValidTime("")).toBe(false);
  });

  test("should validate a correct time", () => {
    expect(validation.isValidDate("14:14", "HH:mm")).toBe(true);
  });

  test("should validate a incorrect time", () => {
    expect(validation.isValidDate("", "HH:mm")).toBe(false);
  });

  test("should validate a correct date", () => {
    expect(validation.isValidDate("2025-10-22")).toBe(true);
  });

  test("should invalidate an incorrect date", () => {
    expect(validation.isValidDate("2025-13-99")).toBe(false);
  });

  test("should validate a correct datetime", () => {
    expect(validation.isValidDateTime("2025-10-22 14:14:00")).toBe(true);
  });

  test("should invalidate an incorrect datetime", () => {
    expect(validation.isValidDateTime("")).toBe(false);
  });

  test("should check if date1 is before date2", () => {
    expect(validation.isBefore("2025-01-01", "2025-12-31")).toBe(true);
  });

  test("should check if date1 is after date2", () => {
    expect(validation.isAfter("2025-12-31", "2025-01-01")).toBe(true);
  });

  test("should check if date1 is before date2, false", () => {
    expect(validation.isBefore("2025-12-31", "2025-01-01")).toBe(false);
  });

  test("Invalid dates return false", () => {
    const v = new Validation();
    expect(v.isBefore("invalid", "2024-01-01")).toBe(false);
    expect(v.isAfter("invalid", "2024-01-01")).toBe(false);
  });
});

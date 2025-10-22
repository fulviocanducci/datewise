import { Datewise } from "../src/Datewise";
import { Locales } from "../src/bases/locales";

test("Datewise static creation works", () => {
  const v = Datewise.createValidation();
  const f = Datewise.createFormatted();
  expect(v.isValidDate("2024-01-01")).toBe(true);
  expect(f.formatDate("2024-01-01")).toBeDefined();
});

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

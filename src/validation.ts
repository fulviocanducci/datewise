import { DateTime } from "luxon";
import { Locales } from "./bases/locales";
import { IOptions } from "./Interfaces/IOptions";

export class Validation {
  private options: IOptions;

  constructor(options: Partial<IOptions> = {}) {
    this.options = {
      locale: options.locale ?? Locales.EN_US,
    };
  }

  isValidDate(value: string, format = "yyyy-MM-dd"): boolean {
    return DateTime.fromFormat(value, format, { locale: this.options.locale }).isValid;
  }

  isValidTime(value: string, format = "HH:mm"): boolean {
    return DateTime.fromFormat(value, format, { locale: this.options.locale }).isValid;
  }

  isValidDateTime(value: string, format = "yyyy-MM-dd HH:mm:ss"): boolean {
    return DateTime.fromFormat(value, format, { locale: this.options.locale }).isValid;
  }

  isBefore(date1: string, date2: string, format = "yyyy-MM-dd"): boolean {
    const d1 = DateTime.fromFormat(date1, format, { locale: this.options.locale });
    const d2 = DateTime.fromFormat(date2, format, { locale: this.options.locale });
    return d1.isValid && d2.isValid ? d1.toMillis() < d2.toMillis() : false;
  }

  isAfter(date1: string, date2: string, format = "yyyy-MM-dd"): boolean {
    const d1 = DateTime.fromFormat(date1, format, { locale: this.options.locale });
    const d2 = DateTime.fromFormat(date2, format, { locale: this.options.locale });
    return d1.isValid && d2.isValid ? d1.toMillis() > d2.toMillis() : false;
  }
}

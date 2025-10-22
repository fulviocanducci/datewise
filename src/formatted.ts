import { DateTime } from "luxon";
import { IOptions } from "./Interfaces/IOptions";
import { Locales } from "./bases/locales";

export class Formatted {
  private options: IOptions;

  constructor(options: Partial<IOptions> = {}) {
    this.options = {
      locale: options.locale ?? Locales.EN_US,
    };
  }
  formatDate(value: string, format = "yyyy-MM-dd"): string | null {
    const dt = DateTime.fromFormat(value, format, { locale: this.options.locale });
    return dt.isValid ? dt.toLocaleString(DateTime.DATE_FULL) : null;
  }

  formatTime(value: string, format = "HH:mm"): string | null {
    const dt = DateTime.fromFormat(value, format, { locale: this.options.locale });
    return dt.isValid ? dt.toLocaleString(DateTime.TIME_SIMPLE) : null;
  }

  formatDateTime(value: string, format = "yyyy-MM-dd HH:mm:ss"): string | null {
    const dt = DateTime.fromFormat(value, format, { locale: this.options.locale });
    return dt.isValid ? dt.toLocaleString(DateTime.DATETIME_FULL) : null;
  }
}

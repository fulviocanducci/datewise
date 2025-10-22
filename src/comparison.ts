import { DateTime } from "luxon";
import { Locales } from "./bases/locales";
import { IOptions } from "./Interfaces/IOptions";

class Comparison {
  private options: IOptions;

  constructor(options: Partial<IOptions> = {}) {
    this.options = {
      locale: options.locale ?? Locales.EN_US,
    };
  }
}

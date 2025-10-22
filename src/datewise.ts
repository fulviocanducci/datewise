import { Formatted } from "./formatted";
import { IOptions } from "./Interfaces/IOptions";
import { Validation } from "./validation";

export class Datewise {
  private readonly validationInstance: Validation;
  private readonly formattedInstance: Formatted;

  constructor(private readonly options?: IOptions) {
    this.validationInstance = new Validation(options);
    this.formattedInstance = new Formatted(options);
  }

  validation(): Validation {
    return this.validationInstance;
  }

  formatted(): Formatted {
    return this.formattedInstance;
  }

  static createValidation(options?: IOptions): Validation {
    return new Validation(options);
  }

  static createFormatted(options?: IOptions): Formatted {
    return new Formatted(options);
  }
}

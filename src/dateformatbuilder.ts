export class DateFormatBuilder {
  private readonly DAY: string = "dd";
  private readonly MONTH: string = "MM";
  private readonly YEAR: string = "yyyy";
  private readonly HOURS: string = "HH";
  private readonly MINUTES: string = "mm";
  private readonly SECONDS: string = "ss";
  private readonly COLON: string = ":";
  private readonly SPACE: string = " ";
  private readonly SLASH: string = "/";
  private readonly DASH: string = "-";
  private render: string[];

  constructor() {
    this.render = [];
  }

  clear(): DateFormatBuilder {
    this.render = [];
    return this;
  }

  day(): DateFormatBuilder {
    this.render.push(this.DAY);
    return this;
  }

  month(): DateFormatBuilder {
    this.render.push(this.MONTH);
    return this;
  }

  year(): DateFormatBuilder {
    this.render.push(this.YEAR);
    return this;
  }

  hours(): DateFormatBuilder {
    this.render.push(this.HOURS);
    return this;
  }

  minutes(): DateFormatBuilder {
    this.render.push(this.MINUTES);
    return this;
  }

  seconds(): DateFormatBuilder {
    this.render.push(this.SECONDS);
    return this;
  }

  dash(): DateFormatBuilder {
    this.render.push(this.DASH);
    return this;
  }

  slash(): DateFormatBuilder {
    this.render.push(this.SLASH);
    return this;
  }

  space(): DateFormatBuilder {
    this.render.push(this.SPACE);
    return this;
  }

  colon(): DateFormatBuilder {
    this.render.push(this.COLON);
    return this;
  }

  build(): string {
    const format = this.render.join("");
    this.clear();
    return format;
  }
}

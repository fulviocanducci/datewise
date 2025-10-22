import { DateFormatBuilder } from "../src/DateFormatBuilder";

describe("DateTimeFormat Builder", () => {
  test("formato dd/MM/yyyy (Brasil)", () => {
    const format = new DateFormatBuilder().day().slash().month().slash().year().build();
    expect(format).toBe("dd/MM/yyyy");
  });

  test("formato yyyy-MM-dd (ISO)", () => {
    const format = new DateFormatBuilder().year().dash().month().dash().day().build();
    expect(format).toBe("yyyy-MM-dd");
  });

  test("formato HH:mm:ss (hora completa)", () => {
    const format = new DateFormatBuilder().hours().colon().minutes().colon().seconds().build();
    expect(format).toBe("HH:mm:ss");
  });

  test("formato dd/MM/yyyy HH:mm:ss (data e hora completa)", () => {
    const format = new DateFormatBuilder()
      .day()
      .slash()
      .month()
      .slash()
      .year()
      .space()
      .hours()
      .colon()
      .minutes()
      .colon()
      .seconds()
      .build();
    expect(format).toBe("dd/MM/yyyy HH:mm:ss");
  });

  test("formato ISO completo: yyyy-MM-dd HH:mm:ss", () => {
    const format = new DateFormatBuilder()
      .year()
      .dash()
      .month()
      .dash()
      .day()
      .space()
      .hours()
      .colon()
      .minutes()
      .colon()
      .seconds()
      .build();
    expect(format).toBe("yyyy-MM-dd HH:mm:ss");
  });

  test("uso de clear() reinicia o builder", () => {
    const builder = new DateFormatBuilder();
    builder.day().slash().month().slash().year().build();
    const newFormat = builder.year().dash().month().dash().day().build();
    expect(newFormat).toBe("yyyy-MM-dd");
  });

  test("mistura de separadores: dd-MM/yyyy HH:mm", () => {
    const format = new DateFormatBuilder().day().dash().month().slash().year().space().hours().colon().minutes().build();
    expect(format).toBe("dd-MM/yyyy HH:mm");
  });

  test("builder sem componentes retorna string vazia", () => {
    const format = new DateFormatBuilder().build();
    expect(format).toBe("");
  });
});

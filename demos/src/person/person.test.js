const Person = require(".");

describe("test for person", () => {
  let person;

  // Arrange
  beforeEach(() => {
    person = new Person("John", 0, 1.7);
  });

  test("sould return down", () => {
    // AAA

    // Arrange / Given

    person.weight = 45;

    // Act / When

    const imc = person.calcIMC();

    // Assert / Then

    expect(imc).toBe("down");
  });

  test("sould return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});

const { sum, multiply, divide } = require(".");

describe("test for  math", () => {
  describe("test for sum", () => {
    test("add 1+ 3 should be 4", () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe("test for multiply", () => {
    test("add 2*2 should be 4", () => {
      const rta = multiply(2, 2);
      expect(rta).toBe(4);
    });
  });
});

test("should divide", () => {
  const rta = divide(2, 2);
  expect(rta).toBe(1);
  const rta2 = divide(8, 4);
  expect(rta2).toBe(2);
});

test("should divide for 0", () => {
  const rta = divide(10, 0);
  expect(rta).toBeNull();
});

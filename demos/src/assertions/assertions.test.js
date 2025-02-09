// matchers
test("testing obj", () => {
  const data = { name: "Jose" };

  data.lastName = "Bedoya";
  expect(data).toEqual({ name: "Jose", lastName: "Bedoya" });
});

test("null", () => {
  const data = null;

  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("booleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
});

test("strings", () => {
  expect("Jostop").toMatch(/stop/);
});

test("list / arrays", () => {
  const numbers = [1, 2, 3, 4, 5];

  expect(numbers).toContain(3);
});

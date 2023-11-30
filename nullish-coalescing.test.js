//«объединение со значением null» (nullish coalescence)

test("Nullish coalescing defaults null", () => {
  expect(null ?? "default").toBe("default");
});

test("Nullish coalescing defaults undefined", () => {
  expect(undefined ?? "default").toBe("default");
});

test("Nullish coalescing defaults void 0", () => {
  expect(void 0 ?? "default").toBe("default");
});

test("Nullish coalescing defaults  0", () => {
  expect(0 ?? "default").toBe(0);
});

test("Nullish coalescing does not default empty strings", () => {
  expect("" ?? "default").toBe("");
});

test("Nullish coalescing does not default false", () => {
  expect(false ?? "default").toBe(false);
});

// ||
test("default for 0", () => {
  expect(0 || "default").toBe("default");
});

test("default for empty strings", () => {
  expect("" || "default").toBe("default");
});

test("default for false", () => {
  expect(false || "default").toBe("default");
});

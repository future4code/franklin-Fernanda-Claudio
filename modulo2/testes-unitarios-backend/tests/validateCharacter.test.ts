import { validateCharacter } from './../src/validateCharacter';

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});
test("Should return false for empty life", () => {
  const result = validateCharacter({
    name: "Roginaldo",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});
test("Should return false for empty strength", () => {
  const result = validateCharacter({
    name: "Roginaldo",
    life: 10,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});
test("Should return false for empty defense", () => {
  const result = validateCharacter({
    name: "Roginaldo",
    life: 10,
    strength: 200,
    defense: 0,
  });

  expect(result).toBe(false);
});
test("Should return false for empty defense negative", () => {
  const result = validateCharacter({
    name: "Roginaldo",
    life: 10,
    strength: 200,
    defense: -200,
  });

  expect(result).toBe(false);
});
test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Maria beltrano",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});
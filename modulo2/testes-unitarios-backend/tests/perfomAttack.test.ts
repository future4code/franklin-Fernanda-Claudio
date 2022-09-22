import { Character } from './../src/validateCharacter';
import { performAttack } from './../src/performAttack';

test("Should perform attack", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Monica",
    life: 1355,
    defense: 209,
    strength: 605,
  };

  const defender: Character = {
    name: "Mack",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  performAttack(attacker, defender, validatorMock as any);

  expect(defender.life).toEqual(1295);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});
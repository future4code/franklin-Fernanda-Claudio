import { checaBissexto } from './ex1';

describe('Checa bissexto', () => {
  test('retorna true pra 1600', () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test('retorna true pra 2000', () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test('retorna true pra 1996', () => {
    const resultado = checaBissexto(1996);

    expect(resultado).toEqual(true);
  });

  test('retorna true pra 2008', () => {
    const resultado = checaBissexto(2008);

    expect(resultado).toEqual(true);
  });

  test('retorna true pra 2400', () => {
    const resultado = checaBissexto(2400);

    expect(resultado).toEqual(true);
  });

  test('retorna false pra 2401', () => {
    const resultado = checaBissexto(2401);

    expect(resultado).toEqual(false);
  });
});

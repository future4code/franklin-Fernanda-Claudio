import { checaPalindromo } from './ex2';

describe('Checa Palíndromo', () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo('mirim');
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo('arara');
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo('asa');
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'afã'", () => {
    const ehPalindromo = checaPalindromo('osso');
    expect(ehPalindromo).toEqual(true);
  });
});

import { checaItensDuplicados } from './ex3';

describe('Checa itens duplicados', () => {
  it("retorna true para '[10,12,10]'", () => {
    const ehDuplicado = checaItensDuplicados([10, 12, 10]);
    expect(ehDuplicado).toEqual(true);
  });
  it("retorna false para '[]'", () => {
    const ehDuplicado = checaItensDuplicados([]);
    expect(ehDuplicado).toEqual(false);
  });
  it("retorna true para '[1]'", () => {
    const ehDuplicado = checaItensDuplicados([[1]]);
    expect(ehDuplicado).toEqual(false);
  });
  it("retorna true para '[10,12,10]'", () => {
    const ehDuplicado = checaItensDuplicados([10, 12, 10]);
    expect(ehDuplicado).toEqual(true);
  });
});

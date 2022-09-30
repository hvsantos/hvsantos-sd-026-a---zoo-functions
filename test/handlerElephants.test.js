const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função existe', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se só aceita string', () => {
    expect(handlerElephants([1, 2])).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna 4 ao inserir count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se retorna um array com Jefferson ao inserir names', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBe(true);
  });
  it('Verifica se retorna um número proximo de 10.5 ao inserir averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});

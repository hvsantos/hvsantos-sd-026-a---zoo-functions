const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se o retorno é o mesmo ao não inserir um parametro', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  const hor9H = '09:00-AM';
  it('Verifica se se retorna \'The zoo is closed\' ao inserir \'Monday\' e \'09:00-AM\' como parametros', () => {
    expect(getOpeningHours('Monday', hor9H)).toBe('The zoo is closed');
  });
  it('Verifica se se retorna \'The zoo is open\' ao inserir \'Tuesday\' e \'09:00-AM\' como parametros', () => {
    expect(getOpeningHours('Tuesday', hor9H)).toBe('The zoo is open');
  });
  it('Verifica se se retorna \'The zoo is closed\' ao inserir \'Wednesday\' e \'09:00-AM\' como parametros', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});

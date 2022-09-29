const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const funcEvery = ({ age: idade }) => idade > age;
  const funcSome = (specie) => specie.name === animal && specie.residents.every(funcEvery);
  const verify = data.species.some(funcSome);
  return verify;
}

module.exports = getAnimalsOlderThan;

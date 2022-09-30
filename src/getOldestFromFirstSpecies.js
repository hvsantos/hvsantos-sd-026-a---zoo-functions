const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find(({ id: idEmployee }) => idEmployee === id);
  const firstAni = data.species.find(({ id: idAni }) => idAni === employee.responsibleFor[0]);
  const selected = firstAni.residents.sort(({ age: aAge }, { age: bAge }) => bAge - aAge)[0];
  return [selected.name, selected.sex, selected.age];
}

module.exports = getOldestFromFirstSpecies;

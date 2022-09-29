const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === '' || animal === undefined) {
    const animalObj = {};
    data.species.forEach(({ name, residents }) => { animalObj[name] = residents.length; });
    return animalObj;
  }
  const { specie, sex = '' } = animal;
  let selectedAnimal = data.species.find((eleme) => eleme.name === specie);
  const reduceFunc = (a, b) => ((b.sex === sex || sex === '') ? a + 1 : a);
  selectedAnimal = selectedAnimal.residents.reduce(reduceFunc, 0);
  return selectedAnimal;
}

module.exports = countAnimals;

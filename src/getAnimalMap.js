const data = require('../data/zoo_data');

const getAnimalName = (where) => {
  const animals = data.species.filter(({ location }) => location === where);
  return animals.map((animal) => animal.name);
};

const ifIncludes = (animal, options) => {
  const { sex = '', sorted = false } = options;
  const selectedAnimal = data.species.find(({ name }) => name === animal);
  let filtered = selectedAnimal.residents;
  if (sex !== '') {
    filtered = selectedAnimal.residents.filter(({ sex: genre }) => genre === sex);
  }
  let animalNames = filtered.map((objects) => objects.name);
  if (sorted) {
    animalNames = animalNames.sort();
  }
  return animalNames;
};

function getAnimalMap(options) {
  const obj = {
    NE: getAnimalName('NE'),
    NW: getAnimalName('NW'),
    SE: getAnimalName('SE'),
    SW: getAnimalName('SW'),
  };
  if (options !== undefined) {
    const { includeNames = false } = options;
    if (includeNames === true) {
      obj.NE = obj.NE.map((animal) => ({ [animal]: ifIncludes(animal, options) }));
      obj.NW = obj.NW.map((animal) => ({ [animal]: ifIncludes(animal, options) }));
      obj.SE = obj.SE.map((animal) => ({ [animal]: ifIncludes(animal, options) }));
      obj.SW = obj.SW.map((animal) => ({ [animal]: ifIncludes(animal, options) }));
    }
  }
  return obj;
}

module.exports = getAnimalMap;

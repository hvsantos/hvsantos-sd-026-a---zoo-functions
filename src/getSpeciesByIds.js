const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const retorno = ids.map((idSpec) => {
    const [filter] = data.species.filter(({ id }) => id === idSpec);
    return filter;
  });
  return retorno;
}

// console.log(getSpeciesByIds());

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

// console.log(getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// ));

module.exports = getSpeciesByIds;

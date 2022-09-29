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

module.exports = getSpeciesByIds;

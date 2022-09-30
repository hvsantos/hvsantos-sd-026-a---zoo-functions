const data = require('../data/zoo_data');

const getObj = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  const fullName = `${firstName} ${lastName}`;
  const species = responsibleFor.map((element) => {
    const who = data.species.find(({ id: animalId }) => animalId === element);
    return who.name;
  });
  const locations = species.map((element) => {
    const where = data.species.find(({ name }) => name === element);
    return where.location;
  });
  return { id, fullName, species, locations };
};

function getEmployeesCoverage(search) {
  let retorno;
  if (!search) {
    const allEmployees = data.employees;
    retorno = allEmployees.map((element) => getObj(element));
  } else {
    const { name: nome, id = '' } = search;
    const searchResult = data.employees.find(({ firstName, lastName, id: employeeId }) => {
      const check1 = (firstName === nome);
      const check2 = (lastName === nome);
      const check3 = (id === employeeId);
      return check1 || check2 || check3;
    });
    if (searchResult === undefined) {
      throw new Error('Informações inválidas');
    }
    retorno = getObj(searchResult);
  }
  return retorno;
}

module.exports = getEmployeesCoverage;

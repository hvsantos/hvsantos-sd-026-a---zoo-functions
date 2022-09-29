const data = require('../data/zoo_data');

function isManager(id) {
  const filteredManagers = data.employees.map(({ managers }) => managers);
  return filteredManagers.some((eleme) => eleme.some((a) => a === id));
}

function getRelatedEmployees(managerId) {
  const someFunc = ({ managers }) => managers.some((idMan) => idMan === managerId);
  const filteredManagers = data.employees.filter(someFunc);
  if (filteredManagers.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return filteredManagers.map((obj) => `${obj.firstName} ${obj.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

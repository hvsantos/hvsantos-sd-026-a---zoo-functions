const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === '' || employeeName === undefined) {
    return {};
  }
  const employee = employeeName;
  const filterFunc = ({ firstName, lastName }) => firstName === employee || lastName === employee;
  const [retorno] = data.employees.filter(filterFunc);
  return retorno;
}

module.exports = getEmployeeByName;

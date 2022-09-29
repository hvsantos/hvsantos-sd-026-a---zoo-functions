const data = require('../data/zoo_data');

const clients = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const reduceFunc = (a, b) => {
  let who;
  if (b.age < 18) {
    who = 'child';
  } else if (b.age >= 18 && b.age < 50) {
    who = 'adult';
  } else if (b.age >= 50) {
    who = 'senior';
  }
  const retorno = { ...a };
  retorno[who] += 1;
  return retorno;
};

const countEntrants = (entrants) => entrants.reduce(reduceFunc, { adult: 0, child: 0, senior: 0 });

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const ppls = countEntrants(entrants);
  const { prices } = data;
  const arr = Object.keys(ppls);
  let sum = 0;
  arr.forEach((key) => { sum += prices[key] * ppls[key]; });
  return sum;
}

console.log(calculateEntry(clients));

module.exports = { calculateEntry, countEntrants };

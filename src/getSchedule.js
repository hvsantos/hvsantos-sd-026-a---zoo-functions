const data = require('../data/zoo_data');

const { species, hours } = data;

const someFunc = ({ availability }, schedule) => availability.some((dia) => dia === schedule);

const checkDay = (day) => {
  let exhibition;
  let officeHour = '';
  if (day === 'Monday') {
    exhibition = 'The zoo will be closed!';
    officeHour = 'CLOSED';
  } else {
    const { open } = hours[day];
    const { close } = hours[day];
    officeHour = `Open from ${open}am until ${close}pm`;
    const meia = species.filter((animal) => animal.availability.includes(day));
    exhibition = meia.map((animal) => animal.name);
  }
  const retorno = { [day]: { officeHour, exhibition } };
  return retorno;
};

function getSchedule(scheduleTarget) {
  const allDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const allAnimals = species.map(({ name }) => name);
  if (allDays.includes(scheduleTarget)) {
    return checkDay(scheduleTarget);
  }
  if (allAnimals.includes(scheduleTarget)) {
    const [filtered] = species.filter((animal) => {
      const check1 = animal.name === scheduleTarget;
      const check2 = someFunc(animal, scheduleTarget);
      return check1 || check2;
    });
    return filtered.availability;
  }
  const allSchedule = {};
  allDays.forEach((day) => Object.assign(allSchedule, checkDay(day)));
  return allSchedule;
}

module.exports = getSchedule;

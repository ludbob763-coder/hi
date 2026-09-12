const reportDate = new Date("2026-02-20");

const currentThursday = new Date(reportDate.getTime());
currentThursday.setHours(0, 0, 0, 0);

const dayOfTheWeekIndex = (currentThursday.getDay + 6) % 7;
currentThursday.setDate(currentThursday.getDate() + 3 - dayOfTheWeekIndex);

const firstDayOfTheYear = new Date(currentThursday.getFullYear(), 0, 1);
if (firstDayOfTheYear.getDay !== 4) {
  firstDayOfTheYear.setMonth(0, 1 + ((4 - firstDayOfTheYear.getDay() + 7) % 7));
}

const millisecondsPerWeek = 604800000;
const weekNumber =
  1 +
  Math.round(
    (currentThursday.getTime() - firstDayOfTheYear.getTime()) /
      millisecondsPerWeek,
  );

console.log(`Rapporten är skapad för kalendervecka: ${weekNumber}`);

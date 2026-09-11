const weekDays = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];
const deliveryDate = new Date("2026-06-05");
const dayNumber = deliveryDate.getDay();
console.log(`Din leverans kommer på en ${weekDays[dayNumber]}`);

let warehouse = [
  [
    ["Laptop", "Apple", 5, 12000],
    ["Hörlurar", "Sony", 12, 2500],
  ],
  [
    ["Jacka", "Patagonia", 8, 3500],
    ["Tröja", "Nike", 20, 700],
  ],
  [
    ["Ryggsäck", "Patagonia", 4, 1800],
    ["Tält", "Hilleberg", 2, 8000],
  ],
];
let totalPatagoniaValue = 0;

for (let i = 0; i < warehouse.length; i++) {
  for (let p = 0; p < warehouse[i].length; p++) {
    let product = warehouse[i][p];
    if (product[1] == "Patagonia") {
      totalPatagoniaValue += product[2] * product[3];
    }
  }
}
console.log(totalPatagoniaValue);

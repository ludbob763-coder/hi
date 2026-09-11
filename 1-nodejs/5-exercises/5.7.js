const dbInventory = [
  { title: "Stol", quantity: 2 },
  { title: "Bänk", quantity: 5 },
  { title: "Gardinstång", quantity: 0 },
];
for (let i = 0; i < dbInventory.length; i++) {
  if (dbInventory[i].quantity === 0) {
    console.log("Varning! Achtung! Warning!");
  }
}

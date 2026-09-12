function createGrid(rows, cols) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let p = 0; p < cols; p++) {
      row.push(Math.floor(Math.random() * 9) + 1);
    }
    grid.push(row);
  }
  return grid;
}
console.table(createGrid(3, 3));

function createMinesweeperBoard(rows, cols, bombs) {
  const board = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let t = 0; t < cols; t++) {
      row.push("");
    }
    board.push(row);
  }
  let bombsPlaced = 0;
  while (bombsPlaced < bombs) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);
    if (board[randomRow][randomCol] === "") {
      board[randomRow][randomCol] = "Bomb";
      bombsPlaced++;
    }
  }
  return board;
}
console.table(createMinesweeperBoard(9, 9, 20));

function solvePythagoras(a, b, c) {
  if (c === 0) {
    return Math.sqrt(a * a + b * b);
  } else if (b === 0) {
    return Math.sqrt(c * c - a * a);
  } else if (a === 0) {
    return Math.sqrt(c * c - b * b);
  }
}
console.log(solvePythagoras(0, 4, 5));

function generateRandomNumbers(amount) {
  const numbers = [];
  for (let i = 0; i < amount; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }
  return numbers;
}
console.log(generateRandomNumbers(3));

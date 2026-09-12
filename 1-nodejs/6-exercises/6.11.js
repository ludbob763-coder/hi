function createOrders(count) {
  const orders = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    orders.push(randomNumber);
  }
  return orders;
}
console.log(createOrders(5));

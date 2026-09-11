const customerList = [
  { name: "Ludwig", totalOrders: 60 },
  { name: "Pernilla", totalOrders: 1 },
  { name: "Petra", totalOrders: 52 },
];
for (let i = 0; i < customerList.length; i++) {
  console.log(
    `${customerList[i].name} har ${customerList[i].totalOrders} st ordrar.`,
  );
}

let arr = [
  ["Åhman", "det", 18],
  ["Aron", "han", 18],
  ["Edvin", "dem", 18],
  ["Ludwig", "den", 18],
  ["Hjalmar", "hon", 18],
];

for (let i = 0; i < arr.length; i++) {
  const looper = i + 1;
  const namn = arr[i][0];
  let pronouns = arr[i][1];
  const age = arr[i][2];

  pronouns = pronouns.charAt(0).toUpperCase() + pronouns.slice(1);
  console.log(
    `Loopen är nu inne på varv ${looper} och då hälsar vi ${namn} välkommen. ${pronouns} är ${age} år.`,
  );
}
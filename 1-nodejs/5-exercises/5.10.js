const membershipExpire = new Date("2026-05-20");
membershipExpire.setMonth(membershipExpire.getMonth() + 6);
console.log(
  `Ditt medlemskap har förlängts till ${membershipExpire.toLocaleDateString("sv-SE")}`,
);

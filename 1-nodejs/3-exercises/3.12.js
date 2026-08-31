for (let clusterID = 1; clusterID <= 5; clusterID++) {
  if (clusterID == 4) {
    continue;
  }
  console.log(
    "Det aktuella klustret har kontrollerats och är aktivt. ID: " + clusterID,
  );
}

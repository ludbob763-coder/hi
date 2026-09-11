const apiQuota = {
  requestsUsed: 95,
  maxLimit: 100,
};
if (apiQuota.requestsUsed >= apiQuota.maxLimit) {
  console.log("Anropsgränsen är nådd! API:et blockeras.");
} else {
  console.log("Anrop godkänt. Servern svarar.");
}

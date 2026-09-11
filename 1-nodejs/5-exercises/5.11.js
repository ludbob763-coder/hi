const linkDeadline = new Date("2026-06-05T12:00:00");
const clickTime = new Date("2026-06-05T14:30:00");
if (clickTime > linkDeadline) {
  console.log("Länken har löpt ut! Du måste begära en ny.");
} else {
  console.log("länken är giltig. Fortsätter återställningen.");
}

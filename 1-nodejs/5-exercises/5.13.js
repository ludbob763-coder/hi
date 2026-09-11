const reportDate = new Date("2026-02-20");
const newReportDate = new Date("2026-02-20T00:00:00");
reportDate.setDay(reportDate.getDay + (reportDate.getDay - 3));

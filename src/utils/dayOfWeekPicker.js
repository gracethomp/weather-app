const daysOfWeekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function getDayOfWeek(day) {
  const date = new Date(day);
  const dayOfWeek = date.getDay();
  const dayName = daysOfWeekNames[dayOfWeek];
  return dayName;
}

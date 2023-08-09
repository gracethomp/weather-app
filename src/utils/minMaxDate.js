export function getMinMaxDays(params) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;
  const limitDate = new Date();
  limitDate.setDate(today.getDate() + 15);
  const maxYear = limitDate.getFullYear();
  const maxMonth = String(limitDate.getMonth() + 1).padStart(2, "0");
  const maxDay = String(limitDate.getDate()).padStart(2, "0");
  const maxDate = `${maxYear}-${maxMonth}-${maxDay}`;
  return { minDate, maxDate };
}

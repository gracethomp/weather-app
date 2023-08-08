var currentDate = new Date();

var futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 78);

var formattedFutureDate = futureDate.toDateString();

console.log("Today's date:", currentDate.toDateString());
console.log("Date 15 days from today:", formattedFutureDate);

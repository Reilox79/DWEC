function calculateDaysBetweenDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const differenceInMilliseconds = d2 - d1;

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

    return differenceInDays;
}

let date1 = "2024-07-01";
let date2 = "2024-07-13";
let daysBetween = calculateDaysBetweenDates(date1, date2);
console.log(`There are ${daysBetween} days between ${date1} and ${date2}.`);
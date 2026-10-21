const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
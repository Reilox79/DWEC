const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function printRandomNumbers(min, max, count) {
    console.log(`\n${count} random numbers between ${min} and ${max}:`);
    for (let i = 0; i < count; i++) {
        console.log(getRandomNumber(min, max));
    }
}

printRandomNumbers(0, 99999, 10);
printRandomNumbers(10, 40, 10);
printRandomNumbers(18, 90, 10);
printRandomNumbers(1980, 2020, 10);
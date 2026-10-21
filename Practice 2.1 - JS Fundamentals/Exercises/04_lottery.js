const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function printRandomNumbers(min, max, count) {
    console.log(`\n${count} random numbers between ${min} and ${max}:`);
    for (let i = 0; i < count; i++) {
        console.log(getRandomNumber(min, max));
    }
}

printRandomNumbers(9999, 99999, 10);
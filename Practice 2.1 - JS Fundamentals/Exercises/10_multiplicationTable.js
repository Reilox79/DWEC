function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

for (let number = 1; number <= 10; number++) {
    multiplicationTable(number);
}
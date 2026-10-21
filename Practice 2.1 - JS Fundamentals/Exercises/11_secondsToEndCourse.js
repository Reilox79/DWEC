let endOfCourse = new Date("2027-06-20 23:59:59");

setInterval(() => {
    let now = new Date();
    let secondsRemaining = Math.floor((endOfCourse - now) / 1000);
    console.log(`Seconds remaining to the end of the course: ${secondsRemaining}`);
}, 1000);
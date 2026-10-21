function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
}

let age = calculateAge("2005-09-21");
console.log(`Age: ${age}`);
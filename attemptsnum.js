function
generateRandomNUmber () {
    return Math.floor(Math.random() * 3) + 1;
}

function
getAttemptsToGetSameNumbers () {
    let attempts = 0;
    let num1, num2, num3;

    do{
        num1 = generateRandomNUmber();
        num2 = generateRandomNUmber();
        num3 = generateRandomNUmber();
        attempts++;
    }
    while (num1 !== num2 || num2 !== num3);
    return attempts;
}

console.log ("Attempts to get three same numbers:" +getAttemptsToGetSameNumbers());
let userNumberStr = prompt("Dimmi un numero:");

let userNumberInt = parseInt(userNumberStr);

let numInt;

let sum = 0;

for(let x = 0; isNaN(userNumberInt); x++) {

    userNumberStr = prompt("Numero errato. Dimmi un numero:");
    userNumberInt = parseInt(userNumberStr);
}


for(let i = 0; i < userNumberStr.length; i++) {

    numInt = parseInt(userNumberStr[i]);
    sum += numInt;

}

console.log("la somma delle cifre è:", sum);

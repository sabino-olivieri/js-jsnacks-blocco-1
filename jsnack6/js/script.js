let userNumber = parseInt(prompt("Dimmi un numero:"));
let cube = 0;

for(let x = 0; isNaN(userNumber); x++) {

    userNumber = parseInt(prompt("Numero errato. Dimmi un numero:"));
}

for(let i = 0; i < userNumber; i++) {

    cube = (i+1) ** 3;
    console.log(cube, `è il cubo di: ${i+1}`);
}


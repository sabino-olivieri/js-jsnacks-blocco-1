const userNumber = [];
let sum = 0;

for(let i = 0; i < 10; i++) {

    let num = parseFloat(prompt(`Dimmi il n.${i+1}`).replace(/,/g, "."));

    for (let x = 0; isNaN(num); x++) {
        num = parseFloat(prompt(`Hai inserito un numero erratto. Dimmi il n.${i+1}:`).replace(/,/g, "."));
    }

    userNumber.push(num);
    sum += userNumber[i];
}

alert(`La somma dei numeri è: ${sum}`);
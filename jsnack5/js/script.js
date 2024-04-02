const oddNumbers = [];

for(let i = 0; i < 6; i++) {

    let userNumber = parseFloat(prompt(`Dimmi il n.${i+1}`).replace(/,/g, "."));

    for(let x = 0; isNaN(userNumber); x++) {

        userNumber = parseFloat(prompt(`Hai inserito un numero errato. Dimmi il n.${i+1}`).replace(/,/g, "."));

    }

    if (userNumber % 2 !== 0) {

        oddNumbers.push(userNumber)
    }

}

console.log(oddNumbers);
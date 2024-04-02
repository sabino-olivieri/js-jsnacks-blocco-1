const guest = ["pippo", "pluto", "paperino"];

const userName = prompt("Dimmi il tuo nome");

let message = "Non sei invitato";

for(let i = 0; i < guest.length; i++) {

    if (guest[i] === userName) {
        message = "Bennvenuto";
        break;
    }

}

alert (message);

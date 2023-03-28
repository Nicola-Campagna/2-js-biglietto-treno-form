

btn.addEventListener(
    "click",
    function () {

        // km da percorrere
        const userKmEl = document.getElementById("km");
        console.log(userKmEl.value);

        // età passeggero
        const userAgeEl = document.getElementById("age");
        console.log(userAgeEl.value);

        const prezzoBigliettoEl = document.getElementById("ticket");

        // prezzo per km
        const price = 0.21;

        // ticket finale
        let ticket; //qui vale 0

        // GENERA PREZZO BIGLIETTO

        // SE MINORE DI 18 ANNI SCONTO DEL 20%
        if (userAgeEl.value < 18) {
            ticket = ((price * userKmEl.value).toFixed(2) * 20 / 100);
            // console.log("under18: " + ticket);
            prezzoBigliettoEl.innerHTML = "prezzo bilgietto under18: $" + ticket;
        }
        // ALTRIMENTI SE OVER 65 SCONTO DEL 40%
        else if (userAgeEl.value > 65) {
            ticket = ((price * userKmEl.value).toFixed(2) * 40 / 100);
            // console.log("over65: " + ticket);
            prezzoBigliettoEl.innerHTML = "prezzo bilgietto over65: $" + ticket;
        }
        // ALTRIMENTI PREZZO PIENO
        else {
            ticket = (price * userKmEl.value).toFixed(2);
            // console.log("prezzo pieno: " + ticket);
            prezzoBigliettoEl.innerHTML = "prezzo bilgietto pieno: $" + ticket;
        }
    }
)
// AL CLICK SUL BOTTONE SUCCEDE QUESTO:
btn.addEventListener(
    "click",
    // funzione anonima
    function () {
        // input nome e cognome utente
        const userNameSurname = document.getElementById("user");

        // input km da percorrere
        const userKmEl = document.getElementById("km");
        // console.log(userKmEl.value);

        // input età passeggero
        const userAgeEl = document.getElementById("age");
        // console.log(userAgeEl.value);

        // slot nel DOM per stampare il ticket finale
        const prezzoBigliettoEl = document.getElementById("ticket");

        // prezzo per km
        const price = 0.21;

        // ticket finale
        let ticket; //qui vale 0


        // GENERA PREZZO BIGLIETTO

        // SE MINORE DI 18 ANNI SCONTO DEL 20%
        if (userAgeEl.value < 18 &&
            !isNaN(userAgeEl.value) &&
            userAgeEl.value > 0 &&
            !isNaN(userKmEl.value) &&
            userKmEl.value > 0
        ) {
            ticket = ((price * userKmEl.value) * 20 / 100).toFixed(2);
            // console.log("under18: " + ticket);
            prezzoBigliettoEl.innerHTML += "under18: $" + ticket;
        }
        // ALTRIMENTI SE OVER 65 SCONTO DEL 40%
        else if (userAgeEl.value > 65 &&
            !isNaN(userAgeEl.value) &&
            userAgeEl.value > 0 &&
            !isNaN(userKmEl.value) &&
            userKmEl.value > 0
        ) {
            ticket = ((price * userKmEl.value) * 40 / 100).toFixed(2);
            // console.log("over65: " + ticket);
            prezzoBigliettoEl.innerHTML += "over65: $" + ticket;
        }
        // ALTRIMENTI PREZZO PIENO
        else if (
            !isNaN(userAgeEl.value) &&
            userAgeEl.value > 0 &&
            !isNaN(userKmEl.value) &&
            userKmEl.value > 0
        ) {
            ticket = (price * userKmEl.value).toFixed(2);
            // console.log("prezzo pieno: " + ticket);
            prezzoBigliettoEl.innerHTML += "pieno: $" + ticket;
        }
        else {
            alert("VALORI INSERITI NON VALIDI");
        }



        // STAMPIAMO I DATI INSERITI DALL'UTENTE NEL DOM ( COME UN BIGLIETTO )

        // km 
        const userKmValueEl = document.getElementById("kmValue");
        if (!isNaN(userKmEl.value) &&
            userKmEl.value > 0) {
            userKmValueEl.innerHTML += userKmEl.value;
        }

        // età
        const userAgeValueEl = document.getElementById("ageValue");
        if (!isNaN(userAgeEl.value) &&
            userAgeEl.value > 0) {
            userAgeValueEl.innerHTML += userAgeEl.value;
        }

        // nome e cognome
        const userNameSurnameValueEl = document.getElementById("userValue");
        userNameSurnameValueEl.innerHTML += (userNameSurname.value).toUpperCase();
    }
)
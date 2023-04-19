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

// AL CLICK SUL BOTTONE SUCCEDE QUESTO:
btn.addEventListener(
    "click",
    // funzione anonima
    function () {
        // prezzo per km
        const price = 0.21;
        // ticket finale
        let ticket; //qui vale 0

        // valore età passeggero
        const age = userAgeEl.value;
        // console.log(age);

        // volore km passeggero
        const km = userKmEl.value;
        // console.log(km);

        // SCONTO MINORENNE
        const discountUnder18 = 20 / 100;

        // SCONTO OVER 65
        const discountOver65 = 40 / 100;

        // SE MINORENNE APPLICARE SCONTO DEL 20%
        if (age < 18 && age > 0 && !isNaN(age)) {
            ticket = ((price * km) * discountUnder18).toFixed(2);
            // console.log(ticket + ' under18');
        }
        // ALTRIMENTI SE OVER-65 APPLICARE SCONTO DEL 40%
        else if (age > 65 && age > 0 && !isNaN(age)) {
            ticket = ((price * km) * discountOver65).toFixed(2);
            // console.log(ticket + ' over65');
        }
        // ALTRIMENTI PREZZO PIENO
        else {
            ticket = (price * km).toFixed(2);
            // console.log(ticket + ' prezzo pieno');
        }

        // STAMPIAMO I DATI INSERITI DALL'UTENTE NEL DOM ( COME UN BIGLIETTO )

        // km 
        const userKmValueEl = document.getElementById("kmValue");

        if (!isNaN(km) && km > 0) {
            userKmValueEl.innerHTML = km;
        }

        // // età
        const userAgeValueEl = document.getElementById("ageValue");

        if (!isNaN(age) && age > 0) {
            userAgeValueEl.innerHTML = age;
        }

        // // nome e cognome
        const userNameSurnameValueEl = document.getElementById("userValue");

        userNameSurnameValueEl.innerHTML = (userNameSurname.value).toUpperCase();

        // ticket finale 

        const ticketEl = document.getElementById('ticket');

        ticketEl.innerHTML = ticket + ' $';
    }
)
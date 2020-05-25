// ESERCIZIO EMAIL
// INPUT
var email = ['francesco@gmail.com', 'andrea@libero.it', 'nico.paganelli91@gmail.com', 'anna@gmail.it'];
var emailUtente = document.getElementById('email');

// BOTTONI
var conferma = document.getElementById('conferma');
var reset = document.getElementById('reset');

// OUTPUT
var messaggio = document.getElementById('alert');

// CONFERMA
conferma.addEventListener('click',
  function() {

    var emailValida = false;
    messaggio.className = '';

    // Assegnazione valori
    var emailInserita = emailUtente.value;

    for (var i = 0; i < email.length; i++) {

      // Controllo se l'email insertita è presente nell'elenco
      if ( email[i] === emailInserita ) {

        // switcho il valore
        emailValida = true;
      }
    }

    // Opzioni in base alla presenza della email
    if ( emailValida ) {

      // Email inserita corretta
      messaggio.className = messaggio.classList + 'corretta';
      messaggio.innerHTML = 'Ottimo, l\' email inserita è presente nell\'elenco';

    } else {

      // Email inserita sbagliata
      messaggio.className = messaggio.classList + 'sbagliata';
      messaggio.innerHTML = 'Mi discpiace, l\' email inserita non è presente nell\'elenco';
    }

    // resetto al valore di default
    emailValida = false;
  }
)

// RESET
reset.addEventListener('click',
  function () {
    emailUtente.value = '';
    messaggio.innerHTML = '';
  }
)
// FINE ESERCIZIO EMAIL

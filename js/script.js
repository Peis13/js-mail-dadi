//          ESERCIZIO EMAIL

// INPUT
var email = ['francesco@gmail.com', 'andrea@libero.it', 'nico.paganelli91@gmail.com', 'anna@gmail.it'];
var emailUtente = document.getElementById('email');

// BOTTONI
var conferma = document.getElementById('conferma');
var annulla = document.getElementById('annulla');

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

// ANNULLA
annulla.addEventListener('click',
  function () {
    emailUtente.value = '';
    messaggio.innerHTML = '';
  }
)
//          FINE ESERCIZIO EMAIL

//          ESERCIZIO DADI

// BOTTONI
var gioca = document.getElementById('gioca');
var reset = document.getElementById('reset');

// OUTPUT
var user = document.getElementById('user');
var bot = document.getElementById('bot');
var vincitore = document.getElementById('vincitore');

// GIOCA
gioca.addEventListener('click',
  function() {

    // Genero un numero casuale da 1-6 per l'user e per il computer
    var numUser = (Math.floor(Math.random() * 6) + 1);
    var numBot = (Math.floor(Math.random() * 6) + 1);

    // Associo i numeri generati all'user e al computer
    user.innerHTML = numUser;
    bot.innerHTML = numBot;

    // LOGICA
    // Controllo il numero più alto
    if ( numUser > numBot ) {

      // Numero utente più alto
      vincitore.innerHTML = 'Tu';

    } else if ( numUser < numBot ) {

      // Numero computer più alto
      vincitore.innerHTML = 'Computer';

    } else {

      // Pareggio
      vincitore.innerHTML = 'Pareggio';
    }
  }
)

// RESET
reset.addEventListener('click',
  function() {

    // Azzeramento valori
    user.innerHTML = '';
    bot.innerHTML = '';
    vincitore.innerHTML = '';
  }
)
//          FINE ESERCIZIO DADI

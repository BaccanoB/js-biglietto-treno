// chiedere all'utente il numero di km

var numeroKm = parseInt(prompt("Inserisci il numero di Km che vuoi percorrere"));
console.log(numeroKm);

// chiedere età del passeggero

var eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);

// calcolo prezzo del biglietto (0,21 euro a km)

var prezzoBiglietto = numeroKm * 0.21;
console.log(prezzoBiglietto);

// applicazione sconti al biglietto
var sconto;
console.log(sconto);

if (eta < 18) {
   sconto = prezzoBiglietto - 20;
} else (eta >= 65) {
    sconto = prezzoBiglietto - 40;
}

// arrotondare prezzo con massimo due decimali

// visualizzare prezzo in pagina





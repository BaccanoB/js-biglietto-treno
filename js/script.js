// nome utente

var nome = prompt("Inserisci il tuo nome")

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

if (eta < 18) {
   sconto = (prezzoBiglietto / 100) * 20;
} else if (eta >= 65) {
    sconto = (prezzoBiglietto / 100) * 40;
} else {
    sconto = 0;
}

// arrotondare prezzo con massimo due decimali

sconto = sconto.toFixed(2);
console.log(sconto);

var prezzoFinale = prezzoBiglietto - sconto;
console.log(prezzoFinale);


// visualizzare prezzo in pagina

document.getElementById("nome").innerHTML = nome;

document.getElementById("km").innerHTML = "KM " + numeroKm;

document.getElementById("prezzo").innerHTML = "&euro; " + prezzoFinale;








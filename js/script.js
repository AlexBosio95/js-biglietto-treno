// // Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const kmUser = parseInt(prompt("Inserisci i km che vuoi calcolare")) ;
const ageUser = parseInt(prompt("Inserisci la tua età"));

let result = kmUser * 0.21
let scontoMinori = ((result / 100) * 20)
let scontoOver = ((result / 100) * 40)


// Calcolo del prezzo secondo l'età
if (ageUser < 19) {
    console.log((result - scontoMinori) + " €");
} else if (ageUser > 64){
    console.log((result - scontoOver) + " €");
} else {
    console.log((result) + " €");
}


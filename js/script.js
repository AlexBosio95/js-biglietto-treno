// // Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const kmUser = parseInt(prompt("Inserisci i km che vuoi calcolare")) ;
const ageUser = parseInt(prompt("Inserisci la tua età"));

// Variabili per calcolo percentuale
let result = kmUser * 0.21
// let discountUnderage = ((result / 100) * 20)
// let discountOver = ((result / 100) * 40)
// let calcUnderage =  result - discountUnderage
// let calcOver =  result - discountOver

// Calcolo del prezzo secondo l'età

// Minorenni
if (ageUser < 19) {
    // console.log(`${calcUnderage.toFixed(2)}${" €"}`);
    // document.getElementById("price-user").innerHTML = (`${calcUnderage.toFixed(2)}${" €"}`);
    console.log((result - ((result / 100) * 20)).toFixed(2) + (" €"));
    document.getElementById("price-user").innerHTML = ((result - ((result / 100) * 20)).toFixed(2) + (" €"));

} 

// Over

else if (ageUser > 64){
    // console.log(`${calcOver.toFixed(2)}${" €"}`);
    // document.getElementById("price-user").innerHTML = (`${calcOver.toFixed(2)}${" €"}`);
    console.log((result - ((result / 100) * 40)).toFixed(2) + (" €"));
    document.getElementById("price-user").innerHTML = ((result - ((result / 100) * 40)).toFixed(2) + (" €"));
} 

// Senza sconti

else {
    // console.log(`${result.toFixed(2)}${" €"}`);
    // document.getElementById("price-user").innerHTML = (`${result.toFixed(2)}${" €"}`);
    console.log((result.toFixed(2)) + (" €"));
    document.getElementById("price-user").innerHTML = ((result.toFixed(2)) + (" €"));


}


// 1-Chiediamo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const km = prompt ("Quanti KM vuole percorrere?")
const age = prompt ("Quanti anni ha il passeggero?")
// 2-Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceForKm = 0.21;
let price = km * priceForKm;
// 3-Va applicato uno sconto del 20% per i minorenni
if (age <= 18) {
  price -= price * 0.20; 
}
// 4-Va applicato uno sconto del 40% per gli over 65.
 if (age >= 65){
    price -= price * 0.40;
}
// Output del prezzo finale con massimo due decimali
alert(`Il prezzo del biglietto è: €${price.toFixed(2)}`);
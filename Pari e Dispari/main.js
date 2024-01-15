/*
// L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
*/

let pariOdispariUtente = document.getElementById("pari-dispari")
let numeroUtente = document.getElementById("numero-utente")
let bottoneGioca = document.getElementById("inizia-gioco")


function numeroComputer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function somma(num1, num2) {
    return num1 + num2
}


function isEvenOrOdd(number) {

    if (number % 2 === 0) {
        console.log("La somma è pari")
        return true
    } else {
        console.log("La somma è dispari")
        return false
    }

}


function gioca() {

    let numeroUtenteValue = parseInt(numeroUtente.value)
    let numeroComputerValue = numeroComputer(1, 5)
    let selectedOption = pariOdispariUtente.value
    let resultGame = document.getElementById("risultato")

    if ((isEvenOrOdd(somma(numeroUtenteValue, numeroComputerValue)) && selectedOption === "pari") || (!isEvenOrOdd(somma(numeroUtenteValue, numeroComputerValue)) && selectedOption === "dispari")) {
        console.log("hai vinto")
        resultGame.innerHTML = `Il tuo numero è: ${numeroUtenteValue}, il numero del computer è: ${numeroComputerValue}, e la somma è: ${somma(numeroUtenteValue, numeroComputerValue)}, quindi HAI VINTO!!`
    } else {
        console.log("hai perso")
        resultGame.innerHTML = `Il tuo numero è: ${numeroUtenteValue}, il numero del computer è: ${numeroComputerValue}, e la somma è: ${somma(numeroUtenteValue, numeroComputerValue)}, quindi HAI PERSO!!`
    }

    console.log(numeroUtenteValue, numeroComputerValue)

}

bottoneGioca.addEventListener("click", gioca)


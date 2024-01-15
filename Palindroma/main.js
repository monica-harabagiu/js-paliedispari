/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let inputParola = prompt("Inserisci una parola palindroma")

function isPalindrome(parola) {

    let parolaArray = Array.from(parola)
    console.log(parolaArray)
    console.log(parolaArray.join(''))

    let invertArray = []

    for (let i = parolaArray.length - 1; i >= 0; i--) {
        invertArray.push(parolaArray[i])
    }

    console.log(invertArray)
    console.log(invertArray.join(''))

    if (parolaArray.join('') === invertArray.join('')) {
        console.log("La parola inserita è palindroma")
    } else {
        console.log("La parola inserita non è palindroma")
    }

}

isPalindrome(inputParola)




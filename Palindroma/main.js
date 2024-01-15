/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let inputParola = prompt("Inserisci una parola palindroma")

function isPalindrome(parola) {

    let parolaArray = Array.from(parola)
    console.log(parolaArray)

    let invertArray = []

    for (let i = parolaArray.length - 1; i >= 0; i--) {
        invertArray.push(parolaArray[i])
    }

    console.log(invertArray)


    let stessaParola = true

    for (let i = 0; i < parolaArray.length; i++) {

        if (parolaArray[i] !== invertArray[i]) {
            stessaParola = false
            break
        }
    }

    if (stessaParola) {
        console.log("La parola inserita è palindroma")
    } else {
        console.log("La parola inserita non è palindroma")
    }

}

isPalindrome(inputParola)




//Una funzione per capire se la parola è palindroma
//1 creo un prompt per fare inserire la parola
//2 creo variabile per la funzione
//3 creo un if con il log. palidroma o no
//4 creo la funzione per capire se e palidroma ?? cercare sul web

// 1 creo un prompt per inserire la parola
var parolaInserita = prompt('Inserisci un numero per stabilire se è palindroma');
//2 creo variabile per la funzione
var parolaPalindroma = palindroma(parolaInserita);
console.log(parolaPalindroma);

//3 creo un if con il log. palidnroma o no
if (parolaInserita == parolaPalindroma) {
    console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }

//4 creo la funzione per capire se e palidroma ?? cercare sul web
function palindroma(parola) {
    var parolaReverse = '';
    for (var i = parola.length; i > 0; i--) {
        parolaReverse += parola[i]
    }
    return parolaReverse ;
}

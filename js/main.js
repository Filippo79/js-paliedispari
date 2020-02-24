//Una funzione per capire se la parola è palindroma
//1 creo un prompt per fare inserire la parola
//2 creo variabile per la funzione
//3 creo un if con il log. palidroma o no
//4 creo la funzione per capire se e palidroma ?? cercare sul web

// 1 creo un prompt per inserire la parola
/*var parolaInserita = prompt('Inserisci un numero per stabilire se è palindroma');
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
}*/



/*
L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto.
*/
//1 creo un prompt per scegliere pari o dispari
//2 creo un 'altro prompt e chiedo un numero
//3 genero un numero ramdom creando una variabile  richimando poi la funzione
//4 creo una variabile per poi richiamre la funzione somma
//5 creo conson log per rispondere se ha vinto o // NOTE:

//1 creo un prompt per scegliere pari o dispari
var pariODispari = prompt('Scegli pari o dispari');
//2 creo un 'altro prompt e chiedo un numero
var scegliNumero = parseInt(prompt('Scegli un numero da 1 a 5'));
//3 genero un numero ramdom creando una variabile  richimando poi la funzione
var numero = generoRandomMinMax(1 , 5);
//4 creo una variabile per poi richiamre la funzione somma
var somma = sommaNumeri(10 , 5);







function generoRandomMinMax(min, max){
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) +min;
    return numeroRandom;
    console.log(numeroRandom);
}
function sommaNumeri( num1 , num2 ){
    var risultato =  num1 + num2;
    //return risultato;
    console.log(risultato);
}

// Definizione di una funzione che si chiama sum
function sum(pippo, pluto) {
    console.log('---------------------------');
    console.log('pippo ha valore', pippo);
    console.log('pluto ha valore', pluto);

    const mySum = pippo + pluto;

    console.log('La mia somma è', mySum);
    console.log('---------------------------');

    return mySum;

    console.log('Sono dopo sum');
}

let numeroUno = 7;
let numeroDue = 9;

const somma = numeroUno + numeroDue;
console.log(somma);

// Utilizzo (richiamo) della funzione sum()
// sum(5, 6); // => sum(let pippo = 5, let pluto = 6)

numeroUno = 3;
numeroDue = 5;

const miaSomma = sum(numeroUno, numeroDue); // => sum(let pippo = numeroUno, let pluto = numeroDue)
console.log('miaSomma', miaSomma, typeof miaSomma);

// sum('cane', 'gatto'); // => sum(let pippo = 'cane', let pluto = 'gatto')
// sum('cane', 3); 
// sum();

const myDiv = document.getElementById('my-div');
console.log('myDiv', myDiv, typeof myDiv);


// function getElementById(elementId) {
//     const element = prendi l'elemento dall'html l'elemento che ha ID = elementId;

//     return element;
// }





/* 
    Se il numero è pari, dimmi true, altrimenti false
*/
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    
    return false;
}

console.log('Il numero 3 è pari?', isEven(3));
console.log('Il numero 14 è pari?', isEven(14));



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroRandomUno = getRndInteger(1, 100);
let numeroRandomDue = getRndInteger(1, 100);
console.log(numeroRandomUno);
console.log(numeroRandomDue);

for (let i = 0; i < 100; i++) {
    console.log(getRndInteger(1, 100));
}

// if (numeroRandom > 65) {
//     console.log('Sconto del 40%');
// }
// else if (numeroRandom < 18) {
//     console.log('Sconto del 20%');
// }
// else {
//     console.log('Nessuno sconto');
// }


function funzioneSenzaArgomentiESenzaReturn() {
    console.log('funzioneSenzaArgomentiESenzaReturn');
}

function funzioneConArgomentiMaSenzaReturn(argomentoUno) {
    console.log('funzioneConArgomentiMaSenzaReturn');
}

function funzioneSenzaArgomentiMaConReturn() {
    console.log('funzioneSenzaArgomentiMaConReturn');

    return 'qualcosa';
}

function funzioneConArgomentiEConReturn(argomentoUno) {
    console.log('funzioneConArgomentiEConReturn');

    return 'qualcosa';
}


/* 

    utente sceglie o pari o dispari
    utente sceglie un numero tra 1 e 5
    genero numero random tra 1 e 5 con una funzione apposita che non abbiamo mai visto in classe se non 200 volte
    sommo i due numeri (quello scelto dall'utente e quello generato random)
    vince chi ha azzeccato la parità/disparità della somma dei due numeri

*/
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1, l2) {
    // Calcola l'area del rettangolo
    let area = l1 * l2;
    return area;
}
 */




/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


/* function crazySum(a, b) {
    if (a === b) {
      return (a + b) * 3;
    } else {
      return a + b;
    }
}
 */





/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(num) {
    let diff = Math.abs(num - 19); // calcola la differenza assoluta tra num e 19
    if (diff > 19) {
      return diff * 3; // se la differenza è più grande di 19, moltiplica per 3
    } else {
      return diff; // altrimenti ritorna la differenza semplice
    }
}


console.log(crazyDiff(34));
 */






/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* 

function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
      return true;
    } else {
      return false;
    }
}

console.log(boundary(10)); // false
console.log(boundary(50)); // true
console.log(boundary(400)); // true
console.log(boundary(200)); // false */






/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* 
function codify(str) {
    if (str.startsWith("code")) {
      return str;
    } else {
      return "code" + str;
    }
}

console.log(codify("hello")); // "codehello"
console.log(codify("codefoo")); // "codefoo" */






/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(num){
    if(num % 3 == 0 || num % 7 == 0)return True;
    return False;
}
 */







/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* function reverseString(str) {
    // Converti la stringa in un array di caratteri
    let arr = str.split('');
    
    // Inverti l'array utilizzando il metodo reverse()
    arr.reverse();
    
    // Unisci gli elementi dell'array in una stringa utilizzando il metodo join()
    let reversedStr = arr.join('');
    
    // Ritorna la stringa invertita
    return reversedStr;
}

// Esempio di utilizzo della funzione
let inputStr = "EPICODE";
let reversed = reverseString(inputStr);
console.log(reversed); // Output: "EDOCIPE"

 */







/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/



/* function upperFirst(stringa) {
    let str = stringa.split(" ");
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
    return array;
}

console.log(upperFirst("ciao mondo fabio samuel"));


 */


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


/* 
function cutString(string){

  let str = string.slice( 1, string.length-1);
  return str;

}


console.log(cutString("EPICODE"));

 

 */




/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* 

function giveMeRandom(n){
    let array = [];
    for( let i=0; i<n ; i++ ){
        array.push(parseInt(Math.random() * 11));
    }
    return array;

}

console.log(giveMeRandom(7));  */
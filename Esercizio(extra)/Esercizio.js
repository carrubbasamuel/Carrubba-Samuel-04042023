// Esercizi aggiuntivi
/* 
let shoppingCart= [
    {
        id: 0,
        name: "shose",
        price: 10,
        quantity: 3,

    },
    {
        id: 1,
        name: "t-shirt",
        price: 5,
        quantity: 10,

    },
    {
        id: 2,
        name: "glass",
        price: 100,
        quantity: 1,

    }
];


 */


/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/



/* function giveMeRandom(n){
    let array = [];
    for( let i=0; i<n ; i++ ){
        array.push(parseInt(Math.random() * 11));
    }
    return array;
}

let randomArray = giveMeRandom(5);
console.log(randomArray);

function checkArray(array){
    let total=0;
    for(let i=0; i<array.length; i++){
        if(array[i]>5){
            total += array[i];
            console.log(true);
            continue;
        }
        console.log(false);
    }
    return total;
}

console.log(checkArray(randomArray));
 */





/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/






/*

function shoppingCartTotal(){
    let total = 0;
    for(let i=0;i<shoppingCart.length;i++){
        total += shoppingCart[i].price;
    }
    return total;
}
 */





/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* let product = {
    id: 26578,
    name: "ball",
    price: 5,
    quantity: 100,
}

function addToShoppingCart(anyProduct){
    shoppingCart.push(anyProduct);
    console.log(shoppingCart[3]);
    return shoppingCart.length;
}


console.log(addToShoppingCart(product));

 */
/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/




/*

function maxShoppingCart(){
    let maxPrice = 0;
    for(let i=0; i<shoppingCart.length; i++){
        if( maxPrice < shoppingCart[i].price )maxPrice = shoppingCart[i].price;
    }
    return maxPrice;
}


console.log(maxShoppingCart());

 */




/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* function latestShoppingCart(){
    return shoppingCart[shoppingCart.length-1];
}



console.log(latestShoppingCart()); */


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/


/* 
let x =  parseInt(Math.random()*10);
console.log("Valore da superare:  ", x);

function loopUntil(x){
    let z=0;
    while(z<3){
        let y = parseInt(Math.random()*10);
        console.log(y);
        if(y<x)z=0;
        else z++;
    }
}

console.log(loopUntil(x));


*/



/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* let array = ["risolvi","i","seguenti","esercizi"];
let maxString = "";

function longest(anyArray){
    for(let i=0; i<anyArray.length; i++){
        let string = anyArray[i];
        if(maxString.length < string.length)maxString = string;
    }
    return maxString;
}

console.log("La parola più lunga è:  " + longest(array)); */


/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/


/* emailContent = "Questa mail contine";

emailContentSpam = "Questa mail contine SPAM";

emailContentScam = "Questa mail contine SCAM";

function antiSpam(string){
    if(string.includes("SPAM")||string.includes("SCAM"))return false;
    else return true;
}


console.log(antiSpam(emailContent));
console.log(antiSpam(emailContentScam));
console.log(antiSpam(emailContentSpam));
 */


/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* 
let data = new Date("1999-01-11")// crea una nuova istanza dell'oggetto Date impostando la data di riferimento al 11 gennaio 1999.

function daysPassed(date) {

    //viene creato un nuovo oggetto Date che rappresenta la data odierna.
    let today = new Date();

    //calcolata la differenza in millisecondi tra la data odierna e quella passata come parametro, usando il metodo 
    //getTime() per ottenere il timestamp di ciascuna data e la funzione 
    //Math.abs() per ottenere il valore assoluto della differenza.
    let timeDiff = Math.abs(today.getTime() - date.getTime());

    //calcolato il numero di giorni trascorsi dalla data passata come parametro usando 
    //la divisione tra la differenza in millisecondi e il numero di millisecondi in un giorno (86400000) e arrotondando il risultato verso l'alto 
    //con la funzione Math.ceil().
    let days = Math.ceil(timeDiff / 86400000);
    return days;
}

console.log(daysPassed(data));
   */


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
/* 

function matrixGenerator(x, y) {
    let matrix = [];//creo la mia matrice

    //creo il mio primo ciclo che mi andrà a creare una prima riga poi entrera nel 
    //secondo ciclo e la riempirà fin quando il secondo indice corrisponderà a y
    //poi pusha la prima riga sulla matrice. 
    //il numero di righe corrisppondera alla mia x
    for (let i = 0; i < x; i++) {
      let row = [];
      for (let j = 0; j < y; j++) {
        row.push(String(i) + String(j));
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  console.log(matrixGenerator(10, 10));
   */
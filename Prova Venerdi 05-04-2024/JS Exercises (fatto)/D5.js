/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for(let p = 0; p < pets.length; p++) {
  console.log(pets[p])
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets) 

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let taglio = pets.shift();
pets.push(taglio);
console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = "IPL859";
cars[1].licensePlate = "LPO385";
cars[2].licensePlate = "PatenteRitirata3840";
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


var fiat =  {
    brand: 'Fiat',
    model: 'Punto',
    color: 'Black',
    trims: ['incredibile', 'pazzesca', 'cammina'],
  };


cars.push(fiat); //------------ CONSOLE LOG VALIDO SOPRA PER CONTROLLARE SE HA AGGIUNTO IL NUOVO OGGETTO DENTRO L'ARRAY

for(let t = 0; t < cars.length; t++) {
  cars[t].trims.pop();
};


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let i = 0; i < cars.length; i++){
    justTrims.push(cars[i].trims[0])
  
};
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i = 0; i < cars.length; i++) {
  let auto = cars[i].color;
  let firstLetter = auto.charAt(0);
  if(firstLetter === "b") {
    console.log("Frizz")
  } else {
    console.log("Buzz")
  }
};                    


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while(i < numericArray.length && numericArray[i] !=32) {
    i++;
    console.log(numericArray[i])
};


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let caratteri = []


for(let i = 0; i < charactersArray.length; i++ ) {
  let numero = 0;
  switch(charactersArray[i]) {
    case "a":
      numero = 1;
      break;
    case "b":
      numero = 2;
      break;
    case "c":
      numero = 3;
      break;
    case "d":
      numero = 4;
      break;
    case "e":
      numero = 5;
      break;
    case "f":
      numero = 6;
      break;
    case "g":
      numero = 7;
      break;
    case "h":
      numero = 8;
      break;
    case "i":
      numero = 9;
      break;
    case "l":
      numero = 10;
      break;
    case "m":
      numero = 11;
      break;
    case "n":
      numero = 12;
      break;
    case "o":
      numero = 13;
      break;
    case "p":
      numero = 14;
      break;
    case "q":
      numero = 15;
      break;
    case "r":
      numero = 16;
      break;
    case "s":
      numero = 17;
      break;
    case "t":
      numero = 18;
      break;
    case "u":
      numero = 19;
      break;
    case "v":
      numero = 20;
      break;
    case "z":
      numero = 21;
      break;
  }
 caratteri.push(numero);
}
console.log(caratteri)
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21)

console.log("Numeri casuali da 0 a 20: ", random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Giacomo",
  surname: "Pillitteri",
  age: 28,
}

console.log("Oggetto me: ", me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age

console.log("Oggetto 'me' dopo la rimozione di age: ", me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "HTML", "CSS", "Java", "PHP", "MySql"];

console.log("Oggetto 'me' con array skills", me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Ruby");

console.log("Oggetto 'me' con nuovo elmento nell'array skills: ", me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log("Oggetto 'me' con l'ultimo elemento dell'array skills rimosso", me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  return Math.floor(Math.random() * 6) + 1
}

const result = dice()

console.log("Numero casuale da 1 a 6: ", result)


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

const resultBigger = whoIsBigger(10, 25)

console.log(resultBigger)

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str) {
  return str.split(' ');
}

const resultSplit = splitMe("I love coding")

console.log(resultSplit)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (str, boo) {
  if (boo === true) {
    return str.slice(1)
  } else {
    return str.slice(0, -1)
  }
}

const resultDeleteOne = deleteOne("Giacomo", true)

console.log(resultDeleteOne)

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
  return str.replace(/\d/g, '');
}

const resultOnlyLetters = onlyLetters("Giacomo 11 Pillitteri")
console.log(resultOnlyLetters)

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

console.log("E' un email? ", isThisAnEmail("ciao@gmail.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const today = new Date();
  const dayNumber = today.getDay();
  const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  return daysOfWeek[dayNumber];
}

console.log("Oggi è", whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (n) {
  const results = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < n; i++) {
    const roll = dice();
    results.values.push(roll);
    results.sum += roll;
  }

  return results;
};

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (someDate) {
  const today = new Date();

  // Per ottenere un calcolo preciso imposto entrambe le date a mezzanotte
  today.setHours(0, 0, 0, 0);
  someDate.setHours(0, 0, 0, 0);

  // Differenza in millisecondi tra le due date
  const differenceMs = today.getTime() - someDate.getTime();

  // Convertire i millisecondi in giorni.
  const days = differenceMs / (1000 * 60 * 60 * 24);

  // Arrotondare per difetto per avere il numero di giorni completi trascorsi
  return Math.floor(days);
};

const date = new Date('2025-06-05T10:00:00');
console.log(`Giorni trascorsi da oggi: ${howManyDays(date)}`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (myBirthdayMonth, myBirthdayDay) {

  const today = new Date();

  const currentMonth = today.getMonth();

  const currentDay = today.getDate();

  if (currentMonth === myBirthdayMonth && currentDay === myBirthdayDay) {
    return true;
  } else {
    return false;
  }
};

console.log("Oggi è il mio compleanno?", isTodayMyBirthday(6, 11))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
};

let mioOggetto = {
  name: "Giacomo",
  str: "Stringa",
  age: 28
};

console.log("Oggetto originale:", mioOggetto);

const oggettoModificato1 = deleteProp(mioOggetto, "str");
console.log("Oggetto dopo aver eliminato 'str':", oggettoModificato1);


/* Questo array viene usato per gli esercizi. Non modificarlo. */

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (moviesArray) {

  let latestMovie = moviesArray[0];


  for (let i = 1; i < moviesArray.length; i++) {
    const currentMovie = moviesArray[i];

    const currentYear = parseInt(currentMovie.Year);
    const latestYear = parseInt(latestMovie.Year);

    if (currentYear > latestYear) {
      latestMovie = currentMovie;
    }
  }

  return latestMovie;
};

const mostRecentFilm = newestMovie(movies);
console.log("Il film più recente è:", mostRecentFilm);


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function () {
  return movies.length
}

console.log("Numero film presenti:", countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function () {
  const yearsArray = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    yearsArray.push(movie.Year);
  }

  return yearsArray;
};

console.log("Array con anni dei film", onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function () {
  const lastMillenniumMovies = [];
  const yearLimit = 2000;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieYear = parseInt(movie.Year);

    if (movieYear < yearLimit) {
      lastMillenniumMovies.push(movie);
    }
  }
  return lastMillenniumMovies;
}
console.log("Array con film usciti prima del 2000", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  let totalYearsSum = 0;
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieYear = parseInt(movie.Year);

    totalYearsSum += movieYear;
  }
  return totalYearsSum;
};

const totalYears = sumAllTheYears();
console.log("La somma di tutti gli anni dei film è:", totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (searchString) {
  const matchingMovies = [];

  // Converto la stringa di ricerca in minuscolo per migliorare la ricerca una ricerca
  const lowerCaseSearchString = searchString.toLowerCase();

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    // Convertiamo il titolo del film in minuscolo per la ricerca
    const movieTitleLowerCase = movie.Title.toLowerCase();

    if (movieTitleLowerCase.includes(lowerCaseSearchString)) {
      matchingMovies.push(movie);
    }
  }

  return matchingMovies;
};

let title = "Lord"

console.log(`Film con ${title} nel titolo:`, searchByTitle(title));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (searchString) {
  const result = {
    match: [],
    unmatch: []
  };

  if (searchString === null || searchString === undefined || searchString.length === 0) {
    result.unmatch = [...movies]; // Copio tutti i film in unmatch
    return result;
  }

  const lowerCaseSearchString = searchString.toLowerCase();

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieTitleLowerCase = movie.Title.toLowerCase();

    if (movieTitleLowerCase.includes(lowerCaseSearchString)) {
      result.match.push(movie);
    } else {
      result.unmatch.push(movie);
    }
  }

  return result;
};
console.log(searchAndDivide("Lord"))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (indexToRemove) {

  movies.splice(indexToRemove, 1);
  return movies;
};
console.log(removeIndex(10))


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const getContainerElement = function () {
  const container = document.getElementById("container");
  return container;
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const getAllTdElements = function () {
  const allTd = document.getElementsByTagName("td");
  return allTd;
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTdContent = function () {
  const allTd = document.getElementsByTagName("td");

  for (let i = 0; i < allTd.length; i++) {
    const tdElement = allTd[i];
    console.log(tdElement.textContent);
  }
  if (allTd.length === 0) {
    console.log("Nessun tag <td> trovato nella pagina.");
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const setLinksRedBackground = function () {
  const allLinks = document.getElementsByTagName("a");
  allLinks[i].style.backgroundColor = "red";
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addListItem = function() {
  const myList = document.getElementById("myList");

  const newLi = document.createElement("li");
  newLi.textContent = "Nuovo elemento"; 
  myList.appendChild(newLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyMyList = function() {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";

};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassToAllTr = function() {
  const allTr = document.getElementsByTagName("tr");

  for (let i = 0; i < allTr.length; i++) {
    allTr[i].classList.add("test"); 
  }
};


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/


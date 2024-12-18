const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;

// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];
// const [[, rating], [, ratingCount]] = ratings;

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// const { title, author, ISBN, keywords: tags } = books[0];

// const { language, programmingLanguage = "unknown" } = books[6];

// let bookTitle = "unknown";
// let bookAuthor = "unknown";

// ({ title: bookTitle, author: bookAuthor } = books[0]);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// const printBookInfo = function ({ title, author, year = "year unknown" }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });

// const bookAuthors = [...books[0].author, ...books[1].author];

// console.log(bookAuthors);

// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord("JavaScript");

///////////////////////////////////////////////////////

// const person = {
//   name: "Rido Septiawan",
//   language: ["HTML", "CSS", "Javascript", "Tailwind", "React", "Saass"],

//   skill(s1, s2) {
//     return [this.language[s1], this.language[s2]];
//   },
// };
// const [main, second] = person.skill(2, 4);

// const [x, y, z = 1] = [8, 9];

// const [i, , [j, k]] = [1, 2, [3, 4]];

// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];

// const [[, rating], [, ratingCount]] = ratings;

// const {
//   ISBN: id,
//   title,
//   language,
//   skill: sk = 1,
//   thirdParty: {
//     goodreads: { rating, reviewsCount, ratingsCount },
//   },
// } = books[0];
// console.log(rating, reviewsCount, ratingsCount);

// console.log(books[0].thirdParty.goodreads);
// let rating = 5;
// let ratingsCount = 10;

// ({ rating, ratingsCount } = books[0].thirdParty.goodreads);
// console.log(rating, ratingsCount);
// const { rating: r, ratingsCount: rc } = books[0].thirdParty.goodreads;

// let bookTitle = "unknown";
// let bookAuthor = "unknown";
// ({ title: bookTitle, author: bookAuthor } = books[0]);

// console.log(bookTitle, bookAuthor);
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// const printBookInfo = function ({ title, author, year = "Year unknown" }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// printBookInfo({
//   title: "Algorithms",
//   author: "Robert Sedgewick",
//   year: "2011",
// });
// printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });

// const a = [1, 2, 3, 4];
// const b = [5, 6, 7, 8];

// const rido = {
//   name: "Rido Septiawan",
//   usia: 23,
// };

// const ridos = { ...rido, specialist: "Frontend" };

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;
// const [gk, ...fieldPlayers] = player1;
// const allPlayers = [...player1, ...player2];
// const players1Final = ["Thiago", "Coutinho", "Perisic", ...player1];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...scored) {
//   console.log(scored.length);
// };
// printGoals(...game.scored);

// console.log(game.odds.team1 > game.odds.team2 && game.team1);

// const [player1] = game.players;

// for (const [i, el] of player1.entries()) {
//   if (i < 1) {
//     console.log(`${el} is Goal Keeper`);
//   } else if (i < 5) {
//     console.log(`${el} is Deffender`);
//   } else if (i < 8) {
//     console.log(`${el} is Midfielder`);
//   } else {
//     console.log(`${el} is Attacker`);
//   }
// }

// const bookAuthors = [...books[0].author];

// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord("JavaScript");

// const {
//   keywords: [mainKeyword, ...rest],
// } = books[0];

// const { publisher: bookPublisher, ...restofbo } = books[1];

// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// };
// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log(game.scored);

// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

// let avg = 0;
// for (const odd of Object.values(game.odds)) {
//   avg += odd;
// }
// console.log(avg);

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${team === "x" ? "draw" : `victory ${game[team]}`} ${odd}`
//   );
// }

// const hitungFaktorial = function (n) {
//   let faktorial = 1;
//   for (let i = 1; i <= n; i++) {
//     faktorial *= i;
//   }
//   return faktorial;
// };
// console.log(hitungFaktorial(5)); // Output: 120
// console.log(hitungFaktorial(3)); // Output: 6

// const filterGanjil = function (arr) {
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }
//   return odd;
// };
// console.log(filterGanjil([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
// console.log(filterGanjil([10, 13, 15, 20])); // Output: [13, 15]

// const balikString = function (str) {
//   return str.split("").reverse().join("");
// };
// console.log(balikString("hello")); // Output: "olleh"
// console.log(balikString("Rido")); // Output: "odiR"

// const hitungVokal = function (str) {
//   const vc = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vc.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(hitungVokal("programming")); // Output: 3
// console.log(hitungVokal("javascript")); // Output: 3

// const question = new Map([
//   ["question", prompt("What is the best programming language in the world?")],
//   [1, "C"],
//   [2, "Javascript"],
//   [3, "PHP"],
//   [true, "Correct!"],
//   [false, "Try again"],
// ]);

// const answer = question.get(+question.get("question"));

// console.log(question.get(answer === "Javascript"));

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// const events = [...gameEvents.values()];
// console.log(new Set(events));

// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// for (const [i, el] of gameEvents.entries()) {
//   console.log(`[${i <= 45 ? "FIRST HALF" : "SECOND HALF"}] ${i}: ${el}`);
// }
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const btn = document.querySelector("button");
// const input = document.querySelector("textarea");
// btn.textContent = "Click";

// btn.addEventListener("click", function () {
//   const str = input.value;
//   const normalize = str.toLowerCase().split("\n");

//   for (const [i, n] of normalize.entries()) {
//     const [f, s] = n.trim().split("_");

//     console.log(
//       `${f}${s.replace(s[0], s[0].toUpperCase())}`.padEnd(20) +
//         "✅".repeat(i + 1)
//     );
//   }
// });

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// for (const f of flights.split("+")) {
//   const [i, j, k, l] = f.split(";");

//   const output = `${i.replaceAll("_", " ")} from ${j
//     .slice(0, 3)
//     .toUpperCase()} to ${k.slice(0, 3).toUpperCase()} (${l.replace(":", "h")})`;
//   console.log(
//     `${output.startsWith("Delayed") ? "🔥" : ""}${output.padStart(45)}`
//   );
// }
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Halo")("rido");

// const rido = {
//   name: "Rido Septiawan",
//   age: 23,

//   sayHi(greet) {
//     console.log(`${greet} ${this.name} usia ${this.age}`);
//   },
// };

// rido.sayHi("Hi");

// const hi = rido.sayHi;

// const pupu = {
//   name: "Pupu Ramadhan",
//   age: 23,
// };

// hi.call(pupu, "Halo");

// const alucard = {
//   name: "Alucard",
//   getName(role) {
//     console.log(`${this.name} ${role}`);
//   },
// };
// alucard.getName("Fighter");
// const getName = alucard.getName;

// const nana = {
//   name: "Nana",
// };

// getName.call(nana, "Mage");

// const lancelot = {
//   name: "Lancelot",
// };

// getName.call(lancelot, "Assasin");

// console.log("===================");

// const getNameL = getName.bind(lancelot);

// getNameL("Fighter");
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };
// const user = {};
// user.name = "Jhon";
// user.surname = "Smith";

// console.log(user);

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // fa

// function isEmpty(param) {
//   return Object.keys(param).length === 0;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (const s in salaries) {
//   sum += salaries[s];
// }
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(num) {
//   for (const n in num) {
//     if (typeof num[n] === "number") {
//       num[n] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// console.log(menu);

// const Calculator = function () {
//   this.read = function () {
//     this.a = +prompt("Nilai 1: ");
//     this.b = +prompt("Nilai 2: ");
//   };

//   this.sum = function () {
//     return this.a * this.b;
//   };
// };

// const sum = new Calculator();
// sum.read();
// console.log(sum.sum());

// const Accumulator = function (startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.a = +prompt("Nilai 1: ");
//     this.value += this.a;
//   };
// };
// let accumulator = new Accumulator(10); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value);

// console.log(Math.min(...[3, 5, -10, 0, 1]));

// const ucFirst = function (str) {
//   return str.replace(str[0], str[0].toUpperCase());
// };
// console.log(ucFirst("rido"));
// console.log(ucFirst("john") == "John");

// const checkSpam = function (str) {
//   console.log(str);
//   const normalize = str.toLowerCase();
//   return normalize.includes("viagra") || normalize.includes("xxx");
// };
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

// function hitungLuasSegitiga(alas, tinggi) {
//   // Tulis kode di sini
//   return (alas * tinggi) / 2;
// }

// console.log(hitungLuasSegitiga(10, 5)); // Output: 25

// function cekGanjilGenap(angka) {
//   // Tulis kode di sini
//   return angka % 2 !== 0 ? "Ganjil" : "Genap";
// }

// console.log(cekGanjilGenap(7)); // Output: 'Ganjil'
// console.log(cekGanjilGenap(10)); // Output: 'Genap'

// function reverseString(str) {
//   // Tulis kode di sini
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello")); // Output: 'olleh'

// function hitungVokal(str) {
//   // Tulis kode di sini
//   const vocal = ["a", "i", "u", "e", "o"];
//   let output = 0;
//   for (const item of str) {
//     if (vocal.includes(item)) {
//       output++;
//     }
//   }
//   return output;
// }

// console.log(hitungVokal("programming")); // Output: 3
// console.log(hitungVokal("javascript")); // Output: 3
// function findMax(arr) {
//   // Tulis kode di sini
//   return Math.max(...arr);
// }

// console.log(findMax([1, 15, 3, 9, 2])); // Output: 9

// function removeDuplicates(arr) {
//   // Tulis kode di sini
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// function generateFibonacci(n) {
//   // Tulis kode di sini
//   const fibonacci = [0];
// }

// console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]

// function highAndLow(numbers) {
//   // ...
//   const nums = numbers.split(" ").map(Number);
//   let min = nums[0];
//   let max = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < min) {
//       min = nums[i];
//     } else if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return `${max} ${min}`;
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, curr) => acc + curr, 0);
//   console.log(humanAge);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// const recfood = dogs.map(
//   (dog) => (dog.recommendedFood = dog.weight ** 0.75 * 28)
// );
// console.log(recfood);

// const sarahDogs = dogs.find((dog) => dog.owners.includes("Sarah"));
// const eat =
//   sarahDogs.recommendedFood > sarahDogs.curFood
//     ? "ownersEatTooMuch"
//     : "ownersEatTooLittle";
// console.log(eat, sarahDogs.recommendedFood, sarahDogs.curFood);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.sayHi = function (greet) {
//   console.log(
//     `${greet}, nama saya ${this.firstName} saya lahir tahun ${this.birthYear}`
//   );
// };

// const rido = new Person("Rido", 2001);
// rido.sayHi(`Halo ges`);
// console.log(Object.getPrototypeOf("Person"));

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going on ${this.speed} km/h`);
//   }
// }

// const bmw = new Car("BMW", 120);
// bmw.accelerate();
// bmw.accelerate();

// const Person = function (fullName, birthYear) {
//   this.fullName = fullName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   this.age = 2030 - this.birthYear;
// };
// Person.hi = function () {
//   console.log(`Hi im static`);
// };

// const rido = new Person("Rido", 2001);
// rido.calcAge();
// console.log(rido);
// Person.hi();

// class Iphone {
//   constructor(type, price, year) {
//     this.type = type;
//     this.price = price;
//     this.year = year;
//   }

//   set type(t) {
//     if (t.includes(11)) this._type = t;
//   }
//   get type() {
//     return this._type;
//   }
// }

// const ip11 = new Iphone("Iphone 12", 1000, 2019);
// ip11.type = "Ip 11";

// ip11.type;
// console.log(ip11);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going on ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going on ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return (this.speed /= 1.6);
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car("Ford", 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.charge--;
//   this.speed += 20;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);

// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.brake();
// console.log(tesla);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
// }
// const bmw = new Car("BMW", 120);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// console.log(bmw);

// class EV extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.charge--;
//     console.log(
//       `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//     );
//   }
// }

// const tesla = new EV("Tesla", 140, 23);

// tesla.accelerate();
// console.log(tesla);

// class Account {
//   constructor(username, pin) {
//     this.username = username;
//     this.pin = pin;
//     this.mov = [];
//   }

//   deposit(amount) {
//     this.mov.push(amount);
//   }

//   withdrawal(amount) {
//     this.deposit(-amount);
//   }
// }

// const acc1 = new Account("Ridoseptiawan", 1111);

// acc1.deposit(300);
// acc1.deposit(300);
// acc1.deposit(300);
// acc1.deposit(300);
// acc1.withdrawal(500);
// console.log(acc1);

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//     this.speed = 0;
//   }

//   description() {
//     console.log(`Mobil ini adalah ${this.brand} keluaran tahun ${this.year}`);
//   }
//   set accelerate(n) {
//     this.speed += n;
//   }
//   set brake(n) {
//     this.speed -= n;
//     if (this.speed < 0) {
//       this.speed = 0;
//     }
//   }
//   get getSpeed() {
//     return this.speed;
//   }
// }
// const toyota = new Car("Toyota", 2020);
// toyota.description();

// toyota.accelerate = 50;
// toyota.brake = 20;
// console.log(toyota.getSpeed);

// class SportCar extends Car {
//   constructor(brand, year, turbo = false) {
//     super(brand, year);
//     this.turbo = turbo;
//   }

//   activeTurbo() {
//     this.turbo = true;
//   }
//   description() {
//     console.log(
//       `Mobil ini adalah ${this.brand} keluaran tahun ${this.year}. Turbo: ${
//         this.turbo ? "Active" : "Not Active"
//       }`
//     );
//   }
// }

// const ferrari = new SportCar("Ferrari", 2023);
// ferrari.description();
// ferrari.activeTurbo();
// ferrari.description();

// class Bioskop {
//   constructor() {
//     this.daftarFilm = [];
//   }

//   tambahFilm(judul, genre, tahun) {
//     this.daftarFilm.push({
//       judul,
//       genre,
//       tahun,
//     });
//   }

//   cariFilm(genre) {
//     return this.daftarFilm.filter((film) => film.genre == genre);
//   }

//   get tampilkanSemuaFilm() {
//     console.log(this.daftarFilm);
//   }
// }

// const marvel = new Bioskop();
// marvel.tambahFilm("Avengers", "Action", 2023);
// marvel.tambahFilm("Avengers", "Action", 2023);
// marvel.tambahFilm("A", "Supranatural", 2023);
// marvel.tambahFilm("B", "Supranatural", 2023);
// marvel.tambahFilm("C", "Supranatural", 2023);

// console.log(marvel.cariFilm("Supranatural"));
// marvel.tampilkanSemuaFilm;

// class Hewan {
//   constructor(name) {
//     this.name = name;
//   }

//   suara() {
//     return `Hewan Bersuara`;
//   }
// }

// class Kucing extends Hewan {
//   constructor(name) {
//     super(name);
//   }

//   suara() {
//     return `Meong`;
//   }
// }
// class Anjing extends Hewan {
//   constructor(name) {
//     super(name);
//   }

//   suara() {
//     return `GukGuk`;
//   }
// }

// const bobi = new Kucing("Bobbi");
// const bobo = new Anjing("Bobbo");

// console.log(bobi.suara());
// console.log(bobo.suara());

// class User {
//   #isPrivate = true;
//   #password;
//   constructor(nama, email, password) {
//     this.nama = nama;
//     this.email = email;
//     this.#password = password;
//     this.role = "user";
//   }

//   setRole(role) {
//     this.role = role;
//   }

//   info() {
//     console.log(`Nama: ${this.nama}, Email: ${this.email}, Role: ${this.role}`);
//   }

//   getPrivate() {
//     return this.#isPrivate;
//   }
// }

// const rido = new User("Rido septiawan", "ridoseptiawan@gmail.com", "mangeak");
// const husni = new User("Husni mubarak", "husnimubarak@gmail.com", "mangeak");
// const pupu = new User("Pupu Ramadhan", "pupuramadhan@gmail.com", "mangeak");
// const user = [rido, husni, pupu];

// user[0].setRole("admin");

// console.log(user);
// console.log(rido.getPrivate());

// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//     return this;
//   }
// }

// class EVCl extends CarCL {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }%`
//     );
//     return this;
//   }
//   chargeBattery(charge) {
//     this.#charge = charge;
//     return this;
//   }
// }

// const rivian = new EVCl("Rivian", 120, 23);

// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();
// console.log(rivian);

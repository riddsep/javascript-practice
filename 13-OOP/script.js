// // const account = {
// //   owner: "Jonas",
// //   movements: [200, 530, 120, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest);

// // account.latest = 50;
// // console.log(account.movements);

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return 2037 - this.birthYear;
//   }

//   greet() {
//     return `Hey ${this.fullName}`;
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a fullname`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const rido = new Person("Rido Septiawan", 2001);

// const Book = function (title, author, pages, birthYear) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.birthYear = birthYear;
// };

// Book.prototype.info = function () {
//   return `"${this.title} by ${this.author}, ${this.pages} pages, not read yet"`;
// };

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 1990);

// console.log(theHobbit.info());
// console.log(Object.setPrototypeOf(Book.prototype, Person.prototype));
// console.log(Object.getPrototypeOf(Book.prototype));

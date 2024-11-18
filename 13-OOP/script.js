// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2030 - this.birthYear;
// };

// const rido = new Person("Septiawan", 2001);
// console.log(
//   `Hi my name is ${rido.name}. im born in ${
//     rido.birthYear
//   }. in 2030 i was ${rido.calcAge()}`
// );

// const Car = function (brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return (this.speed += 10);
// };

// Car.prototype.break = function () {
//   return (this.speed -= 5);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// console.log(bmw.accelerate());
// console.log(bmw.accelerate());
// console.log(bmw.break());

class Person {
  constructor(name, birthday, job) {
    this.name = name;
    this.birthday = birthday;
    this.job = job;
  }

  calcAge() {
    return 2030 - this.birthday;
  }

  currentJob() {
    return `Hi!. my current job is ${this.job}`;
  }

  resume() {
    return `Hi, my name is ${this.name}. Im ${this.calcAge()}`;
  }
}

const rido = new Person("Rido", 2001, "Software Engineer");

console.log(rido);
console.log(rido.calcAge());
console.log(rido.resume());

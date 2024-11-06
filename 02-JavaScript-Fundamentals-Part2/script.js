// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// console.log(describeCountry("Indonesia", 250, "Jakarta"));

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// console.log(percentageOfWorld1(250));
// console.log(percentageOfWorld2(550));

// const percentageOfWorld2 = (population) => {
//   return (population / 7900) * 100;
// };
// console.log(percentageOfWorld2(550));

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(
    2
  )}% of the world`;
};
console.log(describePopulation("Indonesia", 1441));

const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

console.log(describeCountry("Indonesia", 250, "Jakarta"));

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld1(250));
console.log(percentageOfWorld2(550));

const percentageOfWorld2 = (population) => {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld2(550));

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

const populations = [250, 1141, 120, 122];

const percentages = [
  percentageOfWorld1(populations[0]).toFixed(2),
  percentageOfWorld1(populations[1]).toFixed(2),
  percentageOfWorld1(populations[2]).toFixed(2),
  percentageOfWorld1(populations[3]).toFixed(2),
];

console.log(percentages);

const neighbours = ["Malaysia", "Brunei", "Singapore"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central european country :D`);
}

neighbours[neighbours.indexOf("Brunei")] = "Brunei Darussalam";

console.log(neighbours);

const myCountry = {
  country: "Indonesia",
  capital: "Jakarta",
  language: "Bahasa Indonesia",
  population: 250,
  neighbours: ["Malaysia", "Singapore", "Brunei"],

  describe() {
    console.log(
      `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland() {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

myCountry.describe();
console.log(myCountry.checkIsland());

myCountry.population += 2;
console.log(myCountry);

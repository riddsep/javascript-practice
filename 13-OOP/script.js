const Hero = function (name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;
  this.meta = false;
};

Hero.prototype.isMeta = function (statusMeta = false) {
  this.meta = statusMeta;
  return `You created ${this.name} with difficulty ${
    this.difficulty
  }, and it is currently ${this.meta ? "a Top pick now!" : "Not OP"}`;
};

const hayabusa = new Hero("Hayabusa", "Easy");
const fanny = new Hero("fanny", "God");

console.log(hayabusa.__proto__ === fanny.__proto__);

console.log(hayabusa.isMeta(true));

const Hero = function (name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;
  this.meta = false;
};

Hero.prototype.isMeta = function (statusMeta) {
  this.meta = statusMeta;
  return `You created ${this.name} with difficulty ${
    this.difficulty
  }, and it is currently ${this.meta ? "a Top pick now!" : "Not OP"}`;
};

const hayabusa = new Hero("Hayabusa", "Hard");

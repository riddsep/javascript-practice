const Hero = function (name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;
};

Hero.prototype.isMeta = function (meta) {
  this.meta = meta;
  return `You create ${this.name}. with difficulty ${
    this.difficulty
  }, where its ${this.meta ? "Top pick now" : "Not OP"}`;
};

const hayabusa = new Hero("Hayabusa", "Hard");

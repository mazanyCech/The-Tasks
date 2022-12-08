const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    for (let i = 1; i <= 6; i++) {
      let increaseLevel = this.level + i;
      increaseLevel == 2 ? this.stack.push("CSS") : "go to study";
      increaseLevel == 3 ? this.stack.push("JavaScript") : "go to study";
      increaseLevel == 4 ? this.stack.push("React") : "go to study";
      increaseLevel == 5 ? this.stack.push("NodeJS") : "go to study";
      increaseLevel == 6
        ? alert("The studetn learnt all the techologies")
        : "go to study";
    }
    return console.log(this.stack);
  },
};

console.log(student.improveLevel());

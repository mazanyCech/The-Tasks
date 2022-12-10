// to develop a web platform,
// that will track the students' progress in learning web development.
// First you need to create a student object with 3 properties:
// 1. stack. An array of strings, where each string is a technology. Initially the array
// array must be equal to ['HTML'].
// 2. level. The data type is a number. The level is responsible for the current level of the student and is initially
// and is initially equal to 1.
// 3. improveLevel. The function which first increases the level property of a student by 1.
// of the student's level property by one. If the level is 2, you need to add the value of 'CSS' to the end
// CSS' at the end of the stack; if 3rd, you need to add 'JavaScript' value to the end of the stack.
// JavaScript', 4th is 'React', 5th is 'NodeJS'. If the value of level became more than 5, then
// you should print the message "The student has learned
// all technologies!". Also, the improveLevel function should at the very end return
// the updated student object.
// As a result, the value of the stack property after executing the code below should be as follows.
// ["HTML", "CSS", "JavaScript", "React", "NodeJS"].

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

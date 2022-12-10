const bird = {
  name: "Charlie",
  type: "Bird",
  makeSound() {
    return "Chik - Chirik";
  },
};

const dog = {
  name: "Cesar",
  type: "Dog",
  makeSound() {
    return "Gav - Gav";
  },
};

function makeDomestic(isDomestic) {
  this.isDomestic = isDomestic;

  console.log(
    `${this.type} his name ${
      this.name
    } and he says ${this.makeSound()} and he is domestic? ${isDomestic} `
  );
  console.log(this);
}

makeDomestic.call(bird, true);
makeDomestic.apply(bird, [true]);
let bindedDogInfo = makeDomestic.bind(dog, false);
bindedDogInfo();

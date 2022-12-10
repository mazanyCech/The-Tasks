// You need to create a makeDomestic function that works with the key
// this key (an example of its use is given below). It should output all information about the animal to the console.
// The example below shows an example of using this function to output all information about an animal to the console,
// where name is the name of the animal, type is its type, and sound is the result of calling the makeSound function.
// The makeDomestic function should also return a new animal object, which
// has all the previous parameters (name, type, makeSound) and the new
// parameter isDomestic. This is a boolean data type that indicates whether the animal is domestic.
// Domestic or not. The value for isDomestic (true or false) you must
// pass it as a parameter to the makeDomestic function.
// The makeDomestic function must also
// only use this value. That is, you are only allowed to refer to properties with parameters
// this.name or this.makeSound, but not bird.name or bird.makeSound.
// You need to solve this problem in three ways: with bind, call and apply. Call
// the makeDomestic function 3 times using these methods. If you use bind,
// the makeDomestic function should work with the object dog, if you use apply and call it should work with the object
// bird. Remember to pass the isDomestic parameter to the function when you call it.

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

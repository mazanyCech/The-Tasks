// Discription
// Unfortunately, this code does not work correctly. In some cases it outputs
// undefined, and in other cases it will get an error.
// You need to fix this code using bind, call and apply.
// The attack function must be fixed with bind + you need to remember
// the peculiarity of arrow functions (no this)
// The score function - with call.
// The substitute function - with apply

const footballer = {
    fullName: "Cristiano Ronaldo",
     attack () {
        console.log(`${this.fullName} begining attack with ball now!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} scored a goal! It is amazing!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} leaved to be replaced. Enters the field ${newPlayer}`)
    },
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack.bind(footballer)();
score.call(footballer, 'Siiii')
substitute.apply(footballer, ['Paulo Dibala'])
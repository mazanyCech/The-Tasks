//Discription
// Now your task is to create a function getDaysBeforeBirthday,
// which will return the number of days before the next birthday. This
// function must take 1 parameter nextBirthdayDate, which is a
// date object and points to the date of your next birthday. The year should be specified
// closest to the current date, not the year of your birth.

const nextBirthdayDate = new Date(2023, 5, 12);

//calculates the days until my birthday
function getDaysBeforeBirthday(nextBirthdayDate){
    const currentDate = new Date();
    let difference = nextBirthdayDate.getTime() - currentDate.getTime();
    console.log(Math.round(difference / 1000 / 60 / 60 / 24));
}

getDaysBeforeBirthday(nextBirthdayDate);
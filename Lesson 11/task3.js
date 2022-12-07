//Discription
//We need to add one day by current date
const days = 1;

function addDays(days){
    if(days === 1){
        const currentDate = new Date(Date.now() + 86400000);
        console.log(currentDate);
    }
}

addDays(days);


//Discription
//function that will record the time format day.month.year (12.04.2012)

const date = new Date(2023, 1, 11);

const separator = ".";

//add "0" if number "1,2,3 .."
function getDateFormat(date, separator){
    let newDay;
    let newMonth;
    
    if(date.getDate() <= 9 && date.getMonth() <= 9){
        newDay = "0" + date.getDate();
        newMonth = "0" + date.getMonth();              
        console.log(`${newDay}${separator}${newMonth}${separator}${date.getFullYear()}`);
    }else if(date.getMonth() <= 9){
        newMonth = "0" + date.getMonth();
        console.log(`${date.getDate()}${separator}${newMonth}${separator}${date.getFullYear()}`);
    }else if(date.getDate() <= 9){
        newDay = "0" + date.getDate();
        console.log(`${newDay}${separator}${date.getMonth()}${separator}${date.getFullYear()}`);
    }else {
        console.log(`${date.getDate()}${separator}${date.getMonth()}${separator}${date.getFullYear()}`);
    }
    
}

getDateFormat(date, separator);
//Discription
// You need to create an allowVisa function that filters the passed
// array of visa center clients. It takes in an array of clients. Each
// client is an object with parameters firstName (client's name), lastName (last name
// client), criminalRecord (data type boolean, whether there is a criminal record), passportExpiration
// (data type string, date of passport expiry).
// The allowVisa function must return a filtered array of people so that it
// meet the following conditions:
// 1. the current date must be smaller than the passportExpiration property
// 2. The client must have no criminal record, i.e. the value of the criminalRecord property must
// equal to false


const peopleWithVisa =[
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    }
];

let currentDate = new Date().toLocaleDateString();

function allowVisa(currentDate, peopleWithVisa){
    for (let value of peopleWithVisa){
        if(value.passportExpiration > currentDate && value.criminalRecord == false){
              console.log(value);
        }
    }
}

allowVisa(currentDate ,peopleWithVisa);
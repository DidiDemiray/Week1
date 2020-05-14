
//Onderdeel A
const superheroes =[
    {name: 'Batman', alter_ego: 'Bruce Wayne'},
    {name: 'Superman', alter_ego: 'Clark Kent'},
    {name: 'Spiderman', alter_ego: 'Peter Parker'}
]

// const findeSpiderman = function(array){
//     //haal de derde uit de array naar voren
//     return array[2];
// }

// console.log(findeSpiderman(superheroes));

const findeSpiderman = function(superheldenFilteren){
    // fucntie met een functie die een bepaalde array ophaalt 
    return superheldenFilteren.find(function(superhero){
        // haal superhero op met de naam spiderman
        return superhero.name === 'Spiderman';
});
};
console.log('Find Spiderman:', findeSpiderman(superheroes));
    


//Onderdeel B

doubleArrayValues = ([1, 2, 3]);

const verdubbelWaarde = function(array){
    let newArray= [];
    array.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray
};

console.log('Verdubbel:', verdubbelWaarde([1, 2, 3]));



//Onderdeel C

 const number = [1, 2, 3, 4, 5, 6, 7, 11];
//functie some, are there some
 const NumberHigherThen = number.some((number)=>{
     //vraagt of er getallen hoger dan 10 inzitten
     return number > 10 ; 
 })
 //antwoord true/false
 console.log(NumberHigherThen);

 /* 
 Kan ook zo:

 const NumberHigherThen = function(array){
     return number.some(number =>{
         number > 10;
     })
 }; 
 */


 //Onderdeel D 

 const countrys = (['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])

 const isItalyintheArray = countrys.some((country) =>{
        //vraagt of Italy in de Array zit
        return country= 'Italy';
 });

 console.log(isItalyintheArray);

 /*
    Kan ook zo:
    
    function isItalyintheArray(array){
        return array.includes('Italy');
    };

    console.log(isItalyintheArray(['Canada', 'France','Germany',
                                    'Italy','Japan','United Kingdom',
                                    'United States']));
 */


 //Onderdeel E

const ArrayKeerTien = function(array){
    let newArray = [];
    array.forEach(number =>{
        newArray.push(number * 10)
    });
    return newArray
}

console.log(ArrayKeerTien([1, 4, 3, 6, 9, 7, 11]));



//Onderdeel F

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];

const allNumberUnderHundred = numbers.every((number) => {
    return number < 100; 
})

console.log(allNumberUnderHundred);

//Onderdeel G

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const total = function(array){
    return array.reduce((acc, number) =>{
        return acc + number;
    });
    };


console.log('Total of all numbers uin the Array:', total(numbers));

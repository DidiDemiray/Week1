
//Onderdeel A

 const addTheWordCool = function(array){
    //push cool in array
     array.push('Cool');
    //laat array terugkomen
     return array;
 };

 //beschrijf de array
 console.log('Add Cool', addTheWordCool(['Nice', 'awesome', 'tof']));



//Onderdeel B

const returnOfElements = function(array)/*functie van de array*/{
    //laat de lengte van de array zien
    return array.length;
}
//log de array, resulaat geeft 3
console.log(returnOfElements(['appels', 'bananen', 'sinaasappels']))



//Onderdeel C 

const giveAElement = function(array){
    //laat de eerste in de rij zien
    return array[0];
};

console.log(giveAElement(['voetbal', 'hockey', 'basketbal']));



//Onderdeel D

const lastElement = function(array){
    //laatste uit de array laten zien dmv 
    return array [array.length - 1];
};

console.log(lastElement(['Pizza','Patat', 'groente']));



//Onderdeel E

const trainers = ['Huistra', 'Faber', 'vd Looi', 'Buijs']

const faberErUit = function (array){
    //slice een element uit de array
    const newArray = array.slice(1, 4);
    //log de oude en de nieuwe
    console.log('Nieuwe array:', newArray, 'Oude array:', array);
    return newArray;
}
console.log(faberErUit(trainers));



//Onderdeel F   

const addWoordToString = function(array){
    //voeg string toe aan de array, waardoor het een zin wordt
    return array.join('');
}
console.log(addWoordToString(['Hoe ', 'Gaat ', 'het']));



//Onderdeel G

const samenVoegenArary = function(array1,array2){
    return array1.concat(array2);
}
console.log(samenVoegenArary([3, 4, 5], [0, 2, 7]));
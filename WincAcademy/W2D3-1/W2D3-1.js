
// Onderdeeel A 
const ikRockArrowFuncties = function (){
    console.log('Joe, ik rock de arrow functies!');
};
ikRockArrowFuncties();

//Arrow variant
const ikRockArrowFuncties2 = () => {console.log('Joe, ik rock de arrow functie!');}
ikRockArrowFuncties2();



// Onderdeel B
const fivePlusSeven = function (){
    return 5 + 7
};
fivePlusSeven();

//Arrow variant
const fivePlusSeven2 = () => 5 + 7 
fivePlusSeven2();



//Onderdeel C
() => 1 + 2; 



//Onderdeel D
const myFunction = function (a, b){
    return a + b ;
}

//Arrow variant
const myFunction2 = (a,b)=> a + b;



//Onderdeel E 
 const addFive = a => a + 5;


//Onderdeel F
const createObject = () => ({greeting: 'hoi'});
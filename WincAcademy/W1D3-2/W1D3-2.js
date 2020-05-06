/* //Deel A
makeSandwich
    Get one slice of bread
    add tomato
    add lettuce
    add cheese
    add ham 
    put one slice of bread on top.


const makeSandwich=()=>{
    Get one slice of bread;
    add tomato;
    add lettuce;
    add cheese;
    add ham ;
    put one slice of bread on top;
}
*/
/* 
const makeSandwich=(topping)=>{
    console.log('tomato');
    console.log('lettuce');
    console.log('cheese');
    console.log('ham');
    console.log('onion');
}

// Deel B

const makeSandwich=(topping, bread)=>{
    console.log('There you go, a sandwich with...' + topping + '' + bread)

}
makeSandwich('ham', 'volkoren')
// declareert in console.log en call in makeSandwich


const makeSandwich = (topping) =>{
    return topping; 
}

topping = 'tomato' + 'cheese';
console.log('There you go, a sandwich with', makeSandwich
(topping));


*/
// Deel C

/*
const calculateDiscountedPrice = (totalAmount, discount) =>{
    return Math.round(totalAmount - discount) ; 
}
console.log(calculateDiscountedPrice())
*/

// Deel C


const calculateDiscountedPrice = (totalAmount, discount) =>{
if (totalAmount>25) {
    return Math.round(totalAmount - discount)
} else {
    return Math.round(totalamount)
}
}
calculateDiscountedPrice(28, 5);
console.log(calculateDiscountedPrice(28, 5));
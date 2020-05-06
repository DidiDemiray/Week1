/*
Write a function named calculateDogAge that:

takes 1 argument: your puppy's age.

calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.

outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

const calculateDogAge= (dogAge) =>{
    return (dogAge*7) 
}

const calculateHumanAge= (humanAge) =>{
    return (humanAge/7) 
}

console.log('Your doggie is ' + calculateDogAge(9) + ' years old.' + 
            ' You are ' + calculateHumanAge(56) + ' dogsyears old.')

console.log ('Your doggie is ' + calculateDogAge(2) + ' years old.' + 
            ' You are ' + calculateHumanAge(28) + ' dogsyears old.')

console.log('Your doggie is ' + calculateDogAge(24) + ' years old.' + 
            ' You are ' + calculateHumanAge(80) + ' dogsyears old.')
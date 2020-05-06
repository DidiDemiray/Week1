/*
Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.

calculates the amount consumed for rest of the life (based on a constant max age). ----80 years

outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"

Call that function three times, passing in different values each time.
*/

const calculateSupply = (age, amountPerDay) => {
    return (80-age) * (365 * amountPerDay)
}

console.log('You will need ' + calculateSupply(21, 20) + 
            ' to last you until the ripe old age of 80')

console.log('You will need ' + calculateSupply(50, 15) + 
            ' to last you until the ripe old age of 80')

console.log('You will need ' + calculateSupply(60, 25) + 
            ' to last you until the ripe old age of 80')


/*Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.

outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

Call that function 3 times with 3 different values for the arguments.
*/
const tellFortune = (numberOfChildren, partnerName, geographicLocation, jobTitle) =>{
    console.log('The number of children i have is ' + numberOfChildren + 
                ', My partners name is ' + partnerName + ', We live in ' + geographicLocation
                + ', My job is ' + jobTitle)
}

tellFortune(4, 'Didi', 'Rotterdam', 'Soccer Player')
tellFortune(8, 'Henk', 'Groningen', 'nurse')
tellFortune(200, 'Lies', 'London', 'pianist')

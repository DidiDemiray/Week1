alert('Welcome');

let name= prompt('What is your name?');
alert('Hello ' + name +' !!!!!');

let play= confirm('You want to play a game?');
alert('LETS PLAY!!');

let lowerLimit= prompt('Enter lower lowerLimit')
let upperLimit= prompt('Enter upper limit...')
let randomnumber= Math.round(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
console.log(randomnumber);

let number= prompt('Guess a number, between ' + lowerLimit + ' and ' + upperLimit);
let attempts= 1;



// prompt('Kies een getal tussen de' + getRandomInt());
// prompt('en de..' + getRandomInt());
// let randomnumber = Math.random

while(number!= randomnumber && attempts<5 ){
    prompt('Too bad, Guess again!')
    attempts
}
 if (number === randomnumber) {
     alert('ALRIGHTTT!!! Thats correct.....!!')
 } else {
     alert('There are no attempts left :/')
 }

 alert('Thanks for playing! ')

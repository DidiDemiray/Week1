/*
Create an object to store the following information about your favorite movie: 
title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: 
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

let movie={
    title:'Harry Potter',
    duration: 120 ,
    stars: 'Harry and Hermeline',

}

const movieDescription = (title, duration, stars) =>
console.log('Puff ' + title + ' lasts for ' + duration + " minutes. " + 'The Stars are ' + stars + '.')

movieDescription('Harry Potter', 120 , 'Harry and Hermeline')


// //Opdracht1
// const button1 = document.getElementsById('mybutton');



// button1.addEventListener('click', function(){
//     alert('Ik zei: klik niet op mij...')
// })

// // Opdracht 2

//  const button2 = document.getElementById('buttonnew');

// const lichaamkleur = document.querySelector('.blue.background');

// button1.addEventListener('click', function(){
//     lichaamkleur.classList.add('red-background')

// })



// // document.body('blue-background');
// //     // document.body.classList.add('red-background');
// //     //let element = document.getElementsByClassName('blue-background')
// //     document.body.classlist.add('red-background');

const button = document.getElementById("mybutton");
const roodknop = document.getElementById("knoprood");
const lichaam = document.querySelector(".blue-background");

//opdracht2

button.addEventListener("click", function(){
    alert ("Ik zei: Klik niet op mij!!");

});

/*
//opdracht3


*/

//opdracht4
roodknop.addEventListener("click", function(){
   lichaam.classList.toggle("red-background");
});
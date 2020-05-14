
const menu = document.querySelector('#witknop');

menu.addEventListener('click', function(e){
    document.getElementById('body').className = 'achtergrondwit';
})

const roodknop = document.querySelector("#roodknop");


roodknop.addEventListener('click', function(e){
    document.getElementById('body').className = 'achtergrondrood';
    document.querySelector('#tekst').innerHTML = 'ROOD';
    menu.classList.replace('dropdown','dropdown-content-2');
})

const blauwknop = document.querySelector('#blauwknop');

blauwknop.addEventListener('click', function(e){
    document.getElementById('body').className = 'achtergrondblauw';
    document.querySelector('#tekst').innerHTML = 'BLAUW';
})

const groenknop = document.querySelector('#groenknop');

groenknop.addEventListener('click', function(e){
    document.getElementById ('body').className = 'achtergrondgroen';
    document.querySelector('#tekst').innerHTML = 'GROEN';
})

const geelknop = document.querySelector('#geelknop');

geelknop.addEventListener('click', function(e){
    document.getElementById('body').className = 'achtergrondgeel';
    document.querySelector('#tekst').innerHTML = 'GEEL';
})

const paarsknop = document.querySelector('#paarsknop');

paarsknop.addEventListener('click', function(e){
    document.getElementById('body').className = 'achtergrondpaars';
    document.querySelector('#tekst').innerHTML = 'PAARS';
})

//


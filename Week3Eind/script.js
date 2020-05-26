//GET

const apiURL = 'https://wincacademydatabase.firebaseio.com/Didi/tasks.json'
const getData = async() => {
    try{
        const res = await fetch(apiURL, {method: 'GET'});
        const data = await res.json();
        let Tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }));
        return Tasks;
    } catch (error) {
        console.log(error);
    }
};

//Add

getData().then((Tasks) => {
    console.log(Tasks);
for ( let i = 0; i < Tasks; i++) {
        let ul = document.getElementById('lijstUl');
        let li = document.createElement('li');
        let prullenbak = document.createElement('button');
        prullenbak.innerHTML = `<img id="trashcan" src="2020-05-25 (2).png">`;
        li.innerHTML = Tasks[i].description;
        li.className = (Tasks[i].id);
        ul.appendChild(li);
        li.appendChild(prullenbak)
}})

//POST

document.getElementById('Add').addEventListener('click', (e) => {
    e.preventDefault();

    const newTask = document.getElementById('inputveld').value
    const data = {'description': newTask, 'done' :false};
    fetch('https://wincacademydatabase.firebaseio.com/Didi/tasks.json', {method: 'POST', headers: {
        'Content-Type' : 'application/json',}, 
        body: JSON.stringify(data),
    })
    let ul = document.getElementById('lijstUl');
    let li = document.createElement('li');
    li.innerHTML = `${data.description}<button id='verwijderButton'><img id="trashcan" src="2020-05-25 (2).png"></button>`;
    ul.appendChild(li);
})


//Delete
const deleteTasks = () => {
    const id = document.Tasks.id;
    console.log(id);
}


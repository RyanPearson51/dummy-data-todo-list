let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let ol = document.getElementById('todo-list');

    for (let i = 0; i < arrayOfTodos.length; i++){
        
        let li = document.createElement('li');

        let title = arrayOfTodos[i].title;

        let titleText = document.createTextNode(title);

        li.appendChild(titleText);

        ol.appendChild(li);
}
}


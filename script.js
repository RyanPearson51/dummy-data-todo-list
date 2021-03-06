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
let filterBy = document.getElementById('filterBy')

const filterTodos = () => {
    document.getElementById("todo-list").innerHTML = "";
    console.log('filterBy:', filterBy.value)
    let filteredTodosArray = arrayOfTodos.filter(todo => {
        console.log('todo:', todo)
        return todo.userId == filterBy.value
    })
    console.log('filteredTodosArray:', filteredTodosArray)
    populateTodos(filteredTodosArray)
}


const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = (data) => {
    console.log('Before populateTodos data:', data)
    //remove original li's
    if (typeof data == "undefined"){
        data = arrayOfTodos
    }

    console.log('After If populateTodos data:', data)

    let ol = document.getElementById('todo-list');

    data.forEach(todo => {
        let li = document.createElement('li')
        let text = document.createTextNode(todo.title)
        li.appendChild(text)
        ol.appendChild(li)
    })
}

const completedTodos = () => {
    document.getElementById("todo-list").innerHTML = "";
    let completedTodosArray = arrayOfTodos.filter(done => done.completed ==true);
    
    console.log('completedTodosArray:', completedTodosArray)
    
    populateTodos(completedTodosArray)
}

const incompleteTodos = () => {
    document.getElementById("todo-list").innerHTML = "";
    let incompleteTodosArray = arrayOfTodos.filter(done => done.completed ==false);
    
    console.log('incompleteTodosArray:', incompleteTodosArray)
    
    populateTodos(incompleteTodosArray)
}


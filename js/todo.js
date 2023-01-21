const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-List')
let toDos = [];
const TODOS_KEY = 'todo'

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delete_li (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveToDos();
    
}

function paintToDo (newTodo){
    const toDoList_li = document.createElement('li')
    const li_span = document.createElement('span')
    const li_button = document.createElement('button')
    toDoList.appendChild(toDoList_li)
    toDoList_li.appendChild(li_span)
    toDoList_li.appendChild(li_button)
    li_span.innerText=newTodo.text;
    toDoList_li.id=newTodo.id;
    li_button.innerText='Delete';

    li_button.addEventListener('click', delete_li)
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    let newTodo = toDoInput.value
    
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    paintToDo(newTodoObj)
    toDoInput.value = '';
    toDos.push(newTodoObj)
    saveToDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}

// if(localStorage.getItem!==null){
//     const storage_li = localStorage.getItem('TODO')
//     make_todo_li(storage_li)
// }
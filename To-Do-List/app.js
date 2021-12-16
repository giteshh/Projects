//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event){

    event.preventDefault();

    if( todoInput.value === ''){
        alert("Plz add a task");
    }else{
       
    
   
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // console.log('submit');

    //checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "Check";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // console.log(e.target);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //append to list li
    todoList.appendChild(todoDiv);

    todoInput.value = '';
    }
}

function deleteCheck(e){
    console.log(e.target);
    const item = e.target;

    // delete item
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    // checked
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("Completed");
    }
}
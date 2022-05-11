//Selectors
// Declare two more variables the add button, the input field and the List of todos.
let btnAdd = document.querySelector('#js-todo-create');
let input = document.querySelector('#js-todo-create-text');
let todoList = document.querySelector('#js-todo-entries');
//Event Listeners
btnAdd.addEventListener('click', addTodo);

//Fuctions

// addTodo() fuction, is recieving the input from the input field and is adding the input to the array of todos. 
// Than it is calling the displayTodoList to render the Todo List for the user.
function addTodo(event){
    let todo = document.createElement('div');
    todo.classList.add('todo');
    let todoItem = document.createElement('li');
    todoItem.innerText = input.value;
    todo.appendChild(todoItem);

    //Completed Button
    let completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check"></i>';
    completedButton.classList.add('js-todo-entry-done');
    todo.appendChild(completedButton);
    completedButton.addEventListener('click',done);
    input.value ='';

    //Remove Button
    let removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fa fa-trash"></i>';
    removeButton.classList.add('js-todo-entry-remove');
    todo.appendChild(removeButton);
    removeButton.addEventListener('click',remove);

    //Append to List
    todoList.appendChild(todo);  
} 
function remove(event) {
        todoList.removeChild(event.target.parentElement);
}
function done(event){
        todo = event.target.parentElement;
        todo.classList.toggle('completed');
}

    
  






   
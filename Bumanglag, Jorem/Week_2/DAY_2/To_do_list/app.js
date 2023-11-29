//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event listener
todoList.addEventListener("click", deleteChecked);
filterOption.addEventListener("click", filterTodo);

let addTodo = () => {
    //prevent form from submitting
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="bi bi-check-square-fill"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);


    //vallidation if txtfield is empty
    if(todoInput.value == "")
    {
        alert("Input text first!")
    }else{
        //append to list
        todoList.appendChild(todoDiv);
        todoInput.value ="";
    }
}

//delete item from list
function deleteChecked(e){
    const item = e.target;

    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//filter list
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){

            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}


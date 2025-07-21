// Add item in todo list
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const listItem = document.createElement("li");
        listItem.textContent = todoText;
        listItem.classList.add("todo-item");
        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = "";

        // Create a delete button for each todo item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);

        // create a edit button for each todo item
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        listItem.appendChild(editButton);
        editButton.addEventListener("click", function () {
            const newTodoText = prompt("Edit your todo item:", todoText);
            if (newTodoText) {
                listItem.firstChild.textContent = newTodoText;
            }
        });

    } else {
        alert("Please enter a todo item.");
    }
});
/*//create  a todo list app complete of string your todos in localstorage add afteer to create delete abd access of the todo
//try to mode as gon as possible


//sabse pahle contiaenr ko lao grt elementbyid se
// text enter == addtask{
    console.log(addtask)
}


*/
// Necessary elements ko select karo
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Page load hote hi saved tasks dikhane ke liye
document.addEventListener("DOMContentLoaded", loadTasks);

// Add Task button click hone par naya task add hoga
addTaskButton.addEventListener("click", function () {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = ""; // Input clear karna
});

// List me task add karne ka function
function addTaskToList(taskText) {
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);

    // Delete button ka kaam
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    });
}

// Local Storage me task save karna
function saveTaskToLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    
    // Duplicate task add na ho iske liye check karna
    if (!tasks.includes(taskText)) {
        tasks.push(taskText);
        localStorage.setItem("todos", JSON.stringify(tasks));
    }
}

// Local Storage se tasks lana
function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem("todos");
    return tasks ? JSON.parse(tasks) : [];
}

// Local Storage se tasks load karna
function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => {
        addTaskToList(task);
    });
}

// Local Storage se task delete karna
function removeTaskFromLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    let updatedTasks = tasks.filter((task) => task !== taskText);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
}

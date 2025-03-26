/*
~ Necessary elements ko select karo
//Page load hote hi saved tasks dikhane ke liye
~ Add Task button click hone par naya task add hoga
~ Input clear karna
~ List me task add karne ka function
~ Delete button ka kaam
~ Local Storage me task save karna
~ Duplicate task add na ho iske liye check karna
~ Local Storage se tasks lana
~ Local Storage se tasks load karna
~ Local Storage se task delete karna
                                             
 BAS KAAM KHATAM ITS VERY EASY
 */

//~ Necessary elements ko select karo
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

//Page load hote hi saved tasks dikhane ke liye
document.addEventListener("DOMContentLoaded", loadTasks);

//~ Add Task button click hone par naya task add hoga
addTaskButton.addEventListener("click", function () {
  if (taskInput === "") {
    console.log("This is not a Valid Input");
  }
  addTaskToList(tasktext);
  saveTaskToLocalStorage(tasktext);
  taskInput.value(); //~ Input clear karna

});

//~ List me task add karne ka function

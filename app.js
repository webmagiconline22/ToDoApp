// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the relevant elements
    var taskInput = document.getElementById("taskInput");
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskList = document.getElementById("taskList");

    // Function to add a task to the list
    function addTask() {
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            var listItem = document.createElement("li");
            var textNode = document.createTextNode(taskText);
            listItem.appendChild(textNode);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    // Event listener for the "Add Task" button
    addTaskBtn.addEventListener("click", function() {
        addTask();
    });

    // Event listener for the Enter key press
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Event delegation for removing tasks
    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });
});

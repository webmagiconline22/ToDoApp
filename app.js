document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskList = document.getElementById("taskList");

    function addTask() {
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            var listItem = document.createElement("li");
            var textNode = document.createTextNode(taskText);
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            listItem.appendChild(checkbox);
            listItem.appendChild(textNode);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    addTaskBtn.addEventListener("click", function() {
        addTask();
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
            var listItem = event.target.parentNode;
            listItem.classList.toggle("completed");
        }
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const urgencyInput = document.getElementById("urgencyInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

   

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const priority = priorityInput.value;
        const urgency = urgencyInput.value;
        const deadline = deadlineInput.value;

        

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "task-item";

            // Create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "task-checkbox";
            taskItem.appendChild(checkbox);

            // Set class based on priority
            if (priority === "high") {
                taskItem.classList.add("high-priority");
            } else if (priority === "medium") {
                taskItem.classList.add("medium-priority");
            } else {
                taskItem.classList.add("low-priority");
            }

            // Task text
            const taskTextElement = document.createElement("span");
            taskTextElement.className = "task-text";
            taskTextElement.textContent = taskText;
            taskItem.appendChild(taskTextElement);

            // Create urgency element
            const urgencyElement = document.createElement("span");
            urgencyElement.className = "task-urgency";
            urgencyElement.textContent = "Urgency: " + urgency;
            taskItem.appendChild(urgencyElement);

            // Create deadline element
            const deadlineElement = document.createElement("span");
            deadlineElement.className = "task-deadline";
            deadlineElement.textContent = "Deadline: " + deadline;
            taskItem.appendChild(deadlineElement);

            // Create delete button with icon
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.innerHTML = "&#128465;"; // Trash can icon
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
              
            
            });

            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
            taskInput.value = "";
            
        }
    });
});
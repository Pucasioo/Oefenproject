document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskTitle = document.getElementById('taskTitle').value;
    var taskDate = document.getElementById('taskDate').value;
    var taskDescription = document.getElementById('taskDescription').value;

    var taskItem = document.createElement('li');
    taskItem.textContent = taskTitle + " - " + taskDate + ": " + taskDescription;

    document.getElementById('taskList').appendChild(taskItem);

    document.getElementById('taskForm').reset();
});
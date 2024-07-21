// Add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

// Mark task as completed
document.getElementById('taskList').addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});

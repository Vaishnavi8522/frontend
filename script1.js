const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="completeBtn">Complete</button>
            <button class="removeBtn">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Task List Event Handling
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('completeBtn')) {
        e.target.parentElement.querySelector('span').classList.toggle('completed');
    } else if (e.target.classList.contains('removeBtn')) {
        e.target.parentElement.remove();
    }
});

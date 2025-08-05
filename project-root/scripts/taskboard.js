/* scripts/taskboard.js */

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = [];

// Load tasks from localStorage if any
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = [];
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks to the DOM
function renderTasks() {
  taskList.innerHTML = ''; // Clear existing
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.setAttribute('aria-label', `Delete task: ${task}`);
    deleteBtn.addEventListener('click', () => {
      deleteTask(index);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add new task if valid
function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask === '') {
    alert('Please enter a task.');
    return;
  }
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

// Delete task by index
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Setup event listeners
function setup() {
  loadTasks();
  renderTasks();
  addTaskBtn.addEventListener('click', addTask);

  // Allow Enter key to add task
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
}

document.addEventListener('DOMContentLoaded', setup);
// Footer date updates
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

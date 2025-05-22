// Get the form, input box, task list, and buttons
const form = document.querySelector('form');
const input = document.getElementById('userInput');
const list = document.querySelector('ul');
const reloadButton = document.getElementById('reload');
const clearButton = document.getElementById('clear');

// Function to make a unique ID
function makeId() {
  return 'task-' + crypto.randomUUID().replace(/-/g, '');
}

// Function to create a list item with delete button
function createListItem(task) {
  const li = document.createElement('li');
  li.id = task.id;
  li.className = 'border-b p-2 flex justify-between items-center';

  const span = document.createElement('span');
  span.textContent = task.content;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';

  // When delete is clicked
  deleteButton.addEventListener('click', function () {
    console.log('Delete clicked for:', task.id);

    // Remove from the screen
    li.remove();

    // Remove from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let updatedTasks = tasks.filter(item => item.id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  list.insertBefore(li, list.firstChild);
}

// Load tasks from storage when page opens
window.addEventListener('load', function () {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(createListItem);
});

// When the form is submitted
form.addEventListener('submit', function (event) {
  event.preventDefault();

  let text = input.value.trim();

  if (text !== '') {
    let newTask = {
      id: makeId(),
      content: text
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.unshift(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createListItem(newTask);
    input.value = '';
  }
});

// When reload button is clicked
reloadButton.addEventListener('click', function () {
  window.location.reload();
});

// When clear button is clicked
clearButton.addEventListener('click', function () {
  // Get current tasks before clearing
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // List all task IDs (or contents)
  console.log('Clear clicked. The following tasks were deleted:');
  tasks.forEach(task => {
    console.log(`- ${task.id}: ${task.content}`);
  });

  // Now clear and reload
  // With a 2 second timeout
  setTimeout(() => {
      localStorage.clear();
      window.location.reload();
  }, 2000);
});

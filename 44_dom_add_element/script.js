// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Selecting the DOM Elements
const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const consoleBtn = document.getElementById("console-btn");
const itemList = document.getElementById("item-list");
const listItem = document.querySelector(".list-item");

/* Functions */
// Add Content:
const addTask = function(event) {
  const newLiItem = document.createElement('li');
  newLiItem.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  newLiItem.classList.add('list-item');

  itemList.appendChild(newLiItem);
};
const displayAlert = (event) => {
  alert("Wow, where does this go?!?")
};
const consoleMessage = (event) => {
  console.log("The third button was clicked. Great work, Mr. button presser!");
}

// Eventlisteners
addBtn.addEventListener('click', () => {
    addTask();
});
alertBtn.addEventListener('click', () => {
    displayAlert()
});
consoleBtn.addEventListener('click', () => {
    consoleMessage()
});
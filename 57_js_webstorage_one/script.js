// Get the form, input field, list, and reload button from the page
const form = document.querySelector('form');
const input = document.getElementById('userInput');
const list = document.querySelector('ul');
const reloadButton = document.getElementById('reload');
const clearButton = document.getElementById('clear');

// Function to show quotes on the page
function showQuotes(quotes) {
  list.innerHTML = ''; // Clear current list
  for (let i = 0; i < quotes.length; i++) {
    const li = document.createElement('li');
    li.textContent = quotes[i];
    li.className = 'border-b p-2';
    list.appendChild(li);
  }
}

// When the page loads, get saved quotes and show them
window.addEventListener('load', function () {
  let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
  showQuotes(quotes);
});

// When the form is submitted
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop the form from reloading the page

  const newQuote = input.value.trim(); // Get the text, trim it

  if (newQuote !== '') {
    let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    quotes.unshift(newQuote); // Add new quote at the beginning
    localStorage.setItem('quotes', JSON.stringify(quotes)); // Save quotes

    showQuotes(quotes); // Show updated quotes
    input.value = ''; // Clear the input field
  }
});

// Reload the page when the reload button is clicked
reloadButton.addEventListener('click', function () {
  window.location.reload();
});

// Clear the locatStorage
clearButton.addEventListener('click', function () {
  localStorage.clear();
  window.location.reload(); // clear the list items on the page
})
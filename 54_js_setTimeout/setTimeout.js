/* function greet1() {
    console.log('Hello, World!');
}

setTimeout(greet1, 2000); // 2 seconds timeOut and runs each time

function greet2() {
    console.log('Hallo, Wereld!');
}

setInterval(greet2, 1000); // 1 seconds wait time and executes it once


setTimeout(() => console.log('First'), 0);
setTimeout(() => console.log('Second'), 3);
console.log('Third'); */

/* Output: Third, First, Second */

/* Instructions:
    Use setTimeout to schedule the creation of a promotion message after 3 seconds.
    Create a new DOM element (e.g., a <div>) for the promotion message.
    Add some text to the promotion message, like “Special Offer: Get 20% off your next purchase!”.
    Use Tailwind CSS to style the message with a background color, padding, rounded corners, and centered text.
    Append the new element to the message-container div.
*/

setTimeout(() => {
  const message = document.createElement('div');
  message.textContent = 'Special Offer: Get 20% off your next purchase!';
  message.className = 'bg-orange-200 text-orange-900 p-4 rounded-lg shadow-md text-center mx-auto max-w-md';  
  const container = document.getElementById('message-container');
  if (container) {
    container.appendChild(message);
  }
}, 3000);

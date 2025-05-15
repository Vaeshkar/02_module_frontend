// Adding the DOM elements
const contactForm = document.querySelector('#contact-form');
const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const contactMessage = document.querySelector('#message');
const contactButton = document.querySelector('button');
const contactOutput = document.querySelector('#output');

// Functions


// Listeners
// Forms are very special

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // We want to prevent the form from actually trying to navigate
  // We can access the form elements!
  console.dir(e.target.elements);
  // And if the inputs have an id or name, we can access them by it
  if (
    !e.target.elements.name.value ||
    !e.target.elements.email.value ||
    !e.target.elements.message.value
  ) {
    contactOutput.textContent = "⚠️ Please fill all the fields!";
    contactOutput.style.backgroundColor = "#dc2626"; // Tailwind red-600
    contactOutput.style.color = "#fff";
    setTimeout(() => {
        contactOutput.textContent = "";
        contactOutput.style.backgroundColor = "transparent";
    }, 3000);
  } else {
    console.log(
      e.target.elements.name.value,
      e.target.elements.email.value,
      e.target.elements.message.value,
    );
    contactOutput.textContent = "✅ Message sent!";
    contactOutput.style.backgroundColor = "#16a34a"; // Tailwind green-600
    setTimeout(() => {
        contactOutput.textContent = "";
        contactOutput.style.backgroundColor = "transparent";
    }, 3000);
  }
});


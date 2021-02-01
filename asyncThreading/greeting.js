// Store references to our form, input element, and buttons
const form = document.querySelector('form');
const nameInput = document.getElementById('name');


const cancelBtn = document.querySelector('.cancel');

// Disable the cancel button for now so it can't do anything if
// a greeting is not already in progress
cancelBtn.disabled = true;

// Define our greeting function
function sayHi(who) {
  alert('Hello ' + who + '!');
  // Disable the cancel button one greeting has been shown
  cancelBtn.disabled = true;
}

// Create a global variable that will act as our setTimeout reference
let myGreeting;

// Add event listener to our form to start the greeting
form.addEventListener('submit', (e) => {
  // Prevent form submission; we don't want this
  e.preventDefault();
  // Enable the cancel button
  cancelBtn.disabled = false;
  // set the timeout to greet the name entered in the input
  myGreeting = setTimeout(sayHi, 5000, nameInput.value);
});

// Add event listener to the cancel button to cancel the greeting
cancelBtn.addEventListener('click', () => {
  clearTimeout(myGreeting);
  // Disable the cancel button again
  cancelBtn.disabled = true;
  console.log('Greeting cancelled!');
});
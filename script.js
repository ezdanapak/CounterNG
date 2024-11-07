// Get the counter value from local storage, or initialize it to 0
let counter = localStorage.getItem('counter') || 0;

// Update the counter display
document.getElementById('counter-value').textContent = counter;

// Increment the counter and update local storage
function incrementCounter() {
  counter++;
  localStorage.setItem('counter', counter);
  document.getElementById('counter-value').textContent = counter;
}

// Trigger the increment function on a button click or other event
document.getElementById('increment-button').addEventListener('click', incrementCounter);
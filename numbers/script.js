// JavaScript code to handle the Number Guessing Game logic.
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get the user input, message element, and dark mode button
const userGuessInput = document.getElementById('userGuess');
const messageElement = document.getElementById('message');
const darkModeButton = document.getElementById('darkModeButton');

// Function to handle the guess button click event
function handleGuess() {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = 'The number has to be between 1 and 100!';
  } else {
    attempts++;

    if (userGuess === secretNumber) {
      messageElement.textContent = `Congratulations! The secret number was ${secretNumber}! You took ${attempts} tries to find it.`;
      disableInputAndButton();
    } else if (userGuess < secretNumber) {
      messageElement.textContent = 'The number is HIGHER than ${userGuess}!';
    } else {
      messageElement.textContent = 'The number is LOWER than ${userGuess}!';
    }
  }

  userGuessInput.value = ''; // Clear the input field after each guess
}

// Function to disable the input and guess button after the correct guess
function disableInputAndButton() {
  userGuessInput.disabled = true;
  document.getElementById('guessButton').disabled = true;
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Attach the handleGuess function to the guess button's click event
document.getElementById('guessButton').addEventListener('click', handleGuess);

// Enable "Enter" key to make a guess
userGuessInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleGuess();
  }
});

// Attach the toggleDarkMode function to the dark mode button's click event
darkModeButton.addEventListener('click', toggleDarkMode);

// So basically, this is the source code. Hello, world!

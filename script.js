// Get references to the input box and display area
const inputBox = document.getElementById('inputBox');
const displayArea = document.getElementById('displayArea');

// Add an event listener to capture input when the user types
inputBox.addEventListener('input', function() {
    // Get the value of the input
    const userInput = inputBox.value;

    // Display the typed input
    displayArea.textContent = userInput;
});

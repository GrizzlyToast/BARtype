// Get references
const inputBox = document.getElementById("inputBox");
const displayArea = document.getElementById("displayArea");
const generateText = document.getElementById("generate-txt-btn");
const reset = document.getElementById("resetButton");
const sampleText = document.getElementById("sample-generated-text");
const sample = sampleText.textContent;
keyIndex = -1;

// Add an event listener to capture input when the user types
inputBox.addEventListener("input", function () {
  // Get the value of the input
  const userInput = inputBox.value;

  // Display the typed input
  displayArea.textContent = userInput;
});

// //Add an event listener to fetch new text from api
// generateText.addEventListener("click", fetchQuote);

reset.addEventListener("click", resetText);

function resetText() {
  inputBox.value = "";
  displayArea.textContent = "";
}

// //Api Call Attempt
// async function fetchQuote() {
//   try {
//     // Using a CORS proxy to route your request through a Server
//     const response = await fetch(
//       "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/quotes"
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     // Fetch the text content of the first element from an array of quotes
//     document.getElementById("sample-generated-text").textContent = data[0].q;
//   } catch (error) {
//     console.error("Error fetching quote:", error);
//     document.getElementById("sample-generated-text").textContent =
//       "Failed to fetch a quote. Please try again.";
//   }
// }

// demo text
generateText.addEventListener("click", function () {
  sampleText.textContent = "Hello World";
});

function checkMistake(letter) {
  if (letter == "Backspace") {
    if (keyIndex != -1) {
      keyIndex--;
    }
  } else {
    keyIndex++;
  }

  if (keyIndex > -1 && sample[keyIndex] != letter) {
    return true;
  }
  return false;
}

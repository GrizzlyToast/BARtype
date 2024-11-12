// Get references
const inputBox = document.getElementById("inputBox");
const displayArea = document.getElementById("displayArea");
const generateText = document.getElementById("generate-txt-btn");
const reset = document.getElementById("resetButton");
const sampleText = document.getElementById("sample-generated-text");
const sample = sampleText.textContent;
keyIndex = 0;

// Add an event listener to capture input when the user types
inputBox.addEventListener("input", function (e) {
  const text = e.target.value;
  let formattedText = "";

  // Iterate through each character in the input text
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // Mark mistakes red
    if (sample[i] !== char) {
      formattedText += `<span class="wrong-letter">${char}</span>`;
    } else {
      formattedText += char;
    }
  }

  // Update the display area with the formatted text
  document.getElementById("displayArea").innerHTML = formattedText;
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

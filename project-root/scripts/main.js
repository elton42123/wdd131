/* scripts/main.js */

// Array of inspirational quotes
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
];

// Function to get a random quote
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Function to display quote on page
function displayQuote() {
  const quoteElement = document.getElementById('dailyQuote');
  if (quoteElement) {
    quoteElement.textContent = `"${getRandomQuote()}"`;
  }
}

// Run on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  displayQuote();
});
// Footer date updates
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

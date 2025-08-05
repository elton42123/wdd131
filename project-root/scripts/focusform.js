/* scripts/focusform.js */

const focusForm = document.getElementById('focusForm');
const focusInput = document.getElementById('focusGoal');
const savedGoalDiv = document.getElementById('savedGoal');

// Display saved goal on page load
function displaySavedGoal() {
  const savedGoal = localStorage.getItem('focusGoal');
  if (savedGoal) {
    savedGoalDiv.textContent = `Your focus goal today: "${savedGoal}"`;
  } else {
    savedGoalDiv.textContent = '';
  }
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent actual form submission
  const goal = focusInput.value.trim();
  if (goal === '') {
    alert('Please enter your focus goal.');
    return;
  }
  localStorage.setItem('focusGoal', goal);
  displaySavedGoal();
  focusInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  displaySavedGoal();
  focusForm.addEventListener('submit', handleFormSubmit);
});
// Footer date updates
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

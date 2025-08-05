window.addEventListener("DOMContentLoaded", () => {
  const countDisplay = document.getElementById("submissionCount");
  let submissionCount = Number(localStorage.getItem("submissionCount")) || 0;

  submissionCount++;
  localStorage.setItem("submissionCount", submissionCount);
  countDisplay.textContent = submissionCount;
});
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chillDisplay = document.getElementById("chill");

if (temp <= 10 && wind > 4.8) {
  chillDisplay.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  chillDisplay.textContent = "N/A";
}

// Footer date logic
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

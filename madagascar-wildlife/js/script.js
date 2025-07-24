// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Simple greeting with localStorage
  const username = localStorage.getItem("visitorName");

  if (!username) {
    const name = prompt("Welcome! What’s your name?");
    if (name) {
      localStorage.setItem("visitorName", name);
      alert(`Hi, ${name}! Enjoy exploring Madagascar's wildlife.`);
    }
  } else {
    console.log(`Returning visitor: ${username}`);
  }

  // Wildlife cards data
  const animals = [
    {
      name: "Ring-tailed Lemur",
      image: "images/lemur.webp",
      description: "Known for its striped tail and social behavior."
    },
    {
      name: "Panther Chameleon",
      image: "images/chameleon.webp",
      description: "A colorful chameleon that can change shades dramatically."
    },
    {
      name: "Aye-aye",
      image: "images/ayeaye.webp",
      description: "A nocturnal lemur with large eyes and a long middle finger."
    },
    {
      name: "Fossa",
      image: "images/fossa.webp",
      description: "Madagascar’s top predator, resembling a small cougar."
    }
  ];

  // Inject animal cards
  const cardContainer = document.getElementById("animal-cards");

  if (cardContainer) {
    animals.forEach(animal => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}" loading="lazy" />
        <h3>${animal.name}</h3>
        <p>${animal.description}</p>
      `;
      cardContainer.appendChild(card);
    });
  }

  // Pledge form handler
  const pledgeForm = document.getElementById("pledge-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  if (pledgeForm) {
    pledgeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const pledge = document.getElementById("pledge").value.trim();

      if (name && pledge) {
        localStorage.setItem("pledgeName", name);
        localStorage.setItem("pledgeText", pledge);

        thankYouMessage.textContent = `Thank you, ${name}, for pledging to: "${pledge}" 🌱`;
        thankYouMessage.classList.remove("hidden");

        pledgeForm.reset();
      }
    });
  }
});

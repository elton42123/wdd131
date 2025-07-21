// temples.js

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.querySelector('nav ul');
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

// Toggle navigation menu and update aria-expanded attribute for accessibility
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!isExpanded));
});

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();

// Set last modified date in footer
lastModifiedSpan.textContent = document.lastModified;

// Reveal elements on scroll (for elements with class "reveal")
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});

// Initialize AOS library
AOS.init({
  once: true, // animation triggers once
  duration: 900,
});

// Typewriter effect setup
const phrases = [
  "Creative Front-End Developer",
  "UI/UX Designer & Developer",
  "Passionate Problem Solver"
];

const typewriter = document.getElementById('typewriter');
const cursor = document.querySelector('.cursor');

let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let typing = true;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (typing) {
    typewriter.textContent = currentPhrase.slice(0, currentLetterIndex + 1);
    currentLetterIndex++;
    if (currentLetterIndex === currentPhrase.length) {
      typing = false;
      setTimeout(type, 1700); // pause at full phrase
    } else {
      setTimeout(type, 120);
    }
  } else {
    typewriter.textContent = currentPhrase.slice(0, currentLetterIndex - 1);
    currentLetterIndex--;
    if (currentLetterIndex === 0) {
      typing = true;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 600);
    } else {
      setTimeout(type, 80);
    }
  }
}

// Blink cursor effect
setInterval(() => {
  cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

type();

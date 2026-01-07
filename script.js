/* =========================
   HERO BUTTON → CONTACT
========================= */
const heroButton = document.querySelector(".hero button");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
}

/* =========================
   DARK MODE + ICON + SYSTEM PREF
========================= */
const darkToggle = document.getElementById("darkToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply saved or system theme on load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark");
  if (darkToggle) darkToggle.textContent = "☀";
} else {
  if (darkToggle) darkToggle.textContent = "🌙";
}

// Toggle on click
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    darkToggle.textContent = isDark ? "☀" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* =========================
   FADE-UP ANIMATION
========================= */
const fadeElements = document.querySelectorAll(".fade-up");

const revealOnScroll = () => {
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Typing Effect for Hero Title ---
    const typingElement = document.getElementById("typing-text");
    const phrases = [
        "Python Programming",
        "Algorithmic Thinking",
        "Data Science Foundations"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElement) return;
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 2000; // Pause at end of sentence
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400; // Pause before typing next word
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // --- 2. Interactive Project Filtering ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // --- 3. Dark / Light Theme Toggle ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Check local storage or preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeToggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";
    }

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = "light";

        if (currentTheme === "light") {
            newTheme = "dark";
            themeToggleBtn.textContent = "🌙";
        } else {
            themeToggleBtn.textContent = "☀️";
        }

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});
// filepath: /personal-website/personal-website/scripts/script.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight; // Get the fixed header height

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight; // Adjust for header height
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Set initial icon based on current mode
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "🌞";
    } else {
        themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        // Set icon based on new mode
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "🌞"; // Show sun in dark mode (to switch to light)
        } else {
            themeToggle.textContent = "🌙"; // Show moon in light mode (to switch to dark)
        }
    });
});

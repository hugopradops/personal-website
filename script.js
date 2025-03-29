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

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode"); // Apply dark mode to header
        themeToggle.textContent = body.classList.contains("dark-mode") ? "🌙" : "🌞"; // Toggle emoji
    });
});

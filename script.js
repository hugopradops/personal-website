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

    // Add extra padding to sections to prevent overlap
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.scrollMarginTop = `${headerHeight}px`;
    });
});
// JavaScript for Intersection Observer and cascade animation
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section'); // Select all sections

    // Intersection Observer callback function
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger animation when 20% of the section is visible
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add "visible" class to trigger animation
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

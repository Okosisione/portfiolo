// Select the button
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex'; // Show the button
    } else {
        scrollToTopButton.style.display = 'none'; // Hide the button
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
});
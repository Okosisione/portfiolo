const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const firstSection = document.getElementById('first');

// Toggle Navbar Visibility
hamburger.addEventListener('click', () => {
    const isMobile = window.innerWidth <= 768; // Check if the screen width is mobile
    navbar.classList.toggle('active');

    if (isMobile) {
        if (navbar.classList.contains('active')) {
            firstSection.style.marginTop = `${navbar.scrollHeight}px`;
        } else {
            firstSection.style.marginTop = '0';
        }
    }
});

// Ensure proper layout on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active'); // Close navbar
        firstSection.style.marginTop = '0'; // Reset margin on larger screens
    }
});

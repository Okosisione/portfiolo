// Select the toggle button and body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for user's preference
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'light') {
    body.classList.add('light-mode');
} else if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', () => {
    // Toggle between light and dark themes
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light'); // Save user's preference
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Save user's preference
    }
});
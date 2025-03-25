// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Get the button element
const toggleButton = document.getElementById('toggle-btn');

// Function to toggle light/dark mode
toggleButton.addEventListener('click', () => {
    // Check if dark mode is currently applied
    if (document.body.style.backgroundColor === 'rgb(18, 18, 18)') {
        // Switch to light mode
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    } else {
        // Switch to dark mode
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#fff';
    }
});


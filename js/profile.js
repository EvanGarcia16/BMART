document.addEventListener("DOMContentLoaded", function() {
    // Load the footer
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            setActiveIcon(); // Set the active class after footer is loaded
        });

    // Popup functionality
    const termsLink = document.querySelector('.terms-link');
    const popup = document.getElementById('terms-popup');
    const closeBtn = document.querySelector('.popup-content .close-btn');

    if (termsLink) {
        termsLink.addEventListener('click', function(event) {
            event.preventDefault();
            popup.style.display = 'flex'; // Show the popup
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none'; // Hide the popup
        });
    }

    // Close the popup if the user clicks outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Function to set the active icon
function setActiveIcon() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.icon-button');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Load the footer
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            setActiveIcon(); // Set the active class after footer is loaded
        });

    // Popup functionality for Terms of Service
    const termsLink = document.querySelector('.terms-link');
    const termsPopup = document.getElementById('terms-popup');
    const closeTermsBtn = document.querySelector('#terms-popup .close-btn');

    if (termsLink) {
        termsLink.addEventListener('click', function(event) {
            event.preventDefault();
            termsPopup.style.display = 'flex'; // Show the Terms popup
        });
    }

    if (closeTermsBtn) {
        closeTermsBtn.addEventListener('click', function() {
            termsPopup.style.display = 'none'; // Hide the Terms popup
        });
    }

    // Popup functionality for Privacy Policy
    const privacyLink = document.querySelector('.privacy-link');
    const privacyPopup = document.getElementById('privacy-popup');
    const closePrivacyBtn = document.querySelector('#privacy-popup .close-btn');

    if (privacyLink) {
        privacyLink.addEventListener('click', function(event) {
            event.preventDefault();
            privacyPopup.style.display = 'flex'; // Show the Privacy popup
        });
    }

    if (closePrivacyBtn) {
        closePrivacyBtn.addEventListener('click', function() {
            privacyPopup.style.display = 'none'; // Hide the Privacy popup
        });
    }

    // Close the popup if the user clicks outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === termsPopup) {
            termsPopup.style.display = 'none';
        }
        if (event.target === privacyPopup) {
            privacyPopup.style.display = 'none';
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

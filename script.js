document.addEventListener("DOMContentLoaded", function() {
    // Load the footer
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            setActiveIcon(); // Set the active class after footer is loaded
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
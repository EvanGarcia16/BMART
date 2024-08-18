document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has seen the welcome screen in this session
    if (!sessionStorage.getItem('seenWelcome')) {
        // Show the welcome screen
        document.getElementById('welcome-screen').style.display = 'flex';
        
        // Redirect to scan.html after 3 seconds
        setTimeout(function() {
            window.location.href = 'scan.html';
        }, 3000);

        // Mark that the user has seen the welcome screen in this session
        sessionStorage.setItem('seenWelcome', 'true');
    } else {
        // Directly redirect to scan.html if the welcome screen has already been seen in this session
        window.location.href = 'scan.html';
    }
});

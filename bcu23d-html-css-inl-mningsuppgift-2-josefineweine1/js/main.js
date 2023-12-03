document.addEventListener('DOMContentLoaded', (event) => {
    // Log to the console to check if the file is loaded
    console.log('DOM fully loaded and parsed');

    var cookieFooter = document.querySelector('.cookie-notice');
    var acceptButton = document.getElementById('accept');
    var declineButton = document.getElementById('decline');

    // Check if elements exist
    if (!cookieFooter) {
        console.error('Cookie footer not found.');
        return;
    }

    if (!acceptButton || !declineButton) {
        console.error('Accept or decline buttons not found.');
        return;
    }

    // Function to dismiss the cookie notice and hide the footer
    function dismissCookieNotice() {
        cookieFooter.style.display = 'none';
        localStorage.setItem('cookie-notice-dismissed', 'true');
    }

    // Attach event listeners to buttons
    acceptButton.addEventListener('click', dismissCookieNotice);
    declineButton.addEventListener('click', dismissCookieNotice);
});

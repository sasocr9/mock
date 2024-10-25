// script.js
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        alert('You cannot leave this tab while taking the test!');
        window.focus(); // Bring focus back to the tab
    }
});

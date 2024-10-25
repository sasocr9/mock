// Prevent tab switching
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        alert("Please do not switch tabs while taking the test.");
        // Optionally, you can redirect the user or take other actions
        window.location.reload();
    }
});

// Handle form submission
document.getElementById('mock-test-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle form submission logic here (e.g., validate answers, send data to a server)
    alert("Test submitted successfully!");
});

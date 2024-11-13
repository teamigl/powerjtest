// Redirect to landing page after 5 seconds on the onboarding page
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes("onboarding.html")) {
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to the landing page
        }, 5000); // 5000 ms = 5 seconds
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Add any JavaScript interactivity here
    const contactLink = document.querySelector('a[href="mailto:bskchowdary368@gmail.com"]');
    contactLink.addEventListener('sai', () => {
        alert('Thank you for reaching out!');
    });
});

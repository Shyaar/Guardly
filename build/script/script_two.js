//Sendi call button function

document.addEventListener("DOMContentLoaded", function() {
    // Get the parent element (or the body, or any static container)
    const container = document.body;  // Or use a specific parent element that contains the buttons

    // Add event listener to the container (delegation)
    container.addEventListener('click', function(event) {
        // Check if the clicked element is a call button
        if (event.target && event.target.matches('.call-btn')) {
            const phoneNumber = event.target.getAttribute('data-phone');
            window.location.href = `tel:${phoneNumber}`;
        }
    });
});

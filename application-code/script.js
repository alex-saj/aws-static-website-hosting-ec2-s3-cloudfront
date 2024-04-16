// script.js

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Example: Change the color of the "Download Resume" button on hover
    const downloadButton = document.querySelector('.download-button');

    if (downloadButton) {
        downloadButton.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#555';
        });

        downloadButton.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#333';
        });
    }
    
    // Add more JavaScript functionality as needed
});

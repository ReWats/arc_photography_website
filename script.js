
document.addEventListener( 
    
    function() {
    const images = document.querySelectorAll('.grid img');
    const infoDiv = document.getElementById('imageInfo');
    const fullImage = document.getElementById('fullImage');
    const clearButton = document.getElementById('clearButton');

    images.forEach(image => {
        image.onclick = function() {
            const info = this.getAttribute('data-info');
            const src = this.getAttribute('src');
            infoDiv.textContent = info;
                    fullImage.src = src;
                    fullImage.style.display = 'block'; // Show the full image
                    clearButton.style.display = 'block'; // Show the clear button

                    // Scroll to the full image
                    fullImage.scrollIntoView({ behavior: 'smooth' });
        };
    
    });



// Clear functionality
clearButton.onclick = function() {
                infoDiv.textContent = ''; // Clear the info text
                fullImage.style.display = 'none'; // Hide the full image
                clearButton.style.display = 'none'; // Hide the clear button
            }; 
    });
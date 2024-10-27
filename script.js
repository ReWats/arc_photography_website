
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
                    fullImage.style.display = 'block'; 
                    clearButton.style.display = 'block'; 

                    //scroll the page to the div containing the full image          
                    fullImage.scrollIntoView({ behavior: 'smooth' });
        };
    
    });



// Clear functionality to clear selected image, discription and clear button
clearButton.onclick = function() {
                infoDiv.textContent = ''; 
                fullImage.style.display = 'none'; 
                clearButton.style.display = 'none'; 
            }; 
    });

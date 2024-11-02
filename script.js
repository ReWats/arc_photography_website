document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.grid img');
    const infoDiv = document.getElementById('imageInfo');
    const fullImage = document.getElementById('fullImage');
    const clearButton = document.getElementById('clearButton');
    const printSize = document.getElementById('printSize');
    const priceDisplay = document.getElementById('priceDisplay');
    const buyNowButton = document.getElementById('buyNowButton');
    const basket = document.getElementById('basket');
    const basketContents = document.getElementById('basketContents');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const clearBasketButton = document.getElementById('clearBasketButton');

    //Empty array to store items selected
    let basketItems = [];
    //Total updates when items added to the basket
    let total = 0;

    //When user clicks on gallery image, we are taken to div(using scrollIntoView) that displays full image and description
    images.forEach(image => {
        image.onclick = function() {
            const info = this.getAttribute('data-info');
            const src = this.getAttribute('src');
            infoDiv.textContent = info;
            fullImage.src = src;
            fullImage.style.display = 'block';
            clearButton.style.display = 'block';
            printSize.style.display = 'block';
            priceDisplay.style.display = 'none';
            buyNowButton.style.display = 'none';

            fullImage.scrollIntoView({ behavior: 'smooth' });
        };
    });

    //Button to clear the full image and description being shown
    clearButton.onclick = function() {
        infoDiv.textContent = '';
        fullImage.style.display = 'none';
        clearButton.style.display = 'none';
        printSize.style.display = 'none';
        priceDisplay.style.display = 'none';
        buyNowButton.style.display = 'none';
    };

    //Here the user can select the size of print they would like to purchase
    printSize.onchange = function() {
        const selectedSize = printSize.value;
        const prices = { small: 4.95, medium: 9.95, large: 14.95, xlarge: 19.95 };

        if (selectedSize) {
            const price = prices[selectedSize];
            priceDisplay.textContent = `Price: £${price}`;
            priceDisplay.style.display = 'block';
            buyNowButton.style.display = 'block';

            buyNowButton.onclick = function() {
                const itemName = fullImage.src.split('/').pop(); // Get image name
                const itemPrice = prices[selectedSize];

                //Here we add an item to the basket
                basketItems.push({ name: itemName, size: selectedSize, price: itemPrice });
                total += itemPrice;
                updateBasket();
            };
        } else {
            priceDisplay.style.display = 'none';
            buyNowButton.style.display = 'none';
        }
    };

    //Update the basket display
    function updateBasket() {
        basketContents.innerHTML = ''; //Clear current basket contents
        basketItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (${item.size}) - £${item.price.toFixed(2)}`;
            basketContents.appendChild(li);
        });
        totalPriceDisplay.textContent = `Total: £${total.toFixed(2)}`;
        basket.style.display = 'block'; //Show the basket if there are items inside
    }

    //Clear the basket
    clearBasketButton.onclick = function() {
        basketItems = [];
        total = 0;
        updateBasket();
    };
});
});
  
    

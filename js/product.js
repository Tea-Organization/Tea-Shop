
const teaSection = document.querySelector('.tea-section');
const preSliderBtn = document.querySelector('.pre-slider');
const nextSliderBtn = document.querySelector('.next-slider');
const products = document.querySelectorAll('.product');
let currentIndex = 0;
let intervalId;

function updateProducts() {
    // Show one product on small screens or three products on larger screens
    const numProductsToShow = window.innerWidth <= 780 ? 1 : (window.innerWidth <= 1230 ? 2 : 3);

    products.forEach((product, index) => {
        if (index >= currentIndex && index < currentIndex + numProductsToShow) {
            product.style.display = 'inline-block';
            product.style.opacity = '1';
        } else {
            product.style.display = 'none';
            product.style.opacity = '0';
        }
    });
}

window.addEventListener('resize', updateProducts);
updateProducts();


// Function to move to the previous set of products
function previousSlide() {
    const numProductsToShow = window.innerWidth <= 780 ? 1 : (window.innerWidth <= 1230 ? 2 : 3);
    const maxIndex = Math.max(products.length - numProductsToShow, 0); // Calculate the maximum index for the current screen size
    currentIndex = Math.max(currentIndex - 1, 0); // Move to the previous index

    // If arrived on the first product, move to the last set of products
    if (currentIndex === 0) {
        currentIndex = maxIndex;
    }
   
    updateProducts();
}

// Function to move to the next set of products
function nextSlide() {
    const numProductsToShow = window.innerWidth <= 780 ? 1 : (window.innerWidth <= 1230 ? 2 : 3);
    const maxIndex = products.length - numProductsToShow;
    if (currentIndex < maxIndex) {
        currentIndex++; 
    } else {
        currentIndex = 0; 
    }

    updateProducts();
  
}





// // Adding event listeners to the slider buttons
preSliderBtn.addEventListener('click', () => {  previousSlide(); });
nextSliderBtn.addEventListener('click', () => {  nextSlide(); });








// Start the slider
function startSlider() {
    intervalId = setInterval(nextSlide, 5000);
}

startSlider();
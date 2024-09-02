
// scripts/main.js

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Sleek and modern, these wireless headphones deliver high-quality sound with a comfortable, over-ear design. Perfect for on-the-go music lovers, they feature a minimalistic black finish and provide excellent noise isolation, making them ideal for both work and leisure.",
        price: "$99.99",
        image: "frontend/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
    },
    {
        id: 2,
        name: "Polaroid Instant Camera",
        description: "Capture your memories instantly with this stylish Polaroid OneStep2 instant camera. Featuring a retro-inspired design, it blends classic charm with modern functionality. Equipped with easy-to-use controls, this camera is perfect for anyone looking to relive the magic of instant photography.",
        price: "$149.99",
        image: "eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
    },
    {
        id: 3,
        name: "Minimalist Smartwatch",
        description: "This elegant smartwatch combines modern technology with a minimalist design. The slim, silver band and round display make it a versatile accessory that complements any outfit. Track your fitness, receive notifications, and stay connected without compromising on style.",
        price: "$79.99",
        image: "c-d-x-PDX_a_82obo-unsplash.jpg"
    }
];

// Save the selected product ID to local storage
document.querySelectorAll('.product-item a').forEach(item => {
    item.addEventListener('click', event => {
        const productId = event.currentTarget.getAttribute('data-id');
        console.log(`Selected product ID: ${productId}`);
        localStorage.setItem('selectedProductId', productId);
    
    });
});
// scripts/main.js

// Function to load the product details
function loadProductDetails() {
    const productId = localStorage.getItem('selectedProductId');
    console.log(`Loading details for product ID: ${productId}`);
    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
    } else {
        document.querySelector('.product-detail').innerText = "Product not found!";
    }
}
/* about section 
document.getElementById('about-link').addEventListener('click', function() {
    // Hide other sections if necessary
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the "About" section
    document.getElementById('about-section').classList.remove('hidden');
    document.getElementById('about-section').classList.add('active-section');
});
*/

// Call the function when the product detail page is loaded
if (window.location.pathname.includes('product.html')) {
    loadProductDetails();
}
// scripts/main.js

// Function to add 'Buy Now' buttons to each product item
function addBuyNowButtons() {
    document.querySelectorAll('.product-item').forEach(item => {
        const productId = item.querySelector('a').getAttribute('data-id');
        const button = document.createElement('button');
        button.className = 'buy-now-button';
        button.innerText = 'Buy Now';
        button.setAttribute('data-id', productId);
        button.addEventListener('click', event => {
            localStorage.setItem('selectedProductId', productId);
            window.location.href = 'product.html';
        });
        item.appendChild(button); // Append the button to the product item
    });
}

// Call the function to add the buttons after the DOM has loaded
document.addEventListener('DOMContentLoaded', addBuyNowButtons);

/*
 // Function to get URL parameters
 function getQueryParams() {
    let params = {};
    let queryString = window.location.search.substring(1);
    let queries = queryString.split("&");
    queries.forEach(function(query) {
        let pair = query.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params;
}

// Get product name, price, and other details from URL parameters
let params = getQueryParams();
let productName = params.name;
let productPrice = params.price;

// Display product name and price on the page
document.getElementById('product-name').textContent = productName;
document.getElementById('product-price').textContent = `$${productPrice}`;
document.querySelector('.checkout-button').setAttribute('data-price', productPrice);

// Add event listener to the checkout button
document.querySelector('.checkout-button').addEventListener('click', function() {
    let userName = prompt("Enter your name:");
    let userEmail = prompt("Enter your email:");
    let userContact = prompt("Enter your contact number:");
    let productPrice = this.getAttribute('data-price'); // Accessing the price from the data-price attribute

    if (userName && userEmail && userContact) {
        alert(`Thank you, ${userName}!\nYou have purchased: ${productName}.\nYour total bill is $${productPrice}.\nA confirmation email will be sent to ${userEmail}.`);
    } else {
        alert("Please fill in all the details to proceed with the checkout.");
    }
});*/
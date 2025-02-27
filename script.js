// Amazon Clone JavaScript
document.addEventListener("DOMContentLoaded", () => {
    setupSearch();
    setupCart();
    setupCategories();
});

// Function to handle search functionality
function setupSearch() {
    const searchButton = document.getElementById("search-btn");
    const searchBar = document.getElementById("search-bar");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim();
        if (query) {
            window.open(`https://www.amazon.com/s?k=${encodeURIComponent(query)}`, "_blank");
        }
    });

    searchBar.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
}

// Function to manage cart functionality
let cartCount = 0;
function setupCart() {
    const cartButton = document.getElementById("cart-btn");
    const cartCountDisplay = document.getElementById("cart-count");

    cartButton.addEventListener("click", () => {
        cartCount++;
        cartCountDisplay.innerText = cartCount;
        alert("Item added to cart!");
    });
}

// Function to handle category selection
function setupCategories() {
    const categorySelect = document.getElementById("category-select");

    categorySelect.addEventListener("change", () => {
        const selectedCategory = categorySelect.value;
        if (selectedCategory) {
            window.open(`https://www.amazon.com/s?i=${encodeURIComponent(selectedCategory)}`, "_blank");
        }
    });
}

// Simulated dynamic product listing
const products = [
    { name: "Smartphone", price: "$699", link: "https://www.amazon.com/dp/B09G9FJV6J" },
    { name: "Laptop", price: "$999", link: "https://www.amazon.com/dp/B08N5WRWNW" },
    { name: "Headphones", price: "$199", link: "https://www.amazon.com/dp/B08HR3Y5GQ" },
];

function loadProducts() {
    const productContainer = document.getElementById("product-list");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="window.open('${product.link}', '_blank')">Buy Now</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Call loadProducts on page load
document.addEventListener("DOMContentLoaded", loadProducts);

// Toggle navigation menu for mobile view
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("open");
}

// User authentication simulation
function loginUser() {
    const username = prompt("Enter your username:");
    if (username) {
        document.getElementById("user-name").innerText = `Hello, ${username}`;
    }
}

// Simulate scrolling effect on navbar
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Wishlist functionality
let wishlistCount = 0;
function addToWishlist() {
    wishlistCount++;
    document.getElementById("wishlist-count").innerText = wishlistCount;
    alert("Item added to wishlist!");
}

// Footer year update
document.getElementById("footer-year").innerText = new Date().getFullYear();
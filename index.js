document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartCount = document.getElementById("cart-count");

    // Load cart count from localStorage
    updateCartCount();

    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product-item");
            const name = product.dataset.name;
            const price = product.dataset.price;

            // Retrieve existing cart from localStorage, or create a new one if empty
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add new product to the cart
            cart.push({ name, price });

            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update cart count
            updateCartCount();
        });
    });

    // Function to update cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.length;
    }
});
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
document.addEventListener("DOMContentLoaded", () => {
    const productImages = document.querySelectorAll(".product-image");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");

    // Event listener for clicking on product images
    productImages.forEach(img => {
        img.addEventListener("click", (e) => {
            // Open modal
            modal.style.display = "block";

            // Display the clicked image in the modal
            modalImg.src = e.target.src;
        });
    });

    // Close the modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const productImages = document.querySelectorAll(".product-image");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");

    // Event listener for clicking on product images
    productImages.forEach(img => {
        img.addEventListener("click", (e) => {
            // Open modal
            modal.style.display = "block";

            // Display the clicked image in the modal
            modalImg.src = e.target.src;
        });
    });

    // Close the modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

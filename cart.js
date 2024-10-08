document.addEventListener("DOMContentLoaded", () => {
    const cartItemsDiv = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const checkoutButton = document.getElementById("checkout");
    const clearCartButton = document.getElementById("clear-cart");

    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Display cart count
    cartCount.textContent = cart.length;

    // Display cart items
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty!</p>";
        checkoutButton.style.display = "none";
        clearCartButton.style.display = "none";
    } else {
        cart.forEach(item => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");
            cartItemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartItemsDiv.appendChild(cartItemDiv);
        });
    }

    // Checkout via WhatsApp
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        let message = "Order Summary:\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - $${item.price}\n`;
        });

        const adminWhatsApp = "0786571948";  // Replace with actual number
        const whatsappLink = `https://wa.me/${786571948}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    });

    // Clear Cart Functionality
    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        cartItemsDiv.innerHTML = "<p>Your cart is empty!</p>";
        cartCount.textContent = 0;
        clearCartButton.style.display = "none";
        checkoutButton.style.display = "none";
    });
});

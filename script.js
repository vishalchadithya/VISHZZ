let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart-count").innerText = count;
    alert("Item added to cart!");
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// ==========================================
// CART ELEMENTS
// ==========================================

const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartBottom = document.getElementById("cartBottom");

const subtotalElement = document.getElementById("subtotal");
const itemCountElement = document.getElementById("itemCount");

const clearCartButton = document.getElementById("clearCart");
const paymentButton = document.getElementById("paymentBtn");


// ==========================================
// GET CART FROM LOCAL STORAGE
// ==========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

    // Clear current display
    cartItems.innerHTML = "";


    // ======================================
    // EMPTY CART
    // ======================================

    if (cart.length === 0) {

        emptyCart.style.display = "flex";

        cartBottom.classList.remove("show");

        subtotalElement.textContent = "₦0.00";

        itemCountElement.textContent = "0";

        return;
    }


    // ======================================
    // CART HAS PRODUCTS
    // ======================================

    emptyCart.style.display = "none";

    cartBottom.classList.add("show");


    // Create each cart item
    cart.forEach((product, index) => {

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-name">

                <h3>${product.name}</h3>

            </div>


            <div class="product-price">

                <strong>
                    ₦${product.price.toLocaleString()}
                </strong>

            </div>


            <div class="quantity-control">

                <input
                    type="number"
                    class="quantity"
                    value="${product.quantity}"
                    min="1"
                >

                <button class="increase">

                    <i class="fa-solid fa-plus"></i>

                </button>

            </div>


            <div class="actions">

                <button class="delete-btn">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;


        // ==================================
        // QUANTITY INPUT
        // ==================================

        const quantityInput =
            cartItem.querySelector(".quantity");


        quantityInput.addEventListener("change", () => {

            let quantity =
                parseInt(quantityInput.value);


            if (isNaN(quantity) || quantity < 1) {

                quantity = 1;

                quantityInput.value = 1;

            }


            cart[index].quantity = quantity;

            saveCart();

        });


        // ==================================
        // PLUS BUTTON
        // ==================================

        const increaseButton =
            cartItem.querySelector(".increase");


        increaseButton.addEventListener("click", () => {

            cart[index].quantity++;

            saveCart();

        });


        // ==================================
        // DELETE BUTTON
        // ==================================

        const deleteButton =
            cartItem.querySelector(".delete-btn");


        deleteButton.addEventListener("click", () => {

            cartItem.style.opacity = "0";

            cartItem.style.transform =
                "translateX(30px)";


            setTimeout(() => {

                cart.splice(index, 1);

                saveCart();

            }, 250);

        });


        // Add item to page
        cartItems.appendChild(cartItem);

    });


    updateTotal();

}


// ==========================================
// UPDATE TOTAL
// ==========================================

function updateTotal() {

    let total = 0;

    let items = 0;


    cart.forEach(product => {

        total +=
            product.price * product.quantity;

        items += product.quantity;

    });


    subtotalElement.textContent =
        `₦${total.toLocaleString()}`;


    itemCountElement.textContent =
        items;

}


// ==========================================
// CLEAR CART
// ==========================================

clearCartButton.addEventListener("click", () => {

    if (cart.length === 0) {
        return;
    }


    cart = [];

    saveCart();

});


// ==========================================
// PAYMENT
// ==========================================

paymentButton.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert("Proceeding to payment...");

});


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();

}


// ==========================================
// INITIALIZE
// ==========================================

displayCart();

const checkoutForm = document.getElementById("checkoutForm");
const orderDetails = document.getElementById("orderDetails");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", () => {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        let order = "OG FARM ORDER\n\n";

        cart.forEach(product => {

            order += `${product.name} × ${product.quantity}\n`;

        });

        orderDetails.value = order;

    });

}

const paymentBtn = document.getElementById("paymentBtn");

if (paymentBtn) {
    paymentBtn.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
}
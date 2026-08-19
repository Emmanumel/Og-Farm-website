const locations = {

    Lagos: [
        "Agege",
        "Ajeromi",
        "Alimosho",
        "Apapa",
        "Eti-Osa",
        "Ikeja",
        "Ikorodu",
        "Kosofe",
        "Mushin",
        "Surulere"
    ],

    Ogun: [
        "Abeokuta North",
        "Abeokuta South",
        "Ado-Odo/Ota",
        "Ijebu Ode",
        "Ifo",
        "Sagamu"
    ],

    Oyo: [
        "Ibadan North",
        "Ibadan South-West",
        "Ogbomoso North",
        "Oyo East"
    ]

};
const stateSelect = document.getElementById("stateSelect");

Object.keys(locations).forEach(state => {

    const option = document.createElement("option");

    option.value = state;

    option.textContent = state;

    stateSelect.appendChild(option);

});

const lgaSelect = document.getElementById("lgaSelect");

stateSelect.addEventListener("change", () => {

    lgaSelect.innerHTML = '<option selected disabled>Select LGA</option>';

    const lgas = locations[stateSelect.value] || [];

    lgas.forEach(lga => {

        const option = document.createElement("option");

        option.value = lga;

        option.textContent = lga;

        lgaSelect.appendChild(option);

    });

});

const country = document.getElementById("country");
const flag = document.getElementById("countryFlag");

country.addEventListener("change", () => {

    flag.src = `https://flagcdn.com/w40/${country.value}.png`;

});

const heroSlides = [
    {
        tag: "🌿 Fresh Plantain",
        title: "Fresh Harvest.<br>Healthy Living.",
        description: "Fresh Plantain straight from our farms.",
        image: "images-folder/green-banana-removebg-preview.png",
        product: "Organic Plantains",
        details: "Premium Farm Produce.",
        price: "₦3,200"
    },

    {
        tag: "🌽 Sweet Corn",
        title: "A luxury<br>of Nigeria.",
        description: "Buy Sweet corn and enjoy the tasty and nutritious food.",
        image: "images-folder/corn-isolated-removebg-preview (1).png",
        product: "Sweet Corn",
        details: "Freshly Harvested",
        price: "₦2,800(kg)"
    },

    {
        tag: "🌱 Fresh Vegetables",
        title: "Fresh from<br>the farm.",
        description: "Varieties of Vegetables sold here!",
        image: "images-folder/healthy-fresh-background-vegetable-health-removebg-preview.png",
        product: "Fresh Vegetables",
        details: "Fresh and tasty.",
        price: "₦2,000"
    },

    {
        tag: " 🍎 Sweet Fruits",
        title: "Rich fruits,<br>Rich life!",
        description: "Non-GMO seeds used for this variety of fruits..",
        image: "images-folder/apples-red-fresh-mellow-juicy-perfect-whole-white-desk-removebg-preview.png",
        product: "Sweet Fruits",
        details: "Pawpaw, watermelons sold here",
        price: "₦2,000"
    }
];

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        const category = button.dataset.category;

        products.forEach(product => {

            if (category === "all" || product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });
    });
});






document.addEventListener("DOMContentLoaded", () => {

    const dots = document.querySelectorAll(".dot");

    const heroTag = document.querySelector(".hero-tag");
    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");
    const heroImage = document.querySelector(".hero-image");
    const productName = document.querySelector(".product-name");
    const productDesc = document.querySelector(".product-desc");
    const price = document.querySelector(".price");

    let currentSlide = 0;

    function showSlide(index) {

        heroTag.classList.add("fade-out");
        heroTitle.classList.add("fade-out");
        heroDescription.classList.add("fade-out");
        heroImage.classList.add("fade-image");
        productName.classList.add("fade-out");
        productDesc.classList.add("fade-out");
        price.classList.add("fade-out");

        setTimeout(() => {

            const slide = heroSlides[index];

            heroTag.innerHTML = slide.tag;
            heroTitle.innerHTML = slide.title;
            heroDescription.innerHTML = slide.description;
            heroImage.src = slide.image;
            heroImage.alt = slide.product;
            productName.innerHTML = slide.product;
            productDesc.innerHTML = slide.details;
            price.innerHTML = slide.price;

            heroTag.classList.remove("fade-out");
            heroTitle.classList.remove("fade-out");
            heroDescription.classList.remove("fade-out");
            heroImage.classList.remove("fade-image");
            productName.classList.remove("fade-out");
            productDesc.classList.remove("fade-out");
            price.classList.remove("fade-out");

        }, 300);

        // ⭐ Update active dot
        dots.forEach(dot => dot.classList.remove("active"));

        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }

    // First slide
    showSlide(currentSlide);

    // Auto slider
    setInterval(() => {

        currentSlide++;

        if (currentSlide >= heroSlides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 6000);


    // ⭐ Dot navigation
    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });

});


const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

});

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

    const decreaseBtn = card.querySelector(".decrease");
    const increaseBtn = card.querySelector(".increase");
    const quantityDisplay = card.querySelector(".quantity");

    let quantity = 1;


    // Increase quantity
    increaseBtn.addEventListener("click", () => {

        quantity++;

        quantityDisplay.textContent = quantity;

    });


    // Decrease quantity
    decreaseBtn.addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            quantityDisplay.textContent = quantity;

        }

    });

});


// ==========================================
// ADD TO CART
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const addButtons = document.querySelectorAll(".add-cart");

    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".product-card");

            if (!card) {
                console.error("Product card not found!");
                return;
            }

            // Get product information
            const name = card.querySelector("h3").textContent.trim();

            const priceText =
                card.querySelector(".product-price span").textContent.trim();

            const price =
                Number(priceText.replace(/[₦,]/g, ""));

            const image =
                card.querySelector(".product-image img").getAttribute("src");

            const quantityElement =
                card.querySelector(".quantity");

            const quantity =
                Number(quantityElement.textContent) || 1;


            // Check for invalid data
            if (!name || !price || !image) {
                console.error("Product information is missing:", {
                    name,
                    price,
                    image
                });

                return;
            }


            // Get current cart
            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];


            // Check whether product already exists
            const existingProduct =
                cart.find(product => product.name === name);


            if (existingProduct) {

                existingProduct.quantity += quantity;

            } else {

                cart.push({
                    name: name,
                    price: price,
                    image: image,
                    quantity: quantity
                });

            }


            // Save cart
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );


            console.log("PRODUCT ADDED:", {
                name,
                price,
                image,
                quantity
            });


            // Button feedback
            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Added';

            setTimeout(() => {

                button.innerHTML =
                    '<i class="fa-solid fa-cart-shopping"></i> Add';

            }, 1000);

        });

    });

});

// ==========================================
// ADD TO CART
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const addButtons =
        document.querySelectorAll(".add-cart");

    const cartCount =
        document.getElementById("cartCount");


    // Get existing cart
    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    // ======================================
    // UPDATE CART ICON
    // ======================================

    function updateCartCount() {

        let totalItems = 0;


        cart.forEach(product => {

            totalItems += product.quantity;

        });


        if (cartCount) {

            cartCount.textContent = totalItems;


            if (totalItems === 0) {

                cartCount.classList.add("hidden");

            } else {

                cartCount.classList.remove("hidden");

            }

        }

    }


    // ======================================
    // UPDATE BUTTONS
    // ======================================

    function updateAddButtons() {

        addButtons.forEach(button => {

            const card =
                button.closest(".product-card");

            const name =
                card.querySelector("h3")
                    .textContent
                    .trim();


            const productExists =
                cart.some(product =>
                    product.name === name
                );


            if (productExists) {

                button.innerHTML =
                    '<i class="fa-solid fa-check"></i> Added';

                button.classList.add("added");

                button.disabled = true;

            } else {

                button.innerHTML =
                    '<i class="fa-solid fa-cart-shopping"></i> Add';

                button.classList.remove("added");

                button.disabled = false;

            }

        });

    }


    // ======================================
    // ADD PRODUCT
    // ======================================

    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".product-card");


            // Product information
            const name =
                card.querySelector("h3")
                    .textContent
                    .trim();


            const priceText =
                card.querySelector(".product-price span")
                    .textContent
                    .trim();


            const price =
                Number(
                    priceText.replace(/[₦,]/g, "")
                );


            const image =
                card.querySelector(".product-image img")
                    .getAttribute("src");


            // ==================================
            // ALWAYS ADD 1
            // ==================================

            const existingProduct =
                cart.find(product =>
                    product.name === name
                );


            if (existingProduct) {

                // Don't add another one
                return;

            }


            cart.push({

                name: name,

                price: price,

                image: image,

                quantity: 1

            });


            // Save
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );


            // Update everything
            updateCartCount();

            updateAddButtons();

        });

    });


    // Initial state
    updateCartCount();

    updateAddButtons();

});


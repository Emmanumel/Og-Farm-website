document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // GET CART
    // ==========================================

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    // ==========================================
    // CHECK IF CART IS EMPTY
    // ==========================================

    if (cart.length === 0) {

        alert("Your cart is empty.");

        window.location.href = "cart.html";

        return;
    }


    // ==========================================
    // ELEMENTS
    // ==========================================

    const productsContainer =
        document.getElementById("checkoutProducts");

    const totalElement =
        document.getElementById("checkoutTotal");

    const itemCount =
        document.getElementById("itemCount");

    const orderDetails =
        document.getElementById("orderDetails");

    const orderTotal =
        document.getElementById("orderTotal");

    const checkoutForm =
        document.getElementById("checkoutForm");


    // ==========================================
    // DISPLAY PRODUCTS
    // ==========================================

    let total = 0;

    let totalItems = 0;

    let orderText = "OG FARM ORDER\n\n";


    cart.forEach(product => {

        const quantity =
            Number(product.quantity) || 1;


        const price =
            Number(product.price) || 0;


        const productTotal =
            price * quantity;


        total += productTotal;

        totalItems += quantity;


        // Product HTML

        const productElement =
            document.createElement("div");

        productElement.classList.add(
            "checkout-product"
        );


        productElement.innerHTML = `

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>
                    Quantity: ${quantity}
                </p>

            </div>

            <div class="product-price">
                ₦${productTotal.toLocaleString()}
            </div>

        `;


        productsContainer.appendChild(
            productElement
        );


        // Email order text

        orderText +=
            `${product.name} × ${quantity} — ₦${productTotal.toLocaleString()}\n`;

    });


    // ==========================================
    // TOTAL
    // ==========================================

    totalElement.textContent =
        `₦${total.toLocaleString()}`;


    itemCount.textContent =
        `${totalItems} ${totalItems === 1 ? "item" : "items"}`;


    // ==========================================
    // FORM DATA
    // ==========================================

    orderText +=
        `\nTOTAL: ₦${total.toLocaleString()}`;


    orderDetails.value =
        orderText;


    orderTotal.value =
        `₦${total.toLocaleString()}`;


    // ==========================================
    // SUBMIT
    // ==========================================

    checkoutForm.addEventListener(
        "submit",
        () => {

            // Make sure latest cart is included

            orderDetails.value =
                orderText;

            orderTotal.value =
                `₦${total.toLocaleString()}`;

        }
    );

});


// ==========================================
// STATE → LGA
// ==========================================

const locations = {

    Lagos: [
        "Agege",
        "Ajeromi-Ifelodun",
        "Alimosho",
        "Amuwo-Odofin",
        "Apapa",
        "Badagry",
        "Epe",
        "Eti-Osa",
        "Ibeju-Lekki",
        "Ifako-Ijaiye",
        "Ikeja",
        "Ikorodu",
        "Kosofe",
        "Lagos Island",
        "Lagos Mainland",
        "Mushin",
        "Ojo",
        "Oshodi-Isolo",
        "Shomolu",
        "Surulere"
    ],

    Ogun: [
        "Abeokuta North",
        "Abeokuta South",
        "Ado-Odo/Ota",
        "Ewekoro",
        "Ifo",
        "Ijebu East",
        "Ijebu North",
        "Ijebu North East",
        "Ijebu Ode",
        "Ikenne",
        "Imeko Afon",
        "Ipokia",
        "Obafemi Owode",
        "Odeda",
        "Odogbolu",
        "Ogun Waterside",
        "Remo North",
        "Sagamu",
        "Yewa North",
        "Yewa South"
    ],

    Oyo: [
        "Akinyele",
        "Atiba",
        "Atisbo",
        "Egbeda",
        "Ibadan North",
        "Ibadan North East",
        "Ibadan North West",
        "Ibadan South East",
        "Ibadan South West",
        "Ibarapa Central",
        "Ibarapa East",
        "Ibarapa North",
        "Ido",
        "Lagelu",
        "Ogbomosho North",
        "Ogbomosho South",
        "Oluyole",
        "Ona Ara",
        "Orelope",
        "Oyo East",
        "Oyo West"
    ],

    Osun: [
        "Atakumosa East",
        "Atakumosa West",
        "Ayedaade",
        "Ayedire",
        "Boripe",
        "Ede North",
        "Ede South",
        "Egbedore",
        "Ejigbo",
        "Ife Central",
        "Ife East",
        "Ife North",
        "Ife South",
        "Ilesa East",
        "Ilesa West",
        "Irepodun",
        "Irewole",
        "Isokan",
        "Iwo",
        "Osogbo"
    ],

    Ondo: [
        "Akoko North East",
        "Akoko North West",
        "Akoko South East",
        "Akoko South West",
        "Akure North",
        "Akure South",
        "Ese Odo",
        "Idanre",
        "Ifedore",
        "Ilaje",
        "Ile Oluji/Okeigbo",
        "Irele",
        "Odigbo",
        "Okitipupa",
        "Ondo East",
        "Ondo West",
        "Ose",
        "Owo"
    ],

    Ekiti: [
        "Ado Ekiti",
        "Efon",
        "Ekiti East",
        "Ekiti South West",
        "Ekiti West",
        "Emure",
        "Gbonyin",
        "Ido Osi",
        "Ijero",
        "Ikere",
        "Ikole",
        "Ilejemeje",
        "Irepodun/Ifelodun",
        "Ise/Orun",
        "Moba",
        "Oye"
    ]

};


const stateSelect =
    document.getElementById("state");

const lgaSelect =
    document.getElementById("lga");


stateSelect.addEventListener("change", () => {

    const selectedState =
        stateSelect.value;


    // Clear old LGAs

    lgaSelect.innerHTML =
        '<option value="">Select your LGA</option>';


    // Get LGAs

    const lgas =
        locations[selectedState] || [];


    // Add LGAs

    lgas.forEach(lga => {

        const option =
            document.createElement("option");

        option.value = lga;

        option.textContent = lga;

        lgaSelect.appendChild(option);

    });


    // Enable dropdown

    lgaSelect.disabled =
        lgas.length === 0;

});
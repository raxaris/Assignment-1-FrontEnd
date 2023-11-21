function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const cartContainer = document.querySelector(".cart-container");

    cartContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item", "row");

        itemElement.innerHTML = `
            <div class="item-image col-12 col-md-2">
                <img src="${item.imageUrl}" style="width: 100%;">
            </div>
            <div class="item-info col-12 col-md-7">
                <div class="item-title">
                    <span class="item-brand">${item.manufacturer}</span>
                    <span class="item-type">${item.type}</span>
                </div>
                <div class="item-article">Article: <span class="article-number">${item.articleNumber}</span></div>
                <div class="item-price"><span class="items-price">$${item.price.toFixed(2)}</span></div>
                <div class="item-size">Size: ${item.size}</div>
                <div class="item-counter">
                    <span class="plus">+</span>
                    <span class="num">${item.quantity}</span>
                    <span class="minus">-</span>
                </div>
            </div>
            <div class="item-actions col-12 col-md-3 d-flex justify-content-end" style="color: gray;">
                <div class="remove-item">
                    <i class="fa-regular fa-trash-can" style="padding-right: 10px;"></i> Remove
                </div>
            </div>
            <hr class="solid liner1 my-3">
        `;

        const removeButton = itemElement.querySelector(".remove-item");
        removeButton.addEventListener("click", () => {
            removeCartItem(index);
            renderCart();
        });

        cartContainer.appendChild(itemElement);
    });
    updateTotalValues();

    const amountOfAssets = document.getElementById("amountOfAssets");
    amountOfAssets.textContent = cartItems.length;
    const plural = document.getElementById("plural");
    plural.textContent = cartItems.length === 1 ? "" : "s";
}

function removeCartItem(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < cartItems.length) {
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }
}

function addEventListeners() {
    const assets = document.querySelectorAll('.item');
    
    assets.forEach((asset, index) => {
        const plus = asset.querySelector('.plus');
        const minus = asset.querySelector('.minus');
        const num = asset.querySelector('.num');
        
        plus.addEventListener('click', () => {
            let currentNum = parseInt(num.innerText, 10);
            if (currentNum < 99) {
                currentNum++;
                num.innerText = currentNum.toString();
                updateCartItemQuantity(index, currentNum);
            }
        });
        
        minus.addEventListener('click', () => {
            let currentNum = parseInt(num.innerText, 10);
            if (currentNum > 1) {
                currentNum--;
                num.innerText = currentNum.toString();
                updateCartItemQuantity(index, currentNum);
            }
        });
    });
}

function updateCartItemQuantity(index, quantity) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < cartItems.length) {
        cartItems[index].quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateTotalValues();
    }
}

function updateTotalValues() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalAmount = 0;

    cartItems.forEach(item => {
        const price = item.price;
        const quantity = item.quantity;
        totalAmount += price * quantity;
    });

    const totalSumElement = document.querySelector(".total-num span");
    const totalElement = document.querySelector(".total-total span");
    const totalDiscountElement = document.querySelector(".total-discount span");

    const discount = totalAmount * 0.2;
    const totalWithDiscount = totalAmount - discount;

    totalSumElement.textContent = totalAmount.toFixed(2);
    totalDiscountElement.textContent = discount.toFixed(2);
    totalElement.textContent = totalWithDiscount.toFixed(2);
}


window.addEventListener('load', () => {
    renderCart();
    addEventListeners();
});

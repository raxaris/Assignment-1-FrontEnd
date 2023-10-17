var storeProducts = document.querySelectorAll(".productItem");


function storeSixItems() {
    for (i = 0; i < storeProducts.length; i++) {
        storeProducts[i].style.display = "none";
    }
    for (i = 0; i < 6; i++) {
        storeProducts[i].style.display = "block";
    }
}

function storeTwelveItems() {
    for (i = 0; i < storeProducts.length; i++) {
        storeProducts[i].style.display = "none";
    }
    for (i = 0; i < 12; i++) {
        storeProducts[i].style.display = "block";
    }
}

function storeEighteenItems() {
    for (i = 0; i < storeProducts.length; i++) {
        storeProducts[i].style.display = "none";
    }
    for (i = 0; i < 18; i++) {
        storeProducts[i].style.display = "block";
    }
}


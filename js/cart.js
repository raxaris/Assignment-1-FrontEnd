// Script for getting info
// let assetElements = document.querySelectorAll('.assets');

// assetElements.forEach((element) => {
//     let id = element.getAttribute('data-id');
//     let manufacturer = element.querySelector('.product-manufacturer a').textContent;
//     let type = element.querySelector('.product-type a').textContent;
//     let priceString = element.querySelector('.product-price').textContent;
//     let price = parseFloat(priceString.replace(/\$| /g, ''));
//     let imageUrl = element.querySelector('.product-image img').getAttribute('src'); 
    
//     products.push({
//         id: id,
//         manufacturer: manufacturer,
//         type: type,
//         price: price,
//         imageUrl: imageUrl
//     });
// });




let products = [
    {
        "id": "1",
        "manufacturer": "Puma",
        "type": "Suit",
        "price": 300,
        "imageUrl": "img/assets/pumapukaibezshuma.jpg"
    },
    {
        "id": "2",
        "manufacturer": "Adidas",
        "type": "Accesories",
        "price": 150,
        "imageUrl": "img/assets/adidas sumka.jpg"
    },
    {
        "id": "3",
        "manufacturer": "Zara",
        "type": "Shirt",
        "price": 80,
        "imageUrl": "img/armani.jpg"
    },
    {
        "id": "4",
        "manufacturer": "EA7",
        "type": "T-Shirt",
        "price": 120,
        "imageUrl": "img/assets/EA7 tishka.jpg"
    },
    {
        "id": "5",
        "manufacturer": "Adidas",
        "type": "Trousers",
        "price": 160,
        "imageUrl": "img/assets/ADIDAS BOT.jpg"
    },
    {
        "id": "6",
        "manufacturer": "TNF",
        "type": "Sweater",
        "price": 150,
        "imageUrl": "img/assets/tnf.jpg"
    },
    {
        "id": "7",
        "manufacturer": "TNF",
        "type": "Trousers",
        "price": 125,
        "imageUrl": "img/assets/tnftrous.jpg"
    },
    {
        "id": "8",
        "manufacturer": "TNF",
        "type": "Sweater",
        "price": 120,
        "imageUrl": "img/assets/TNFsweater.jpg"
    },
    {
        "id": "9",
        "manufacturer": "AX",
        "type": "Trousers",
        "price": 150,
        "imageUrl": "img/assets/axtrous.jpg"
    },
    {
        "id": "10",
        "manufacturer": "Timberland",
        "type": "Shoes",
        "price": 140,
        "imageUrl": "img/assets/timberlandshoes.jpg"
    },
    {
        "id": "11",
        "manufacturer": "Nike",
        "type": "Shoes",
        "price": 220,
        "imageUrl": "img/assets/nikedikie.jpg"
    },
    {
        "id": "12",
        "manufacturer": "Skechers",
        "type": "Shoes",
        "price": 200,
        "imageUrl": "img/assets/skechershoes.jpg"
    },
    {
        "id": "13",
        "manufacturer": "TNF",
        "type": "Jacket",
        "price": 300,
        "imageUrl": "img/assets/tnf jakc.jpg"
    },
    {
        "id": "14",
        "manufacturer": "TNF",
        "type": "Jacket",
        "price": 300,
        "imageUrl": "img/assets/tnfjacke.jpg"
    },
    {
        "id": "15",
        "manufacturer": "Lee",
        "type": "Trousers",
        "price": 150,
        "imageUrl": "img/assets/trouserslee.jpg"
    },
    {
        "id": "16",
        "manufacturer": "AX",
        "type": "Suit",
        "price": 300,
        "imageUrl": "img/assets/halat.jpg"
    },
    {
        "id": "17",
        "manufacturer": "Nike",
        "type": "Accesories",
        "price": 100,
        "imageUrl": "img/assets/nikebag.jpg"
    },
    {
        "id": "18",
        "manufacturer": "Nike",
        "type": "T-Shirt",
        "price": 120,
        "imageUrl": "img/assets/niketishka.jpg"
    } 
];

const productsContainer = document.querySelector(".products-container");


products.forEach(product => {
    const productBlock = document.createElement("div");
    productBlock.classList.add("col-12", "col-sm-6", "col-md-4", "col-xxl-2", "assets");
    productBlock.setAttribute("data-id", product.id);

    productBlock.innerHTML = `
        <a href="https://www.youtube.com/watch?v=Ym33LHXBnGA">
            <div class="product-image">
                <img src="${product.imageUrl}">
            </div>
        </a>
        <div class="row justify-content-between">
            <div class="col-5">
                <div class="product-manufacturer">
                    <a href="#">${product.manufacturer}</a>
                </div>
                <div class="product-type">
                    <a href="#">${product.type}</a>
                </div>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                </div>
            </div>
            <div class="col-7 d-flex flex-column align-items-center" style="padding-top: 5px;">
                <div class="plusminus ms-auto" style="width: 80%;">
                    <span class="plus">+</span>
                    <span class="num">01</span>
                    <span class="minus">-</span>
                </div>
                <button class="btn mt-auto ms-auto add-button" style="width: 80%; color: white; background-color: rgb(79, 158, 156); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 5px; padding: 7px 15px; font-size: 14px;" type="button">
                    Add
                </button> 
            </div>
        </div>
    `;

    
    productsContainer.appendChild(productBlock);
});
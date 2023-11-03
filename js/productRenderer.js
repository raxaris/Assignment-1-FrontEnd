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
    },
    {
        "id": "19",
        "manufacturer": "Puma",
        "type": "Suit",
        "price": 300,
        "imageUrl": "img/assets/pumapukaibezshuma.jpg"
    },
    {
        "id": "20",
        "manufacturer": "Adidas",
        "type": "Accesories",
        "price": 150,
        "imageUrl": "img/assets/adidas sumka.jpg"
    },
    {
        "id": "21",
        "manufacturer": "Zara",
        "type": "Shirt",
        "price": 80,
        "imageUrl": "img/armani.jpg"
    },
    {
        "id": "22",
        "manufacturer": "EA7",
        "type": "T-Shirt",
        "price": 120,
        "imageUrl": "img/assets/EA7 tishka.jpg"
    },
    {
        "id": "23",
        "manufacturer": "Adidas",
        "type": "Trousers",
        "price": 160,
        "imageUrl": "img/assets/ADIDAS BOT.jpg"
    },
    {
        "id": "24",
        "manufacturer": "TNF",
        "type": "Sweater",
        "price": 150,
        "imageUrl": "img/assets/tnf.jpg"
    },
    {
        "id": "25",
        "manufacturer": "TNF",
        "type": "Trousers",
        "price": 125,
        "imageUrl": "img/assets/tnftrous.jpg"
    },
    {
        "id": "26",
        "manufacturer": "TNF",
        "type": "Sweater",
        "price": 120,
        "imageUrl": "img/assets/TNFsweater.jpg"
    },
    {
        "id": "27",
        "manufacturer": "AX",
        "type": "Trousers",
        "price": 150,
        "imageUrl": "img/assets/axtrous.jpg"
    },
    {
        "id": "28",
        "manufacturer": "Timberland",
        "type": "Shoes",
        "price": 140,
        "imageUrl": "img/assets/timberlandshoes.jpg"
    },
    {
        "id": "29",
        "manufacturer": "Nike",
        "type": "Shoes",
        "price": 220,
        "imageUrl": "img/assets/nikedikie.jpg"
    },
    {
        "id": "30",
        "manufacturer": "Skechers",
        "type": "Shoes",
        "price": 200,
        "imageUrl": "img/assets/skechershoes.jpg"
    },
    {
        "id": "31",
        "manufacturer": "TNF",
        "type": "Jacket",
        "price": 300,
        "imageUrl": "img/assets/tnf jakc.jpg"
    },
    {
        "id": "32",
        "manufacturer": "TNF",
        "type": "Jacket",
        "price": 300,
        "imageUrl": "img/assets/tnfjacke.jpg"
    },
    {
        "id": "33",
        "manufacturer": "Lee",
        "type": "Trousers",
        "price": 150,
        "imageUrl": "img/assets/trouserslee.jpg"
    },
    {
        "id": "34",
        "manufacturer": "AX",
        "type": "Suit",
        "price": 300,
        "imageUrl": "img/assets/halat.jpg"
    },
    {
        "id": "35",
        "manufacturer": "Nike",
        "type": "Accesories",
        "price": 100,
        "imageUrl": "img/assets/nikebag.jpg"
    },
    {
        "id": "36",
        "manufacturer": "Nike",
        "type": "T-Shirt",
        "price": 120,
        "imageUrl": "img/assets/niketishka.jpg"
    }
];


let productsArr = [];
const productsContainer = document.querySelector(".products-container");
const pagesContainer = document.querySelector(".pagesContainer")

//At the loading of the html page, creates products showedby 6 on first page
window.addEventListener('load', () =>{
    showBy(6);
    page(0);
})

//Creates page buttons (adds to html from the pattern)
function createPages(number) {
    const productBlock = document.createElement("div");
    productBlock.classList.add("page", "col-xxl-1", "col-sm-2", "col-3", "p-1");

    productBlock.innerHTML = ` 
    <div class="square-button" onclick="page(${number})" style="border: 1px solid rgba(220,220,220,0.9); text-align: center; padding: 5px 10px; cursor: pointer;">
        <div class="number">${number+1}</div>
    </div>
    `;

    pagesContainer.appendChild(productBlock);
}

//Clears page buttons to prevent overlaying of page buttons
function clearPages() {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.remove();
    })
}

//Clears products to prevent overlaying of products
function clearProducts() {
    const products = document.querySelectorAll(".assets");

    products.forEach(product => {
        product.remove();
    })
}

//Called when showBy has changed
function showBy(n) {
    clearPages();
    for(i=0; i<products.length/n; i++) {
        createPages(i)
        //creates arrays for each page
        productsArr[i] = [];
    }
    if (products.length - n <= 0) {
        clearPages();
    }
    generate(n);
    page(0);
    //Adding eventListeners
}

//called when switching pages
function page(number) {
    clearProducts();
    //creates products on page
    productsArr[number].forEach( product =>{
        show(product);
    });
    addEventListeners();
}

//generates products and sorts them for each page
function generate(n) {
    let count = 0;
    for (i=0; i < products.length/n; i++) {
        for (j=0; j<n;j++) {
            //adds product to each array of products for each page
            productsArr[i].push(products[count]);
            //counts id of products to prevent repeating
            count++;
            //breaks loop if there are no products left to prevent errors
            if (count > products.length) {
                break;
            }
        }
    }
}

//Creates products from the html pattern
function show(product) {
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
}

//Adding eventListeners Of (+- button)
function addEventListeners() {
    const assets = document.querySelectorAll('.assets');
    
    assets.forEach(asset => {
        const plus = asset.querySelector('.plus');
        const minus = asset.querySelector('.minus');
        const num = asset.querySelector('.num');
        const addButton = asset.querySelector('.add-button');
        
        plus.addEventListener('click', () => {
            let currentNum = parseInt(num.innerText, 10);
            if (currentNum < 99) {
                currentNum++;
                num.innerText = currentNum.toString().padStart(2, '0');
            }
        });
        
        minus.addEventListener('click', () => {
            let currentNum = parseInt(num.innerText, 10);
            if (currentNum > 1) {
                currentNum--;
                num.innerText = currentNum.toString().padStart(2, '0');
            }
        });

        addButton.addEventListener('click', () => {
            const productInfo = {
                manufacturer: asset.querySelector('.product-manufacturer a').innerText,
                price: parseFloat(asset.querySelector('.product-price').innerText.replace('$', '')),
                quantity: parseInt(num.innerText, 10),
                type: asset.querySelector('.product-type a').innerText,
                imageUrl: asset.querySelector('.product-image img').getAttribute('src')
            };
            
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            
            cart.push(productInfo);
            
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
}
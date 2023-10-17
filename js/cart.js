let products = [];

let assetElements = document.querySelectorAll('.assets');

assetElements.forEach((element) => {
    let id = element.getAttribute('data-id');
    let manufacturer = element.querySelector('.product-manufacturer a').textContent;
    let type = element.querySelector('.product-type a').textContent;
    let priceString = element.querySelector('.product-price').textContent;
    let price = parseFloat(priceString.replace(/\$| /g, ''));
    let imageUrl = element.querySelector('.product-image img').getAttribute('src'); 
    
    products.push({
        id: id,
        manufacturer: manufacturer,
        type: type,
        price: price,
        imageUrl: imageUrl
    });
});


console.log(products);

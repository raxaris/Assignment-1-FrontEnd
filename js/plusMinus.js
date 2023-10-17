const assets = document.querySelectorAll('.assets');
    
assets.forEach(asset => {
    const plus = asset.querySelector('.plus');
    const minus = asset.querySelector('.minus');
    const num = asset.querySelector('.num');
    
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
});

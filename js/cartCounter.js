function updateCartItemCount() {

    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartElementNum = 0;  

    cartItems.forEach(element => {
       cartElementNum += element.quantity;
    });

    document.getElementById('cartItemCount').innerText = cartElementNum;
}
window.addEventListener('load', () => {
     updateCartItemCount();
}); 
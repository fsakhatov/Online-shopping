let cartBtn = document.querySelector('.cart-btn');

let plusBtn = document.querySelector('.plus-btn');
let minusBtn = document.querySelector('.minus-btn');
let price = document.querySelector('.price');
let btnText = document.querySelector('.btn-text');

let addBtn = document.querySelector('.add-btn');
let sup = document.querySelector('.sup');
let cart = document.querySelector('.cart');
let cartMain = document.querySelector('.cart-main');
let checkoutBtn = document.querySelector('.checkout');
let priceText = document.querySelector('.price-text');
let totalPrice = document.querySelector('.total-price');
let deleteBtn = document.querySelector('.delete-btn');

plusBtn.addEventListener('click', () => {
    if( btnText.innerText >= 10) btnText.innerText = 10
   else btnText.innerText++
})
minusBtn.addEventListener('click', () => {
    if( btnText.innerText <= 0) btnText.innerText = 0;
    else btnText.innerText--
})

addBtn.addEventListener('click', () => {
        if( btnText.innerText > 0){
            sup.innerText = btnText.innerText;
        sup.style.display = 'flex';
        }   
})

cartBtn.addEventListener('click', () => {
  if(sup.innerText == 0) {
    cart.style.display = 'flex'
    cartMain.style.display = 'none';
    checkoutBtn.style.display = 'none';
  }
  else{
    cart.style.display = 'flex'
    cartMain.style.display = 'flex';
    priceText.innerText += ' ' + sup.innerText;
    totalPrice.innerText += `$`+(125 * sup.innerText)+'.00'
    checkoutBtn.style.display = 'flex';
  }

})
cartBtn.addEventListener('dblclick', () => {
    cart.style.display = 'none'
})
deleteBtn.addEventListener('click', () => {
    cartMain.style.display = 'none';
    checkoutBtn.style.display = 'none';
    sup.style.display = 'none';
})
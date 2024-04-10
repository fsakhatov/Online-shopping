let cartBtn = document.querySelector('.cart-btn');
let menuBtn = document.querySelector('.menu-btn');
let menuList = document.querySelector('.menu-list');
let menuBtnDelete = document.querySelector('.menu-btn-delete');

let container = document.querySelector('.container');
let mainImg = document.querySelector('.main-img');
let images = document.querySelectorAll('.images img');

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
        btnText.innerText = 0;
        }   
})

cartBtn.addEventListener('click', () => {
  if(sup.innerText == 0) {
    cart.classList.toggle('active')
    cartMain.style.display = 'none';
    checkoutBtn.style.display = 'none';
  }
  else{
   cart.classList.toggle('active')
    cartMain.style.display = 'flex';
    priceText.innerText = `Fall Limited Edition Sneakers $125 x ${sup.innerText}`;
    totalPrice.innerText = `$`+(125 * sup.innerText)+'.00'
    checkoutBtn.style.display = 'flex';
  }

})

deleteBtn.addEventListener('click', () => {
  // location.reload()
    cartMain.style.display = 'none';
    checkoutBtn.style.display = 'none';
    sup.style.display = 'none';
    sup.innerText = '';
})

menuBtn.addEventListener('click', () => {
  menuList.classList.add('active');
  container.style.opacity = '0.5'
  container.style.backgroundColor = 'black'
  
})
menuBtnDelete.addEventListener('click', () => {
  menuList.classList.remove('active')
  container.style.opacity = '1';
  container.style.backgroundColor = 'white'
})

images.forEach((v, i) => {
  v.addEventListener('click', (e) => {
  mainImg.src = `images/Rectanglerasm${i}.jpg`;
   
  })
})

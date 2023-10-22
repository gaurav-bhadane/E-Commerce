let searchForm=document.querySelector('.search-form')
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    account.classList.remove('active')
    navbar.classList.remove('active')
}
let shoppingCart=document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    account.classList.remove('active')
    navbar.classList.remove('active')

}
let account=document.querySelector('.login-form')
document.querySelector('#login-btn').onclick=()=>{
    account.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')

}
let navbar=document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    account.classList.remove('active')
}

window.onscroll =()=>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    account.classList.remove('active')
    navbar.classList.remove('active')
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4
      },
    },
  });
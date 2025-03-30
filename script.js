'use strict';

const headerFixed = document.querySelector(".header-fixed-wrapper");

const heartModal = document.getElementById("heartModal");

const heartButtonImage = document.getElementById('heartButtonImage');

const heartButtonModalClose = document.getElementById("heartButtonModalClose");

const heartModalProduct = document.querySelector(".heart-modal__content-product");

const heartModalProductDelete = document.querySelector(".heart-modal__content-product-delete");

const buttonCountPlus = document.getElementById("buttonCountPlus");

const buttonCountMinus = document.getElementById("buttonCountMinus");

const count = document.getElementById("buttonCountNumber");

const buttonCountPlusArea = document.getElementById("buttonCountPlusArea");

const buttonCountMinusArea = document.getElementById("buttonCountMinusArea");

const countArea = document.getElementById("buttonCountNumberArea");

const productsBtns = document.querySelector(".counter__product-types");

const productsBtnsItem = document.querySelector(".first-type");

const formItemDelete = document.querySelectorAll(".form__list-item-wrapper-delete");

const overlay = document.getElementById('overlay');

formItemDelete.forEach(button => {

  button.addEventListener('click', function () {
    const formItem = button.closest(".form__list-item-wrapper");
    if (formItem) {
      formItem.remove();
    }
  });
});

document.querySelectorAll('.openModal').forEach(button => {

  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add("no-scroll");
  });
});

document.querySelectorAll('.close-button').forEach(button => {

  button.addEventListener('click', function () {
    const modal = this.closest('.modal');
    modal.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove("no-scroll");
  });
});

overlay?.addEventListener('click', function () {

  document.querySelectorAll('.modal.open').forEach(modal => {
    modal.classList.remove('open');
    document.body.classList.remove("no-scroll");
  });

  overlay.classList.remove('open');
  document.body.classList.remove("no-scroll");
});

document.addEventListener('keydown', function (event) {

  if (event.key === 'Escape') {

    document.querySelectorAll('.modal.open').forEach(modal => {
      modal.classList.remove('open');
      document.body.classList.remove("no-scroll");
    });

    overlay.classList.remove('open');
    document.body.classList.remove("no-scroll");
  }
});

let selected = productsBtnsItem;

const firstProduct = {
  area: 0.98,
  price: 2500,
}

const secondProduct = {
  area: 1,
  price: 3000,
}

// let price = $('#price').data('oneprice');
// let area = $('#price').data('area');

addEventListener('click', (event) => {

  const { target } = event;

  if (target.tagName != 'BUTTON' || target.hasAttribute('selected')) return;

  count.value = 1;

  toggleAttribute(target);

  if (target.classList.contains('first-type')) {
    price = firstProduct.price;
    area = firstProduct.area;
    countArea.value = firstProduct.area;
    totalAmount.innerHTML = firstProduct.price;

  } else {
    price = secondProduct.price;
    area = secondProduct.area;
    countArea.value = secondProduct.area;
    totalAmount.innerHTML = secondProduct.price;
  }
    price = $('#price').data('oneprice');
    area = $('#price').data('area');
});

function toggleAttribute(target) {
  if (selected) {
    selected.removeAttribute('selected');
  }
  selected = target;
  selected.setAttribute('selected', 'true');
}

const totalAmount = document.getElementById("price");

countArea?.addEventListener('change', (event) => {

    price = $('#price').data('oneprice');
    area = $('#price').data('area');
  event.target.value = (Math.round(event.target.value / area) * area).toFixed(2);
  count.value = Math.round(event.target.value / area);
  totalAmount.innerHTML = +price * +count.value;
});

count?.addEventListener('change', (event) => {

    price = $('#price').data('oneprice');
    area = $('#price').data('area');
  event.target.value = Math.round(event.target.value);
  countArea.value = event.target.value * area;
  totalAmount.innerHTML = event.target.value * price;
});

buttonCountPlusArea?.addEventListener('click', () => {

    price = $('#price').data('oneprice');
    area = $('#price').data('area');
  countArea.value = (+countArea.value + area).toFixed(2);
  count.value = +count.value + 1;
  totalAmount.innerHTML = +totalAmount.innerHTML + +price;
});

buttonCountMinusArea?.addEventListener('click', () => {

    price = $('#price').data('oneprice');
    area = $('#price').data('area');
  if (countArea.value >= 1) {
    countArea.value = (+countArea.value - area).toFixed(2);
    count.value = +count.value - 1;
    totalAmount.innerHTML = +totalAmount.innerHTML - +price;
  }
});

buttonCountPlus?.addEventListener('click', () => {

    price = $('#price').data('oneprice');
    area = $('#price').data('area');
  count.value = +count.value + 1;
  countArea.value = (+countArea.value + area).toFixed(2);
  totalAmount.innerHTML = +totalAmount.innerHTML + +price;
});

buttonCountMinus?.addEventListener('click', () => {

    price = $('#price').data('oneprice');
    area = $('#price').data('area');
  if (count.value >= 2) {
    count.value = +count.value - 1;
    countArea.value = (+countArea.value - area).toFixed(2);
    totalAmount.innerHTML = +totalAmount.innerHTML - +price;
  }
});

let favorites = 0;

document.addEventListener('DOMContentLoaded', () => {

  const favoritesBtn = document.querySelectorAll(".favorites");
  const heartButtons = document.querySelectorAll('.heart-button');
  const heartButtonModal = document.querySelector('.heart-button-modal');

  favoritesBtn.forEach(favBtn => {

    favBtn.addEventListener('click', () => {
      heartModal.style.display = "block";
      document.body.classList.add("no-scroll");
    });
    
  })

})

heartButtonModalClose?.addEventListener("click", () => {
  heartModal.style.display = "none";
  document.body.classList.remove("no-scroll");
});

window.addEventListener("click", (event) => {
  if (event.target === heartModal) {
    heartModal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && heartModal.style.display === "block") {
    heartModal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});

heartModalProductDelete?.addEventListener("click", () => {
  heartModalProduct.remove();
});

window.onscroll = function () {

  if (window.scrollY >= 300) {
    headerFixed.classList.add('header-fixed-wrapper--active');

  } else if (window.scrollY < 300) {
    headerFixed.classList.remove('header-fixed-wrapper--active');
  }
}

document.addEventListener('click', function (event) {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const arrow = document.querySelector('.arrow');

  if (event.target.closest('.dropdown-btn')) {
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      arrow.classList.remove('up');
    } else {
      dropdownContent.style.display = 'block';
      arrow.classList.add('up');
    }
  } else if (!event.target.closest('.dropdown-content')) {
    dropdownContent.style.display = 'none';
    arrow.classList.remove('up');
  }
});

const burgers = document.querySelectorAll(".header-mobile__burger");

burgers.forEach((burger) => {
  const line1 = burger.querySelector(".header-mobile__burger-line1");
  const line2 = burger.querySelector(".header-mobile__burger-line2");
  const line3 = burger.querySelector(".header-mobile__burger-line3");
  const menuId = burger.getAttribute("data-menu");
  const menu = document.getElementById(menuId);

  burger?.addEventListener('click', function () {
    burger.classList.toggle("header-mobile__burger--active");
    line1.classList.toggle("header-mobile__burger-line1--active");
    line2.classList.toggle("header-mobile__burger-line2--active");
    line3.classList.toggle("header-mobile__burger-line3--active");
    menu?.classList.toggle("header__menu--active");
  });
});
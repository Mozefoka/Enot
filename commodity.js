'use strict';

const infoPopup = document.querySelector(".commodity__info-popup-wrapper");
const buttonCountPlus = document.getElementById("buttonCountPlus");
const buttonCountMinus = document.getElementById("buttonCountMinus");
const count = document.getElementById("buttonCountNumber");
const buttonCountPlusArea = document.getElementById("buttonCountPlusArea");
const buttonCountMinusArea = document.getElementById("buttonCountMinusArea");
const countArea = document.getElementById("buttonCountNumberArea");
const productsBtns = document.querySelector(".commodity__info-btns-products");
const productsBtnsItem = document.querySelector(".first");

let selected = productsBtnsItem;

const firstProduct = {
    area: 0.98,
    price: 2500,
}

const secondProduct = {
    area: 1,
    price: 3000,
}

let price = firstProduct.price;
let area = firstProduct.area;

addEventListener('click', (event) => {
    
    const {target} = event;

    if (target.tagName != 'BUTTON' || target.hasAttribute('selected')) return;

    count.value = 1;

    toggleAttribute(target);

    if (target.classList.contains('first')) {
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
});

function toggleAttribute(target) {
  if (selected) {
    selected.removeAttribute('selected');
  }
  selected = target;
  selected.setAttribute('selected', 'true');
}

const totalAmount = document.getElementById("price");

countArea.addEventListener('change', (event) => {
    event.target.value = (Math.round(event.target.value / area) * area).toFixed(2);
    count.value = Math.round(event.target.value / area);
    totalAmount.innerHTML = +price * +count.value;
});

count.addEventListener('change', (event) => {
    event.target.value = Math.round(event.target.value);
    countArea.value = event.target.value * area;
    totalAmount.innerHTML = event.target.value * price;
});

buttonCountPlusArea.addEventListener('click', () => {
    countArea.value = (+countArea.value + area).toFixed(2);
    count.value = +count.value + 1;
    totalAmount.innerHTML = +totalAmount.innerHTML + +price;
});

buttonCountMinusArea.addEventListener('click', () => {
   if (countArea.value >= 1) {
    countArea.value = (+countArea.value - area).toFixed(2);
    count.value = +count.value - 1;
    totalAmount.innerHTML = +totalAmount.innerHTML - +price;
    }
});

buttonCountPlus.addEventListener('click', () => {
    count.value = +count.value + 1;
    countArea.value = (+countArea.value + area).toFixed(2);
    totalAmount.innerHTML = +totalAmount.innerHTML + +price;
});

buttonCountMinus.addEventListener('click', () => {
if (count.value >= 2) {
    count.value = +count.value - 1;
    countArea.value = (+countArea.value - area).toFixed(2);
    totalAmount.innerHTML = +totalAmount.innerHTML - +price;
}
});

function popup() {
	infoPopup.classList.toggle("commodity__info-popup-wrapper--active");
};

window.addEventListener("click", (event) => {
    if (event.target == infoPopup) {
      infoPopup.classList.remove("commodity__info-popup-wrapper--active");
    }
});

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
  
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
  
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
  
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
  };
  
  tab();
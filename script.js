'use strict';

const burger = document.querySelector(".header__burger");
const line1 = document.querySelector(".header__burger-line1");
const line2 = document.querySelector(".header__burger-line2");
const line3 = document.querySelector(".header__burger-line3");
const menu = document.querySelector(".header__menu");
const promotions = document.querySelector(".header__menu-list-promotions-btn");
const promotionsItem = document.querySelector(".header__menu-list-promotions-item");
const questionsList = document.querySelector(".questions__list");
const filterForm = document.querySelector(".floor-covering__filter");
const filterReset = document.querySelector(".floor-covering__filter-reset");
const infoPopup = document.querySelector(".commodity__info-popup-wrapper");
let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let number = 1;

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

buttonCountPlus.addEventListener('click', () => {
        number++;
        count.innerHTML = number;
});

buttonCountMinus.addEventListener('click', () => {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
    }
});

burger.addEventListener('click', function() {
	burger.classList.toggle("header__burger--active");
	line1.classList.toggle("header__burger-line1--active");
	line2.classList.toggle("header__burger-line2--active");
	line3.classList.toggle("header__burger-line3--active");
	menu.classList.toggle("header__menu--active");
});

function addActive() {
	promotionsItem.classList.toggle("header__menu-list-promotions-item--active");
};

function popup() {
	infoPopup.classList.toggle("commodity__info-popup-wrapper--active");
};

window.addEventListener("click", (event) => {
    if (event.target == infoPopup) {
      infoPopup.classList.remove("commodity__info-popup-wrapper--active");
    }
});
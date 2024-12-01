'use strict';

const burger = document.querySelector(".header__burger");
const line1 = document.querySelector(".header__burger-line1");
const line2 = document.querySelector(".header__burger-line2");
const line3 = document.querySelector(".header__burger-line3");
const menu = document.querySelector(".header__menu");
const promotions = document.querySelector(".header__menu-list-promotions-btn");
const promotionsItem = document.querySelector(".header__menu-list-promotions-item");
const questionsItem = document.querySelectorAll(".questions__list-item");
const questionsTitle = document.querySelector(".questions__list-title");
const questionsText = document.querySelector(".questions__list-text");
const filterForm = document.querySelector(".floor-covering__filter");
const filterReset = document.querySelector(".floor-covering__filter-reset");
const infoPopup = document.querySelector(".commodity__info-popup-wrapper");
let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;
let price = 2500;

buttonCountPlus.onclick = function() {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
};

buttonCountMinus.onclick = function() {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
    }
};

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
'use strict';

const burger = document.querySelector(".header__burger");
const line1 = document.querySelector(".header__burger-line1");
const line2 = document.querySelector(".header__burger-line2");
const line3 = document.querySelector(".header__burger-line3");
const menu = document.querySelector(".header__menu");
const promotions = document.querySelector(".header__menu-list-promotions-btn");
const promotionsItem = document.querySelector(".header__menu-list-promotions-item");
const questionsItem = document.querySelector(".questions__list-item");
const questionsTitle = document.querySelector(".questions__list-item-title");
const questionsText = document.querySelector(".questions__list-item-text");

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

	questionsItem.addEventListener('click', function() {
		questionsTitle.classList.toggle("questions__list-item-title--active");
		questionsText.classList.toggle("questions__list-item-text--active");
	});
'use strict';

const burger = document.querySelector(".header__burger");
const line1 = document.querySelector(".header__burger-line1");
const line2 = document.querySelector(".header__burger-line2");
const line3 = document.querySelector(".header__burger-line3");
const menu = document.querySelector(".header__menu");
const menuList = document.querySelectorAll(".header__menu-list > li");
const promotions = document.querySelector("header__menu-list-promotions-btn");
const promotionsItem = document.querySelector("header__menu-list-promotions-item");

burger.addEventListener('click', function() {
	burger.classList.toggle("header__burger--active");
	line1.classList.toggle("header__burger-line1--active");
	line2.classList.toggle("header__burger-line2--active");
	line3.classList.toggle("header__burger-line3--active");
	menu.classList.toggle("header__menu--active");
});

menuList.forEach(menu => {
	menuList.addEventListener("click", function() {
		menu.classList.remove("header__menu--active");
		line1.classList.remove("header__burger-line1--active");
		line2.classList.remove("header__burger-line2--active");
		line3.classList.remove("header__burger-line3--active");
	});
});

promotions.addEventListener('click', function() {
	promotionsItem.classList.toggle("header__menu-list-promotions-item--active");
});
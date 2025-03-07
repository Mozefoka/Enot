'use strict';

const headerFixed = document.querySelector(".header-fixed-wrapper");
// const burger = document.querySelector(".header-mobile__burger");
// const line1 = document.querySelector(".header-mobile__burger-line1");
// const line2 = document.querySelector(".header-mobile__burger-line2");
// const line3 = document.querySelector(".header-mobile__burger-line3");
// const menu = document.querySelector(".header__menu");
const heartButton = document.getElementById('heartButton');
const heartButtonImage = document.getElementById('heartButtonImage');
const secondaryHeartButton = document.getElementById('secondaryHeartButton');

heartButton?.addEventListener('click', () => {

  if (heartButtonImage.src.includes('/icons/heart.svg')) {

    heartButtonImage.src = '/icons/red-heart.svg';

  } else {
    
    heartButtonImage.src = '/icons/heart.svg';
    
  }

  secondaryHeartButton.classList.remove('hidden');
  secondaryHeartButton.classList.add('visible');
});

secondaryHeartButton?.addEventListener('click', () => {
  alert('Вторая кнопка нажата!');
});

window.onscroll = function () {

	if (window.scrollY >= 300) {
		headerFixed.classList.add('header-fixed-wrapper--active');

	} else if (window.scrollY < 300) {
		headerFixed.classList.remove('header-fixed-wrapper--active');
	}
}

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const arrow = document.querySelector('.arrow');

    if (dropdownContent.style.display === 'flex') {
        dropdownContent.style.display = 'none';
        arrow.classList.remove('up');
    } else {
        dropdownContent.style.display = 'flex';
        arrow.classList.add('up');
    }
}

window.onclick = function(event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const arrow = document.querySelector('.arrow');
    if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
        dropdownContent.style.display = 'none';
        arrow.classList.remove('up');
    }
};

const burgers = document.querySelectorAll(".header-mobile__burger");

burgers.forEach((burger) => {
  const line1 = burger.querySelector(".header-mobile__burger-line1");
  const line2 = burger.querySelector(".header-mobile__burger-line2");
  const line3 = burger.querySelector(".header-mobile__burger-line3");
  const menuId = burger.getAttribute("data-menu");
  const menu = document.getElementById(menuId);

  burger?.addEventListener('click', function() {
    burger.classList.toggle("header-mobile__burger--active");
    line1.classList.toggle("header-mobile__burger-line1--active");
    line2.classList.toggle("header-mobile__burger-line2--active");
    line3.classList.toggle("header-mobile__burger-line3--active");
    menu?.classList.toggle("header__menu--active");
  });
});
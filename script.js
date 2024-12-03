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

// buttonCountPlus.addEventListener('click', () => {
//         number++;
//         count.innerHTML = number;
// });

// buttonCountMinus.addEventListener('click', () => {
//    if (number >= 2) {
//        number--;
//        count.innerHTML = number;
//     }
// });

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

document.addEventListener("DOMContentLoaded", function() {
    const snapSlider = document.getElementById('slider-snap');
    const snapSliderMobile = document.getElementById('slider-snap-mobile');
    const sliderSnapMax = document.getElementById('sliderSnapMax');
    const sliderSnapMin = document.getElementById('sliderSnapMin');
    const sliderSnapMaxMobile = document.getElementById('sliderSnapMaxMobile');
    const sliderSnapMinMobile = document.getElementById('sliderSnapMinMobile');
    const sliderSnapValues = [sliderSnapMin, sliderSnapMax];
    const sliderSnapValuesMobile = [sliderSnapMinMobile, sliderSnapMaxMobile];
    const sliderOptions = {
        start: [1, 10000],
        connect: true,
        range: {
            'min': 0,
            'max': 10000
        },
        format: {
            from: (formattedValue) => Number(formattedValue),
            to: (numericValue) => Math.round(numericValue),
        }
    };

    noUiSlider.create(snapSlider, sliderOptions);
    noUiSlider.create(snapSliderMobile, sliderOptions);

    snapSlider.noUiSlider.on('update', (values, handle) => {
        sliderSnapValues[handle].value = values[handle]
    })

    snapSliderMobile.noUiSlider.on('update', (values, handle) => {
        sliderSnapValuesMobile[handle].value = values[handle]
    })

    sliderSnapValues.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            snapSlider.noUiSlider.setHandle(handle, this.value);
        });
    
        input.addEventListener('keydown', function (e) {
    
            const values = snapSlider.noUiSlider.get();
            const value = Number(values[handle]);
    
            const steps = snapSlider.noUiSlider.steps();

    
            const step = steps[handle];
    
            let position;
    
            switch (e.which) {
    
                case 13:
                    snapSlider.noUiSlider.setHandle(handle, this.value);
                    break;
    
                case 38:
    
                    position = step[1];
    
                    if (position === false) {
                        position = 1;
                    }
    
                    if (position !== null) {
                        snapSlider.noUiSlider.setHandle(handle, value + position);
                    }
    
                    break;
    
                case 40:
    
                    position = step[0];
    
                    if (position === false) {
                        position = 1;
                    }
    
                    if (position !== null) {
                        snapSlider.noUiSlider.setHandle(handle, value - position);
                    }
    
                    break;
            }
        });
    });

    sliderSnapValuesMobile.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            snapSliderMobile.noUiSlider.setHandle(handle, this.value);
        });
    
        input.addEventListener('keydown', function (e) {
    
            const values = snapSliderMobile.noUiSlider.get();
            const value = Number(values[handle]);
    
            const steps = snapSliderMobile.noUiSlider.steps();

    
            const step = steps[handle];
    
            let position;
    
            switch (e.which) {
    
                case 13:
                    snapSliderMobile.noUiSlider.setHandle(handle, this.value);
                    break;
    
                case 38:
    
                    position = step[1];
    
                    if (position === false) {
                        position = 1;
                    }
    
                    if (position !== null) {
                        snapSliderMobile.noUiSlider.setHandle(handle, value + position);
                    }
    
                    break;
    
                case 40:
    
                    position = step[0];
    
                    if (position === false) {
                        position = 1;
                    }
    
                    if (position !== null) {
                        snapSliderMobile.noUiSlider.setHandle(handle, value - position);
                    }
    
                    break;
            }
        });
    });
 });
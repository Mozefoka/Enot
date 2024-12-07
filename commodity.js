'use strict';

const infoPopup = document.querySelector(".commodity__info-popup-wrapper");
const buttonCountPlus = document.getElementById("buttonCountPlus");
const buttonCountMinus = document.getElementById("buttonCountMinus");
const count = document.getElementById("buttonCountNumber");
const buttonCountPlusArea = document.getElementById("buttonCountPlusArea");
const buttonCountMinusArea = document.getElementById("buttonCountMinusArea");
const countArea = document.getElementById("buttonCountNumberArea");
const area = 0.98;

countArea.addEventListener('change', (event) => {
    event.target.value = (Math.round(event.target.value / area) * area).toFixed(2);
    count.value = event.target.value / area;
});

count.addEventListener('change', (event) => {
    event.target.value = Math.round(event.target.value);
    countArea.value = event.target.value * area;
});

buttonCountPlusArea.addEventListener('click', () => {
    countArea.value = +countArea.value + area;
    count.value = +count.value + 1;
});

buttonCountMinusArea.addEventListener('click', () => {
   if (countArea.value >= 1) {
    countArea.value = +countArea.value - area;
    count.value = +count.value - 1;
    }
});

buttonCountPlus.addEventListener('click', () => {
    count.value = +count.value + 1;
    countArea.value = +countArea.value + area;
});

buttonCountMinus.addEventListener('click', () => {
if (count.value >= 2) {
    count.value = +count.value - 1;
    countArea.value = +countArea.value - area;
}
});
console.log(countArea.value);
console.log(countArea.attributes);

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
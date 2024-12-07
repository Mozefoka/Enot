'use strict';

const filterForm = document.querySelector(".floor-covering__filter");
const filterReset = document.querySelector(".floor-covering__filter-reset");

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
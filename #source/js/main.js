const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');

function updateActiveSlide() {
    let centerX = sliderWrapper.scrollLeft + sliderWrapper.clientWidth / 2;

    slides.forEach(slide => {
        let slideCenterX = slide.offsetLeft + slide.clientWidth / 2;

        if (Math.abs(centerX - slideCenterX) < slide.clientWidth / 2) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

sliderWrapper.addEventListener('wheel', (event) => {
    event.preventDefault();
    sliderWrapper.scrollLeft += event.deltaY;
    updateActiveSlide();
});

updateActiveSlide(); 
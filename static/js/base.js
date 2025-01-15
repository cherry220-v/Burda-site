const toggler = document.querySelector('.navbar-toggler');
const navCollapse = document.querySelector('.navbar-collapse');

toggler.addEventListener('click', () => {
    const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
    toggler.setAttribute('aria-expanded', !isExpanded);
    navCollapse.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
const carousel = document.querySelector('#myCarousel');
const slides = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('.carousel-indicators button');
const prevButton = carousel.querySelector('.carousel-control-prev');
const nextButton = carousel.querySelector('.carousel-control-next');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

let autoPlayInterval = setInterval(goToNextSlide, 5000);

carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carousel.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(goToNextSlide, 5000);
});

showSlide(currentIndex);
});
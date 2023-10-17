let currentSlide = 0;
let movingForward = true;
const carousel = document.querySelector('.myCarousel');

function showSlides() {
    if (movingForward) {
        currentSlide++;
    } else {
        currentSlide--;
    }

    if (currentSlide >= carousel.children.length -6) {
        movingForward = false;
    } else if (currentSlide <= 0) {
        movingForward = true;
    }

    const offset = -(currentSlide * 16.66) + '%';
    carousel.style.transform = 'translateX(' + offset + ')';
}

setInterval(showSlides, 2000);

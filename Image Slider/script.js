const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

// initializalSlide();

document.addEventListener("DOMContentLoaded", initializalSlide);
function initializalSlide() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    // For automatic move
    intervalid = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index<0){
        slideIndex = slides.length - 1;
    }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

import {slide, slides} from "../pages/gallery-index.js";

var currentSlide = 0;


window.nextSlide = function nextSlide(){
    currentSlide++;
    updateSlide();
}

window.lastSlide = function lastSlide(){
    currentSlide--;
    updateSlide();
}

function updateSlide(){
    if (currentSlide > slides.length-1){
        currentSlide = 0;
    } else if (currentSlide < 0){
        currentSlide = slides.length-1;
    }

    document.querySelector(".galleryTitle").innerHTML = slides[currentSlide].title;
    document.querySelector(".galleryCaption").innerHTML = slides[currentSlide].caption;
    document.querySelector(".galleryLink").href = slides[currentSlide].link;
    document.querySelector(".galleryImage").src = slides[currentSlide].image;
    document.querySelector(".galleryImage").style = slides[currentSlide].imagePos;

}

updateSlide();
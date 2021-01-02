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
    document.getElementById("programGalleryTitle").innerHTML = slides[currentSlide].title;
    document.getElementById("programGalleryCaption").innerHTML = slides[currentSlide].caption;
    document.getElementById("programGalleryImage").src = slides[currentSlide].image;
    document.getElementById("programGalleryLink").href = slides[currentSlide].link;
}

console.log("script loaded");
updateSlide();
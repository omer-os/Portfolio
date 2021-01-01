import {slide} from "GalleryIndex.js";
import {slides} from "GalleryIndex.js";

var currentSlide = 0;


function nextSlide(){
    currentSlide++;
    updateSlide();
}

function lastSlide(){
    currentSlide--;
    updateSlide();
}

function updateSlide(){
    if (currentSlide > slides.length){
        currentSlide = 0;
    } else if (currentSlide < 0){
        currentSlide = slides.length;
    }

    console.log(slides[currentSlide]);
}
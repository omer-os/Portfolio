var currentSlide = 0;
var allSlides = document.querySelectorAll(".programGallery");

// code for gallery to function during use
window.nextSlide = function nextSlide(){ 
    currentSlide++;
    updateSlide();
}

window.lastSlide = function lastSlide(){
    currentSlide--;
    updateSlide();
}

function updateSlide(){
    if (currentSlide > allSlides.length-1){
        currentSlide = 0;
    } else if (currentSlide < 0){
        currentSlide = allSlides.length-1;
    }
    
    hideAll();
    allSlides[currentSlide].style.display = "grid";

}

function hideAll(){
    for (var i = 0; i < allSlides.length; i++){
        allSlides[i].style.display = "none";
    }
}

// code to set up gallery when site is being loaded


hideAll()
updateSlide();

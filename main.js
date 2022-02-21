const menuBtn=document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    document.querySelector('.menu-btn').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.line1').classList.toggle('active');
    document.querySelector('.line2').classList.toggle('active');
    document.querySelector('.line3').classList.toggle('active');
});


// var text=document.querySelector('.colored-text')
// var jobList=["software developer", "python programmer", "php developer"]
// var count=0

// // text writing animation

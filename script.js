function page4Animation(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    var elemc = document.querySelector("#elem-container")
    var fix = document.querySelector("#fixed-image")
    elemc.addEventListener("mouseenter",function(){
        fix.style.display= "block"
    });
    
    elemc.addEventListener("mouseleave",function(){
        fix.style.display= "none"
    });
    
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image")
            fix.style.backgroundImage = `url(${image})`
        })
    })
}



function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30, // Adjust space between slides if necessary
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        loop: true, // Optional: Adds loop functionality
    });
}

document.addEventListener('DOMContentLoaded', function() {
    swiperAnimation();
});


  swiperAnimation()
  page4Animation()
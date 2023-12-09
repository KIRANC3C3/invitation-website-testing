//swiper slider
var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      loop: true,
      autoplay:{
         delay: 2500,
         disableOnInteraction: false,
      },
});
//end swiper

$(document).ready(function(){

   // nav
   $(".hamburger-btn").click(function(){
      $(".header .nav").slideToggle();
   })

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
       $(".header").addClass("fixed");
       }
       else{
          $(".header").removeClass("fixed");


    }

  })

})
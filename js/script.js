$(document).ready(function(){


  /*~~~~~~~~~~~~~~~~~~~start nav~~~~~~~~~~~~~~ */
  if ($(window).width() <= 767){
    $(".bars_").click(function(){
      $(".nav_bar").toggle("500");
      $(".moboverlay").fadeIn("500")
      $("body").addClass("over_")
    })
    $(".close_").click(function(){
      $(".nav_bar").toggle("500");
      $(".moboverlay").fadeOut("500")
      $("body").removeClass("over_")
  
    })
    $(".moboverlay").click(function(){
      $(".nav_bar").toggle("500");
      $(".moboverlay").fadeOut("500")
      $("body").removeClass("over_")
    })
    $(".li_hover").click(function(){
      $(this).children().next().slideToggle("500")
    })
    $(".btn_drop_lang").click(function(){
      $(".ul_drop_lang").slideToggle("500")
    })
  }
  /*~~~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~~ */
$('.slider .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    rtl:true,
    padding:0,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*~~~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~~start offers~~~~~~~~~~~~~~~~~~~~~~ */

$('.new_arrival .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  Loop:true,
  autoplay:true,
  autoplaySpeed:5000,
  loop:true,
  speed:6000,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive:{
      0:{
          items:1,
          margin:15
      },
      600:{
          items:2
      },
      1000:{
          items:3,
          loop:true
      }
  }
});
  
  /* ~~~~~~~~~~~~~~~end offers~~~~~~~~~~~~~~~~~~~~~~ */



});


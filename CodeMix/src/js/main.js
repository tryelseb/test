//= ../../bower_components/jquery/dist/jquery.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= partials/wow.min.js
//= partials/tilt.jquery.min.js
//= partials/particle.js
//= https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js



// window.onresize = () => {
//     // console.dir(document.body);
//     var overl = document.getElementById("testtt");
//     var column = document.getElementById("js-hack");
//     // console.log(document.body.clientWidth);
//     if (document.body.clientWidth <= 1023){
//       overl.classList.remove("hack-row");
//       column.classList.remove("st-row");

//     } else {
//      overl.classList.add("hack-row");
//      column.classList.add("st-row");
//    }
//  }

$(document).foundation();
new WOW().init(); 

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".phone-button");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
// Phone menu
$(document).ready(function() {

  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function() {
    if ($(window).width() > 639) {
      $('nav ul').removeAttr('style');
    }
  });
});

function moveToSection(event) {
  event.preventDefault();

  var target = $(event.target).attr('href');
  var offsetTop = $(target).offset().top;

  if ($('.button_hamburger').is(':visible')) {
    $('.button_hamburger + .menu, #overlay').removeClass('is-visible');
    $('body').removeClass('hidden');
    $('.button_hamburger').removeClass('is-active');
  }

  $('html, body').animate({
    scrollTop: offsetTop,
  }, 500);
}

$(".smoothScroll").on('click', moveToSection);

$(".send-email").delay(2000).fadeOut(1000);

$("#contacts_form").on("submit", function (ev, elem) {
  ev.preventDefault();
});


// Fixed menu
jQuery("document").ready(function($){

  var menu = $('.main-header');
  var menu_color = $('.main-menu__link');
  var logo_color = $('.logo-color ');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      menu.addClass("fixed-menu-nav");
      menu_color.addClass("fixed-menu-color");
      logo_color.addClass("fixed-logo-color");
      $('.main-menu').removeClass("decor-menu");

    } else {
      menu.removeClass("fixed-menu-nav");
      menu_color.removeClass("fixed-menu-color");
      logo_color.removeClass("fixed-logo-color");
      $('.main-menu').addClass("decor-menu");
    }
  });

});

// Menu
$("#navToggle").click(function() {

  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $('.main-menu').removeClass("decor-menu");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
    $('.main-menu__list li').on('click', function(){
      $('.navBurger').removeClass('active');
      $('#test').removeClass('open');
      $('body').removeClass('locked');
      $(".fixed-menu-color").css("color", "");
    })
  });
// Go to top
jQuery(document).ready(function($){
  var speed = 500,
  $scrollTop = $('<a href="#" title="go to top" class="scrollTop"><i class="fa fa-angle-double-up"></i></a>').appendTo('body');        
  $scrollTop.click(function(e){
    e.preventDefault();
    $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
  });
  function show_scrollTop(){
    ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
  }
  $(window).scroll( function(){ show_scrollTop(); } );
  show_scrollTop();
});


jQuery(window).scroll(function(){
 var $sections = $('section');
 $sections.each(function(i,el){
  var top  = $(el).offset().top-100;
  var bottom = top +$(el).height();
  var scroll = $(window).scrollTop();
  var id = $(el).attr('id');
  if( scroll > top && scroll < bottom){
    $('a.active').removeClass('active');
    $('a[href="#'+id+'"]').addClass('active');

  }
})
});

$("nav").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});

function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("container-tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("serv-list__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activet", "");
  }
  document.getElementById(tab).style.display = "flex";
  evt.currentTarget.className += " activet";
}



/// Effects

/* ---- particles.js config ---- */

particlesJS("particles-js", {"particles":{"number":{"value":3,"density":{"enable":true,"value_area":40}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":3,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3787908679834909,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0.1,"random":true,"anim":{"enable":false,"speed":0,"size_min":0.01,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
particlesJS("particles-jsn", {"particles":{"number":{"value":3,"density":{"enable":true,"value_area":40}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":3,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3787908679834909,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0.1,"random":true,"anim":{"enable":false,"speed":0,"size_min":0.01,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
particlesJS("particles-jst", {"particles":{"number":{"value":3,"density":{"enable":true,"value_area":40}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":3,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3787908679834909,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0.1,"random":true,"anim":{"enable":false,"speed":0,"size_min":0.01,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

var pointDestroy = 529;
var ct = 1;
slickVar = {
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 3000,
  arrows: false,
  centerMode: false,
  draggable: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1000,
    settings: { slidesToShow: 3 }
  },
  {
    breakpoint: 700,
    settings: { slidesToShow: 2 }
  },
  {
    breakpoint: 529,
    settings: "unslick"
  }
  ]
} 
// Ne znanije js-a mne ne pomecha po etomy smotri etot yjasnuj kod i plach
$('.main-slider').slick(slickVar);
// console.log(ct);
$(window).on('resize', function(){
 var width = $(window).width();
 if(width > pointDestroy && ct == 0) {
  $('.main-slider').slick(slickVar);
  ct = 1;
          // console.log(ct);
        } else {
         if(width < pointDestroy) {
          ct = 0;
          // console.log(ct);
        }
      }
    });



$('.containet-slider').slick({
 centerMode: false,
 draggable: true,
 slidesToShow: 2,
 slidesToScroll: 1,
 prevArrow: '<div class="wrp-slide-bt left"></div>',
 nextArrow: '<div class="wrp-slide-bt right"></div>',
 responsive: [
 {
  breakpoint: 1000,
  settings: { slidesToShow: 1 }
}
]
});
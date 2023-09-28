document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i+1}`] = new Swiper(n, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.8,
		slidesOffsetBefore: -125,
      autoHeight: true,
      autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
      },
      // speed: 500,
      // easing: 'ease',
      // autoplay: true,
      // autoplaySpeed: 1000,
      // pauseOnFocus: true,
      // pauseOnHover: true,
      // pauseOnDotHover: true,
      // draggable: true,
      // waitForAnimate: false, 
      // centerMode: false, 
      // variableWidth: true, 
   })
})
bindSwipers(slider1, slider2, slider3, slider4, slider5)



"use strict" 

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },

   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },

   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },

   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry()||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
};

if(isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

// бургер

$('.burger-menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('burger-menu-btn_active');
	$('.header-menu').toggleClass('header-menu_active');
 });


//  модальное окно музыка   -------------------------------------------------

 
let popup = document.getElementById('popup');

function openPopup() {
   popup.classList.add('open-popup');
}
function closePopup() {
   popup.classList.remove('open-popup');
}


//  модальное окно музыка 2 end -----------------------------------------------
//  модальное окно музыка   -------------------------------------------------

 
let popupp = document.getElementById('popupp');

function openPopupp() {
   popupp.classList.add('open-popupp');
}
function closePopupp() {
   popupp.classList.remove('open-popupp');
}


//  модальное окно музыка 2 end -----------------------------------------------


window.onload = () => {
   let main = document.getElementById("header");
   
   let deviceHasTouchScreen = false;
   let userUsesTouchScreen = false;
   
   function hasTouchScreen() {
     if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
       return true;
     } else {
       if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
         return true;
       } else {
         try {
           document.createEvent('TouchEvent');
           return true;
         } catch (e) {
           return navigator.userAgent.match(/Android|webOS|iPhone|iPad|BlackBerry/i);
         }
       }
     }
   }
   
   // try to detect if there's a touch screen
   deviceHasTouchScreen = hasTouchScreen();
   
   window.addEventListener('touchstart', (e) => {
     // user has a device and is using it
     deviceHasTouchScreen = true;
     userUsesTouchScreen = true;
     
     main.innerHTML = 'User uses a touch screen';
   });
   
   main.innerHTML = 'Device ' + (deviceHasTouchScreen ? 'has' : 'does not have') + ' a touch screen';
 }
 
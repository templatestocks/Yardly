/** 
  * Template Name: Yardly
  * Version: 1 
  * Template Scripts
  * Author : TemplateStocks
  * Author URI: https://templatestocks.com/

  Custom JS
  

  1. MOBILE MENUE
  2. TOP SLIDER (SLICK SLIDER)
  3. SLICK SLIDER ( CLIENT TESTIMONIAL )
  4. SLICK SLIDER ( CLIENT LOGO )
  5. ANIMATED COUNTER
  6. SCROLL TOP BUTTON
  7. SERVICE FAQ
  8. MENU SMOOTH SCROLLING
  

  
**/


(function($) {

  /* ----------------------------------------------------------- */
  /*  1. MOBILE MENUE
  /* ----------------------------------------------------------- */  

  $("label[for=showDrop]").on('click', function() {
    $('label[for=showDrop] .fa-chevron-up, label[for=showDrop] .fa-chevron-down').toggleClass("fa-chevron-up fa-chevron-down");
    
   });

   $("label[for=showDrop2]").on('click', function() {
    $('label[for=showDrop2] .fa-chevron-up, label[for=showDrop2] .fa-chevron-down').toggleClass("fa-chevron-up fa-chevron-down");
    
   });

   $("label[for=showDrop3]").on('click', function() {
    $('label[for=showDrop3] .fa-chevron-up, label[for=showDrop3] .fa-chevron-down').toggleClass("fa-chevron-up fa-chevron-down");
    
   });

   $("label[for=showDrop4]").on('click', function() {
    $('label[for=showDrop4] .fa-chevron-up, label[for=showDrop4] .fa-chevron-down').toggleClass("fa-chevron-up fa-chevron-down");
    
   });

   

   /* ----------------------------------------------------------- */
  /*  2. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

  jQuery('.ts-top-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,     
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  });

  /* ----------------------------------------------------------- */
  /*  3. SLICK SLIDER ( CLIENT TESTIMONIAL )
  /* ----------------------------------------------------------- */   

  $('.ts-testimonial-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
  });


  /* ----------------------------------------------------------- */
  /*  4. SLICK SLIDER ( CLIENT LOGO )
  /* ----------------------------------------------------------- */   

  $('.ts-client-logo').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    
  
  /* ----------------------------------------------------------- */
  /*  5. ANIMATED COUNTER
  /* ----------------------------------------------------------- */

  let count = document.querySelectorAll(".ts-count")
  let arr = Array.from(count)
  
  arr.map(function(item){
    let startnumber = 0

    function counterup(){
    startnumber++
    item.innerHTML= startnumber

    if(startnumber == item.dataset.number){
        clearInterval(stop)
      }
    }

    let stop =setInterval(function(){
      counterup()
    },50)

  })


  /* ----------------------------------------------------------- */
  /*  6. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

  jQuery(window).scroll(function(){
	    
    if (jQuery(this).scrollTop() > 300) {
      
      jQuery('.scrollToTop').fadeIn();
      
    } else {
      
      jQuery('.scrollToTop').fadeOut();
      
    }
    
  });
   
  // Click event to scroll to top

  jQuery('.scrollToTop').click(function(){
    
    jQuery('html, body').animate({scrollTop : 0},800);
    
    return false;
    
  });


  /* ----------------------------------------------------------- */
  /*  7. SERVICE FAQ
  /* ----------------------------------------------------------- */

  var coll = document.getElementsByClassName("ts-service-collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }


  /* ----------------------------------------------------------- */
  /*  8. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */ 

  $(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var hash = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900);
        return false;
    });
  });

   
})( jQuery );


$(document).ready(function() {


   $('#carouselHacked').carousel();

    //this code is for the gmap
     var map = new GMaps({
        el: '#map',
         lat: 30.053936,
         lng: 31.204819
      });


      //this code is for smooth scroll and nav selector
            $(document).ready(function () {
              $(document).on("scroll", onScroll);

              //smoothscroll
              $('a[href^="#"]').on('click', function (e) {
                  e.preventDefault();
                  $(document).off("scroll");

                  $('a').each(function () {
                      $(this).removeClass('active');
                  })
                  $(this).addClass('active');

                  var target = this.hash,
                      menu = target;
                  $target = $(target);
                  $('html, body').stop().animate({
                      'scrollTop': $target.offset().top+2
                  }, 500, 'swing', function () {
                      window.location.hash = target;
                      $(document).on("scroll", onScroll);
                  });
              });
          });




     //this code is for animation nav
     jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 150) {
          jQuery(".header").css({"background": "#B193DD",});
          jQuery(".top-header img.logo").css({"margin-top": "-40px", "margin-bottom": "0"});
          jQuery(".navbar-default").css({"margin-top": "-15px",});
        }
        else{
          jQuery(".header").css({"background": "transparent",});
           jQuery(".top-header img.logo").css({"margin-top": "-12px", "margin-bottom": "25px"});
           jQuery(".navbar-default").css({"margin-top": "12px", "margin-bottom": "0"});

        }
     });

    $('#m1').click(function () {
        $('#mom').fadeIn("fast");
        $('#minor').fadeOut("fast");
        $(this).addClass('active-box');
        $('#m2').removeClass('active-box');

    });

    $('#m2').click(function () {
        $('#minor').fadeIn("fast");
        $('#mom').fadeOut("fast");
        $(this).addClass('active-box');
        $('#m1').removeClass('active-box');
    });

    $("#m1, #m2").click(function (){
        $('html, body').delay(300).animate({
            scrollTop: $("#mmS").offset().top - 100
        }, 500);
    });


    /* applyClickEvent */
    function applyClickEvent() {
        $('a[href*=#]').on('click', function (e) {
            e.preventDefault();

            if ($($.attr(this, 'href')).length > 0) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 150
                }, 1000);
            }
            return false;
        });
    }
    applyClickEvent();


});

$(document).ready(function() {
  AOS.init();
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

  $(".tovarimg").slick({ 
    dots: false,
    infinite: true,
    adaptiveHeight: true
  })

  $(".rew-js").slick({ 
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  function animateScroll() {
    $('.js-scroll').click(function (e) {
      e.preventDefault();
      var id;
      id = $(this).attr('href');
      id = id.replace('#', '');
      $('html, body').animate({
        scrollTop: $('.' + id).offset().top
      }, 1700, 'swing');
    });
  }
  animateScroll();
  // 	//=========================================================скролл к якорю
});

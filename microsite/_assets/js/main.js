// general js for the project that wouldn't be a reuseable component

function sectionFade() {
  var sections = $('.js-section-fade');
  sections.each(function(){
    if( !$(this).hasClass('fade-ready') ){
      $(this).addClass('fade-ready');
    }

    var scrolled = $(document).scrollTop();
    var distance  = $(this).offset().top - ( $(window).height() * 0.8 );

    if( scrolled > distance ){
      $(this).addClass('fade-done');
    }

  });
}

sectionFade();
$(document).scroll(function(){ sectionFade(); });

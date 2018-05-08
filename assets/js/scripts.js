(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    //sticky navbar detection
    $(window).scroll(function(e) {
      if($(window).scrollTop() < $(".main-title").offset().top){
        $(".topnav").removeClass("sticky");
      }
      else {
        $(".topnav").addClass("sticky");
      }
    });

    //click on the menu button
    $(".sidenav-toggle").click(function(e){
      $(".sidenav-wrapper").addClass("active");
    });
    //click on the menu close button
    $(".sidenav-close").click(function(e){
      $(".sidenav-wrapper").removeClass("active");
    });

    //initialize budget slider
    var slider = document.getElementById('budget-slider');

    noUiSlider.create(slider, {
      start: [0.5, 4],
      connect: true,
      range: {
        'min': [ 0, 0.5 ],
        '12.5%': [ 0.5, 0.5 ],
        '25%': [ 1, 0.5 ],
        '37.5%': [ 1.5, 0.5 ],
        '50%': [ 2, 1 ],
        '62.5%': [ 3, 1 ],
        '75%': [ 4, 1 ],
        '87.5%': [ 5, 1 ],
        'max': [ 6 ]
      },
      pips: {
        mode: 'range',
        density: 8,
        format: wNumb({
          decimals: 1,
          suffix: 'Cr'
        })
      }
    });
  });

})(jQuery, window, document);

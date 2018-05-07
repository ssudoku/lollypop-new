(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    //click on the menu button
    $(".sidenav-toggle").click(function(e){
      $(".sidenav-wrapper").addClass("active");
    });
    //click on the menu close button
    $(".sidenav-close").click(function(e){
      $(".sidenav-wrapper").removeClass("active");
    });
  });

})(jQuery, window, document);

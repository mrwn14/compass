
$(document).ready(function(){
    $("button.navbar-toggler").on('click', function(){
        $("nav.navbar").toggleClass('small-screen-nav-button');
    });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });





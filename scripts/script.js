
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

$(document).ready(function() {
    fetch("./data.json").then(response => {
       return response.json();
    })
    .then(jsondata => console.log(jsondata));
});



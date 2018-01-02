$(document).ready(function(){
  // mobile nav
  $('#close--mobile-nav').click(function (e) {
    e.preventDefault();
    $('#mobile-nav').addClass('slideOutRight').removeClass('slideInRight');
    $('body').removeClass('overlay-is-open')
  });
  $('#open--mobile-nav').click(function (e) {
    e.preventDefault();
    $('#mobile-nav').addClass('slideInRight').removeClass('slideOutRight dn');
    $('body').addClass('overlay-is-open');
  });

  // nav active state
  $(function() {
    $('.nav-link[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  });

  // spinner on form submit
  $('.register').submit(function (e) {
    $('#spinner').show();
    return;
  });
});

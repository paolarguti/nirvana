// mobile nav
$(document).ready(function(){
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
});

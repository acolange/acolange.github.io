$(document).ready( function() {
    $(".billboard").click( function() {
      $(".icons").fadeOut('slow', function() {
        $('.billboard').css('background-color', '#535353');
        $('.cardInfo').show();
      });
    });
    $('.cardInfo').click( function() {
      $('.billboard').animate({height: '1098px'}, 1000);
    });
});

$(document).ready( function() {
    $(".billboard").click( function() {
      $(".icons").fadeOut('slow', function() {
        $('.billboard').css('background-color', '#535353');
        $('.cardInfo').show();
      });
    });
});

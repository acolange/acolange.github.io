$(document).ready( function() {
    $(".billboard").click( function() {
      $(this).addClass("spin");
    });

    // $('.spinner').animate({  textIndent: 0 }, {
  //     step: function(go) {
  //       $(this).css('-moz-transform','rotateY('+go+'deg)');
  //       $(this).css('-webkit-transform','rotateY('+go+'deg)');
  //       $(this).css('-o-transform','rotateY('+go+'deg)');
  //       $(this).css('transform','rotateY('+go+'deg)');
  //     },
  //     duration: 3000,
  //     complete: function(){ alert('done') }
  // });

});

(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();


    /* ==========================================================================
    countdown timer
    ========================================================================== */
     jQuery('#clock').countdown('2027/05/10',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Dias</div> '
      +'<div class="time-entry hours"><span>%H</span> Horas</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutos</div> '
      +'<div class="time-entry seconds"><span>%S</span> Segundos</div> '));
    });
  });      

}(jQuery));
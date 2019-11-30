$(document).ready(function () {

    $('.notification-icon').on('click', function () {
        $('.pop-up').fadeToggle(500);
    });

    $('.plus i').on('click',function(){
        $(this).toggleClass('rotate');
    })
   
    $('.plus').on('click',function(){
        $('.icons').toggle();
    })
    msg_send();

});



var msg_send = function () {
    jQuery('.send').click(function () {
      var msg_txt = jQuery('.msg-txt').val();
      console.log(msg_txt);
      jQuery('.msg-area').append(jQuery('<div class="msg">'+msg_txt+'</div>'));
      jQuery('.msg-txt').val("");
    });
  }
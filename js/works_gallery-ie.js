$(document).ready(function(){

    $('.button', '#works').click(function(){
      var filter = $(this).attr('data-filter');
      var nItems = $(filter, '#works').length;
      var count = 0;
      $('.item', '.grid').fadeOut(300, function(){
        count++;
        if(count == nItems){
          setTimeout(function(){
            $(filter, '.grid').fadeIn(250);
          }, 300);
        }
      });
    });

});

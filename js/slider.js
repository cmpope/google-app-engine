
$(document).ready(function(){
  $('#firstpage-firstcolumn-top').hover(
    function(){
      var $useCase = $(this).prop('name');
      $(this).attr('src', '/images/' + $useCase + '_orange.png')
  },function(){
      var $useCase = $(this).prop('name');
      $(this).attr('src', '/images/' + $useCase + '.png');
  });
});
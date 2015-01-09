
$(document).ready(function(){
  $('.firstpage-firstcolumn-top').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });
  $('.firstpage-firstcolumn-bottom').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });

/* ----------- */

  $('.firstpage-secondcolumn-top').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });
  $('.firstpage-secondcolumn-bottom').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });

/* ------------ */

  $('.firstpage-thirdcolumn-top').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });
  $('.firstpage-thirdcolumn-bottom').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });

/* -------------- */

  $('.secondpage-firstcolumn-top').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });

  $('.secondpage-secondcolumn-top').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });

  $('.secondpage-thirdcolumn-top').hover(
    function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '_orange.png');
  },function(){
      var $image = $(this).find('img');
      var $useCase = $image.prop('name');
      $image.attr('src', '/images/' + $useCase + '.png');
  });
});
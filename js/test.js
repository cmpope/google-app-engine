$(document).ready(function(){
    $('button').click(function(){
      $.ajax({
          url: "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=marketo&prop=revisions&rvprop=content&indexpageids",
          dataType: "jsonp",
          headers: { 'Api-User-Agent': 'Example/1.0' },
          success: function( response ) {
            var r = response;
            var blob = r.query.pageids[0];
            var x = r.query.pages[blob].revisions["0"]["*"];
            console.log(x);
            $('#ajax_test').append(x);
          }
        });
    });
});
   

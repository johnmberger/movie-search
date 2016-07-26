$(function(){
  console.log('boop!');

  $.ajax({
    method:   'GET',
    dataType: 'json',
    url:      'http://www.omdbapi.com/?t=chef' }).done(function(results) {
      console.log(results);
    });
});

$(function(){
  console.log('boop!');

  $.ajax({
    method:   'GET',
    dataType: 'json',
    url:      'http://www.omdbapi.com/?' }).done(function(results) {
      console.log(results);
    });
});

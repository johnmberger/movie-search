$(function(){
  console.log('boop!');

  $('form').on('submit', function(e) {
    e.preventDefault();
    var title = $('#searchBox').val();
    $.ajax({
      method:   'GET',
      dataType: 'json',
      url:      'http://www.omdbapi.com/?t=' + title, }).done(function(results) {
        console.log(results);
      });
  });
})

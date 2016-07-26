$(function(){
  console.log('boop!');

  $('form').on('submit', function(e) {
    e.preventDefault();
    var title = $('#searchBox').val();
    $.ajax({
      method:   'GET',
      dataType: 'json',
      url:      'http://www.omdbapi.com/?t=' + title
    }).done(function(results) {
        var genreArray = results.Genre.split(', ')
        console.log(genreArray);
        for (var i = 0; i < genreArray.length; i++) {
          $('#dropDownPlaceholder').after('<option value="' + genreArray[i] +'">' + genreArray[i] + '</option>');
        }
      });
  });
})

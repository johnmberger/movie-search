$(function(){
  var genreArray = [];
  var movieArray = [];
  $('form').on('submit', function(e) {
    e.preventDefault();
    var title = $('#searchBox').val();
    $.ajax({
      method:   'GET',
      dataType: 'json',
      url:      'http://www.omdbapi.com/?t=' + title
    }).done(function(results) {
        $('#searchBox').val('');
        movieArray.push(results);
        var title = results.Title;
        var poster = results.Poster;
        $('#resultDiv').append('<div class="col-md-4 text-center"id="' + title + '"><img src="' + poster + '"><h1>'+ title + '</h1></div>');

        // adds new genres to genreArray
        var newGenres = results.Genre.split(', ');
        genreArray = genreArray.concat(newGenres);

        // filters genreArray for duplicates
        genreArray = genreArray.filter(function(elem, pos) {
          return genreArray.indexOf(elem) == pos;
        });

        // removes old dropdown list
        $('#dropDownPlaceholder').nextAll().remove();

        // adds updated genre list to dropdown
        for (var i = 0; i < genreArray.length; i++) {
          $('#dropDownPlaceholder').after('<option value="' + genreArray[i] +'">' + genreArray[i] + '</option>');
        } console.log(movieArray);
      });
  });

  $('#select').change(function() {
    var value = $(this).val();
    $('#resultDiv').children().css('display', 'none');
    //Cross-reference array of movie objects here.
  })
})

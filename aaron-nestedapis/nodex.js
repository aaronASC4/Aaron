$.ajax({
  url: 'https://randomuser.me/api/',
  url: 'https://restcountries.eu/rest/v2/alpha/NL',
  dataType: 'json',
  success: function(data) {
    console.log(data.results);
    var userFirstName = data.results[0].name.first;
    var userLastName = data.results[0].name.last;
    var userPhoto = data.results[0].picture.thumbnail;
    var userState = data.results[0].location.state;
    $("body").append("<h1>This is"+userFirstName+userLastName+"they are from"+userState+"</h1>");
  }
});

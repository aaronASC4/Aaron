$.ajax({
  url: 'https://randomuser.me/api/',
  url: 'https://restcountries.eu/rest/v2/alpha/NL',
  dataType: 'json',
  success: function(data) {
      var test = data.results;
    console.log(test[0]);
    var userFirstName = data.results[0].name.first;
    var userLastName = data.results[0].name.user.last;
    var userPhoto = data.results[0].picutre.thumbnail;
    var userState = data.results[0].location.state;
    
  }
});

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'yaml',
  success: function(data) {
      var user = data.results[5];
    //   var cell = user.fields.cell;
      console.log(user);
      $("body").append("<h1>Test "+user.name.last+"</h1>");
  }
});
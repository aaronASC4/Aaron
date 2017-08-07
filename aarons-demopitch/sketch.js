var foodURL = "http://setgetgo.com/randomword/get.php";

function RandomWord() {
var requestStr = "http://randomword.setgetgo.com/get.php";

$.ajax({
    url:foodURL,
    success:function(data){
        var food = data;
        $("body").append("<h1>" +food+ "</h1>");
    }    
})
}

//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}
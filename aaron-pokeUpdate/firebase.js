//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var dbUser = $(otherName).val();
    var dbWins = $(".wins").val();
    var dbLoss = $(".loses").val();
    console.log(dbUser + " : " + " Wins : " + dbWins + " Losses : " + dbLoses);

    //Update database here
    var score = {
        USERNAME : dbUser,
        WINS : dbWins, 
        LOSSES : dbLoss,
    }

    database.push(score);

}

database.on("child_added", function(rowData){
    var row = rowData.val();
    var dbUser = row.USERNAME;
    var dbWins = row.WINS;
    var dbLoss = row.LOSSES;

    //var fullText = "<p>" + name + " : " + message + "</p>";
   // $(".allMessages").append(fullText);
});

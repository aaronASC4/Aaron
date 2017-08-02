var HP = 100;
var gold = 0;
var numberDefeated = 0

function updateStats(){
    $("#stats").text("HP:  " + HP + " // Gold:  " + gold + "  // Ogres Slain:  " + numberDefeated);
}

function spawnOgre(){
    $("#ogres").prepend(
        "<img src='http://icons.iconarchive.com/icons/majdi-khawaja/shrek/256/Shrek-icon.png'/>"
    )
}

    function attack(){
        if(HP>0){
            if(Math.random() * 100 > gold){
                gold = gold + 10;
                numberDefeated++;

                $("#ogres").prepend(
                    "<p style='color:blue'> You won! + 10 gold. </p>"
                );
            }
            else {
                gold --;
                HP --;
                $("#ogres").prepend(
                    "<p style='color:red'> You lost! -1 gold </p>"
                );
            }
            updateStats();
            spawnOgre();
        }
        else{
            // game over
            $("#ogres").prepend(
                "<h1> GAME OVER </h1>"
            );
        }
    }

function setup(){
    $("body").append(
    "<h1> Welcome to Ogre Fighter v1.0</h1>"
);
    $("body").append(
        "<div> <h3> STATS </h3> <p id='stats'> </p> </div>"
    );
    $("body").append(
        "<button onclick='attack()'> Attack the Ogre! </button>"
    )
    $("body").append(
        "<div id='ogres'></div>"
    );
    updateStats();
}


//Setup HTML ELEMENT

//Add title to html - requires some setup

//show user stats (HP, gold, numberDefeated) - requires setup
//ADD a random ogreimage to start of body tag, requires setup
// when player clicks an 'attack' button requires setup>

// if player has HP
    // if player defeats ogre
        //add paragraph tag saying "you win"
        //+ gold to player
        //numb of defeated ogres
    //else
    // add paragraph tag saying "you lost"
    // - gold
    // - HP
    // updateStats
    //Add random ogre image
//else
//add paragraph tag saying 'game over'

$(document).ready(setup);
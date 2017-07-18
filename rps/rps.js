var playerChoice = "p";
var cpuChoice = "p";
if (playerChoice == "r" && cpuChoice == "p"){
    console.log("CPU won because it chose paper.");
}
if (playerChoice == "r" && cpuChoice == "s"){
    console.log("You won because you chose rock");
}
if (playerChoice == cpuChoice){
    console.log("It's a draw.");
}
if (playerChoice == "s" && cpuChoice == "r"){
    console.log("CPU won because the computer chose rock");
}
if (playerChoice == "s" && cpuChoice == "p"){
    console.log("You won because you chose scissors");
}
if (playerChoice == "p" && cpuChoice == "s"){
    console.log("CPU won because the computer chose scissors");
}
if (playerChoice == "p" && cpuChoice == "r"){
    console.log("You won because the computer chose rock");
}

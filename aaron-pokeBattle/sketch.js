function Pokemon(name, hp, atk){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
}
var Charizard = new Pokemon("Charizard","Fire","200","120","150");
var Pikachu = new Pokemon("Pikachu","Electric", "180","103","76");

var username = prompt("Please enter your name");

function setup(){
    createCanvas(1350,800);
    background("green")
    strokeWeight(1);
    fill("yellow");
    rect(250, 300, 200, 250,40,40,40,40);

    fill("red");
    rect(1050, 300, 200, 250,40,40,40,40);
    fill("blue");
    rect(250, 200, 250, 50);

    fill("blue");
    rect(1000, 200, 250, 50);

}
function draw(){
    textSize(32);
    s = username;
    textSize(32);
    text(s,250,280);
    fill("white");

    textSize(32);
    text("CPU",1000,280);
    fill("white");

    textSize(20);
    text("Pikachu",310,600);
    fill("white");

    textSize(20);
    text("Charmander",1100,600);
    fill("white");
}

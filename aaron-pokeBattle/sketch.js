function setup() {
    createCanvas(1350, 800);
    background("green")
    strokeWeight(1);

    fill("blue");
    rect(250, 200, 250, 50);

    fill("blue");
    rect(900, 200, 250, 50);
    //rect(30, 30, 370, 50);
    //fill("blue");
    //rect(950, 30, 370, 50);
    fill("yellow"); 
    rect(250, 300, 200, 250,40,40,40,40);

    fill("red");
    rect(900, 300, 200, 250,40,40,40,40);
    
    fill("white");
    rect(580,600,150,100);
}
function mousePressed(){
    if(mouseX >= 580 && mouseY >= 600 && mouseX <= 730 && mouseY <= 700){
        //fill("red");
        rect(580,600,150,100);
        alert(123);
       Pikachu.hp =( Pikachu.hp - Charizard.atk)
       console.log(Pikachu.hp);
    }
    
}
// function mouseReleased(){
//      if(mouseX >= 580 && mouseY >= 600 && mouseX <= 730 && mouseY <= 700){
//      rect(580,600,150,100);

//      }
// }
var username = prompt("Please enter your name");

function draw(){
    textSize(32);
    s = username;
    textSize(32);
    text(s,250,280);
    fill("white");

    textSize(32);
    text("CPU",900,280);
    fill("white");
    
    textSize(20);
    text("Pikachu",250,600);
    fill("white");

    textSize(20);
    text("Charmander",900,600);
    fill("white");

}

function Pokemon(name, hp, atk, def){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
}
var Charizard = new Pokemon("Charizard",200,120);
var Pikachu = new Pokemon("Pikachu",180,103);
function battle(){

}
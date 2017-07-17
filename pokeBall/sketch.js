function setup(){
    createCanvas(1000, 1000);
    background(225)
    stroke("black");
    strokeWeight(10);
    
    fill("white");
    arc(width/2, height/2, 900,900, 0, PI, CHORD);

    fill("red");
    arc(width/2, height/2, 900,900, PI, 0, CHORD);
    
    fill("white");
    ellipse(500, 500, 55, 55);

    fill("black");
    ellipse(500, 500, 8, 8);
}

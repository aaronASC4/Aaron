function setup(){
    createCanvas(1000, 1000);
    background(225)
    stroke("black");
    strokeWeight(10);
    
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);

    fill("red");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);
    
    fill("white");
    ellipse(500, 500, 55, 55);

    fill("black");
    ellipse(500, 500, 8, 8);

    // ultra ball
    stroke("black");
    strokeWeight(10);
    
    fill("white");
    arc(width/3, height/3, 200,200, 0, PI, CHORD);

    fill("black");
    arc(width/3, height/3, 200,200, PI, 0, CHORD);
    
    fill("white");
    ellipse(333, 333, 55, 55);

    fill("black");
    ellipse(500, 500, 8, 8);

    fill("yellow");
    rect(270, 249, 30, 86, 20, 15, 10, 5);
}
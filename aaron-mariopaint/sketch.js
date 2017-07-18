function setup(){
    createCanvas(500, 500);
    background(200)
}
function mouseDragged(){
    fill(random(255),random(255),random(255));
    ellipse(mouseX, mouseY, random(25), random(25));
    rect(mouseX+-40, mouseY+-40, random(20), random(20));
    arc(mouseX+50, mouseY+50, random(60), random(60), PI+QUARTER_PI, 0, CHORD )
}
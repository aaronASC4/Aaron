function setup(){
    background(51);
}
function setup(){
  createCanvas(800, 800, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(200, 60);
}
function setup(){
    createCanvas(300,300);
    background(145);''
//instruction text
s = "Type the sentence below";
fill(255);
text(s, 80, 10, 300, 300);
}
function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = 0;
  }
}

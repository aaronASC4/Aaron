function setup(){
    createCanvas(1000,1000);

}

var x = 500;
var y = 800;

function draw(){
    background(0);
    if (keyIsDown(LEFT_ARROW)){
        x-=5;
    if (x<=0)
    x = 0
    }
        
    rect(x,y,30,30);
    ;if (x>=500){
        xSpeed = 0;
     }
     else if (x<=0){
    xSpeed = 0;
     }

    if (keyPressed()){ 

    if (keyIsDown(RIGHT_ARROW))
        x+=5;
    if (x>=970)
    x = 970
    
    fill(250,0,0);
        bulletY -= 6;
        if(bulletY<=0, bulletY <=800);
        rect(bulletX,bulletY,30,50);
     }
     fill("white");
rect(100, 70, 40, 60);
rect(200, 70, 40, 60,);
rect(300, 70, 40, 60,);
rect(400, 70, 40, 60,);
rect(500, 70, 40, 60,);
rect(600, 70, 40, 60,);
rect(700, 70, 40, 60,);
rect(800, 70, 40, 60,);
rect(100, 200, 40, 60);
rect(200, 200, 40, 60,);
rect(300, 200, 40, 60,);
rect(400, 200, 40, 60,);
rect(500, 200, 40, 60,);
rect(600, 200, 40, 60,);
rect(700, 200, 40, 60,);
rect(800, 200, 40, 60,);
rect(100, 330, 40, 60);
rect(200, 330, 40, 60,);
rect(300, 330, 40, 60,);
rect(400, 330, 40, 60,);
rect(500, 330, 40, 60,);
rect(600, 330, 40, 60,);
rect(700, 330, 40, 60,);
rect(800, 330, 40, 60,);
rect(100, 460, 40, 60);
rect(200, 460, 40, 60,);
rect(300, 460, 40, 60,);
rect(400, 460, 40, 60,);
rect(500, 460, 40, 60,);
rect(600, 460, 40, 60,);
rect(700, 460, 40, 60,);
rect(800, 460, 40, 60,);

var c = color(105, 204, 5);
fill(c);

rect( 50, 680, 100, 90);
rect(220, 680, 100, 90);
rect(390, 680, 100, 90);
rect(560, 680, 100, 90);
rect(730, 680, 100, 90);
};
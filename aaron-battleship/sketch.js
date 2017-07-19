var box = 80;
var grid = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
var marker;
function arb(number){
    return Math.round(Math.random()*number);
}
function setup(){
    createCanvas(box*3,box*3);
    marker = {
        "y":arb(3),
        "x":arb(3)
    }
}
function draw(){
    background(0);

    for(i = 0; i < 3; i++){
        for(q = 0; q < 3; q++){
            if(grid[i][q]!=0){
                if(grid[i][q]==1){
                    fill(209, 120, 4);
                }else{
                    fill(104, 2, 2);
                }
            }else{
				fill(225,225,225);
            }
            rect(box*i, box*q, box,box);
        }
    }

}

function mouseClicked(){
	if(marker.x==floor(mouseX/box) && marker.y==floor(mouseY/box)){
		grid[floor(mouseX/box)][floor(mouseY/box)]=1; //hit
	}else{
		grid[floor(mouseX/box)][floor(mouseY/box)]=2; //miss
	}
}

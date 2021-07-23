var sea;
var ship1;
function preload(){
seaImg=loadImage('sea.png');
shipImg1=loadAnimation('ship-1.png');
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,50,70);
  sea.addAnimation('sea.png');
  sea.scale=0.5;
ship=createSprite(130,200,30,30);
}

function draw() {
  background("30");
 drawSprite();
}

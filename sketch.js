
function preload(){
  seaImage=loadImage("sea.png");
  shipImage=loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(200,200,400,400);
 ship=createSprite(200,200,100,100);
 ship.addAnimation("sailing", shipImage);
 ship.scale=0.5;
 sea.addImage(seaImage);
sea.scale=0.5;
}

function draw() {
 background("lightBlue");

if(sea.x<0){
sea.x=sea.width/2;
}


drawSprites();
}
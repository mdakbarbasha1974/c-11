var sea;
var ship1;


function preload(){
//creating animation the sprites
seaImage=loadImage("sea.png");
shipImage1 = loadImage("ship-1.png");

}

function setup(){
  createCanvas(400,400);
    
  //creating sea
  sea =  createSprite(200,200,400,400);
  sea.addImage(seaImage);
  sea.velocityX = -3;
  sea.scale=0.3;

//code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2
}

  //creating ship1
  ship1 = createSprite(150,200.100,100);
  ship1.addImage(shipImage1);
  ship1.scale = 0.4;


}

function draw() {
  background("blue")

  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/7;
  }




 drawSprites();
  }

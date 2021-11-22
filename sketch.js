
var engine, world;
var asteroid1 , asteroid1Img
var asteroid2 , asteroid2Img
var Space , SpaceImg
var Background1 ,Background1Img



function preload(){
asteroid1Img= loadImage("Asteroid_1.png")
asteroid2Img= loadImage("Asteroid_2.png")
Background1Img= loadImage("background.jpg")
SpaceImg = loadAnimation("Space-1.png","Space-2.png")
}

function setup() {
  createCanvas(825,1000);
  Background1=createSprite(400,400,1,1)
  Background1.addImage("321",Background1Img)
  Background1.scale=2.8

  Space=createSprite(400,825,1,1)
  Space.addAnimation("123",SpaceImg)
  Space.scale=1.5


}

function draw() {
  background(0);  
  drawSprites();

  Background1.velocityX = -5

  if (Background1.x < 0){
  Background1.x = Background1.width/2;
}

  var select_asteroid = Math.round(random(1,2));
  
if (World.frameCount % 40 == 0) {
    if (select_asteroid == 1) {
      Asteroid1();
    } else {
     Asteroid2();
    }
  }
}

function Asteroid1(){
  asteroid1 = createSprite(Math.round(random(20, 2000)),0, 10, 10);
  asteroid1.addImage(asteroid1Img);
  asteroid1.velocityX = -3;
  asteroid1.velocityY = 2;
  asteroid1.lifetime = 300;
  asteroid1.scale = 0.60
}

function Asteroid2(){
  asteroid2 = createSprite(Math.round(random(20, 2000)),0, 10, 10);
  asteroid2.addImage(asteroid2Img);
  asteroid2 .velocityX = -3;
  asteroid2 .velocityY = 2;
  asteroid2.lifetime = 300;
  asteroid2.scale = 0.30
}
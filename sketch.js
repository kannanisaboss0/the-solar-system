
var sun,planet1

function setup() {
  createCanvas(800,400);
  sun=createSprite(400, 200, 50, 50);
  planet1=createSprite(600,100,10,10);
}

function draw() {
  background(255,255,255); 
  planet1.velocityX=5;
  if(planet1.x>700) {
  planet1.velocityY=5;
  planet1.velocityX=0;  
  }
  if(planet1.y>300){
    planet1.velocityY=0;
    planet1.velocityX=5;
  }
  if(planet1.x<100){
    planet1.velocityY=-5;
    planet1.velocityX=0;
  }
  if(planet1.y>300){
    planet1.velocityY=0;
    planet1.velocityX=-5;
  }
  if(planet1.x<400){
    sun.width=sun.height+10;
    sun.height=sun.width+10;
  }
  sun.debug=true;
  sun.setCollider("circle",0,0,100);
  if(sun.isTouching(planet1)){
    planet1.destroy;ss
  }
  drawSprites();
 
}
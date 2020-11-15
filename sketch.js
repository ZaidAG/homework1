var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(900,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor=color("yellow");
    }
    if(damage<10){
      wall.shapeColor=color("red");
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall){
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   return false;
}
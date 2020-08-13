var bullet,wall;
var speed, weight, thickness; 

function setup() {
  createCanvas(1600, 400);
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 55, 15);   
  bullet.velocityX = speed;
  bullet.shapeColor=color(250);
   
  wall=createSprite(1400,200, thickness, height/2);
  wall.shapeColor=color(90, 90, 90);
}


function draw() {
  background(0);

  if(hasCollided(bullet, wall))
  {
	  bullet.velocityX=0;
	  var damage = 0.5 * speed* speed/(thickness *thickness *thickness);

	  if(damage>10)
	  {
		  wall.shapeColor=color(255, 0, 0);
	  }
	  if(damage<10)
	  {
		  wall.shapeColor=color(0, 255, 0);
	  }
  } 
  
  drawSprites();
 
}

function hasCollided(Lbullet, Lwall)
{
	bulletRightEdge=Lbullet.x+ Lbullet.width;
	wallLeftEdge=Lwall.x;

	if(bulletRightEdge>=wallLeftEdge){
		return true
	}
    return false;
}
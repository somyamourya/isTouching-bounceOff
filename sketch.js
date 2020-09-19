var fixedrect,movingrect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80); 
  fixedrect.shapeColor="green";
  movingrect=createSprite(600,200,80,30);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect.debug=true;
  gameObject1 = createSprite(100, 100, 50, 50); 
  gameObject1.shapeColor = "green"; 
  gameObject2 = createSprite(200, 100, 50, 50); 
  gameObject2.shapeColor = "green"; 
  gameObject3 = createSprite(300, 100, 50, 50); 
  gameObject3.shapeColor = "green"; 
  gameObject4 = createSprite(400, 100, 50, 50); 
  gameObject4.shapeColor = "green";

  gameObject2.velocityX=2;
  gameObject3.velocityX=-2;
}

function draw() {

background("pink"); 
movingrect.x=World.mouseX; 
movingrect.y=World.mouseY; 


if (isTouching(movingrect,gameObject1))
{
 gameObject1.shapeColor="blue"; 
 movingrect.shapeColor="blue";
 }
else {
 gameObject1.shapeColor="green";
 movingrect.shapeColor="green";
 } 
 bounceOff(gameObject2,gameObject3);
drawSprites();

}






















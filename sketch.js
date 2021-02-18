var fixedRect, movingRect;
var car , wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car =createSprite(200,200,40,40);
  car.shapeColor="yellow"
  car.velocityX=3;

  wall=createSprite(1000,200,30,70);
  wall.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red";
  }else
  {
    movingRect.shapeColor="yellow"
    fixedRect.shapeColor="yellow";
  }

  bounceOff(car,wall);
  drawSprites();
}
function isTouching(object,object1)
{
  if (object.x - object1.x < object1.width/2 + object.width/2
    && object1.x - object.x < object1.width/2 + object.width/2
    && object.y - object1.y < object1.height/2 + object.height/2
    && object1.y - object.y < object1.height/2 + object.height/2) {
      return true;
    }
    else{
      return false;
    }
}
function bounceOff(object,object1)
{
  if(object.x - object1.x < object1.width/2 + object.width/2
    && object1.x - object.x < object1.width/2 + object.width/2
    && object.y - object1.y < object1.height/2 + object.height/2
    && object1.y - object.y < object1.height/2 + object.height/2)
  {
      object.velocityX=(-1)*object.velocityX;
  }
}
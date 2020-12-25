var car1,car2,car3,car4,wall1,wall2,wall3,wall4,wall5;
var speed,weight
function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 80, 20, 20);
  car1.shapeColor="green";
  car1.velocityX=speed;
  car2=createSprite(50, 160, 20, 20);
  car2.shapeColor="red";
  car2.velocityX=speed;
  car3=createSprite(50, 240, 20, 20);
  car3.shapeColor="blue";
  car3.velocityX=speed;
  car4=createSprite(50, 320, 20, 20);
  car4.shapeColor="yellow";
  car4.velocityX=speed;
  wall1=createSprite(750,200,1700,height/30);
  wall1.shapeColor="white";
  wall2=createSprite(750,120,1700,height/30);
  wall2.shapeColor="white";
  wall3=createSprite(750,40,1700,height/30);
  wall3.shapeColor="white";
  wall4=createSprite(750,280,1700,height/30);
  wall4.shapeColor="white";
  wall5=createSprite(750,360,1700,height/30);
  wall5.shapeColor="white";
  speed=random(55,90);
  weight=random(400,1500)
  fence=createSprite(1500,80,10,40);
  fence.shapeColor="white";
  fence=createSprite(1500,160,10,40);
  fence.shapeColor="white";
  fence=createSprite(1500,240,10,40);
  fence.shapeColor="white";
  fence=createSprite(1500,320,10,40);
  fence.shapeColor="white";
}
function draw() {
  background(0);  
  drawSprites();
   if(isTouching(car1,wall1)){
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  }
  if(isTouching(car2,wall2)){
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0);
    }
  }
  if(isTouching(car3,wall3)){
    car3.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car3.shapeColor=color(0,255,0);
    }
  }
  if(isTouching(car4,wall4)){
    car4.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car4.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car4.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car4.shapeColor=color(0,255,0);
    }
  }
}
    function isTouching(object1,object2){
      if(object1.x-object2.x<=object1.width/2+object2.width/2&&
        object2.x-object1.x<=object1.width/2+object2.width/2&&
         object1.y-object2.y<=object1.height/2+object2.height/2&&
         object2.y-object1.y<=object1.height/2+object2.height/2){
         return true
        }
        else{
         return false
        }
    }
   
var car,wall,wall2,wall3,wall4;
var speed,weight;
var carZenia,carTorus,carCyclap;
var lane1,lane2,lane3;

function setup(){
  createCanvas(1600,400);
  car=createSprite(50, 150, 50, 20);
  car.shapeColor="white";
  carZenia=createSprite(50,50,50,20);
  carZenia.shapeColor="brown";
  carTorus=createSprite(50,250,50,20);
  carTorus.shapeColor="brown";
  carCyclap=createSprite(50,350,50,20);
  carCyclap.shapeColor="white";

  lane1=createSprite(0,100,3200,2);
  lane1.shapeColor="white";
  lane2=createSprite(0,200,3200,2);
  lane2.shapeColor="white";
  lane3=createSprite(0,300,3200,2);
  lane3.shapeColor="white";

  speed=random(55,90);
  weight=random(400,1500);
  speed2=random(45,100);
  weight2=random(400,3000);
  
  wall=createSprite(1500,50,40,height/6);
  wall2=createSprite(1500,150,40,height/6);
  wall3=createSprite(1500,250,40,height/6);
  wall4=createSprite(1500,350,40,height/6);

  wall.shapeColor=color(80,80,80);
  wall2.shapeColor=color(80,80,80);
  wall3.shapeColor=color(80,80,80);
  wall4.shapeColor=color(80,80,80);

 car.velocityX=speed; 
 carZenia.velocityX=carTorus.velocityX=carCyclap.velocityX=speed2;
}
function draw() {
  background(0);  
  car_fun(car,wall);
  car_fun(carZenia,wall2);
  car_fun(carTorus,wall3);
  car_fun(carCyclap,wall4);
  drawSprites();
}

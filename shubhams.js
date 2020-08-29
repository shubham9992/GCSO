function car_fun(car,wall){
  if((wall.x-car.x) < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*speed*speed/22500;
    if(deformation<100){
      //car.shapeColor=color(0,255,0);
      car.shapeColor="green";
    }
    if(deformation >100 && deformation <180){
      //car.shapeColor=color(230,230,0);
      car.shapeColor="yellow";
      }

    if(deformation >180){
      //car.shapeColor=color(250,0,0);
      car.shapeColor="red";
       }  
  }  
}
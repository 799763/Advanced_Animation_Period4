function Vehicle(location){
  this.location = new JSVector(location.x, location.y);;
  this.velocity = new JSVector(Math.random()*3, Math.random()*3);;
  this.acceleration = new JSVector(0,0.1);
  this.maxSpeed = 4;
  this.maxForce = 0.1;
  this.desired = new JSVector(0,0);
  this.steer = new JSVector(0,0);
}

Vehicle.prototype.run = function(){
  this.flock(vehicles);
  this.update();
  this.render();
  //this.seek();
}

Vehicle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed);
  this.location.add(this.velocity);
}

Vehicle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.fillStyle = "red";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(this.location.x, this.location.y, 5, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Vehicle.prototype.flock = function(vehicles){
  let sep = separate(vehicles);
  let ali = align(vehicles);
  let coh = cohesion(vehicles);

  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);

  applyForce(sep);
  applyForce(ali);
  applyForce(coh);
}

Vehicle.prototype.applyForce = function(force){
  this.acceleration.add(force);
}

Vehicle.prototype.separate = function(vehicles){////
  let desiredSeparation = 20;
  let sum = new JSVector(0,0);
  for(let i = 0; i < vehicles.length; i++){
    let diff = new JSVector(0,0);
    let d = JSVector.distance(this.location, vehicles[i].location);
    if((d > 0) && (d < this.desiredSeparation)){
      diff = JSVector.sub(this.location, vehicles[i].location);
      diff.normalize();
      sum.add(diff);
    }
  }
  return sum;
}

Vehicle.prototype.align = function(vehicles){////
  let neighborDistance = 50;
  let count = 0;
  let sum = new JSVector(0,0);
  for(let i = 0; i < vehicles.length; i++){
    let d = this.location.distance(vehicle[i].location);
    if((d > 0) && (d < this.neighborDistance)){
      sum.add(vehicles.velocity);
      count++;
    }
  }
  if(count > 0){
    sum.div(count);
    sum.normalize();
    sum.mult(maxSpeed);
    let steer = sum.sub(this.velocity);
    steer.limit(maxForce);
    return(steer);
  }else{
    return(new JSVector(0,0));
  }
}//end of align function

Vehicle.prototype.cohesion = function(vehicles){////
  let neighborDistance = 50;
  let sum = new JSVector(0,0);
  let count = 0;
  for(let i = 0; i < vehicles.length; i++){
    let d = this.location.distance(vehicles[i].location);
    if((d > 0) && (d < this.neighborDistance)){
      sum.add(vehicles.location);
      count++
    }
  }
  //
  if(count > 0){
    sum.div(count);
    return seek(sum);
  }else{
    return(new JSVector(0,0));
  }
}//end of cohesion functoin

Vehicle.prototype.seek = function(target){
  let desired = JSVector(0,0);
  desired.normalize();
  desired.multiply(maxSpeed);
  let steer = desired.sub(this.vel);
  steer.limit(maxForce);
  return steer;
}

function Vehicle(location){
  this.location = new JSVector(location.x, location.y);
  this.velocity = new JSVector(Math.random()*3, Math.random()*3);
  this.acceleration = new JSVector(0,0.1);
  this.maxSpeed = 4;
  this.maxForce = 0.1;
  this.desired = new JSVector(0,0);
  this.steer = new JSVector(0,0);
}

Vehicle.prototype.run = function(){
  this.flock(game.vehicles);
  this.update();
  this.render();
}

Vehicle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed);
  this.location.add(this.velocity);
}

Vehicle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.save();
  ctx.translate(this.location.x, this.location.y);
  ctx.rotate(this.vel.getDirection());
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 75, 25)";
  ctx.strokeStyle = "rgba(255, 75, 25)";
  ctx.lineWidth = 1;
  ctx.moveTo(0, -15);
  ctx.lineTo(-15, 15);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

Vehicle.prototype.flock = function(vehicles){
  let sep = this.separate(vehicles);
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);

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

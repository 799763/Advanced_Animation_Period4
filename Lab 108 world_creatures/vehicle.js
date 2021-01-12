function Vehicle(location){
  this.location = location;
  this.velocity = new JSVector(Math.random()*3, Math.random()*3);
  this.acceleration = new JSVector(0,0);
  // this.maxSpeed = 4;
  // this.maxForce = 0.1;
  this.desired = new JSVector(0,0);
  this.steer = new JSVector(0,0);
}

Vehicle.prototype.run = function(){
  this.flock(game.vehicles);
  this.update();
  this.render();
  this.checkEdges();
}

Vehicle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed);
  this.location.add(this.velocity);
}

Vehicle.prototype.render = function(){
  let ctx1 = game.context1;
  ctx1.save();
  ctx1.translate(this.location.x, this.location.y);
  ctx1.rotate(this.velocity.getDirection() + Math.PI/2);
  ctx1.beginPath();
  ctx1.fillStyle = "rgba(255, 75, 25)";
  ctx1.strokeStyle = "rgba(255, 75, 25)";
  ctx1.lineWidth = 1;
  ctx1.moveTo(0, -10);
  ctx1.lineTo(-10, 10);
  ctx1.lineTo(0, 0);
  ctx1.lineTo(10, 10);
  ctx1.closePath();
  ctx1.stroke();
  ctx1.fill();
  ctx1.restore();

  let ctx2 = game.context2;
  ctx2.save();
  ctx2.translate(this.location.x, this.location.y);
  ctx2.rotate(this.velocity.getDirection() + Math.PI/2);
  ctx2.beginPath();
  ctx2.fillStyle = "rgba(255, 75, 25)";
  ctx2.strokeStyle = "rgba(255, 75, 25)";
  ctx2.lineWidth = 1;
  ctx2.moveTo(0, -10);
  ctx2.lineTo(-10, 10);
  ctx2.lineTo(0, 0);
  ctx2.lineTo(10, 10);
  ctx2.closePath();
  ctx2.stroke();
  ctx2.fill();
  ctx2.restore();
}

Vehicle.prototype.checkEdges = function(){
  // if(this.location.x < 0){
  //   this.velocity.x = -this.velocity.x;
  // }
  // if(this.location.x > game.world.width){
  //   this.velocity.x = -this.velocity.x;
  // }
  // if(this.location.y < 0){
  //   this.velocity.y = -this.velocity.y;
  // }
  // if(this.location.y > game.world.height){
  //   this.velocity.y = -this.velocity.y;
  // }


  if(this.location.x < 0){
    this.location.x = game.world.width;
  }
  if(this.location.x > game.world.width){
    this.location.x = 0;
  }
  if(this.location.y < 0){
    this.location.y = game.world.height;
  }
  if(this.location.y > game.world.height){
    this.location.y = 0;
  }
}

Vehicle.prototype.flock = function(vehicles){
  let sep = this.separate(vehicles);
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);

  sep.multiply(1.5);
  ali.multiply(1.0);
  coh.multiply(1.0);

  this.acceleration.add(sep);
  this.acceleration.add(ali);
  this.acceleration.add(coh);
}

Vehicle.prototype.separate = function(vehicles){
  let desiredSeparation = 25;
  let sum = new JSVector(0,0);
  let dist = new JSVector(0,0);
  for(let i = 0; i < vehicles.length; i++){
    let diff = JSVector.subGetNew(this.location, vehicles[i].location);
    dist = diff.getMagnitude();
    if((dist > 0) && (dist < desiredSeparation)){
      diff.normalize();
      sum.add(diff);
    }
  }
  return sum;
}

Vehicle.prototype.align = function(vehicles){
  let neighborDistance = 50;
  let sum = new JSVector(0,0);
  let count = 0;
  for(let i = 0; i < vehicles.length; i++){
    let dist = this.location.distance(vehicles[i].location);
    //let dist = JSVector.subGetNew(this.location, vehicles[i].location);
    if((dist > 0) && (dist < neighborDistance)){
      sum.add(vehicles[i].velocity);
      count++;
    }
  }
  if(count > 0){
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    let steer = sum.sub(this.velocity);
    steer.normalize();
    steer.multiply(1.0);
    return(steer);
  }else{
    return(new JSVector(0,0));
  }
}//end of align function

Vehicle.prototype.cohesion = function(vehicles){
  let neighborDistance = 50;
  let sum = new JSVector(0,0);
  let count = 0;
  for(let i = 0; i < vehicles.length; i++){
    let dist = this.location.distance(vehicles[i].location);
    if((dist > 0) && (dist < this.neighborDistance)){
      sum.add(vehicles[i].location);
      count++
    }
  }
  //
  if(count > 0){
    sum.divide(count);
    return seek(sum);
  }else{
    return(new JSVector(0,0));
  }
}//end of cohesion functoin

Vehicle.prototype.seek = function(target){
  let desired = JSVector(0,0);
  desired.normalize();
  desired.multiply(this.maxSpeed);
  let steer = desired.sub(this.vel);
  steer.limit(this.maxForce);
  return steer;
}

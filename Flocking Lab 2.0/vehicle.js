function Vehicle(){
  this.location;
  this.velocity;
  this.acceleration;
  this.maxSpeed;
  this.maxForce;
  this.desired = new JSVector(0,0);
  this.steer = new JSVector(0,0);

}

Vehicle.prototype.run = function(){
  this.update();
  this.render();
  this.seek();
}

Vehicle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxSpeed);
  this.location.add(this.velocity);
  this.acceleration.mult(0);
}

Vehicle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.fillStyle = "red";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Vehicle.prototype.seek = function(target){
  this.desired = JSVector.sub(target, this.location);
  this.desired = JSVector.divide(2);
  let d = this.desired.getMagnitude();
  this.desired.normalize();
  if(d < 100){
    let m = this.desired.distance(target);
    this.desired.multiply(m);
  }else{
    this.desired.multiply(this.maxSpeed);
  }

  this.steer = JSVector.sub(0.5, this.velocity);
  this.steer.limit(this.maxForce);

  this.applyForce(this.steer);
}

Vehicle.prototype.applyForce = function(force){
  this.acceleration.add(force);
}

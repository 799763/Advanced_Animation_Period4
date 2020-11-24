function Vehicle(){
  this.location;
  this.velocity;
  this.acceleration;
  this.maxSpeed = 4;
  this.maxForce = 0.1;
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

Vehicle.prototype.arrive = function(target){
  this.desired = JSVector.sub(target, this.location);

  let d = this.desired.getMagnitude();
  this.desired.normalize();
  this.desired.multiply(this.maxSpeed);

  this.steer = JSVector.sub(this.desired, this.velocity);
  this.steer.limit(this.maxSpeed);
  this.applyForce(this.steer);
}

Vehicle.prototype.separate = function(array){
  let desiredSeparation = 20;
  let d = new JSVector(0,0);
  let diff = new JSVector(0,0);
  let count = 0;
  let sum = new JSVector(0,0);
  for(let i = 0; i < array.length; i++){
    this.d = JSVector.distance(this.location, array[i].location);
    if((this.d > 0) && (this.d < this.desiredSeparation)){
      this.diff = JSVector.sub(this.location, array[i].location);
      this.diff.normalize();
      this.divide(this.d);
      this.sum.add(this.diff);
      this.count++;
    }
    if(this.count > 0){
      this.sum.divide(this.count);
      this.sum.setMagnitude(this.maxSpeed);
      this.steer.sub(this.sum,this.vel);
      this.steer.limit(this.maxForce);
      this.applyForce(this.steer);
    }
  }
}

Vehicle.prototype.applyBehaviors = function(array){
    this.separate(array);
    this.seek();

    this.applyForce(this.separate);
    this.applyForce(this.seek);
}

function Vehicle(vehicle){
  this.loc = new JSVector(Math.random()*10, Math.random()*10);
  this.vel = new JSVector(Math.random()*10, Math.random()*10);
  this.acc = new JSVector(0, 0);
  this.vehicle = vehicle;
  this.maxSpeed = 5;
  this.maxForce = 10;
  this.target = new JSVector(0,0);//incomplete
}

Vehicle.prototype.run = function(){
  this.update();
  this.seek();
  this.applyForce();
  this.render();
  this.checkEdges();
}

Vehicle.prototype.seek = function(){
  for(let i = 0; i < 20; i++){
    this.target = JSVector.subGetNew(this.vehicle[i].loc);
    this.target.normalize();
    this.target.multiply(this.maxSpeed);
  }

  this.vel.limit(this.maxForce);
  this.applyForce(this.vel);// apply force to objects acceleration
}

Vehicle.prototype.applyForce = function(force){
  this.acc.addGetNew(this.force);
}

Vehicle.prototype.update = function(){
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.loc.add(this.vel);
  this.acc.multiply(0);
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

//  Oscillator constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, r, c, n){// change parameters
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector();
  this.rad = r;
  this.orbitAngle = Math.random() * Math.PI;
  this.clr = c;
  this.orbiters = [];
  this.numOrbs = n;

  for(let i = 0; i < n; i++){ //changed here
    let a = i * (Math.PI * 2) / this.numOrbs + this.orbiters;
    let angleVel = this.numOrbs * 0.01;
    this.orbiters.push(new Orbiter(this, 4, 25, this.angleVel, this.clr));
  }
}
Mover.prototype.run = function(){
  this.checkEdges();
  this.update();
  this.render();
  for(let i = 0; i < this.orbiters.length; i++){
    let orb = this.orbiters[i];
    orb.update();
    orb.render();
  }
}

Mover.prototype.render = function(){
  let ctx = game.ctx;
  ctx.fillStyle = this.clr;
  ctx.strokeStyle = this.clr;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Mover.prototype.update = function(){

  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

Mover.prototype.checkEdges = function(){
  if(this.loc.x > canvas.width){ this.vel.x = -this.vel.x;}
  if(this.loc.x < 0){ this.vel.x = -this.vel.x;}
  if(this.loc.y > canvas.width){ this.vel.y = -this.vel.y;}
  if(this.loc.y < 0){ this.vel.y = -this.vel.y;}
}
//Oscillator end++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  placing methods in the prototype (every Oscillator shares functions)
// Oscillator.prototype.run = function(){
//     this.update();
//     this.render();
//     this.checkEdges();
//   }
//
// Oscillator.prototype.checkEdges = function(){
//
//   }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Orbiter(mover, orbiterRad, orbitRad, angle, angleVel, clr){
  this.mover = mover;
  this.orbiter = orbiterRad;
  this.rotator = new JSVector(orbitRad, 0);
  this.rotator.setDirection(angle);
  this.loc = JSVector.addGetNew(this.mover.loc, this.rotator);
  this.angleVel = angleVel;
  this.clr = clr;
}

// draw the Oscillator on the canvas
Orbiter.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.radius, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();

  ctx.lineCap = 4;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(this.mover.loc.x, this.mover.loc.y);
  ctx.lineTo(this.loc.x, this.loc.y)
  ctx.stroke();
}
Orbiter.prototype.update = function(){
  this.rotator.rotate(this.angleVel);
  this.loc = JSVector.addGetNew(this.mover.loc, this.rotator);
}

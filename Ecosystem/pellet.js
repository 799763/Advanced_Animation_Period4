function Pellet(location){
  this.location = location;
  this.velocity = new JSVector(Math.random()*3, Math.random()*3);
  this.acceleration = new JSVector(0,0);
  this.maxSpeed = 2;
  this.maxForce = 0.1;
  this.desired = new JSVector(0,0);
  this.steer = new JSVector(0,0);
}

Pellet.prototype.run = function(){
  this.flock(game.pellets);
  this.update();
  this.render();
  this.checkEdges();
}

Pellet.prototype.update = function(){
  this.acceleration.limit(this.maxForce);
  this.velocity.add(this.acceleration);
  this.acceleration.multiply(0);
  this.velocity.limit(this.maxSpeed);
  //this.velocity.normalize();
  this.location.add(this.velocity);
}

Pellet.prototype.render = function(){
  let ctx = game.ctx;
  ctx.save();
  ctx.translate(this.location.x, this.location.y);
  ctx.rotate(this.velocity.getDirection() + Math.PI/2);
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.strokeStyle = "rgba(255, 255, 255)";
  ctx.lineWidth = 1;
  ctx.arc(0, 0, 5, Math.PI * 2, 0, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

Pellet.prototype.checkEdges = function(){
  if(this.location.x < 0){
    this.location.x = game.canvas.width;
  }
  if(this.location.x > game.canvas.width){
    this.location.x = 0;
  }
  if(this.location.y < 0){
    this.location.y = game.canvas.height;
  }
  if(this.location.y > game.canvas.height){
    this.location.y = 0;
  }
}

Pellet.prototype.flock = function(pellets){
  let sep = this.separate(pellets);
  let ali = this.align(pellets);
  //let coh = this.cohesion(pellets);

  sep.multiply(1.0);
  ali.multiply(1.5);
//  coh.multiply(1.0);

  this.acceleration.add(sep);
  this.acceleration.add(ali);
  //this.acceleration.add(coh);
}

Pellet.prototype.separate = function(pellets){
  let desiredSeparation = 25;
  let sum = new JSVector(0,0);
  let dist = new JSVector(0,0);
  for(let i = 0; i < pellets.length; i++){
    let diff = JSVector.subGetNew(this.location, pellets[i].location);
    dist = diff.getMagnitude();
    if((dist > 0) && (dist < desiredSeparation)){
      diff.normalize();
      sum.add(diff);
    }
  }
  return sum;
}

Pellet.prototype.align = function(pellets){
  let neighborDistance = 50;
  let sum = new JSVector(0,0);
  let count = 0;
  for(let i = 0; i < pellets.length; i++){
    let dist = this.location.distance(pellets[i].location);
    if((dist > 0) && (dist < neighborDistance)){
      sum.add(pellets[i].velocity);
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

// Pellet.prototype.cohesion = function(pellets){
//   let neighborDistance = 100;
//   let sum = new JSVector(0,0);
//   let count = 0;
//   for(let i = 0; i < pellets.length; i++){
//     let dist = this.location.distance(pellets[i].location);
//     if(dist < neighborDistance){
//       sum.add(pellets[i].location);
//       count++
//     }
//   }
//   //
//   if(count > 0){
//     sum.divide(count);
//     return seek(sum);
//   }else{
//     return(new JSVector(0,0));
//   }
// }//end of cohesion functoin
//
// Pellet.prototype.seek = function(target){
//   let desired = JSVector.subGetNew(target, this.location);
//   desired.normalize();
//   desired.multiply(this.maxSpeed);
//   let steer = desired.sub(this.vel);
//   //steer.limit(this.maxForce);
//   return steer;
// }

function Pacman(){
  this.location = new JSVector(500,500); //Only temporary, will be changed
  this.acceleration = new JSVector(0,0);
  this.velocity = new JSVector(Math.random()*3, Math.random()*3);
}

Pacman.prototype.run = function(){
  this.render();
  this.update();
  this.checkEdges();
  this.separate();
  this.seek(game.pelletSystem);
}

Pacman.prototype.update = function(){
  for(let i = 0; i < 4; i++){
    let dist = this.location.distance(game.ghosts[i].location);
    let pelletDist = this.location.distance(game.ghosts[i].location);
    if(dist < 200){
      this.acceleration = JSVector.subGetNew(this.location, game.ghosts[i].location);
    }
    if(pelletDist < 150){
      this.acceleration = JSVector.subGetNew(game.ghosts[i].location, this.location);
    }
  }
  this.acceleration.normalize();
  this.acceleration.multiply(0.5);
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);

  this.location.add(this.velocity);
}

//Edit in the morning
Pacman.prototype.seek = function(target){//hunts pellets
  let location = JSVector(0,0);
  this.location.normalize();
  this.location.multiply(0.5);
  let steer = this.location.sub(this.velocity);
  steer.limit(2);
  return(steer);
}

Pacman.prototype.checkEdges = function(){
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

Pacman.prototype.separate = function(){

}

Pacman.prototype.render = function(){
  let ctx = game.ctx;
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 0)";
  ctx.strokeStyle = "rgba(255, 255, 0)";
  ctx.lineWidth = 1;
  ctx.arc(this.location.x, this.location.y, 17, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

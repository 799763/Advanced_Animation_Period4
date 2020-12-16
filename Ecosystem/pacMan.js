function Pacman(){
  this.location = new JSVector(Math.random()*300, Math.random()*300);
  this.acceleration = new JSVector(0,0);
  this.velocity = new JSVector(Math.random()*3, Math.random()*3);
}

Pacman.prototype.run = function(){
  this.render();
  this.update();
  this.checkEdges();
}

Pacman.prototype.update = function(){
  for(let i = 0; i < 4; i++){
    let dist = this.location.distance(game.ghosts[i].location);
    if(dist < 50){
      this.acceleration = JSVector.subGetNew(this.location, game.ghosts[i].location);
    }
  }
  for(let i = 0; i < game.pellets.length; i++){
    let pelletDist = this.location.distance(game.pellets[i].location);
    if(pelletDist > 50){
      this.acceleration = JSVector.subGetNew(game.pellets[i].location, this.location);
    }
  }
  this.acceleration.normalize();
  this.acceleration.multiply(0.5);
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);

  this.location.add(this.velocity);
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

Pacman.prototype.render = function(){
  let ctx = game.ctx;
  ctx.save();/////
  ctx.translate(this.location.x, this.location.y);/////
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 0)";
  ctx.strokeStyle = "rgba(255, 255, 0)";

  //===Without Mouth===
  ctx.lineWidth = 1;
  ctx.arc(0, 0, 17, Math.PI * 2, 0, false);
  ctx.stroke();
  //ctx.rotate(this.velocity.getDirection());

  //=== With Mouth===
  // ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  // ctx.lineTo(31, 37);

  ctx.fill();
  ctx.restore();/////
}

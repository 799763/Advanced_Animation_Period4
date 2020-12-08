function Pacman(){
  this.location = new JSVector(500,500); //Only temporary, will be changed
}

Pacman.prototype.run = function(){
  this.render();
  this.checkEdges();
  this.separate();
  this.seek();
}

Pacman.prototype.render = function(){
  let ctx = game.ctx;
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.strokeStyle = "rgba(255, 255, 255)";
  ctx.lineWidth = 1;
  ctx.arc(this.location.x, this.location.y, 5, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
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

Pacman.prototype.separate = function(){//runs away from ghosts

}

Pacman.prototype.seek = function(){//hunts pellets

}

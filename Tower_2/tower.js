function Tower(game, loc){
  let radius = 15;
  this.loc = loc;
}

Tower.prototype.run(){
  this.update();
  this.render();
  this.checkEdges();
}

Tower.prototype.render(){
  let ctx = game.ctx;

  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.closePath();
}

Tower.prototype.update(){
  this.distance = this.loc.distance(game.actor.loc);
  if(this.distance < 150){
    this.attack();
  }
}

Tower.prototype.checkEdges(){
  let canvas = game.canvas;

  if(this.loc.x - this.radius < 0){
      this.vel.x = -this.vel.x;
  }
  if(this.loc.x + this.radius > canvas.width){
      this.vel.x = -this.vel.x;
  }
  if(this.loc.y - this.radius < 0){
      this.vel.y = -this.vel.y;
  }
  if(this.loc.y + this.radius > canvas.height){
      this.vel.y = -this.vel.y;
  }
}

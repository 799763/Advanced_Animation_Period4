function Emitter(){
  this.location = new JSVector(Math.random()*1096, Math.random()*696);
  this.pellets = [];
  for(let i = 0; i < 25; i++){//creates new pellets
    this.pellets.push(new Pellet(this.location));
  }
}

Emitter.prototype.render = function(){
  let ctx = game.ctx;
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.strokeStyle = "rgba(255, 255, 255)";
  ctx.lineWidth = 1;
  ctx.arc(this.location.x, this.location.y, 5, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Emitter.prototype.run = function(){//runs the pellets
  for(let i = 0; i < this.pellets.length-1; i++){
    this.pellets[i].run();
  }
}

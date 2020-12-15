function Ghost(color){
  this.color = color;
  this.location = new JSVector(Math.random()*500, Math.random()*500); //Only temporary, will be changed
  this.velocity = new JSVector(0,0);
  this.acceleration = new JSVector(Math.random()*3, Math.random()*3);
}

Ghost.prototype.run = function(){
  this.update();
  this.seek();
  this.checkEdges();
  this.render();
}

Ghost.prototype.update = function(){
  let dist = this.location.distance(game.pacMan.location);
  if(dist < game.pacMan.location){
    this.accelaration = JSVector.subGetNew(this.pacMan.location, game.pacMan.location);
  }
  this.acceleration.normalize();
  this.acceleration.multiply(0.5);
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.location.add(this.velocity);
}

Ghost.prototype.seek = function(){//look for Pacman
  let dist = this.location.distance(game.pacMan.location);
  if(dist > 5){
    this.acceleration = JSVector.subGetNew(game.pacMan.location, this.location);
  }
  this.acceleration.normalize();
  this.acceleration.multiply(0.5);
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
}

Ghost.prototype.checkEdges = function(){
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

Ghost.prototype.render = function(){
  let ctx = game.ctx;
  //======= BODY =======
  ctx.save();/////
  ctx.translate(this.location.x, this.location.y);/////

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill()
  ctx.restore();/////
  //======= EYES =======
  ctx.save()/////
  ctx.translate(this.location.x, this.location.y);////
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();
  ctx.restore();/////
}

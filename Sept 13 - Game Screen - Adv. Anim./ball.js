function Ball(){
  //write the code for the play area
  this.x = x;
  this.y = y;
  radius = 30;
  this.dx = Math.random()*10 - 5;
  this.dy = Math.random()*10 - 5;

  this.update = function(){
    this.x += this.dy;
    this.y += this.dy;
    if(this.x > window.innerWidth || this.x < 0){
      this.dx = -this.dx;
    }
    if(this.y > window.innerHeight || this.y < 0){
      this.dy = -this.dy;
    }
  }

  this.render = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255,255,0)';
    ctx.fillStyle = 'rgba(255, 255, 0)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, Math.PI*2, 0, false);
    ctx.fill();
    ctx.stroke();
  }
}

function animate(){
  ball.update();
  ball.render();
  requestAnimationFrame(animate);
}

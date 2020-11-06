function Snake(x, y, color, id){// change parameter
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random(-3)*3, Math.random(-3)*3);
    this.id = id;
    this.clr = color;
    this.snake = game.snake;
}
  //  placing methods in the prototype (every Oscillator shares functions)
Snake.prototype.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }

Snake.prototype.update = function(){
  for(let i = 0; i < snake.length; i++){
    if(i !== this.snake[0]){

        let d = this.loc.distance(this.snake[i - 1].loc);
        if(d > 500){
          this.acc = JSVector.subGetNew(snake[0].loc, this.loc);
        }
        if(d < 15){
          this.acc = JSVector.subGetNew(this.loc, this.snake[i - 1].loc);
        }
    }
    this.acc.normalize();
    this.acc.multiply(0.025);
    this.vel.add(this.acc);
    this.vel.limit(1);
  }
  this.loc.add(this.vel);
}

// draw the Oscillator on the canvas
//UNFINISHED
Snake.prototype.render = function(){
    let ctx = game.ctx;
    ctx.strokeStyle = 'rgba(255,255,0)';
    ctx.fillStyle = 'rgba(255, 255, 0)';
    ctx.beginPath();
    ctx.arc(x, y, 20, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }

Snake.prototype.checkEdges = function(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > canvas.width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > canvas.height){
      this.vel.y = -this.vel.y;
    }
}
//===================================================
//===================================================
function Mover(){
    this.loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    this.rad = 15;
    this.vel = new JSVector(Math.random()*5, Math.random()*5);
    this.acc = new JSVector(Math.random()*5, Math.random()*5);

    Mover.prototype.run = function(){
      this.checkEdges();
      this.update();
      this.render();
    }

    Mover.prototype.update = function(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);
    }

    Mover.prototype.render = function(){
      let ctx = game.ctx;
      ctx.strokeStyle = "rgba(255, 50, 50)";
      ctx.beginPath();
      ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
      ctx.stroke();
      ctx.fill();
    }

    Mover.prototype.checkEdges = function(){
      let canvas = game.canvas;
      if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
      if(this.loc.x < 0) this.vel.x = -this.vel.x;
      if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
      if(this.loc.y < 0) this.vel.y = -this.vel.y;
    }
}

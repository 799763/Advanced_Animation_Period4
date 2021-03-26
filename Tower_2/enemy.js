//  Enemy constructor function +++++++++++++++++++++++++++++
function Enemy(canvas,rad, clr){
    this.radius = rad;
    this.precolor = clr;
    this.type = Math.floor(Math.random(1)*2);
    // random location
    let x = (Math.random() * (canvas.width - 2*this.radius)) + this.radius;
    let y = (Math.random() * (canvas.height - 2*this.radius)) + this.radius;
    this.loc = new JSVector(x,y);
    // random velocity
    let dx = (Math.random() * 6) -2;
    let dy = (Math.random() * 6) -2;
    this.vel = new JSVector(dx,dy);
}

  //  placing methods in the prototype (every Enemy shares functions)

Enemy.prototype.run = function(){
    this.update();
    //this.checkEdges();
    this.render();
  }



// draw the Enemy on the canvas
Enemy.prototype.render = function(){
    let ctx = game.ctx;
    if(this.type = 1){
      ctx.strokeStyle = "blue";
    }else if(this.type = 0){
      ctx.strokeStyle = "green";
    }
    ctx.beginPath();
    // +++++++++++++++++++++++
    // draw as circles
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
  }

// Add velocity to location
Enemy.prototype.update = function(){
  if(!game.gamePaused) {
      this.loc.add(this.vel);
    }
}

// When a Enemy hits an edge of the canvas, it changes direction.
Enemy.prototype.checkEdges = function(){
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

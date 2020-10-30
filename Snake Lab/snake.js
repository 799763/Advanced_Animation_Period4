//  Oscillator constructor function +++++++++++++++++++++++++++++
function Snake(x, y, color, id){// change parameter
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random(-3)*3, Math.random(-3)*3);
    this.id = id;
    this.clr = color;
    let segments = game.segments;
}
  //  placing methods in the prototype (every Oscillator shares functions)
Snake.prototype.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }

Snake.prototype.update = function(){
  let head = segments[0];
  for(let i = 0; i < segments.length; i++){
    if(i !== head){
        
    }
  }
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

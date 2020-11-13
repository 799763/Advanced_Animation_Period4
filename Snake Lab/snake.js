function Snake(x, y, dx , dy, segArray){// changed parameters
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(dx, dy);
    this.snakeSegments = segArray;
  }

Snake.prototype.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }

Snake.prototype.update = function(){
  for(let i = 1; i < snakeSegments.length; i++){
    this.head = this.snakeSegments[0];
    this.acc = JSVector.subGetNew(this.head, snakeSegments[i]);
    // this.acc.normalize();
    // this.acc.multiply(0.025);
    this.vel.add(this.acc);
    this.vel.limit(1);
  }
  this.loc.add(this.vel);
}

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
// function Mover(){
//     this.loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
//     this.rad = 15;
//     this.vel = new JSVector(Math.random()*5, Math.random()*5);
//     this.acc = new JSVector(Math.random()*5, Math.random()*5);
// }
//     Mover.prototype.run = function(){
//       this.checkEdges();
//       this.update();
//       this.render();
//     }
//
//     Mover.prototype.update = function(){
//       this.vel.add(this.acc);
//       this.loc.add(this.vel);
//     }
//
//     Mover.prototype.render = function(){
//       let ctx = game.ctx;
//       ctx.strokeStyle = "rgba(255, 50, 50)";
//       ctx.beginPath();
//       ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
//       ctx.stroke();
//       ctx.fill();
//     }
//
//     Mover.prototype.checkEdges = function(){
//       let canvas = game.canvas;
//       if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
//       if(this.loc.x < 0) this.vel.x = -this.vel.x;
//       if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
//       if(this.loc.y < 0) this.vel.y = -this.vel.y;
//     }

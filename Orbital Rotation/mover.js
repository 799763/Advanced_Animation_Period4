//  Oscillator constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, r, c, n){// change parameters
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector();
  this.rad = r;
  this.orbitAngle = Math.random() * Math.PI;
  this.clr = c;
  this.orbitors = [];

  for(let i = 0; i < n; i++){
      let a = i * (Math.PI * 2) / numOrbs + this.orbiters;
      let angleVel = numOrbs * 0.01;
      this.orbitors.push(new Orbiter(this, 4, 25, a, a));
  }
}
Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = c;
    ctx.strokeStyle = c;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
}

Mover.prototype.update = function(){
    //Missing code here
    this.acc = JSVector(Math.random() * 2, Math.random() * 2);
    this.acc.normalize();
    this.acc.multiply(0.025);
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
}

Mover.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width){ this.loc.x = -this.loc.x;}
    if(this.loc.x < 0){ this.loc.x = -this.loc.x;}
    if(this.loc.y > canvas.width){ this.loc.x = -this.loc.y;}
    if(this.loc.y < 0){ this.loc.x = -this.loc.y;}
}
//Oscillator end++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  //  placing methods in the prototype (every Oscillator shares functions)
// Oscillator.prototype.run = function(){
//     this.update();
//     this.render();
//     this.checkEdges();
//   }
//
// Oscillator.prototype.checkEdges = function(){
//
//   }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Orbiter(){

}

  // draw the Oscillator on the canvas
  Orbiter.prototype.render = function(){//Talk in class

    }
  Orbiter.prototype.update = function(){ //Talk in class

    }

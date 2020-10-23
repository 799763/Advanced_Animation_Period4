//  Oscillator constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, r, c, n){// change parameters
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector();
  this.rad = r;
  this.orbitAngle = Math.random() * Math.PI;
  this.clr = c;
  this.orbiters = [];

  for(let i = 0; i < n; i++){
      let a = i * (Math.PI * 2) / numOrbs + this.orbiters;
      let angleVel = numOrbs * 0.01;
      this.orbitors.push(new Orbiter(this, 4, 25, a, a));
  }
Mover.prototype.run = function(){

}

Mover.prototype.render = function(){

}

Mover.prototype.update = function(){

}

Mover.prototype.checkEdges = function(){

}
}//Oscillator end++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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
  Oscillator.prototype.render = function(){//Talk in class

    }
    Oscillator.prototype.update = function(){ //Talk in class

    }

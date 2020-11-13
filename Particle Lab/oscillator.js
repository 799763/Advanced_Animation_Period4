
//Use for a animal in your ecosystem

//  Oscillator constructor function +++++++++++++++++++++++++++++
function Oscillator(g){// change parameters
    this.angle = new JSVector();
    this.velocity = new JSVector(Math.random()*0.06 - 0.03, Math.random()*0.06 - 0.03);
    this.amplitude = new JSVector(Math.random()*g.canvas.width/2, Math.random()*g.canvas.height/2);
}
  //  placing methods in the prototype (every Oscillator shares functions)
Oscillator.prototype.run = function(){
    this.update();
    this.render();
  }

// draw the Oscillator on the canvas
Oscillator.prototype.render = function(){
     let x = Math.cos(this.angle.x)*this.amplitude.x;
     let y = Math.sin(this.angle.y)*this.amplitude.y;

    //pushMatrix();
    let ctx = game.ctx;
    ctx.save();
    ctx.translate(game.canvas.width/2, game.canvas.height/2);
    ctx.strokeStyle = 'rgba(255,255,0)';
    ctx.fillStyle = 'rgba(255, 255, 0)';
    ctx.beginPath();
    ctx.arc(x, y, 20, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    //line(0,0,x,y)
    //popMatrix();
  }
Oscillator.prototype.update = function(){
  this.angle.add(this.velocity);
}

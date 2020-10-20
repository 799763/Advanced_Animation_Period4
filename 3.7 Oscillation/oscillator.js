//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(){// change parameters
    this.angle = new JSVector();
    this.velocity = new JSVector(Math.random(-0.05, 0.05), Math.random(-0.05, 0.05));
    this.amplitude = new JSVector(Math.random(canvas.width/2), Math.random(canvas.height/2));
    this.angle.add(this.velocity);
    let ctx = Game.ctx;

  //  placing methods in the prototype (every bubble shares functions)
Bubble.prototype.run = function(){
    this.render();
  }

// draw the bubble on the canvas
Bubble.prototype.render = function(){
     x = Math.sin(this.angle.x)*this.amplitude.x;
     x = Math.sin(this.angle.x)*this.amplitude.y;

    //pushMatrix();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.strokeStyle = 'rgba(255,255,0)';
    ctx.fillStyle = 'rgba(255, 255, 0)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, Math.PI*2, 0, false);
    stroke(0);
    fill(175);
    line(0,0,x,y)
    //popMatrix();
  }
}

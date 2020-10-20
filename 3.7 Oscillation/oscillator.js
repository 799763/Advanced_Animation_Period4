//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(){// change parameters
    this.angle = new JSVector();
    this.velocity = new JSVector(random(-0.05, 0.05), random(-0.05, 0.05));
    this.amplitude = new JSVector(random(canvas.width/2), random(canvas.height/2));
    this.angle.add(velocity);

  //  placing methods in the prototype (every bubble shares functions)
Bubble.prototype.run = function(){
    this.checkEdges();
    this.render();
  }

// draw the bubble on the canvas
Bubble.prototype.render = function(){
    let x = Math.sin(angle.x)*amplitude.x;
    let x = Math.sin(angle.x)*amplitude.y;

    pushMatrix();
    translate(canvas.width/2, canvas.height/2);
    ctx.strokeStyle = 'rgba(255,255,0)';
    ctx.fillStyle = 'rgba(255, 255, 0)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, Math.PI*2, 0, false);
    stroke(0);
    fill(175);
    line(0,0,x,y)
    popMatrix();
  }
}

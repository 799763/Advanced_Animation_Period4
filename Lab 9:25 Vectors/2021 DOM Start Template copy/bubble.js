//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, rad, clr){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(dx, dy);
    // this.x = x;
    // this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;///2;
    this.clr = clr;
    this.isOverlapping = false;
}

  //  placing methods in the prototype (every bubble shares functions)
Bubble.prototype.run = function(){
    this.checkEdges();
    this.checkOverlapping()
    this.update();
    this.render();
  }

// check if this bubble is overlapping any other bubble
Bubble.prototype.checkOverlapping = function(){
    this.isOverlapping = false;//  default color
    this.clr =  "rgba(255,255,255,255)"
    let b = game.bubbles;
    for(let i = 0; i < b.length; i++){ // for all the bubbles
       if(this !== b[i]){   // if not this bubble
         //let d = Math.sqrt((this.x-b[i].x)*(this.x-b[i].x) + (this.y-b[i].y)*(this.y-b[i].y));
         let d = this.loc.distance(b[i].loc);
         if(d < this.rad + b[i].rad){
            this.isOverlapping = true;
            this.clr =  "rgba(100,220,55,10)"
         }
       }
    }

  }

// draw the bubble on the canvas
Bubble.prototype.render = function(){
    let ctx = game.ctx;
    // color depends on whether this bubble overlaps any oher bubble
    if(this.isOverlapping){
        ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.strokeStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
    }

  }
//+++++++++++++++++++++++++++++++++++++++++++++++

// Move the bubble in a random direction
// Bubble.prototype.update = function(){
//     if(!game.gamePaused){
//       this.vel.dx = Math.random()*6-3;
//       this.vel.dy = Math.random()*6-3;
//       this.loc.add(this.vel);
//     }
//   }

//+++++++++++++++++++++++++++++++++++++++++++++++

//Attraction update function
Bubble.prototype.update = function(){
    let Bub = game.bubbles;
    if(this != Bub[0]){
        let d = this.loc.distance(b[0].loc);
        if(d < 300){
            this.acc = JSVector.subGetNew(this.loc, b[0].loc);
            this.acc.normalize();
            this.acc.multiply(0.5);
        }
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);
}

//+++++++++++++++++++++++++++++++++++++++++++++++
// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Bubble.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if(this.loc.x > canvas.width)  this.loc.x = 0; // wrap around from right to left
    if(this.loc.x < 0)  this.loc.x = canvas.width; // wrap around from left to right
    if(this.loc.y > canvas.height)  this.loc.y = 0; // wrap around from bottom to top
    if(this.loc.y < 0)  this.loc.y = canvas.height; // wrap around from top to bottom
  }

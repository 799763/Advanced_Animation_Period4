class Antibody(){
  constructor(x, y, target){
    this.target = target;
    this.velocity = new JSVecctor(5, 5);
    this.acceleration = new JSVector(0,0);
    this.loc = new JSVector(x,y);
  }
  run(){
    this.render();
    this.update();
  }
  render(){
    let ctx = game.ctx;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.save();
    // ctx.translate(this.loc.x, this.loc.y);
    // ctx.rotate(this.vel.getDirection() + Math.PI/2);
    // ctx.moveTo(0,-this.rad);
    // ctx.lineTo(-this.rad/2 , this.rad/3);
    // ctx.lineTo(0,4);
    // ctx.lineTo(this.rad/2, this.rad/3);
    ctx.arc(this.loc.x, this.loc.y, 6, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  update(){
    let dist = this.loc.distance(game.actor.location);
    if(dist != game.actor.location){
      this.velocity.add(this.acceleration);
      this.velocity.limit(15);
      this.location.add(this.velocity);
    }else{
      return;
    }
  }
}

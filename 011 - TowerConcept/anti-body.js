class AntiBody{
  constructor(x, y, target){
    this.target = target;
    this.velocity = new JSVector(3, 3);
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
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.save();
    ctx.arc(this.loc.x, this.loc.y, 6, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  update(){
    let dist = this.loc.distance(game.actor.loc);
    if(dist < 100){
      this.velocity.add(this.acceleration);
      this.velocity.limit(15);
      this.loc.add(this.velocity);
    }else{
      return;
    }
  }
}

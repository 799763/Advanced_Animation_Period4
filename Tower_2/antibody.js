class AntiBody{
  constructor(x, y, target){
    this.target = target;
    this.velocity = new JSVector(5, 5);
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
    ctx.arc(this.loc.x, this.loc.y, 5, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  update(){
    //if(this.loc != game.actor.location){
      this.velocity.add(this.acceleration);
      this.velocity.limit(15);
      this.location.add(this.velocity);
    //}else{
      //return;
    //}
  }
}

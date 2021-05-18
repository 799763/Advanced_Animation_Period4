class Antibody{
  constructor(x, y, target){
    this.target = target;
    this.velocity = new JSVector(Math.random()*6-3, Math.random()*6-3);
    this.acceleration = new JSVector(0,0);
    this.loc = new JSVector(x,y);
  }
  run(){
    this.render();
    this.update();
    //this.delay();
  }

  delay(){
    let interv = setInterval(this.update,5000);
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
      this.acceleration = JSVector.subGetNew(game.actor.loc, this.loc);
      this.acceleration.normalize();
      this.acceleration.multiply(0.05);
      this.velocity.add(this.acceleration);
      this.velocity.limit(2);
      this.loc.add(this.velocity);
    }else if(dist > 20){
      return;
    }
  }
}

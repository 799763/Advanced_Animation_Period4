class Antibody{
  constructor(x, y, target){
    this.target = target;
    this.velocity = new JSVector(Math.random()*6-3, Math.random()*6-3);
    this.acceleration = new JSVector(0,0);
    this.loc = new JSVector(x,y);
    this.hit = false;
  }
  run(){
    this.render();
    this.update();
    //this.delay();
  }

  // delay(){
  //   let interv = setInterval(this.update,1000);
  // }

  render(){
    if(this.hit = false){
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
    }else if(this.hit = true){
      console.log("UnRendered");
      return(false);
    }
  }

  update(){
    let dist = this.loc.distance(game.actor.loc);
    if(dist > 100 && dist < 500){
      this.acceleration = JSVector.subGetNew(game.actor.loc, this.loc);
      this.acceleration.normalize();
      this.acceleration.multiply(0.05);
      this.velocity.add(this.acceleration);
      this.velocity.limit(2);
      this.loc.add(this.velocity);
      console.log("dist > 100 && dist < 500)");
    }else if(dist < 15){
      // this.acceleration.multiply(0);
      // this.acceleration = JSVector.subGetNew(game.actor.loc, this.loc);
      // this.acceleration.normalize();
      // this.acceleration.multiply(0.1);
      // this.velocity.add(this.acceleration);
      // this.velocity.limit(1.5);
      // this.loc.add(this.velocity);
      console.log("dist < 3");
      this.hit = true;
      return(true);
    }
  }
}

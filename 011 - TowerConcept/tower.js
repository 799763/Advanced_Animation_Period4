class Tower{
  constructor(game){
      this.location = new JSVector(100, 100);
      this.radius = 15;
      this.vel = new JSVector(0,0);
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    let ctx = game.ctx;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.save();
    ctx.translate(this.location.x, this.location.y);
    ctx.rotate(this.vel.getDirection() + Math.PI/2);
    ctx.moveTo(0,-this.radius);
    ctx.lineTo(-this.radius/2 , this.radius/3);
    ctx.lineTo(0,4);
    ctx.lineTo(this.radius/2, this.radius/3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  update(){
    this.distance = this.location.distance(game.actor.loc);
    while(game.actor.loc != actor.lastCell.center){
      if(this.distance < 50){
        this.attack();
      }
    }
  }

  attack(){
    this.antiBody = new AntiBody(this.location.x, this.location.y, game.actor.loc);
    this.antiBody.run();
  }
}

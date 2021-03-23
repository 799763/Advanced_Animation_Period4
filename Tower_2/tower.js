class Tower{
  constructor(game, loc){
    let radius = 15;
    this.loc = loc;
  }

  run(){
    this.update();
    this.render();
  }

  render(){
    let ctx = game.ctx;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
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
    for(let i = 0; i > game.enemies.length; i++){
      this.distance = this.loc.distance(game.enemies[i].loc);
      if(this.distance < 150){
        this.antiBody() = new AntiBody(this.loc.x, this.loc.y, game.boids[i].loc);
        this.antiBody.run();
      }
    }
  }
}

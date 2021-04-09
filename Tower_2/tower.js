class Tower{
  constructor(game, loc){
    let radius = 15;
    this.loc = loc;
  }

  run(){
    //this.update();
    this.render();
  }

  render(){
    let ctx = game.ctx;
    ctx.save();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.restore();
  }

  update(){
    for(let i = 0; i > game.enemies.length; i++){
      this.distance = this.loc.distance(game.enemies[i].loc);
      if(this.distance < 150){
        this.antiBody = new AntiBody(this.loc.x, this.loc.y, game.enemies[i].loc);
        this.antiBody.run();
      }
    }
  }
}

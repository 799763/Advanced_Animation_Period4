class Tower{
  constructor(game, loc){
    this.radius = 15;
    this.loc = loc;
  }

  run(){
    //this.update();
    this.render();
  }

  render(){
    let ctx = game.ctx;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();


    // let ctx = game.ctx;
    // ctx.save();
    // ctx.translate(this.loc.x, this.loc.y);
    // //ctx.rotate(this.velocity.getDirection() + Math.PI/2);
    // ctx.beginPath();
    // ctx.fillStyle = "rgba(255, 75, 25)";
    // ctx.strokeStyle = "rgba(255, 75, 25)";
    // ctx.lineWidth = 1;
    // ctx.moveTo(0, -10);
    // ctx.lineTo(-10, 10);
    // ctx.lineTo(0, 0);
    // ctx.lineTo(10, 10);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fill();
    // ctx.restore();
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

class Antigen{
  constructor(game, loc){
    this.location = loc;
    this.velocity = new JSVector(0,0);
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    let ctx = game.ctx;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.save();
    ctx.arc(this.location.x, this.location.y, 6, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  update(){
    for(let i = 0; i < game.towers.length; i++){
        let dist = this.location.distance(game.tower[i].location);
        if(dist > 100){
            
        }
    }
  }
}

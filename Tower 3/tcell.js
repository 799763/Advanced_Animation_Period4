class TCell{
  constructor(game, loc){
    this.loc = loc;
    this.radius = 5;
    this.velocity = new JSVector(Math.random()*6-3, Math.random()*6-3);
    this.acceleration = new JSVector(0,0);

  }

  run(){
    this.render();
    this.update();
  }

  render(){
    let ctx = game.ctx;
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    // +++++++++++++++++++++++
    // draw as circles
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
  }

  update(){
    for(let i = 0; i < game.enemies.length; i++){
      this.dist = this.loc.distance(game.enemies[i].length);
      if(this.dist < 10){
        this.acceleration.multiply(0);
        this.acceleration = JSVector.subGetNew(game.enemies[i].loc, this.loc);
        this.acceleration.normalize();
        this.acceleration.multiply(0.05);
        this.velocity.add(this.acceleration);
        this.velocity.limit(2);
        this.loc.add(this.velocity);
      }
    }
  }
}

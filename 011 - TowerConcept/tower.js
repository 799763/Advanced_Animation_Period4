class Tower{
  constructor(game, loc){
      this.location = loc;
      this.radius = 15;
      this.vel = new JSVector(0,0);
      this.antibodies = [];
  }

  run(){
    this.render();
    this.update();
    for(let i = 0; i < this.antibodies.length; i++){
      this.antibodies[i].run();
    }
    for(let i = 0; i < this.antibodies.length; i++){
      if(this.antibodies[i].reachedEnemy = true){
        console.log("AntiBody loc when spliced:" + this.antibodies[i].loc);
        console.log("Tower Loc: " + this.location);
        console.log("Enemy Loc: " + game.actor.loc);
        this.antibodies.splice(i, 1);
        console.log("Antibody spliced");
        console.log("//========");
      }
    }
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
      if(this.distance < 100){
        this.createAntibody();
    }
  }

  createAntibody(){
    let antibody = new Antibody(this.location.x, this.location.y, game.actor.loc);
    this.antibodies.push(antibody);
  }
}

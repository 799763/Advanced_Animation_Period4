// Actor class.  Each actor starts life at the beginning of a path
// and follows that path to the end where it dies.

class Actor {
    constructor(game){
        // start off the actor in the first cell of the path
        this.pathIndex = 0;
        this.currentCell = game.path[this.pathIndex];
        // next in the path of cells
        this.nextCell = game.path[this.pathIndex+1];
        // where this actor should aim -- the center of the next cell in the path
        this.target = new JSVector(this.nextCell.loc.x + this.nextCell.width/2,
                            this.nextCell.loc.y + this.nextCell.height/2);
        // end of the path
        this.lastCell = game.path[game.path.length-1];
        // position the actor initially in the center of the first cell
        this.loc = new JSVector(this.currentCell.loc.x + this.currentCell.width/2,
                                this.currentCell.loc.y + this.currentCell.height/2);
        // velocity
        this.vel = new JSVector(0,0);
        this.rad = 15;
    }

    run() {
        this.update();
        this.render();
    }

    update(){
        // move this actor along the path until it reaches the end of
        // the path and dies
        let d1 = this.loc.distance(this.currentCell.center);
        let d2 = this.loc.distance(this.nextCell.center);

        if(this.loc.distance(this.lastCell.center) <= 27 && this.nextCell == this.lastCell){
          return;
        }else{
          if(d1 > d2){
            this.pathIndex++;
            this.currentCell = game.path[this.pathIndex];
            // next in the path of cells
            this.nextCell = game.path[this.pathIndex+1];
            // where this actor should aim -- the center of the next cell in the path
            this.target = this.nextCell.center;
          }
          this.acc = new JSVector.subGetNew(this.nextCell.center, this.loc);
          this.acc.normalize();
          this.acc.multiply(0.1);
          this.vel.add(this.acc);
          this.vel.limit(1.5);
          this.loc.add(this.vel);
        }
    }

    render(){
        let ctx = game.ctx;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.save();
        ctx.translate(this.loc.x, this.loc.y);
        ctx.rotate(this.vel.getDirection() + Math.PI/2);
        ctx.moveTo(0,-this.rad);
        ctx.lineTo(-this.rad/2 , this.rad/3);
        ctx.lineTo(0,4);
        ctx.lineTo(this.rad/2, this.rad/3);
        //ctx.arc(this.loc.x, this.loc.y, 6, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

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
    }

    run() {
        this.update();
        this.render();
    }

    update(){
        // move this actor along the path until it reaches the end of
        // the path and dies
        for(let i = 0; i < 5; i++){
          this.loc.add(this.nextCell + this.currentCell.with/2);
          if(this.currentCell = this.lastCell){
            break;
          }
        }
        // Max steps are 55-56
    }

    render(){
        let ctx = game.ctx;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "brown";
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, 6, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }
}

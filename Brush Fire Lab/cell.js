class Cell {
    constructor(game, r, c) {
        this.width = game.cellWidth;
        this.height = game.cellHeight;
        let x = c * this.width;
        let y = r * this.height;
        this.loc = new JSVector(x, y);
        this.r = r;
        this.c = c;
        this.isPath = false;
        // this.num = num
        // let red = Math.random() * 2;
        // let grn = Math.random() * 200 + 55;
        // let blu = Math.random() * 100 + 55;
        // this.clr = "rgba(" + red + ", " + grn + "," + blu + ", " + .65 + ")"
        this.center = new JSVector(this.loc.x + this.width/2, this.loc.y + this.height/2);
        this.distance = 1000;
        this.neighbors = [];
    }//  +++++++++  end constructor

    run() {
        this.render();
        // this.update();
    }

    render() {
        let ctx = game.ctx;

        if(this.isPath) {
            ctx.fillStyle = "burlywood";
            ctx.fillRect(this.loc.x, this.loc.y,this.width, this.height);
        }
        //render cell
        // ctx.fillStyle = this.clr;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
        // ctx.fill();
        ctx.stroke();
        
        // ctx.font = '10px serif';
        // ctx.strokeText("r = " + this.r, this.loc.x + 5, this.loc.y + 11);
        // ctx.strokeText("c = " + this.c, this.loc.x + 5, this.loc.y + 31);

    }

    loadNeighbors() {
        if(this.neighbors.length == 0){
          //Load north neighbor
          if(this.r > 0){
            this.neighbors.push(this.game.grid[this.r-1][this.c]);
          }
          //Load south neighbor
          if(this.c > 0){
            this.neighbors.push(this.game.grid[this.r][this.c-1]);
          }
          //Load east neighbor
          if(this.r < this.game.numRows-1){
            this.neighbors.push(this.game.grid[this.r+1][this.c]);
          }
          //Load west neighbor
          if(this.c < this.game.numCols-1){
            this.neighbors.push(this.game.grid[this.r][this.c+1]);
          }
        }
    }


}//+++++++++++++++++++++  end of Cell class

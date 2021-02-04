class Cell{
    constructor(es, r, c, occ) {
      this.es = es;
      this.row = r;
      this.col = c;
      let x = (c * this.es.cellWidth) + -2000;
      let y = (r * this.es.cellHeight) + -1500;
      this.loc = new JSVector(x,y);
      this.occupied = occ;
      if(this.occupied){
        this.clr = "blue"
      }else{
        this.clr = "white"
      }
    }//  +++++++++  end constructor

    run() {
        this.render();
        this.update();
    }

    render() {
      let ctx = this.es.context1;
      ctx.save();
      ctx.strokeStyle = "black";
      ctx.fillStyle = this.clr;
      ctx.beginPath();
      ctx.rect(this.loc.x, this.loc.y, ecoSystem.cellWidth,ecoSystem.cellHeight);
      ctx.fill();
      ctx.font = "20px serif";
      ctx.strokeText("c = "+ this.col, this.loc.x+5, this.loc.y+20);
      ctx.strokeText("r = "+ this.row, this.loc.x+5, this.loc.y+50);
      ctx.stroke();
      ctx.restore();
    }

    update() {

    }
}//+++++++++++++++++++++  end of Cell class

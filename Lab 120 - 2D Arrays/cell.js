class Cell{
    constructor(that, r, c, num) {
      let rows = r;
      let col = c;
      let x = (c * EcoSystem.cellWidth) + -2000;
      let y = (r * EcoSystem.cellHeight) + -1500;
      this.loc = new JSVector(x,y);
    }//  +++++++++  end constructor

    run() {
        this.render();
        this.update();
    }

    render() {
      let ctx = ecoSystem.context1;
      ctx.save();
      ctx.strokeStyle = "black";
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.rect(this.loc.x, this.loc.y, ecoSystem.cellWidth,ecoSystem.cellHeight);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    update() {

    }
}//+++++++++++++++++++++  end of Cell class

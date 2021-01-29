class Cell{
    constructor( r, c, num) {
      let rows = r;
      let cols = c;
      let cums = num;
    }//  +++++++++  end constructor

    run() {
        this.render();
        this.update();
    }

    render() {
      let ctx = ecoSystem.ctx1;
      ctx.save();
      ctx.strokeStyle = "black";
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    update() {
      let ctx = this.ctx1;
    }
}//+++++++++++++++++++++  end of Cell class

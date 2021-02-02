class Cell{
    constructor(r, c, num) {
      let rows = r;
      let cols = c;
      let nums = num;
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
      ctx.rect();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    update() {

    }
}//+++++++++++++++++++++  end of Cell class

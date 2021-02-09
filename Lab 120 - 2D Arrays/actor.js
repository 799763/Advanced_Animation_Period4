class Actor{
    constructor(){
      this.loc = new JSVector(ecoSystem.cells[0][0]);
    }

    run(){
      this.render();
    }

    render(){
      let ctx = this.ecoSystem.context1;
      ctx.save();
      ctx.translate(this.loc.x, this.loc.y);
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(0,-10);
      ctx.lineTo(-10,0);
      ctx.lineTo(0,0);
      ctx.lineTo(10,10);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
}

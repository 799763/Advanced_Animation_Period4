class Actor{
    constructor(es){
      this.es = es;
      let x = (1 * this.es.cellWidth) + -2000
      let y = (1 * this.es.cellWidth) + -1500
      this.loc = new JSVector(x,y);
    }

    run(){
      this.render();
    }

    render(){
      let ctx = this.es.context1;
      ctx.save();
      ctx.translate(this.loc.x, this.loc.y);
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(0,-40);//front
      ctx.lineTo(-20,0);//right
      ctx.lineTo(0,-15);//middle
      ctx.lineTo(20,0);//left
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
}

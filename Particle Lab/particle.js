//All parameters are currently vectors
function Particle(location){
   this.loc = location.copy();
   this.vel = new JSVector(Math.random()*2-1, -2);
   this.acc = new JSVector(0, 0.05);
   this.rad = 2;
   this.red = 240;
   this.green = 240;
   this.blue = 0;
   this.lifeSpan = Math.random()*255;
   this.isDead = false;
}
   Particle.prototype.run = function(){
     this.update();
     this.render();
   }

   Particle.prototype.update = function(){
     this.vel.add(this.acc);
     this.loc.add(this.vel);
     this.lifeSpan -= 2;
     if(lifeSpan < 0){
        this.isDead = true;
     }
   }

   Particle.prototype.render = function(){
     let ctx = game.ctx;
     ctx.fillStyle = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.lifeSpan/255 + ")";
     ctx.beginPath();
     ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI*2);
     ctx.fill(lifeSpan);
   }

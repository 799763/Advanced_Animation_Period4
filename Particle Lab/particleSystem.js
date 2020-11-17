function ParticleSystem(){
  this.emitter = new JSVector(300, 400);
  this.particles = [];
  for(var i = 0; i < 50; i++){
    this.particles.push(new Particle(this.emitter));
  }
}

ParticleSystem.prototype.run = function(){
  for(var i = this.particles.length-1; i > 0; i--){
    this.particles[i].run();
    if(this.particles[i].isDead){
        this.particles[i].splice(i, 1);
        this.particles.push(new Particle(this.emitter));
    }
  }
}

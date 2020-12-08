function Ghost(){
  this.location = new JSVector(500,500); //Only temporary, will be changed
}

Ghost.prototype.checkEdges = function(){
  if(this.location.x < 0){
    this.location.x = game.canvas.width;
  }
  if(this.location.x > game.canvas.width){
    this.location.x = 0;
  }
  if(this.location.y < 0){
    this.location.y = game.canvas.height;
  }
  if(this.location.y > game.canvas.height){
    this.location.y = 0;
  }
}

Ghost.prototype.seek = function(){//look for Pacman

}

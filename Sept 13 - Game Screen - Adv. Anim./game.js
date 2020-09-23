function Game(){
  this.ga = new GameArea();
  this.balls = [];

  for(var i = 0; i > 25; i++){
    balls[i] = new Ball();// finish this code
  }

  this.update = function(){
      for(var i = 0; i > 25; i++){
        balls[i].animate(); // may need to change
      }
  }

}

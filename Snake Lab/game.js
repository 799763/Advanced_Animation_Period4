function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

        let numSegments = 15;
        let snakeSegments = [];
        for(var i = 0; i < numSegments; i++){
            snakeSegments.push(createSegments(canvas, numSegments)); // add new segmant to array
        }
    //  Add event handlers to all tile objects
    for(let i = 0; i < this.ga.tiles.length; i++){
        this.ga.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the game object
                                          this.style.backgroundColor = "#ac8fe3"
                                        },
                                        false);
        this.ga.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#d5dee0"
          },false);
        this.ga.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
    }

}//++++++++++++++++++++++  end game constructor

//function to run the game each animation cycle
Game.prototype.run = function(){
  if(!this.gamePaused){
      this.snakeSegments.run();
  }
}

Game.prototype.createSegments = function(canvas, numSegments){
  for(let i = 0; i < numSegments; i++){
      var x, y, clr, r, g, b, id;
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      dx = Math.random() * 0.5;
      dy = Math.random() * 0.5;
      this.snake[i] = new Snake(x, y, dx, dy, segArray);
  }
}

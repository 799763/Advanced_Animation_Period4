function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //   create the array of enemy objects
    this.enemies = [];
    let numEnemies = 15;
    for(var i = 0; i < numEnemies; i++){
        let rad = 10;
        let clr = "black";
        this.enemies.push(new Enemy(this.canvas,rad, clr)); // add new enemy to array
    }

    this.viruses = [];
    let numViruses = 15;
    for(var i = 0; i < numViruses; i++){
        let rad = 10;
        let clr = "black";
        this.viruses.push(new Virus(this.canvas,rad, clr)); // add new enemy to array
    }

    //Create an array of towers
    this.towers = [];
    //load array with tower at mouse location
    this.towers.push(new Tower(this.canvas, 200, 200));
    this.towers.push(new Tower(this.canvas, 700, 200));
    this.towers.push(new Tower(this.canvas, 200, 500));
    this.towers.push(new Tower(this.canvas, 700, 500));

    this.tCells = [];
    // let numCells = 15;
    // for(var i = 0; i < numViruses; i++){
    //     let rad = 10;
    //     let clr = "black";
    //     this.tCells.push(new TCell(this.canvas,rad, clr)); // add new enemy to array
    // }
    this.canvas.addEventListener("click", function(event){
      let x = event.offsetX;
      let y = event.offsetY;
      game.towers.push(new TCell(game, new JSVector(x,y)));
    });

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


// function to run the game each animation cycle
Game.prototype.run = function(){
    for(let i = 0; i < this.towers.length; i++){
      this.towers[i].run();    // run each tower
   }

   for(let i = 0; i < this.enemies.length; i++){
     this.enemies[i].run();    // run each enemy
  }

  for(let i = 0; i < this.viruses.length; i++){
    this.viruses[i].run();
  }

  for(let i = 0; i < this.tCells.length; i++){
    this.tCells[i].run();
  }
}

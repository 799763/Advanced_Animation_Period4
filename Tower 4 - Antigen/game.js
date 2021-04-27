function Game(){

    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //  set number of cells in grid
    this.numCols = 20;
    this.cellWidth = this.canvas.width / this.numCols;
    this.numRows = 13;
    this.cellHeight = this.canvas.height / this.numRows;

    // Create the two-dimensional grid of cells
    this.grid = new Array(this.numRows);
    // Populate the grid of cells
    for (let r = 0; r < this.grid.length; r++) {
        this.grid[r] = new Array(this.numCols);
        for (let c = 0; c < this.grid[r].length; c++) {
            this.grid[r][c] = new Cell(this, r, c);
        }
    }

    // Create a path for the actors to follow.
    // The path is an array of cells as specified in a separate file.
    this.path = [];
    for(let c = 0; c < pathCells.length; c++){
        let cell = this.grid[pathCells[c][0]][pathCells[c][1]];
        cell.isPath = true;
        this.path.push(cell);
    }

    // Create an actor to follow the path.
    // Additional actors may be created periodically.
    this.actor = new Actor(this);  // one actor initially

    //Create a Tower
    this.towers = [];

    this.canvas.addEventListener("click", function(event){
      let x = event.offsetX;
      let y = event.offsetY;
      game.towers.push(new Tower(game, new JSVector(x,y)));
    });

    this.canvas.addEventListener("keyup", function(event){
      if(event.keyCode == 13){
        let x = event.offsetX;
        let y = event.offsetY;
        game.towers.push(new Tower(game, new JSVector(x,y)));
      }
    });

}//++++++++++++++++++++++  end Game constructor

// function to run the game each animation cycle
Game.prototype.run = function(){
    this.ctx.fillStyle = "pink";
    this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    for (let r = 0; r < this.grid.length; r++) {
        for (let c = 0; c < this.numCols; c++) {
            this.grid[r][c].run();
        }
    }
    // Show the end cell
    this.ctx.fillStyle = "brown";
    this.ctx.font = '18px sans-serif';
    let endCell = this.path[this.path.length-1];
    this.ctx.fillText("End", endCell.loc.x + endCell.width/2 - 16,
                    endCell.loc.y + endCell.height/2 + 8);

    // run all the actors
    this.actor.run();

    for(let i = 0; i < this.towers.length; i++){
        this.towers[i].run();
    }
}

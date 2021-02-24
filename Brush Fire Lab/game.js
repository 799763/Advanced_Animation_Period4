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
    //Create the goal and set it to bottom right
    let endCell = grid[grid.length-1];

    //Create an array of neighbors
    this.neighbors = [];

    // Create an actor.
    // Additional actors may be created periodically.
    this.actors = [];
    this.actors.push(new Actor(this));  // one actor initially

}//++++++++++++++++++++++  end Game constructor

Game.prototype.brushFire = function(){

}

// function to run the game each animation cycle
Game.prototype.run = function(){
    this.ctx.fillStyle = "saddlebrown";
    this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    for (let r = 0; r < this.grid.length; r++) {
        for (let c = 0; c < this.numCols; c++) {
            this.grid[r][c].run();
        }
    }
    // Show the end cell
    this.ctx.fillStyle = "brown";
    this.ctx.font = '18px sans-serif';
    this.ctx.fillText("End", this.endCell.loc.x + this.endCell.width/2 - 16,
                    this.endCell.loc.y + endCell.height/2 + 8);

    // run all the actors
    for(let i = 0; i < this.actors.length; i++){
        this.actors[i].run();
    }

}

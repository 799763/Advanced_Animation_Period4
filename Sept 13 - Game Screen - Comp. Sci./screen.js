function GameArea(){
   //  Wrapper Div
   this.wrapperDiv = document.getElementById("wrapperDiv");
   this.wrapperDiv.setAttribute("style","background-color:yellow; border: 5px solid black; width:900px; height:800px;");
   // create tileMenuDiv
   this.tileMenuDiv = document.createElement("div");
   this.wrapperDiv.appendChild(this.tileMenuDiv)
   this.tileMenuDiv.setAttribute("style","background-color:#033c4a; width:900px; height:100px; float:left;");

   //  Add listeners to tile objects
   for(let i = 0; i < this.tiles.length; i++){
   this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
   function(){//  JavaScript has anonymous functions
      //  'this' is the listener target object: tile
      //  'this' does not refer to the PlayArea object
      this.style.backgroundColor = "#ac8fe3"
    },
    false);

   this.tiles[i].addEventListener('mouseout', function(){
      this.style.backgroundColor = "#d5dee0"
   },false);

   this.tiles[i].addEventListener('click', function(){
      game.gamePaused = !game.gamePaused;
      console.log("Mouse Clicked");
   },false);
 }
}

function GameArea(){
   //  Wrapper Div
   this.wrapperDiv = document.getElementById("wrapperDiv");
   this.wrapperDiv.setAttribute("style","background-color:yellow; border: 5px solid black; width:900px; height:800px;");
   // create tileMenuDiv
   this.tileMenuDiv = document.createElement("tileDiv");
   this.tileMenuDiv.setAttribute("style","background-color:#033c4a; width:900px; height:100px; float:left;");
   this.wrapperDiv.appendChild(this.tileDiv);
   this.tiles = [];


   for(let i = 0; i < 4; i++){
      this.tileMenuDiv.appendChild(this.tiles[i]);
      this.tiles[i].setAttribute("style","background-color: red; width:900px; height:100px; float:left;");


   }//end of for loop


}// end of GameArea

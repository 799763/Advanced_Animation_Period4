window.onload = init;
var canvas;
var ctx;
//  intialize the Canvas and context
window.onload = init;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate();
}

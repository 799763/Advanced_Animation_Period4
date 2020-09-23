window.onload = init;
var canvas;
var game;
var ctx;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.style.border = "solid black 2px";
  canvas.style.backgroundColor = "rgba(0, 24, 35)"
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
  game.update();
}

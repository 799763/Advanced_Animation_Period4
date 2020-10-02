// JSVector -- a Javascript 2D vector class
//  Fernando Rodriguez
//  Lab 9/25 - Vectors
// The class constructor
function JSVector(x = 0,y = 0){
        this.x = x;
        this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
    var dir = this.getDirection();
    this.x = mag * Math.cos(dir);
    this.y = mag * Math.sin(dir);
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
    return(Math.sqrt(this.x * this.x + this.y * this.y));
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
    var mag = this.getMagnitude();
    this.x = mag * Math.cos(angle);
    this.y = mag * Math.sin(angle);
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
    return(Math.atan2(y,x));
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
    this.x = this.x + v2.x;
    this.y = this.y + v2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
    this.x = this.x - v2.x;
    this.y = this.y - v2.y;
}
//////
// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
    return(new JSVector(v1.x + v2.x, v1.y + v2.y));
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  return(new JSVector(v1.x - v2.x, v1.y - v2.y));
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x = this.x * scalar;
  this.y = this.y * scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x = this.x / scalar;
  this.y = this.y / scalar;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  this.setMagnitude(1);
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){

}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
  return ((v2.x + this.x) * (v2.x + this.x) + (v2.y + this.y) * (v2.y + this.y));
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
  return Math.sqrt((v2.x + this.x) * (v2.x + this.x) + (v2.y + this.y) * (v2.y + this.y));
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |

JSVector.prototype.rotate = function(angle) {

}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){

}

// Make a copy of this vector
JSVector.prototype.copy = function(){
  return (new JSVector());
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {

}

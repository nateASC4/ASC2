var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxDistance = dist(width/20, height/20, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < height; y++) {
      var distance = dist(width/20, height/20, x, y);
      distances[x][y] = distance/maxDistance * 0;
    }
  }
  spacer = 60;
  noLoop();
}

function draw() {
  background(165,90,82)
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
  fill(20, 93, 132);
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      rect(x,y, 50, 50);
    }
  }
if mouseIsPressed = randomColor()
}

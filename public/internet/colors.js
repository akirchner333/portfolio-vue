var points = [];
var fullHull = [];
var lines = []
var lastMove;
var move = true;
var inc = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 20; i++){
    points.push(new Point(
      windowWidth/2, windowHeight/2
    ));
    points[i].setMove(random(4) - 2, random(4) - 2);
  }
  // getHull();
  lines = []
  points.sort((a,b) => {return a.x - b.x});
  // for(var i = 0; i <= points.length; i++){
  //   lines.push(...getHull(points.slice(0, i)));
  // }
  // lines.flatten();
  // lastMove = millis();
}

function draw(){
  // background(255);
  stroke(0);
  if(move){
    points.forEach((point) => point.move());
    // getHull();
    lines = [];
    points.sort((a,b) => {return a.x - b.x});
    for(var i = 3; i <= points.length; i++){
      lines.push(...getHull(points.slice(0, i)));
    }
  }
  

  strokeWeight(5);
  // stroke(0);
  // points.forEach((point) => point.draw);
  for(var i = 0; i < points.length; i++){
    points[i].draw();
  }

  stroke(noise(inc)*255, noise(inc, 100)*255, noise(inc, 200)*255, noise(inc, 300)*255);
  inc += 0.01;
  strokeWeight(1);
  // for(var i = 0; i < lines.length; i++){
    lines.forEach((line) => line.draw());
  // }
  
}

function keyTyped(){
  if(key == "s"){
    move = !move;
  }
  if(key == "d"){
    points.forEach((point) => point.move());
    getHull();
  }
  if(key == "a"){
    points.forEach((point) => point.reverseMove());
    getHull();
  }
  if(key == "w"){
    console.log("Something happened");
    getHull();
  }
}

function getHull(points){
  // Empty out full hull
  fullHull = [];

  // Sort the points from left to right
  points.sort((a,b) => {return a.x - b.x});
  // Draw a line between the edges
  var startLine = new Line(points[0], points[points.length -1]);

  // Divided them into above and below
  var above = [];
  var below = [];
  for(var i = 0; i < points.length; i++){
    if(getSide(startLine, points[i]) == -1){
      below.push(points[i]);
    }else if(getSide(startLine, points[i]) == 1){
      above.push(points[i]);
    }
  }
  // And then recurse each side of it
  return [...recurseHull(startLine, above), ...recurseHull(startLine, below)];
}

// A recursive version of hull
// Takes a line in [x, y, x, y] format and a ses of points, all on the outside of the line.
function recurseHull(line, points){
  // Are there any points outside this line? If not, we're done! Return the line.
  if(points.length == 0){
    return [line];
  }

  // Calculate which point is the farthest away
  var highestIndex = 0;
  var highestDistance = 0;
  for(var i = 0; i < points.length; i++){
    var distance = calculateDistance(line, points[i])
    if(distance > highestDistance){
      highestDistance = distance;
      highestIndex = i;
    }
  }
  // Now we have a triangle, consisting of the line and the farthest point.
  var farPoint = points[highestIndex];
  points.splice(highestIndex, 1);

  var triangle = new Polygon([line.a, line.b, farPoint]);

  // Now we divide the remaining points into two groups - those which are near the first vertex and those which are near the second vertex
  var linePoints1 = [];
  var linePoints2 = [];
  var line1 = new Line(line.a, farPoint);
  var line2 = new Line(farPoint, line.b);

  // var trianglePoint = new Point(0, farPoint.y - line.slope * farPoint.x);
  for(var i = 0; i < points.length; i++){
    if( !triangle.inside(points[i]) ){
      if(closestLine(points[i], line, farPoint) == 1 ){
        linePoints1.push(points[i]);
      }else{
        linePoints2.push(points[i]);
      }
    }
  }
  // And then we do it again, with the new groups
  return [...recurseHull(line1, linePoints1), ...recurseHull(line2, linePoints2)];
}

// Given a point and a line, tell them which one each "belongs" too
function closestLine(point, line, tip){
  var edge = new Line(line.a, tip);
  var b = tip.y - line.slope() * tip.x
  var trianglePoint = new Point(0, b-line.slope());
  var topLine = new Line(tip, trianglePoint);
  strokeWeight(1);

  if(pointInTriangle(line.a, line.b, tip, point)){
    return 0;
  }

  if(pointInTriangle(line.a, tip, trianglePoint, point)){
    return 1;
  }else{
    return -1;
  }
}

// I can't assume that if a point is on a line, it's inside the triangle - might be beyond it.
function pointInTriangle(a, b, c, point){
  var b1 = getSide(new Line(a, b), point);
  if(b1 === 0) return true;
  var b2 = getSide(new Line(b, c), point);
  if(b2 === 0) return true;
  var b3 = getSide(new Line(c, a), point);
  if(b3 === 0) return true;
  return ((b1 == b2) && (b2 == b3));
}

function getSide(line, point){
  var side = (point.x - line.a.x) * (line.b.y - line.a.y) - (point.y - line.a.y) * (line.b.x - line.a.x);
  return Math.sign(side);
}

// Find the distance between the line and the point
function calculateDistance(line, point){
  // Slope of the line from 1-2 line and x3
  var m = line.slope();
  var perpM = -1/m;
  
  var b = line.a.y - m * line.a.x;
  var perpB = point.y - perpM * point.x;


  // The coordinates of the point on line which is closet to the point
  var intersectX = (perpB - b)/(m - perpM);
  var intersect = new Point(intersectX, intersectX * m + b);
  return pythag(point, intersect);
}

function pythag(point1, point2){
  return sqrt(pow(point1.x-point2.x, 2) + pow(point1.y-point2.y, 2));
}

// ------------------------------------ CLASSES ---------------------------------------------------

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  setMove(x, y){
    this.moveX = x;
    this.moveY = y;
  }

  move(){
    this.x = this.x + this.moveX;
    this.y = this.y + this.moveY;
    if(this.x >= windowWidth || this.x <= 0){
      this.moveX *= -1;
    }
    if(this.y >= windowHeight || this.y <= 0){
      this.moveY *= -1;
    }
  }

  reverseMove(){
    this.x = this.x - this.moveX;
    this.y = this.y - this.moveY;
    if(this.x >= windowWidth || this.x <= 0){
      this.moveX *= -1;
    }
    if(this.y >= windowHeight || this.y <= 0){
      this.moveY *= -1;
    }
  }

  draw(){
    point(this.x, this.y);
  }

  say(){
    return this.x + ", " + this.y;
  }
}

class Line{
  constructor(a, b){
    this.a = a;
    this.b = b;
  }

  draw(){
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }

  slope(){
    return (this.b.y - this.a.y)/(this.b.x - this.a.x);
  }
}

class Polygon{
  constructor(points){
    this.points = points;
  }

  draw(){
    beginShape();
    this.points.forEach((point) => vertex(point.x, point.y));
    endShape(CLOSE);
  }

  inside(point){
      // ray-casting algorithm based on
      // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

      var x = point.x, y = point.y;

      var inside = false;
      for (var i = 0, j = this.points.length - 1; i < this.points.length; j = i++) {
          var xi = this.points[i].x, yi = this.points[i].y;
          var xj = this.points[j].x, yj = this.points[j].y;

          var intersect = ((yi > y) != (yj > y))
              && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
          if (intersect) inside = !inside;
      }

      return inside;
  }
}
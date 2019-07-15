var start = 0;
var multipler;
var increment = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(windowHeight > windowWidth){
    multipler = windowWidth
  }else{
    multipler = windowHeight;
  }
}

function draw() {
  background(255);

  drawSnake();
  // drawBug();

  start += increment/2;
}

function snakehead(x, y, a){
  strokeWeight(0);
  // fill(0, 255, 0);
  
  triangle(
    x+rotate_X(-9, 0, a), y+rotate_Y(-9, 0, a), 
    x+rotate_X(30, 16, a), y+rotate_Y(30, 16, a), 
    x+rotate_X(30, -16, a), y+rotate_Y(30, -16, a));

  triangle(
    x+rotate_X(30, 16, a), y+rotate_Y(30, 16, a),
    x+rotate_X(30, 0, a), y+rotate_Y(30, 0, a), 
    x+rotate_X(60, 8, a), y+rotate_Y(60, 8, a));

  triangle(
      x+rotate_X(30, -16, a), y+rotate_Y(30, -16, a),
      x+rotate_X(30, 0, a), y+rotate_Y(30, 0, a), 
      x+rotate_X(60, -8, a), y+rotate_Y(60, -8, a));

  fill(0);
  ellipse(x+rotate_X(35, -8, a), y+rotate_Y(35, -8, a), 5,5);
}

function rotate_X(x, y, a){
  return x * cos(a) - y * sin(a);
}

function rotate_Y(x, y, a){
  return y * cos(a) + x * sin(a);
}

function drawSnake(){
  // stroke(noise(start, -100)*255, 255, noise(start, -200)*255);
  strokeWeight(15);

  var x = start;

  for(var i = 0; i < 200; i++){
    stroke(40+noise(x, -100)*40,159+noise(x, -300)*40,93+noise(x, -400)*40);
    line(
      noise(x, 0)*width, 
      noise(x, 100)* height, 
      noise(x + increment, 0)*width, 
      noise(x + increment, 100)*height);
    x += increment;
  }

  drawBug(x);

  fill(40+noise(x, -100)*40,159+noise(x, -300)*40,93+noise(x, -400)*40)
  var angle = atan2(noise(x, 100)-noise(x-increment, 100), noise(x, 0)-noise(x-increment, 0));

  snakehead(noise(x, 0)*width, noise(x, 100)*height, angle);
}

function drawBug(x){
  fill(255, 50, 50);
  strokeWeight(0);
  var far = round(x) + 0.5;
  for(var i = 0; i < 5; i++){
    ellipse(noise(far+i, 0)*width, noise(far+i, 100)*height, 10, 10);
  }
  
  // ellipse(noise(far+1, 0)*multipler, noise(far+1, 100)*multipler, 10, 10);

}
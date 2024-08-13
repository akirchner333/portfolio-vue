var x = 950;
var y = 950;
var lastMove;
var exploded = false;

var zoneWidth = 1000;
var canvasWidth = 40;
var squareWidth = 10;

var textArea;

var others = [];

function setup() {
  var canvas = createCanvas(canvasWidth * squareWidth, canvasWidth * squareWidth);
  canvas.parent("#canvas");
  noiseSeed(38);

  textArea = document.getElementById("report-list");
  lastMove = millis();

  for(var i = 0; i < 80; i++){
    others.push({
      x: parseInt(random(0 - canvasWidth/2, zoneWidth - canvasWidth/2)),
      y: parseInt(random(0 - canvasWidth/2, zoneWidth - canvasWidth/2))
    });
  }
}

function draw() {
  background(0);
  noStroke();
  for(var i = 0; i < canvasWidth; i++){
    for(var j = 0; j < canvasWidth; j++){
      if(x + i > zoneWidth || x + i < 0 || y + j > zoneWidth || y + j < 0){
        fill(0);
      }else{
        fill(noise((i+x)*0.1, (j+y)*0.1) * 255);
      }
      rect(i*squareWidth, j*squareWidth, squareWidth, squareWidth);
    }
  }

  fill(200, 0, 0);
  rect(canvasWidth*squareWidth/2+2, canvasWidth*squareWidth/2+2, 6, 6);

  others.forEach((person) => {
    if(x <= person.x && x + canvasWidth > person.x && y <= person.y && y + canvasWidth > person.y){
      if(exploded == false){
        addReport("You have exploded");
        exploded = true;
      }
      rect((person.x - x) * squareWidth + 2, (person.y-y)* squareWidth + 2, 6, 6);
    }
  });

  stroke(1);
  strokeWeight(1);
  fill(255);
  rect(320, 0, 80, 80);

  strokeWeight(2);
  fill(0);
  for(var i = 0; i < 4; i++){
    line(
      clampNoise(x*0.01+i, y*0.01+i, 100)*80+320, 
      clampNoise(x*0.01+i, y*0.01+i, 200)*80, 
      clampNoise(x*0.01+i+1, y*0.01+i+1, 100)*80+320, 
      clampNoise(x*0.01+i+1, y*0.01+i+1, 200)*80);

    line(
      400 - clampNoise(x*0.01+i, y*0.01+i, 100)*80, 
      80 - clampNoise(x*0.01+i, y*0.01+i, 200)*80, 
      400 - clampNoise(x*0.01+i+1, y*0.01+i+1, 100)*80, 
      80 - clampNoise(x*0.01+i+1, y*0.01+i+1, 200)*80);
  }

  line(
    clampNoise(x*0.01, y*0.01, 100)*80+320, 
    clampNoise(x*0.01, y*0.01, 200)*80, 
    400 - clampNoise(x*0.01, y*0.01, 100)*80, 
    80 - clampNoise(x*0.01, y*0.01, 200)*80, 
  );

  line(
    clampNoise(x*0.01+4, y*0.01+4, 100)*80+320, 
    clampNoise(x*0.01+4, y*0.01+4, 200)*80,
    400 - clampNoise(x*0.01+4, y*0.01+4, 100)*80, 
    80 - clampNoise(x*0.01+4, y*0.01+4, 200)*80
  );

  if(lastMove < millis() - 75){
    if(!exploded){
      move();
    }
    lastMove = millis();
  }
}

function clampNoise(x, y, z){
  var r = noise(x, y, z);
  var constrained = constrain(r, 0.15, 0.85);
  return map(constrained, 0.15, 0.85, 0, 1);
}

function move(){
  if(keyIsDown(65)){
    x = constrain(x-1, 0 - canvasWidth/2, zoneWidth - canvasWidth/2);
  }
  if(keyIsDown(68)){
    x = constrain(x+1, 0 - canvasWidth/2, zoneWidth - canvasWidth/2);
  }
  if(keyIsDown(87)){
    y = constrain(y - 1, 0 - canvasWidth/2, zoneWidth - canvasWidth/2);
  }
  if(keyIsDown(83)){
    y = constrain(y + 1, 0 - canvasWidth/2, zoneWidth - canvasWidth/2);
  }
}

function keyPressed(){
  if(keyCode === 84 && !exploded){
    x = parseInt(random(0 - canvasWidth/2, zoneWidth - canvasWidth/2));
    y = parseInt(random(0 - canvasWidth/2, zoneWidth - canvasWidth/2));

    addReport("Teleported");
  }
}

function addReport(message){
  var element = document.createElement("li");
  element.innerHTML = message
  textArea.insertBefore(element, textArea.firstChild)
}
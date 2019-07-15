var loaded = false;
var increment = 0;
var increase = 0.005;
var charWidth = 100;
var pageText = [" ".repeat(charWidth)];

const shark = [
'\\____)\\_____',
'/--v____ __\'<',
")/" ];

const leftShark = [
"_____/(____/",
">'__ ___v--\\",
'\\('
]
var facing = true;

var lastMove;

function setup() {
  loadStrings("file.txt", insertText);
  lastMove = millis() + 1000;
}

function draw() {
  if(loaded && lastMove < millis() - 100){
    updatePosition();
    lastMove = millis();
  }
}

function overlayText(x, y, newText){
  var original = pageText[y];
  var output = original.slice(0, x) + newText.replace("<", "&lt;") + original.slice(x+newText.length)
  return output;
}

function updatePosition(){
  var allLines = selectAll(".paragraph");

  var oldX = getNoise(increment*5, 0, charWidth - shark[1].length);
  var oldY = getNoise(increment, 100, pageText.length - shark.length);

  // Remove old shark
  for(var i = 0; i < shark.length; i++){
    allLines[oldY+i].html(pageText[oldY+i]);
  }

  increment += increase;

  // draw new shark
  var newX = getNoise(increment*5, 0, charWidth - shark[1].length);
  var newY = getNoise(increment, 100, pageText.length - shark.length);
  
  if(newX < oldX){
    facing = true;
  }else if(newX > oldX){
    facing = false;
  }

  drawShark(newX, newY, allLines);
  eat(newX, newY);
}

// Gets a noise value and cuts off the edges so we get a wider range
function getNoise(inc, offset, max){
  var r = noise(inc, offset);
  var range = max * (2 * r - 0.5);
  return constrain(parseInt(range), 0, max - 1);
}

function drawShark(x, y, allLines){
  if(!facing){
    allLines[y].html(overlayText(x, y, shark[0]));
    allLines[y+1].html(overlayText(x, y+1, shark[1]));
    allLines[y+2].html(overlayText(x+7, y+2, shark[2]));
  }else{
    allLines[y].html(overlayText(x, y, leftShark[0]));
    allLines[y+1].html(overlayText(x, y+1, leftShark[1]));
    allLines[y+2].html(overlayText(x+4, y+2, leftShark[2]));
  }
}

function eat(x, y){
  if(facing && ['a', 'e', 'i', 'o', 'u'].includes(pageText[y+1].charAt(x))){
    pageText[y+1] = overlayText(x, y+1, " ");
  }else if(!facing && ['a', 'e', 'i', 'o', 'u'].includes(pageText[y+1].charAt(x+shark[1].length))){
    pageText[y+1] = overlayText(x+shark[1].length, y+1, " ");
  }
}

function insertText(result){
  var textContainer = select("#text");

  var firstDiv = createDiv(pageText[0]);
  firstDiv.addClass("paragraph");
  textContainer.child(firstDiv);

  result.forEach((line) => {
    while(line.length > charWidth){
      var singleLineIndex = line.lastIndexOf(" ", charWidth);
      var singleLine = line.slice(0, singleLineIndex) + " ".repeat(charWidth - singleLineIndex)
      var lineDiv = createDiv(singleLine);
      pageText.push(singleLine);
      lineDiv.addClass("paragraph");
      textContainer.child(lineDiv);

      line = line.slice(singleLineIndex+1);
    }
    var lineDiv = createDiv(line + " ".repeat(charWidth - line.length));
    pageText.push(line + " ".repeat(charWidth - line.length));
    lineDiv.addClass("paragraph");
    textContainer.child(lineDiv);

    var lineBreak = createDiv(" ".repeat(charWidth));
    pageText.push(" ".repeat(charWidth));
    lineBreak.addClass("paragraph");
    textContainer.child(lineBreak);
  });

  loaded = true;
}
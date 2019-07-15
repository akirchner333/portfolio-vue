var increment = 0;

var lastMove, lastSkull, skullValue;

function setup() {
  lastMove = millis();
  lastSkull = 0
  skullValue = 20;
  addSkull();
}

function draw() {
  if(lastMove < millis() - 100){
    var skulls = selectAll(".skull");
    skulls.forEach((skull) => {
      var value = parseInt(skull.attribute("skull-value"));
      // skull.style('top', getNoise(increment, 0+value, document.body.scrollHeight) + "px");
      skull.style('top', getNoise(increment, 0+value, select("#declaration").height) + "px");
      skull.style('left', getNoise(increment, 100+value, select("#declaration").width) + "px");
    });
    increment += 0.0055;
  }

  if(lastSkull < millis() - 1500){
    addSkull();
    lastSkull = millis();
  }
}

function addSkull(){
  var newSkull = createDiv();
  newSkull.addClass("skull");
  newSkull.attribute("skull-value",  skullValue*100);
  newSkull.style('top', getNoise(increment, 0+skullValue*100, select("#declaration").height) + "px");
  newSkull.style('left', getNoise(increment, 100+skullValue*100, select("#declaration").width) + "px");
  newSkull.style("height", skullValue + "px");
  newSkull.style("width", skullValue + "px");
  newSkull.style("margin-top", skullValue/-2 + "px");
  newSkull.style("margin-left", skullValue/-2 + "px");
  newSkull.style("background-size", skullValue + "px");
  newSkull.style("z-index", skullValue);
  var spin = parseInt(random(10))
  newSkull.style("animation", "spin "+ spin +"s linear infinite");
  newSkull.style("-webkit-animation", "spin "+ spin +"s linear infinite");
  newSkull.style("-moz-animation", "spin "+ spin +"s linear infinite");
  newSkull.style("display", "block");
  skullValue += 20;
}

function placeSkull(inc, size){
  var allLines = selectAll(".paragraph");

  var skullY = getNoise(inc, 100, pageText.length-1);
  allLines[skullY].removeClass("skull");

  inc += incrementChange;
  var skullX = getNoise(inc, 0, charWidth * 12);
  skullY = getNoise(inc, 100, pageText.length-1);
  // var lineY = getNoise(inc*50, 200, size * -1);
  var lineY = 0;

  allLines[skullY].addClass("skull");
  allLines[skullY].style('background-position-y', lineY + 'px');
  allLines[skullY].style('background-position-x', skullX + 'px');
  allLines[skullY].style('background-size', size + 'px');
}

// function insertText(result){
//   result.forEach((line) => {
//     while(line.length > charWidth){
//       var singleLineIndex = line.lastIndexOf(" ", charWidth);
//       var singleLine = line.slice(0, singleLineIndex) + " ".repeat(charWidth - singleLineIndex)
//       pageText.push(singleLine);

//       line = line.slice(singleLineIndex+1);
//     }
//     pageText.push(line + " ".repeat(charWidth - line.length));

//     pageText.push(" ".repeat(charWidth));
//   });
// }

function getNoise(inc, offset, max){
  var r = constrain(noise(inc, offset), 0.2, 0.9);
  return parseInt(map(r, 0.2, 0.9, 0, 1) * max);
}
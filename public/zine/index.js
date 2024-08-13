// The print styling is currently totally broken :(

function canvasPage(id, start, seed, lineFunc){
  var parent = document.getElementById(id);
  var style = window.getComputedStyle(parent, null);
  const width = parseInt(style.getPropertyValue('width')) - parseInt(style.getPropertyValue('padding-left'))  - parseInt(style.getPropertyValue('padding-right')) - 2;
  const height = parseInt(style.getPropertyValue('height')) - parseInt(style.getPropertyValue('padding-top'))  - parseInt(style.getPropertyValue('padding-bottom'))

  var s = function(sketch){
    var n = start;

    sketch.setup = function(){
      var canvas = sketch.createCanvas(width, height);
      canvas.parent(id);
      sketch.noiseSeed(seed);
    }

    sketch.draw = function(){
      sketch.background(255);
      for(var i = 0; i < sketch.width; i++){
        for(var j = 3; j > 0; j--){
          sketch.strokeWeight(j);
          lineFunc(sketch, n, i, j*100)
        }
        sketch.strokeWeight(7);
        lineFunc(sketch, n, i, 500, -100)
        sketch.strokeWeight(5);
        lineFunc(sketch, n, i, 400, 150)
      }
    }
  }
  return {s: s, n: start + width}
}

function insertCanvas(id, start, seed, lineFunc){
  var next = canvasPage(id, start, seed, lineFunc)
  new p5(next.s);
  return next.n;
}

var drawLine = function(sketch, n, i, z, offset=0){
  sketch.line(i - 1, sketch.noise((i-1 + n)/200, z) * sketch.height + offset, i, sketch.noise((i+n)/200, z) * sketch.height + offset)
}

function drawCircles(sketch, n, i, z, offset=0){
  if(i % 7 == 0){
    sketch.ellipse(i, sketch.noise((i+n)/200, z) * sketch.height + offset, 10, 10);
  }
}

function drawDash(sketch, n, i, z, offset=0){
  if(i % 10 == 0){
    sketch.line(i, sketch.noise((i+n)/200, z) * sketch.height + offset - 10, i, sketch.noise((i+n)/200, z) * sketch.height + offset + 10)
  }
}

function drawChunk(sketch, n, i, z, offset=0){
  if(i % 50 == 0){
    sketch.line(i - 50, sketch.noise((i-50 + n)/200, z) * sketch.height + offset, i, sketch.noise((i+n)/200, z) * sketch.height + offset)
  }
}

function lineStatic(sketch, n, i, z, offset=0){
  sketch.line(i - 1 + sketch.noise(i-1, z)*20, sketch.noise((i-1 + n)/200, z) * sketch.height + offset, i + sketch.noise(i, z)*20, sketch.noise((i+n)/200, z) * sketch.height + offset)
}

function random(sketch, n, i, z, offset=0){
  var r = parseInt(sketch.noise(i, z) * 3);
  switch(r){
    case 0:
      drawDash(sketch, n, i, z, offset);
      break;
    case 1:
      break;
    default:
      drawLine(sketch, n, i, z, offset);
  }
}

function generateZine(id_prefix, inputStart){
  const seed = Math.random() * 10000;
  var start = insertCanvas(id_prefix + 'front', inputStart, seed, drawLine);
  start = insertCanvas(id_prefix + 'page1', start, seed, drawLine);
  start = insertCanvas(id_prefix + 'page2', start, seed, drawDash);
  start = insertCanvas(id_prefix + 'page3', start, seed, drawCircles);
  start = insertCanvas(id_prefix + 'page4', start, seed, drawChunk);
  start = insertCanvas(id_prefix + 'page5', start, seed, lineStatic);
  start = insertCanvas(id_prefix + 'page6', start, seed, random);
  return insertCanvas(id_prefix + 'back', start, seed, drawLine);
}

var zineHtml = document.getElementById("zine").innerHTML;
var body = document.getElementById("body");
var start = generateZine("1-", 0);
for(var i = 2; i < 4; i++){
  var newHtml = zineHtml.replace(/1-/g, i + "-");
  var newZine = document.createElement('div');
  newZine.classList.add("zine")
  newZine.innerHTML = newHtml;
  body.appendChild(newZine);
  start = generateZine(i + "-", start);
}


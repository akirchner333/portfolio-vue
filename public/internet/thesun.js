var insert = "thesun";

var start = 0;
var increment = 0.05;
var lastInc;
var offsets = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
var speech = [];

function setup() {
  // createCanvas(400, 400);
  lastInc = millis();
  selectAll(".speech").forEach((paragraph) => {
    speech.push(paragraph.html());
  });
}

function draw() {
  // background(200);
  // var paragraph = select(".speech");
  // var text = paragraph.html();
  // output = '';
  // var spaces = 0;
  // for(var i = 0; i < text.length; i++){
  //   if(text.charAt(i) == ' '){
  //     output += " ";
  //     spaces++;
  //   }else{
  //     output += insert.charAt((i-spaces) % insert.length);
  //   }
  // }
  // paragraph.html(output);

  var place = start;

  var paragraphs = selectAll(".speech");
  var threshold = 0.85;

  paragraphs.forEach((paragraph, index) => {
    var text = speech[index];
    var output = '';
    var spaces = 0;
    for(var i = 0; i < text.length; i++){
      var r = noise(place);
      if(text.charAt(i) == " "){
        output += " ";
        spaces++;
      }else if(r < threshold){
        output += text.charAt(i);
      }
      else{
        if(noise(place+100) < threshold){
          output += insert.charAt((i - spaces) % insert.length);
        }else{
          output += insert.toUpperCase().charAt((i - spaces) % insert.length);
        }
        
      }
      place += increment;
    }
    paragraph.html(output);
    threshold -= 0.016;
  })

  // textSize(15);
  // text(output, 10, 10, 390, 390);
  if(lastInc < millis() - 100){
    start += increment;
    // start += 100;
    lastInc = millis();
  }
}
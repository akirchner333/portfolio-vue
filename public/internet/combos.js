var firstLetter = ['T', 'R'];
var secondLetter = ['I', 'O'];
var thirdLetter = ['K', 'S'];
var fourthLetter = ['U', 'A']

function setup(){
  noCanvas();
  generateWords();

  selectAll('.firstLetter').forEach((input) => {
    input.value(firstLetter[input.attribute("index")]);
    input.changed(() => {
      firstLetter[input.attribute("index")] = input.value();
      generateWords();
    });
  });

  selectAll('.secondLetter').forEach((input) => {
    input.value(secondLetter[input.attribute("index")]);
    input.changed(() => {
      secondLetter[input.attribute("index")] = input.value();
      generateWords();
    });
  });

  selectAll('.thirdLetter').forEach((input) => {
    input.value(thirdLetter[input.attribute("index")]);
    input.changed(() => {
      thirdLetter[input.attribute("index")] = input.value();
      generateWords();
    });
  });

  selectAll('.fourthLetter').forEach((input) => {
    input.value(fourthLetter[input.attribute("index")]);
    input.changed(() => {
      fourthLetter[input.attribute("index")] = input.value();
      generateWords();
    });
  });
}

function generateWords(){
  var words = ''
  for(var i = 0; i < firstLetter.length; i++){
    for(var j = 0; j < secondLetter.length; j++){
      for(var k = 0; k < thirdLetter.length; k++){
        for(var l = 0; l < fourthLetter.length; l++){
          words += firstLetter[i] + secondLetter[j] + thirdLetter[k] + fourthLetter[l] + "<br>";
        }
      }
    }
  }
  select('#words').html(words);
}
function setup(){
  // createCanvas(400, 400, WEBGL);
}

var functions = "shuffleLetters shuffleWords shufflePieces reverseAll reversePieces piecesShuffle piecesReverse everyOther everyThird removeThird removeRandom everyOtherWord doubling randomDoubling randomWordDoubling multiplyOneLetter moveStart".split(" ");
var combinationFunctions = "insert interlace wordInterlace overlap wordOverlap switchOver gradualSwitch perlinOverlap".split(" ");

function draw(){
  var text = select("#first_entry").value();
  if(text){
    functions.forEach((name) => {
      var newText = window[name](text);
      select("#" + name).html(newText);
    });
    var secondText = select("#second_entry").value();
    if(secondText){
      combinationFunctions.forEach((name) => {
        var newText = window[name](text, secondText);
        select("#" + name).html(newText);
      })
    }
  }
}

function moveStart(text){
  var newStart = parseInt(noise(47) * text.length);
  return text.slice(newStart) + text.slice(0, newStart);
}

function shuffleLetters(text){
  var letters = text.split('');

  randomizeArray(letters);
  return letters.join('');
}

function shuffleWords(text){
  var letters = text.split(' ');

  randomizeArray(letters);
  
  return letters.join(' ');
}

function shufflePieces(text){
  var letters = text.match(/.{1,3}/g);
  randomizeArray(letters);
  return letters.join('');  
}

function reverseAll(text){
  var letters = text.split('');
  letters.reverse();

  return letters.join('');
}

function reversePieces(text){
 var letters = text.match(/.{1,3}/g);
 return letters.reverse().join('');
}

function piecesShuffle(text){
  var letters = text.match(/.{1,3}/g);
  var output = "";
  letters.forEach((piece) => {
    output += shuffleLetters(piece);
  });
  return output;
}

function piecesReverse(text){
  var letters = text.match(/.{1,3}/g);
  var output = ""
  letters.forEach((piece) => {
    output += reverseAll(piece);
  });
  return output;
}

function everyOther(text){
  var letters = text.split('');
  return letters.reduce((acc, letter, index) => {
    if(index % 2 == 0){
      acc += letter;
    }
    return acc;
  }, '');
}
function everyOtherWord(text){
  var words = text.split(' ');
  var removed =  words.reduce((acc, word, index) => {
    if(index % 2 == 0){
      acc.push(word);
    }
    return acc;
  }, []);
  return removed.join(' ');
}

function everyThird(text){
  return text.split('').reduce((acc, letter, index) => {
    if(index % 3 == 0){
      acc += letter;
    }
    return acc;
  }, '')
}

function removeThird(text){
  return text.split('').reduce((acc, letter, index) => {
    if(index % 3 != 0){
      acc += letter;
    }
    return acc;
  }, '')
}

function removeRandom(text){
  return text.split('').reduce((acc, letter, index) => {
    if(noise(20+index*100) < 0.5){
      acc += letter;
    }
    return acc;
  }, '')
}

function doubling(text){
  return text.split('').reduce((acc, letter, index) => {
    acc += letter + letter;
    return acc;
  }, '')
}

function randomDoubling(text){
  return text.split('').reduce((acc, letter, index) => {
    acc += letter;
    if(noise(50+index*100) < 0.5){
      acc += letter;
    }else{}
    return acc;
  }, '')
}

function randomWordDoubling(text){
  return text.split(' ').reduce((acc, letter, index) => {
    acc.push(letter);
    if(noise(50+index*100) < 0.5){
      acc.push(letter);
    }
    return acc;
  }, []).join(' ');
}

function multiplyOneLetter(text){
  var index = parseInt(noise(74)*text.length);
  var letter = text[index]
  return text.slice(0, index) + letter.repeat(10) + text.slice(index);
}

function insert(text, text2){
  var index = parseInt(noise(74)*text.length);
  var letter = text[index]
  return text.slice(0, index) + text2 + text.slice(index);
}

function interlace(text, text2){
  var length = text.length > text2.length ? text.length : text2.length;
  var output = '';
  for(var i = 0; i < length; i++){
    output += text.charAt(i % text.length);
    output += text2.charAt(i % text2.length);
  }
  return output;
}

function wordInterlace(text, text2){
  var words = text.split(' ')
  var words2 = text2.split(' ');
  var length = words.length > words2.length ? words.length : words2.length;
  var output = [];
  for(var i = 0; i < length; i++){
    output.push(words[i % words.length]);
    output.push(words2[i % words2.length]);
  }
  return output.join(' ');
}

function overlap(text, text2){
  var length = text.length > text2.length ? text.length : text2.length;
  var output = '';
  for(var i = 0; i < length; i++){
    if(i % 2 == 0){
      output += text.charAt(i % text.length);
    }else{
      output += text2.charAt(i % text2.length);
    }
  }
  return output;
}

function wordOverlap(text, text2){
  var words = text.split(' ');
  var words2 = text2.split(' ')
  var length = words.length > words2.length ? words.length : words2.length;
  var output = [];
  for(var i = 0; i < length; i++){
    if(i % 2 == 0){
      output.push(words[i % words.length]);
    }else{
      output.push(words2[i % words2.length]);
    }
  }
  return output.join(' ');
}

function switchOver(text, text2){
  var startIndex = parseInt(noise(300) * text.length);
  var endIndex = parseInt(noise(400) * text2.length);
  return text.slice(0, startIndex) + text2.slice(endIndex);
}

function gradualSwitch(text, text2){
  var length = text.length > text2.length ? text.length : text2.length;
  var output = '';
  for(var i = 0; i < length; i++){
    if(noise(11+i*150)*length < i/length){
      output += text2.charAt(parseInt(i * (text2.length/length)));
    }else{
      output += text.charAt(parseInt(i * (text.length/length)));
    }
  }
  return output;
}

function perlinOverlap(text, text2){
  var length = text.length > text2.length ? text.length : text2.length;
  var output = '';
  for(var i = 0; i < length; i++){
    if(noise(100+i*0.04) > 0.5){
      output += text.charAt(i % text.length);
    }else{
      output += text2.charAt(i % text2.length);
    }
  }
  return output;
}

function randomCombinations(text, text2){
  // it's like... you pick on of each
  // run the text through it
  // then pick a combination
}


// -------------- UTILITY FUNCTIONS ------------------
function randomizeArray(arr){
  for(var i = arr.length - 1; i > 0; i--){
    var index = Math.floor(noise(i+1) * (i+1));
    var x = arr[i];
    arr[i] = arr[index];
    arr[index] = x;
  }
}
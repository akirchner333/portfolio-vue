var echoes = [];
var textarea;
var timeline;

function setup(){
  textarea = select("#entry");
  timeline = select("#timeline");
  setInterval(() => echo(), 3000);  
}

// function start(rate){
//   echo();
//   setInterval(() => echo(), rate);
// }

function draw(){}

function postTimeline(){
  var post = textarea.value()
  if(post){
    echoes.push([post]);
    addShout(post, "YOU");

    if(echoes.length > 10){
      echoes.shift();
    }
  }
  textarea.value('');
}

function addShout(text, username){
  if(text.length > 140){
    text = text.slice(0, 240);
  }
  var start = "<div class = 'shout'><div class='icon'><div class='triangle'></div></div><div class='text'><div class='username'>"
  var middle = "</div><div class='shout-text'>"
  var end = "</div></div></div>"
  timeline.html(start + username + middle + text + end + timeline.html());
}

var singleFunctions = "doubleLetter changeStart swapPieces removeLetters".split(' ');
var combineFuncs = "switchOver perlinOverlap insert".split(' ');

function echo(){
  if(echoes.length > 0){
    if(echoes.length > 1 && random() < 0.4){
      var i1 = getIndex(echoes.length);
      var i2 = getIndex(echoes.length);
      if(i1 == i2){
        i2 = (i2 + 1) % echoes.length;
      }

      var post1 = echoes[i1][getIndex(echoes[i1].length)];
      var post2 = echoes[i2][getIndex(echoes[i2].length)];

      var method = combineFuncs[getIndex(combineFuncs.length)];

      var newEcho = window[method](post1, post2);
      addShout(newEcho, "ECHO");

      echoes[i1].push(newEcho);

      if(echoes[i1].length > 10){
        echoes[i1].shift();
      }

      echoes[i2].push(newEcho);

      if(echoes[i2].length > 10){
        echoes[i2].shift();
      }

    }else{
      var i = getIndex(echoes.length);
      // var posts = echoes[i].concat(shouts[i]);
      var post = echoes[i][getIndex(echoes[i].length)];
      var method = singleFunctions[getIndex(singleFunctions.length)];

      var newEcho = window[method](post);

      addShout(newEcho, "ECHO");
      echoes[i].push(newEcho);

      if(echoes[i].length > 10){
        echoes[i].shift();
      }
    }
  }
}













// ---------------------- METHODS FOR CHOPPING AND SCREWING TEXT --------------------------

function doubleLetter(text){
  for(var i = 0; i < random() * (text.length/40) + 1; i++){
    var index = getIndex(text.length);
    text = text.slice(0, index) + text.charAt(index).repeat(random() * 2 + 1) + text.slice(index);
  }
  return text;
}

function removeLetters(text){
  for(var i = 0; i < random() * (text.length/40) + 1; i++){
    var index = getIndex(text.length);
    text = text.slice(0, index) + text.slice(index+1);
  }
  return text;
}

function changeStart(text){
  var newStart = getIndex(text.length);
  return text.slice(newStart) + text.slice(0, newStart);
}

function swapPieces(text){
  var pieceSize = parseInt(text.length/50 + 1);
  var firstIndex = getIndex(text.length);
  var secondIndex = getIndex(text.length);
  var piece = text.slice(firstIndex, firstIndex + pieceSize);
  text = text.slice(0, firstIndex) + text.slice(secondIndex, secondIndex + pieceSize) + text.slice(firstIndex + pieceSize)
  return text.slice(0, secondIndex) + piece + text.slice(secondIndex + pieceSize)
}

function switchOver(text, text2){
  var startIndex = parseInt(noise(300) * text.length);
  var endIndex = parseInt(noise(400) * text2.length);
  return text.slice(0, startIndex) + text2.slice(endIndex);
}

function gradualSwitch(text, text2){
  var length = text.length < text2.length ? text.length : text2.length;
  var output = '';
  for(var i = 0; i < length; i++){
    if(random()*length < i/length){
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
  var startValue = random() * 1000;
  for(var i = 0; i < length; i++){
    if(noise(startValue + i*0.04) > 0.5){
      output += text.charAt(i % text.length);
    }else{
      output += text2.charAt(i % text2.length);
    }
  }
  return output;
}

function insert(text, text2){
  var index = getIndex(text.length);
  return text.slice(0, index) + text2 + text.slice(index);
}


// ----------------------------------- UTILITY FUNCTIONS --------------------------------------

function getIndex(length){
  return parseInt(random() * length);
}
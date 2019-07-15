var socket = io.connect("https://calm-dawn-59080.herokuapp.com/");
// var socket = io.connect("http://localhost:3000/");
// var socket = io.connect(url);
socket.on('connect', function(data) {
  socket.emit('join', 'Hello World from client');
});

socket.on('new', function(data){
  numHolder.html(data);
  number = data;
  if(!numbers){
    numbers = Array(parseInt(windowWidth/timeWidth) + 1).fill(number);

    window.setInterval(() => {
      numbers.unshift(number);
      numbers.pop();
    }, 80);
  }
});

var buttonText = [
  "THE NUMBER SHOULD BE DIFFERENT",
  "THE NUMBER SHOULD BE NOT THE SAME",
  "I DON'T LIKE THE NUMBER",
  "CHANGE THE NUMBER",
  "NEW THE NUMBER PLEASE",
  "GET RID OF THE NUMBER",
  "THE NUMBER SHOULD GO AWAY",
  "THE NUMBER STOP BEING THIS ONE AND BE A DIFFERENT ONE",
  "CLICK TO GET RID OF THE NUMBER",
  "DON'T CLICK IF YOU LIKE THE NUMBER",
  "THIS IS THE BUTTON THAT CHANGES THE NUMBER",
  "GOODBYE TO THE NUMBER"
];

var numHolder;
var numbers;

var timeWidth = 5;

function setup(){

  var button = select("#number-button");
  button.mouseClicked(() => {
    socket.emit('reset');
    button.html(buttonText[parseInt(random() * buttonText.length)]);
  });

  numHolder = select("#the-number");

  createCanvas(windowWidth-20, 120);
}

function draw(){
  background(255);
  strokeWeight(3);
  if(numbers){
    for(var i = 0; i < numbers.length - 1; i++){
      line(i*timeWidth, 110-numbers[i]*10, 
           i*timeWidth+timeWidth, 110-numbers[i+1]*10);
    }
  }
  
}

// $("#number-button").click(() => {
//   socket.emit('reset');
// });
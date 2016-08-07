// created an array of colors to be randomly chosen.
var colors = ["#01579b", "#01579b", "#ff6600", "#ff6600", "#A3E496", "#A3E496", "#303f9f", "#303f9f", "#FFCC33", "#FFCC33", "#C51162", "#C51162", "#33691e", "#33691e", "#CC6699", "#CC6699", "#51041B", "#51041B" , "#3e2723", "#3e2723"];

// 'select' the correct square element.
var elements = document.querySelectorAll(".cards");
//setting globall variables
var colorOne;
var colorTwo;
var firstCardOfPair;
var secondCardOfPair;
var currentCard;

// calling color to shuffle
shuffle(colors);

function game() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("name", colors[i]);
    elements[i].addEventListener("click", showCard);
  }
}
game();

// <div name="whatever" id="something">
// this.getAttribute("name")

function showCard(){
  var bgColor = this.getAttribute("name");
  var id=this.getAttribute("id");
  this.style.background = bgColor;

  //First card pick logic
  if(!colorOne) {
    colorOne = bgColor;
    firstCardOfPair = id;

    // Second card pick logic
  }else if (!colorTwo) {
    colorTwo = bgColor;
    secondCardOfPair = id;

    var colorMatch = (colorOne === colorTwo);
    var diffCard = (firstCardOfPair !== secondCardOfPair)

    if(colorMatch && diffCard) {
      console.log("It's a match!");
      // Reset color variables
      colorOne = undefined;
      colorTwo = undefined;
    }
    else {
      console.log("It's a mismatch");


      var delay = 700; // This will make mismatched cards flip back over after 1 secondbox.
    setTimeout(function(){
      document.getElementById(firstCardOfPair).style.background = '#263238';
      document.getElementById(secondCardOfPair).style.background = '#263238';
    }, delay);

    //Resets color variables
    colorOne = undefined;
    colorTwo = undefined;
    }
  }
}

// function to shuffle colors
function shuffle(array) {
  var i;
  var j;
  var temp;
  for(i = array.length - 1; i > 0; i --){
    j = Math.floor(Math.random() * i);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var resetButton = document.querySelector("#shuffle");
resetButton.addEventListener("click", resetGame );

// make a function resetGame
function resetGame() {
  game();
  document.getElementById(firstCardOfPair).style.background = '#263238';
  document.getElementById(secondCardOfPair).style.background = '#263238';
}

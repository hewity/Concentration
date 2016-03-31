var colors = ["#01579b", "#01579b", "#ff6600", "#ff6600", "#A3E496", "#A3E496", "#303f9f", "#303f9f", "#FFCC33", "#FFCC33", "#C51162", "#C51162", "#33691e", "#33691e", "#CC6699", "#CC6699", "#51041B", "#51041B" , "#3e2723", "#3e2723"];


var clicks = 0;

// 1. 'select' the correct square element
var elements = document.querySelectorAll(".cards");
var colorEven;
var colorOdd;
var firstCardOfPair;
var secondCardOfPair;
var currentCard;

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
//

function showCard(){
  var bgColor = this.getAttribute("name");
  var id=this.getAttribute("id");
  this.style.background = bgColor;
  if(clicks % 2 === 0) {
    colorEven = bgColor;
    firstCardOfPair = id;
  }
  else {
    colorOdd = bgColor;
    secondCardOfPair = id;
  }
  if(clicks % 2 !== 0){
    if(colorEven !== colorOdd) {
      var delay = 700; // This will make mismatched cards flip back over after 1 secondbox
      console.log("It's a mismatch");
      setTimeout(function(){
        document.getElementById(firstCardOfPair).style.background = '#263238';
        document.getElementById(secondCardOfPair).style.background = '#263238';
      }, delay);
    }else{
      console.log("It's a match!");
    }
  }
  clicks++;
  console.log(clicks);
}

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

/// make a function resetGame
function resetGame() {
game();
document.getElementById(firstCardOfPair).style.background = '#263238';
document.getElementById(secondCardOfPair).style.background = '#263238';
}

// step 1: it does nothing but console log
// step 2: it shuffles cards array (but doesn't change the page)
// step 3: it re-associates the card elements with the newly shuffled colors
// step 4: do any variables need to be reset to default values (e.g. clicks)

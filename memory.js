var colors = ["#01579b", "#01579b", "#ff6600", "#ff6600", "#A3E496", "#A3E496", "#303f9f", "#303f9f", "#FFCC33", "#FFCC33", "#C51162", "#C51162", "#33691e", "#33691e", "#CC6699", "#CC6699", "#51041B", "#51041B" , "#3e2723", "#3e2723"];

var flipCard =[];
var clicks = 0;
function shuffleCards(){
  Array.prototype.shuffle = function(){

  };
}

// 1. 'select' the correct square element
var elements = document.querySelectorAll(".cards");
var colorEven;
var colorOdd;
var firstCardOfPair;
var secondCardOfPair;
var currentCard;
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute("name", colors[i]);
  elements[i].addEventListener("click", showCard);
}

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

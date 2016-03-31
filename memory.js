
var colors = ["#01579b", "#01579b", "#ff6600", "#ff6600", "#A3E496", "#A3E496", "#303f9f", "#303f9f", "#FFCC33", "#FFCC33", "#C51162", "#C51162", "#33691e", "#33691e", "#CC6699", "#CC6699", "#51041B", "#51041B" , "#3e2723", "#3e2723"];

var flipCard =[];
var clicks = 0;
function shuffleCards(){
  Array.prototype.shuffle = function(){

  };
}

// var cards = ["red", "blue", "green", "blue", "red", "green"];

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
      var delay = 700; // mis-matched cards flip back over after 1 secondbox
      console.log("It's a mismatch")
      setTimeout(function(){
        document.getElementById(firstCardOfPair).style.background = '#263238';
        document.getElementById(secondCardOfPair).style.background = '#263238';
      }, delay);
    }else{
      console.log("It's a match!")
    }
  }
  clicks++;
  console.log(clicks);
}

// var firstbox = document.querySelector("#c0");
//
// firstbox.addEventListener("click", function() {
//   console.log("hello");
// });
//
// var secondbox = document.querySelector("#c1");
// secondbox.addEventListener("click", function() {
//   console.log("hello");
// });


// var firstbox = document.getElementById("0");
// firstbox.addEventListener("click", function() {
//   var color = firstbox.getAttribute("name");
//   firstbox.style.backgroundColor = color;
// });
// var secondbox = document.getElementById("1");
// secondbox.addEventListener("click", function(){
//   var color = secondbox.getAttribute("name");
//   secondbox.style.backgroundColor = color;
// });
// var thirdbox = document.getElementById("2");
// thirdbox.addEventListener("click", function(){
//   var color = thirdbox.getAttribute("name");
//   thirdbox.style.backgroundColor = color;
// });
// var forthbox = document.getElementById("3");
// forthbox.addEventListener("click", function(){
//   var color = forthbox.getAttribute("name");
//   forthbox.style.backgroundColor = color;
// });
// var fivthbox = document.getElementById("4");
// fivthbox.addEventListener("click", function(){
//   var color = fivthbox.getAttribute("name");
//   fivthbox.style.backgroundColor = color;
// });
// var sixthbox = document.getElementById("5");
// sixthbox.addEventListener("click", function(){
//   var color = sixthbox.getAttribute("name");
//   sixthbox.style.backgroundColor = color;
// });
// var seventhbox = document.getElementById("6");
// seventhbox.addEventListener("click", function(){
//   var color = seventhbox.getAttribute("name");
//   seventhbox.style.backgroundColor = color;
// });
// var eighthbox = document.getElementById("7");
// eighthbox.addEventListener("click", function(){
//   var color = eighthbox.getAttribute("name");
//   eighthbox.style.backgroundColor = color;
// });
// var ninthbox = document.getElementById("8");
// ninthbox.addEventListener("click", function(){
//   var color = ninthbox.getAttribute("name");
//   ninthbox.style.backgroundColor = color;
// });
// var tenthbox = document.getElementById("9");
// tenthbox.addEventListener("click", function(){
//   var color = tenthbox.getAttribute("name");
//   tenthbox.style.backgroundColor = color;
// });
//
// // 2. change the textContent of the element to be the first color
//
// /// modify this code so that all the cards get their colors displayed
// // for (var i = 0; i < 6; i++) {
// //  elements[????].textContent = cards[????];
// //   elements[0].textContent = cards[0];
// // }
//
//
// // 1. 'select' the correct square element
// // var elements = document.querySelectorAll(".cards");
//
// // 2. change the textContent of the element to be the first color
// // elements.textContent =  cards[1];

// // //click cards.
// // var clickCard = document.querySelectorAll(".card");
// // cosole.log("clickCard");
// // // check for a match between the two pairs
// // var i = 0; i<clickCard.length; i++) {
// //   var cardPickOne = null;
// //   var cardPickTwo = null;
// // }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // function myFunction(){
// //   document.body.style.backgroundColor = "red";
// // }

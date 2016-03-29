
var cards = ["#ff6600", "#A3E496", "#6600cc", "#FFCC33", "#95CAE4", "#279B61", "#CC6699", "#993333", "#008AB8", "#FFFF7A"];

// var cards = ["red", "blue", "green", "blue", "red", "green"];

// 1. 'select' the correct square element
var elements = document.querySelectorAll(".cards");

// 2. change the textContent of the element to be the first color

/// modify this code so that all the cards get their colors displayed
// for (var i = 0; i < 6; i++) {
//  elements[????].textContent = cards[????];
//   elements[0].textContent = cards[0];
// }

for (var i = 0; i < cards.length; i++) {
   elements[i].setAttribute("name", cards[i]);
  elements[0] = cards[0];
}
var firstbox = document.getElementById("0");
firstbox.addEventListener("click", function() {
  console.log("Hello");
})

// 1. 'select' the correct square element
// var elements = document.querySelectorAll(".cards");

// 2. change the textContent of the element to be the first color
// elements.textContent =  cards[1];




// }
// .flip.click (function() {
//   this.find.card.addClass('flipped').mouseClick(function()) {
//     this.removeClass('flipped');
//   });
//   return false;
//   }
// }
//
// color.sort function() {
//   if (() > 0.5 ) return 1;
//   else {
//     return -1;
//   }
// });
// //click cards.
// var clickCard = document.querySelectorAll(".card");
// cosole.log("clickCard");
// // check for a match between the two pairs
// var i = 0; i<clickCard.length; i++) {
//   var cardPickOne = null;
//   var cardPickTwo = null;
// }
















//
// image(getImage("avatars/leaf-blue"));
// var tiles = [];
// var memoryValue = [];




// function myFunction(){
//   document.body.style.backgroundColor = "red";
// }

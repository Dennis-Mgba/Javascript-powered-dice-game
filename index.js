/*// Dice Roll
// 1st write a code for randomizing number but in this case from 1-5

//Generate random number using the method math.random()
var n = math.random();
n = n * 6;   // This scales the dice roll to give random numbers btw 0 - 5 but won't reach 6

//But from the abve code the random numbers that will be generated will include decimal numbers
//thus the need to round down the numbers using the method math.floor()
n = math.floor(n); // but 6 won't be reached so the need to add 1 to the random number
//hence the numbers generated will br btw 1 - 6
n = math.floor(n) + 1; */

//The codes for player 1 diceimages
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1; //1 - 6
//assigning n to variable randomNumber
var randomNumber1 = n;

/* The code below is used to access the img src attributes to change them at random */
// carefully pay attention to the images folder
var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;  //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];  //selecting the first image
image1.setAttribute("src", randomImageSource);


//The codes for player 2 diceimages, here I shortened the codes
var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //the code on one line
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Making commendation with the if, elseif, else statement
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// function code to refresh the page
function refreshPage(){
    window.location.reload();
}

"use strict";

// console.log(document.querySelector('#rightmainbox').textContent);

// document.querySelector(".box p").textContent = 14;
// document.querySelector("#score").textContent = 14;
// document.querySelector("#highscore").textContent = 13;
// // document.querySelector("#leftmainbox").value = 16;
// console.log(document.querySelector("#leftmainbox").value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretnumber);
// document.querySelector(".box p").value = secretnumber;
let score = 20;
let highScore = 0;
function displayMessage(message){

    document.querySelector("#rightmainbox").textContent=message;

}
document.querySelector("#leftmaintext").addEventListener("click", function () {
  const guess = Number(document.querySelector("#leftmainbox").value);

  if (!guess) {
    // document.querySelector("#rightmainbox").textContent = "Put a number";
    displayMessage("Put a number");
  } else if (guess === secretnumber) {
    // document.querySelector("#rightmainbox").textContent =
    //   "your guess is correct";
    displayMessage("your guess is correct");
    document.querySelector(".box p").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".box").style.width = "150px";

    if (score > highScore) {
      highScore = score;
      document.querySelector("#highscore").textContent = highScore;
    }
  } 

  else if(guess!==secretnumber){
    if (score > 0) {
    //   document.querySelector("#rightmainbox").textContent = guess>secretnumber?"Too High":"Too Low";
      displayMessage(guess > secretnumber ? "Too High" : "Too Low");
      score--;
      document.querySelector("#score").textContent = score;
    } else {
    //   document.querySelector("#rightmainbox").textContent = "You Lost the game";
     displayMessage("You Lost the game");
    }

  }
  
//   else if (guess > secretnumber) {
//     if (score > 0) {
//       document.querySelector("#rightmainbox").textContent = "Too High";
//       score--;
//       document.querySelector("#score").textContent = score;
//     } else {
//       document.querySelector("#rightmainbox").textContent = "You Lost the game";
//     }
//   } else if (guess < secretnumber) {
//     if (score > 0) {
//       document.querySelector("#rightmainbox").textContent = "Too Low";
//       score--;
//       document.querySelector("#score").textContent = score;
//     } else {
//       document.querySelector("#rightmainbox").textContent = "You Lost the game";
//     }
//   }
  document
    .querySelector("#top #right h3")
    .addEventListener("click", function () {
      score = 20;
      secretnumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector("#score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".box").style.width = "98px";

    //   document.querySelector("#rightmainbox").textContent = "Start guessing...";
        displayMessage("Start guessing...");
      // document.querySelector(".box p").value = secretnumber;
      document.querySelector(".box p").textContent = "?";
      document.querySelector("#leftmainbox").value = "";
    });
});

let userScore = 0;
let computerScore = 0;

//catch the DOM
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter) {
  if (letter === "r") {
    return "rock";
  } else if (letter === "p") {
    return "paper";
  } else {
    return "scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = ` User  : ${converToWord(userChoice)} 
     Computer : 
    ${converToWord(computerChoice)}  
     You win ! `;

  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  compScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;

  result_p.innerHTML = `User : ${converToWord(userChoice)}
     Computer : 
    ${converToWord(computerChoice)} :
     You lose ! `;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = ` User  : ${converToWord(userChoice)} 
     Computer : 
    ${converToWord(computerChoice)}  
     It'a a draw !`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("USER WINS");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("Userr loses");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("its a draw");
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
    console.log("Yoy clicked on rock !");
  });

  paper_div.addEventListener("click", function () {
    game("p");
    console.log("Yoy clicked on paper !");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
    console.log("Yoy clicked on scissors !");
  });
}

main();

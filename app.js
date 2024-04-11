let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const btn1 = document.querySelector(".btn");
const box1 = document.querySelector(".box");
const box2 = document.querySelector("boxa");



const gencompchoice = () => {
 const options = ["rock", "paper", "scissor"];
 const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}


const  playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice =",compchoice);
if(userChoice ===compchoice){
    console.log("game was draw");
    msg.innerText = "game was draw because comp and user choice are same ";
}
else if( userChoice === "rock" && compchoice === "paper"){
    console.log("comp is won the game");
    msg.innerText = "comp is won the game because paper beat the rock";
    compscore++;
    compscorepara.innerText = compscore;
    msg.computedStyleMap.backgroundColor = "red";
}
else if ( userChoice === "scissor" && compchoice === "rock"){
    console.log("comp is won the game");
    msg.innerText = "comp is won the game because rock beat the scissor";
    compscore++;
    compscorepara.innerText = compscore;
    msg.computedStyleMap.backgroundColor = "red";

}
else if ( userChoice === "paper" && compchoice === "scissor"){
    console.log("comp is won the game");
    msg.innerText = "comp is won the game because scissor beat the paper ";
    compscore++;
    compscorepara.innerText = compscore;
    msg.computedStyleMap.backgroundColor = "red";

}
else if ( userChoice === "paper" && compchoice === "rock"){
    console.log("user won the game");
    msg.innerText = "user won the game because paper beat the rock ";
    userscore++;
    userscorepara.innerText = userscore;
    msg.computedStyleMap.backgroundColor = "green";

}
else if ( userChoice === "rock" && compchoice === "scissor"){
    console.log("user won the game");
    msg.innerText = "user won the game because rock beat the scissor";
    userscore++;
    userscorepara.innerText = userscore;
    msg.computedStyleMap.backgroundColor = "green";

}
else if ( userChoice === "scissor" && compchoice === "paper"){
    console.log("user won the game");
    msg.innerText = "user won the game because scissor beat the paper";
    userscore++;
    userscorepara.innerText = userscore;
    msg.computedStyleMap.backgroundColor = "green";
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    } );
});

   const newgame = () => {
    userscore = 0;
    userscorepara.innerText = userscore;
    compscore = 0;
    compscorepara.innerText = compscore;
    msg.innerText = "";
   };

   btn1.addEventListener("click",newgame);


 
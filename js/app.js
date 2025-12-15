import { elGameZone, elHands, elPlayAgainButton, elResultZone, elRobot, elRuleButton, elUser } from "../html-elements.js";

elHands.forEach((elHand)=>{
 elHand.addEventListener("click", (evt)=>{
    console.log(evt.target.alt);
  });
});

function robotChoose() {
    const hands = ["paper", "scissors", "rock"];
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands[randomIndex];
}

function swapZone(Boolean) {
 if(Boolean) {
    elGameZone.style.display = "none";
    elResultZone.style.display = "flex";
 } else {
    elGameZone.style.display = "flex";
    elResultZone.style.display = "none";
 }
}

function checkWinner (user, robot) {
    if (user === robot){
      return "TIE"
    } else if (user === "paper" && robot === "scissors"){
         return "ROBOT";
    } else if (user === "scissors" && robot === "rock"){
         return "ROBOT";
    } else if (user === "rock" && robot === "paper"){
        return "ROBOT";
    } else {
        return "USER";
    }
}

elHands.forEach((elHand) => {
    elHand.addEventListener("click", (evt) => {
      swapZone(true);

      const user = evt.target.alt;
      const robot = robotChoose();
      
      elUser.src = evt.target.src;
      elRobot.src = "./img/handload.svg"

      setTimeout(() => {
        elRobot.src = `./img/${robot}.svg`
        const winner = checkWinner(user, robot);
       alert(winner)
      }, 1000);
    });
});

// Play Again Game
elPlayAgainButton.addEventListener("click", () => {
swapZone(false);
});

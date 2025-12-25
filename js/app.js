import {
  elGameZone,
  elHands,
  elPlayAgainButton,
  elResultZone,
  elRobot,
  elUser
} from "../html-elements.js";

function robotChoose() {
  const hands = ["paper", "scissors", "rock"];
  return hands[Math.floor(Math.random() * hands.length)];
}

function swapZone(showResult) {
  if (showResult) {
    elGameZone.style.display = "none";
    elResultZone.style.display = "flex";
  } else {
    elGameZone.style.display = "block";
    elResultZone.style.display = "none";
  }
}

function checkWinner(user, robot) {
  if (user === robot) return "TIE";
  if (
    (user === "paper" && robot === "scissors") ||
    (user === "scissors" && robot === "rock") ||
    (user === "rock" && robot === "paper")
  ) {
    return "ROBOT";
  }
  return "USER";
}

elHands.forEach((elHand) => {
  elHand.addEventListener("click", (evt) => {
    swapZone(true);

    const user = evt.target.alt;
    const robot = robotChoose();

    elUser.src = evt.target.src;
    elRobot.src = "./img/handload.svg";

    setTimeout(() => {
      elRobot.src = `./img/${robot}.svg`;
      alert(checkWinner(user, robot));
    }, 1000);
  });
});

elPlayAgainButton.addEventListener("click", () => {
  swapZone(false);
});

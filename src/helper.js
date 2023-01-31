function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RandomHousePick() {
  const random = randomNumber(1, 3);

  switch (random) {
    case 1:
      return "Paper";
    case 2:
      return "Rock";
    case 3:
      return "Scissors";
    default:
      return "Paper";
  }
}

export function GetResult(userPick, housePick) {
  switch (userPick) {
    case "Paper":
      if (housePick === "Paper") return "Draw";
      else if (housePick === "Rock") return "You won";
      else return "You lose";
    case "Rock":
      if (housePick === "Paper") return "You lose";
      else if (housePick === "Rock") return "Draw";
      else return "You won";
    case "Scissors":
      if (housePick === "Paper") return "You won";
      else if (housePick === "Rock") return "You lose";
      else return "Draw";
  }
}

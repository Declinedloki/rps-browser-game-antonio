(function () {
  let wins = 0;
  let losses = 0;
  let ties = 0;

  function getPlayerChoice() {
    while (true) {
      const input = prompt(
        "Rock, Paper, Scissors!\nEnter R for Rock, P for Paper, or S for Scissors:"
      );

      if (input === null) return null;

      const choice = input.trim().toUpperCase();

      if (choice === "R" || choice === "P" || choice === "S") return choice;

      alert("Invalid choice. Please enter ONLY R, P, or S.");
    }
  }

  function getComputerChoice() {
    const options = ["R", "P", "S"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  function toWord(letter) {
    if (letter === "R") return "Rock";
    if (letter === "P") return "Paper";
    return "Scissors";
  }

  function playRound(player, computer) {
    if (player === computer) {
      ties++;
      return "It's a TIE!";
    }

    const playerWins =
      (player === "R" && computer === "S") ||
      (player === "P" && computer === "R") ||
      (player === "S" && computer === "P");

    if (playerWins) {
      wins++;
      return "You WIN!";
    } else {
      losses++;
      return "You LOSE!";
    }
  }

  alert("Welcome to Rock, Paper, Scissors!");

  let keepPlaying = true;

  while (keepPlaying) {
    const playerChoice = getPlayerChoice();

    if (playerChoice === null) {
      alert("Game cancelled. Thanks for playing!");
      break;
    }

    const computerChoice = getComputerChoice();
    const resultMessage = playRound(playerChoice, computerChoice);

    alert(
      `${resultMessage}\n\n` +
        `You chose: ${toWord(playerChoice)} (${playerChoice})\n` +
        `Computer chose: ${toWord(computerChoice)} (${computerChoice})\n\n` +
        `Score:\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`
    );

    keepPlaying = confirm("Play again?");
  }

  alert(`Final Score:\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}\n\nBye!`);
})();

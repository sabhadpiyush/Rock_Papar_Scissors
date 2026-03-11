let user_score = 0;
let computer_score = 0;
let draw_score = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const user_scroe_para = document.querySelector("#user-score");
const computer_score_para = document.querySelector("#computer-score");
const draw_score_para = document.querySelector("#draw-score");

const computer_choice = () => {
  let choices = ["rock", "paper", "scissors"];
  let random_index = Math.floor(Math.random() * 3);
  return choices[random_index];
};

const play_game = (user_choice) => {
  console.log("User choice:", user_choice);
  const comp_choice = computer_choice();
  console.log("Computer choice:", comp_choice);

  if (user_choice === comp_choice) {
    console.log("It's a tie!");
    message.innerText = `It's a draw! Both chose ${user_choice}`;
    message.style.backgroundColor = "blue";
    draw_score++;
    draw_score_para.innerText = draw_score;
  } else if (
    (user_choice === "rock" && comp_choice === "scissors") ||
    (user_choice === "paper" && comp_choice === "rock") ||
    (user_choice === "scissors" && comp_choice === "paper")
  ) {
    user_score++;
    user_scroe_para.innerText = user_score;
    console.log("You win! Your score:", user_score);
    message.innerText = `You WIN computer choose ${comp_choice} lose to your ${user_choice}`;
    message.style.color = "green";
    message.style.backgroundColor = "lightgreen";
  } else {
    computer_score++;
    computer_score_para.innerText = computer_score;
    console.log("Computer wins! Computer score:", computer_score);
    message.innerText = `You LOSS computer choose ${comp_choice} beat your ${user_choice}`;
    message.style.color = "red";
    message.style.backgroundColor = "lightcoral";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const user_choice = choice.getAttribute("id");

    play_game(user_choice);
  });
});

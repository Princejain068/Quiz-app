const questions = [
  {
    question: " Which loop is faster in C++",
    answers: [
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "do-while", correct: false },
      { text: "All work at same speed", correct: true },
    ],
  },
  {
    question: " 10%2 = ",
    answers: [
      { text: "5", correct: false },
      { text: "20", correct: false },
      { text: "0", correct: true },
      { text: "1", correct: false },
    ],
  },
  {
    question: " What is 5 % 2 ?",
    answers: [
      { text: "5", correct: false },
      { text: "1", correct: true },
      { text: "10", correct: false },
      { text: "2.5", correct: false },
    ],
  },
  {
    question: " 10%185",
    answers: [
      { text: "5", correct: false },
      { text: "15", correct: false },
      { text: "10", correct: true },
      { text: "Error", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let curr = 0;
let score = 0;
function startquiz() {
  curr = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetstate();
  let currque = questions[curr];
  let queno = curr + 1;
  questionElement.innerHTML = queno + ". " + currque.question;
  currque.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    button.addEventListener("click", selectanswer);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);
  });
}
function resetstate() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectanswer(e) {
  const selectbtn = e.target;
  const iscorrecr = selectbtn.dataset.correct === "true";
  if (iscorrecr) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display="block";
}
function showscore(){
    resetstate();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}
function handlenextbtn(){
    curr++;if(curr<questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}
nextButton.addEventListener("click",()=>{
    if(curr<questions.length){
        handlenextbtn();
    }
    else{
        startquiz();
    }
})
startquiz();

const quizData = [
  {
    question: "(1). Which of the following tags do not require a terminator?",
    options: ["<u>", "<br>", "<b>", " none of the above"],
    answer: 1
  },
  {
    question: "(2). The Major components of the Web browser are ___?",
    options: ["Menu Bar", "ToolBar", "Location", " All Of the Above"],
    answer: 3
  },
  {
    question: "(3). Which one of the following tags is used to insert graphics in the webpage?",
    options: [" <image>", " <images>", "<img>", "<graphics>"],
    answer: 2
  },
  {
    question: "(4). The following html tag is used to display the content as moving text",
    options: ["<marquee>", "</img>", " <a href>", " none of the above"],
    answer: 0
  },
  {
    question: "(5). to get the ordered list we use",
    options: ["<HI>", "<UL>", "<OL>", "<ML>"],
    answer: 2
  },
  {
    question: "(6). HTML is the method by which ordinary text can be converted into",
    options: ["ASCII Text", "EBCDIC Text", "Hypertext", "None of the above"],
    answer: 2
  },
  {
    question: "(7). Which of the following tag is used to embed css in html page?",
    options: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"],
    answer: 3
  },
  {
    question: "(8). Which of the following CSS style property is used to specify an italic text?",
    options: ["style", "font", "font-style", "#font-style"],
    answer: 2
  },
  {
    question: "(9). Which of the following CSS property sets the font size of text?",
    options: ["font-size", "text-size", "text", "size"],
    answer: 0
  },
  {
    question: "(10).  Which of the following is not the property of the CSS box model?",
    options: ["margin", "color", "width", "height"],
    answer: 1
  },
  // Add more quiz questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll("#options li button");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;

  optionsElements.forEach((option, index) => {
    option.innerText = currentQuizData.options[index];
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];

  if (selectedOption === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.innerText = "Quiz completed!";
  optionsElements.forEach((option) => {
    option.style.display = "none";
  });
  scoreElement.innerText = `Your score is : ${score}/${quizData.length}`;
}


loadQuestion();

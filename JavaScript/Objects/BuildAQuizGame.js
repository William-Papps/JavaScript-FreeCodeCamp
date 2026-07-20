const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the USA?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Tech",
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(arr){
  const question = Math.floor(Math.random() * arr.length);
  return arr[question];
}

function getRandomComputerChoice(arr){
  const choice = Math.floor(Math.random()* arr.length);
  return arr[choice];
}

function getResults(question, choice){
  if (question.answer === choice){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
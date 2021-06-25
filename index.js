var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");
console.log("Welcome", userName,"!");

console.log("Lets play do you know Om? quiz! I will ask 5 questions related to me and you will get two options to choose answer from.");
console.log("Type '1' to choose first option or type '2' to choose second option");

var score = 0;

question1 = {
  question: "In which board did I studied in my school? 1-State Board 2-CBSE Board: ",
  answer: "1"
};

question2 = {
  question: "Which is my favourite street food? 1-Momos 2-Pav Bhaji: ",
  answer: "2"
};

question3 = {
  question: "Which musical instrument i play? 1-Flute 2-Guitar: ",
  answer: "2"
};

question4 = {
  question: "Which is my favourite sitcom tv show? 1-Friends 2-Big Bang Theory: ",
  answer: "1"
};

question5 = {
  question: "Which is my favourite TV show? 1-Breaking Bad 2-13 Reasons Why?: ",
  answer: "1"
};

function quiz(question, answer){
  var userAns = readlineSync.question(question);

  if(userAns === answer){
    console.log("Correct Answer! ");
    score++;
  }
  else{
    console.log("Wrong Answer! ");
  }

  console.log("Your score is: ", score);
  console.log("---------------------------------");
}

var questionSet = [question1, question2, question3, question4, question5]

for(var i=0; i<questionSet.length; i++){
  quiz(questionSet[i].question, questionSet[i].answer);
}

console.log("Your final score out of 5 is: ", score);
console.log("Thank You for playing the Quiz! ");
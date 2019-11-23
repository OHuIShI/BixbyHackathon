module.exports.function = function showQuiz (quizlist, answer, ordinary) {
  const console = require('console');

  let quiz = null;

  if(answer != undefined)
  {
    quiz = quiz = quizlist.quizzes[quizlist.nowNum];
    console.log("here");
    if(String(quiz.correct_answer) == String(answer)) {
      quiz.result = true;
      quizlist.correctNum += 1;
    }
    console.log("sibal");

    for(let i = 0; i < quiz.answers_list.length; i++){
      if(String(quiz.answers_list[i]) == String(answer)){
        quiz.selected = i;
        break;
      }   
    }
    quizlist.nowNum += 1;
  }

  if(ordinary != undefined && ordinary < 5 && ordinary > 0) {
    quiz = quizlist.quizzes[quizlist.nowNum];

    if(String(quiz.correct_answer) == String(quiz.answer_list[ordinary-1])) {
      quiz.result = true;
      quizlist.correctNum += 1;
    }

    quiz.selected = ordinary - 1;
    quizlist.nowNum += 1;
  }
  return quizlist;
}

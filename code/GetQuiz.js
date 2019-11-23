module.exports.function = function getQuiz (num) {
  //const categoryList = require("./utils/categoryList.js");
  //const config = require('config');
  //const baseAPIURL = config.get("baseAPIURL");
  //const http = require('http');
  //const fail = require('fail');
  
  //let textLib = require("./utils/CleanText.js");
  //let url = baseAPIURL;
  //category = parseInt(category);
  
  // if(type == '랜덤형'){
  //   type = 'any'
  // }else if(type == '사지선다형'){
  //   type = 'multiple'
  // }else{
  //   type = 'boolean'
  // }
  
  // if(type != 'any' && categoryList[category].number != 'any'){
  //   url += '&type=' + type + '&category=' + categoryList[category].number;
  // }else if(type == 'any' && categoryList[category].number != 'any'){
  //   url += '&category=' + categoryList[category].number;
  // }else if(type != 'any' && categoryList[category].number == 'any'){
  //   url += '&type=' + type;
  // }
  
  //let response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});

  // if(response.status == 404 || response.status == 500 || response.status == 502 || response.status == 504){ 
  //   throw fail.checkedError("Server Error", "ServerProblem"); 
  // }
  
  // if(response.parsed.response_code == 2){  
  //   throw fail.checkedError("Server Error", "ServerProblem"); 
  // }
  
  // if(response.parsed.response_code == 1){ 
  //   throw fail.checkedError("No Data", "NODATA");
  // }
  
  //let quizzes = response.parsed.results;
  // result 는 객체 배열이고, 객체 {}가 들어온다.

  const console = require("console");
  let response = require("./data/wordData.js");
  let quizzes = response.Words;
  let problems = response.Words;
  let questions = [];
  let rand = 0;
  let rand2 = 0;
  for(let i = 0; i < num; ++i){
   
    rand = Math.floor(Math.random() * problems.length);
    
    let question = {id: i+1, question:problems[rand].word, correct_answer:problems[rand].mean, result: false, incorrect_answers: null, selected:-1, answers_list:[]};
    
    //questions[i].id = i + 1;
    //quizzes[i].question = textLib.CleanText(quizzes[i].question.trim());
    //questions[i].question = quizzes[rand].word;
    //questions[i].correct_answer = quizzes[rand].mean;
    problems.splice(rand, 1);
    quizzes.splice(rand, 1);
    let recover = [];
    let answer_list = [];
    for(let j=0;j<4;j++){
      rand2 = Math.floor(Math.random() * quizzes.length);
      answer_list.push(quizzes[rand2].mean);
      recover.push({word: quizzes[rand2].word, mean: quizzes[rand2].mean});
      quizzes.splice(rand2, 1);
    }
    console.log("answer_list");
    console.log(answer_list);
    console.log("recover");
    console.log(recover);

    rand2 = Math.floor(Math.random() * 4);
    answer_list[rand2]=question.correct_answer;

    console.log("answerslist fin");
    console.log(answer_list);

    question.answers_list = answer_list;
    quizzes.splice(0, -1, {word: question.question, mean: question.correct_answer});

    recover.map(w =>{
      quizzes.splice(0, -1, w);
    })
    
    // questions[i].result = false;
    // questions[i].incorrect_answers = null;
    // quizzes[i].selected = -1;
    //console.log("here");
    questions.push(question);
  }

  return {
    quizzes: questions,
    nowNum: 0,
    totalNum: questions.length,
    correctNum: 0
  };
}

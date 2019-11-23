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
  let quizzes = require("./data/wordData.js");
  let questions = [];
  let rand = 0;
  let rand2 = 0;
  for(let i = 0; i < num; ++i){
    rand = Math.floor(Math.random() * quizzes.length);
    let question = {id: i+1, question:quizzes[rand].word, correct_answer:quizzes[rand].mean, result: false, incorrect_answers: null, selected:-1};
    
    //questions[i].id = i + 1;
    //quizzes[i].question = textLib.CleanText(quizzes[i].question.trim());
    //questions[i].question = quizzes[rand].word;
    //questions[i].correct_answer = quizzes[rand].mean;
    quizzes.splice(rand, 1);
    
    for(let j=0;j<4;j++){
      rand2 = Math.floor(Math.random() * quizzes.length);
      question.answers_list[j] = quizzes[rand2].mean;
    }
    quizzes.splice(0, -1, {word: questions[i].question, mean: questions[i].correct_answer});

    
    // questions[i].result = false;
    // questions[i].incorrect_answers = null;
    // quizzes[i].selected = -1;

    questions.push(question);
  }

  return {
    quizzes: questions,
    nowNum: 0,
    totalNum: questions.length,
    correctNum: 0
  };
}

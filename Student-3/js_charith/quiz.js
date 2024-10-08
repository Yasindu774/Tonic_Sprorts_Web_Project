//create an array to store question number, question, options and answer
let questions = [
    {
        question: "What is the highest individual score in Test cricket?",
        answer: "400",
        options: [
            "375",
            "400",
            "431",
            "503"
        ]
    },
    {
        question: "Who is the all-time top scorer in the history of international football?",
        answer: "Cristiano Ronaldo",
        options: [
            "Lionel Messi",
            "Pele",
            "Cristiano Ronaldo",
            "Miroslav Klose"
        ]
    },
    {
        question: "In volleyball, what is the maximum number of hits a team can use to return the ball over the net?",
        answer: "3 hits",
        options: [
            "2 hits",
            "3 hits",
            "4 hits",
            "5 hits"
        ]
    },
    {
        question: "In which year was the first edition of the T20 World Cup held?",
        answer: "2007",
        options: [
            "2005",
            "2007",
            "2009",
            "2011"
        ]
    },
    {
        question: "Which country has won the most Olympic gold medals in men's basketball?",
        answer: "United States",
        options: [
            "United States",
            "Russia",
            "Argentina",
            "Brazil"
        ]
    },
    {
        question: "What is the name of the ball used in a game of snooker?",
        answer: "Red ball",
        options: [
            "Cue ball",
            "Black ball",
            "Blue ball",
            "Red ball"
        ]
    },
    {
        question: "Who is the only cricketer to score 100 international centuries in cricket?",
        answer: "Sachin Tendulkar",
        options: [
            "Sachin Tendulkar",
            "Ricky Ponting",
            "Brian Lara",
            "Jacques Kallis"
        ]
    },
    {
        question: "How many players are there in a water polo team?",
        answer: "7",
        options: [
            "5",
            "7",
            "9",
            "11"
        ]
    },
    {
        question: "What is the name of the trophy awarded to the winner of the ICC Cricket World Cup?",
        answer: "The World Cup Trophy",
        options: [
            "The Champions Trophy",
            "The Border-Gavaskar Trophy",
            "The Ashes",
            "The World Cup Trophy"
        ]
    },
    {
        question: "Which country has won the most Olympic gold medals in women's volleyball?",
        answer: "Brazil",
        options: [
            "Brazil",
            "China",
            "United States",
            "Japan"
        ]
    }
];

//get all required elements in quiz.html
const start_quiz_btn = document.querySelector(".start_btn");
const start_quiz_section = document.querySelector(".start_quiz");
const question_section = document.querySelector(".question_section");
const next_question_btn = question_section.querySelector(".next_question");
const result_section = document.querySelector(".result_section");
const countdown_number = question_section.querySelector(".countdown_number");
const countdown_text = question_section.querySelector("countdown_text");
const answer_list = document.querySelector(".answer_list");
const restart_button_btn = result_section.querySelector(".restart_button");

//declare variables
let counter;
let defaultTime = 60;
let question_count = 0;
let question_number = 1;
let quizScore = 0;


start_quiz_btn.onclick = ()=>{
    //after clicking 'start_quiz_btn' hide instruction(add 'hideInstructions' to start_quiz_section)
    start_quiz_section.classList.add("hideInstructions");
    //after clicking 'start_quiz_btn' display questions(add 'displayQuestions' to question_section)
    question_section.classList.add("displayQuestions"); 

    //call showMcq, countQuestions, startCountdown functions
    shuffleQuestion(questions);
    showMcq(0);
    countQuestions(1);
    startCountdown(59);
}


//Reference - How to randomize (shuffle) a JavaScript array?. URL:- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
/**
* Shuffle question array randomly
* @param {Array} array
* @return shuffled question array
*/
function shuffleQuestion(array) {
    let randomPosition;
    let position = array.length;
  
    while (position != 0) {
      randomPosition = Math.floor(Math.random() * position);
      position--;

      [array[position], array[randomPosition]] = [array[randomPosition], array[position]];
    }
    return array;
  }



/**
* Display mcq question with relevant options
* @param {Number} arrayPosition
* @return mcq question with relevant options
*/
function showMcq(arrayPosition){
    const question_text = document.querySelector(".question_text");
    question_text.innerHTML = '<span>' + question_number + '. ' + questions[arrayPosition].question + '</span>';

    //shuffle options relevant to the question
    for(let i = questions[arrayPosition].options.length - 1; i > 0; i--){
        const randomOption = Math.floor(Math.random() * (i + 1));
        [questions[arrayPosition].options[i], questions[arrayPosition].options[randomOption]] = [questions[arrayPosition].options[randomOption], questions[arrayPosition].options[i]]
    }
    const answer_list = document.querySelector(".answer_list");
    answer_list.innerHTML = '<div class="answer"><span>'+ questions[arrayPosition].options[0] +'</span></div>' +
                            '<div class="answer"><span>'+ questions[arrayPosition].options[1] +'</span></div>' +
                            '<div class="answer"><span>'+ questions[arrayPosition].options[2] +'</span></div>' +
                            '<div class="answer"><span>'+ questions[arrayPosition].options[3] +'</span></div>' ;
    const QuizOption = answer_list.querySelectorAll(".answer");
    for(let i = 0; i < QuizOption.length; i++){
        QuizOption[i].setAttribute("onclick", "selectAnswer(this)");
    }
}

/**
* Display current question number
* @param {Number} questionNumber
* @return questionNumber with relevant layout
*/
function countQuestions(questionNumber){
    const question_count = document.querySelector(".question_count");
    question_count.innerHTML = '<span><p>' + questionNumber + '</p> of <p>' + questions.length + '</p> Questions</span>';
}

//Reference - How to set timer in quiz. URL:- https://www.youtube.com/watch?v=WUBhpSRS_fk&list=PPSV
function startCountdown(seconds){
    counter = setInterval(countDown, 1000);
    function countDown(){ 
        countdown_number.textContent = seconds;
        //after calling this function, decreament following values by 1
        seconds--;
        defaultTime--;

        //check if seconds less than 9, then add '0' before the seconds
        if(seconds < 9){
            countdown_number.textContent = "0" + countdown_number.textContent;
        }

        if(seconds < 0){
            clearInterval(counter);
            countdown_number.textContent = "00";

            let correctAnswer = questions[question_count].answer;
            let allQuizOptions = answer_list.children.length;

             //after ending the time, select correct answer
            for(let i = 0; i < allQuizOptions; i++){
                if(answer_list.children[i].textContent == correctAnswer){
                    answer_list.children[i].setAttribute("class" , "answer correct");
                }
            }

            //after ending the time, all options will lock
            for(let i = 0; i < allQuizOptions; i++){
                answer_list.children[i].classList.add("lock");
            }
            //after ending the time, display 'next_question_btn' button
            next_question_btn.style.display = "block";
        }
    }
}

function selectAnswer(option){
    let userClickedOption = option.textContent;
    let correctAnswer = questions[question_count].answer;
    let allQuizOptions = answer_list.children.length;
    //if user click correct option, then option color change to green and increament quizScore by 1.
    //else selected option color change to red and automatically select correct answer for that relevant question
    if(userClickedOption == correctAnswer){
        quizScore++;
        option.classList.add("correct");
    } else {
        option.classList.add("incorrect");

        for(let i = 0; i < allQuizOptions; i++){
            if(answer_list.children[i].textContent == correctAnswer){
                answer_list.children[i].setAttribute("class" , "answer correct");
            }
        }
    }

    //after user clicking an option, then all options will lock
    for(let i = 0; i < allQuizOptions; i++){
        answer_list.children[i].classList.add("lock");
    }
    //after user clicking an option, then display 'next_question_btn' button
    next_question_btn.style.display = "block";
}

/**
* Display quiz result
* @return Wrong Answers, score, grade and performance based message
*/
function showResult(){
    //hide instructions and questions
    start_quiz_section.classList.add("hideInstructions");
    question_section.classList.remove("displayQuestions");
    //load result page
    result_section.classList.add("displayResult");

    const wrong_count = document.querySelector(".wrong_count");
    const score_text = document.querySelector(".score_text");
    const grade_text = document.querySelector(".grade_text");
    const time_count = document.querySelector(".time_count");
    const performance_text = document.querySelector(".performance_text");
    const performance_text_span = document.querySelector(".performance_text span");

    wrong_count.innerHTML = '<span>Wrong Answers: <p>' + (questions.length - quizScore) + '</p></span>';
    score_text.innerHTML = '<span>You got <p>' + quizScore + '</p>out of <p>' + questions.length + '</p></span>';

    let grade = (quizScore * 100)/ questions.length;
    grade_text.innerHTML = '<span>Grade: <p>' + grade + '%</p></span>';

    time_count.innerHTML = '<span>You took <p>' + (60 - defaultTime) + '</p> s</span>';

    //check score grade and display relevant message with color
    if(grade >= 70){
        performance_text.innerHTML = '<span>Excellent Mark, keep up the good work.</span>';
        performance_text.style.background = "#2ce574";
    } else if(grade >= 40){
        performance_text.innerHTML = '<span>Good job! You\'ve achieved a solid result.</span>';
        performance_text.style.background = "#ffe500";
    } else {
        performance_text.innerHTML = '<span>Don\'t give up! You can do better with some extra effort.</span>';
        performance_text.style.background = "#ff3924";
    }
}

next_question_btn.onclick = ()=> {
    //check question count, default time and if question count and time valid then increment qustion count and question number by 1.
    if(question_count < questions.length-1 && defaultTime > 0){
        question_count++;
        question_number++;
        showMcq(question_count);
        countQuestions(question_number);
        next_question_btn.style.display = "none";
    } else {
        clearInterval(counter);
        //display quiz result by calling showResult() function
        showResult();
    }
}

function restartQuiz(){
    //reload page
    window.location.reload();
}

//add eventListner to 'restart_button_btn'. when user clicks the 'restart_button_btn' button it will call restartQuiz() function
restart_button_btn.addEventListener("click", restartQuiz);
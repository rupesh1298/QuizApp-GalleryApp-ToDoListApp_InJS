const questions = [
    {
        question: "What is the capital of India ?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Chennai", correct: false },
            { text: "Warora", correct: false }
        ]
    },
    {
        question: "What is the capital of Maharashtra ?",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Wani", correct: false },
            { text: "Mukutban", correct: false },
            { text: "Warora", correct: false }
        ]
    },
    {
        question: "How many planets are there in Solar System after pluto elimination ?",
        answers: [
            { text: "10", correct: false },
            { text: "32", correct: false },
            { text: "9", correct: false },
            { text: "8", correct: true }
        ]
    },
    {
        question: "Which of the below known as 'Black Diamond City' ?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Wani", correct: true },
            { text: "Chennai", correct: false },
            { text: "Warora", correct: false }
        ]
    }

];
const questElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQueIndex = 0;
let score = 0;

function startQuiz() {
    currentQueIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQue = questions[currentQueIndex];
    console.log(currentQue);
    let queNo = currentQueIndex + 1;
    questElement.innerHTML = queNo + ". " + currentQue.question;

    currentQue.answers.forEach(e => {
        const button = document.createElement("button");
        button.innerHTML = e.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (e.correct) {
            button.dataset.correct = e.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const ansss = e.target;
    const isCorrect = ansss.dataset.correct === "true";
    if (isCorrect) {
        ansss.classList.add("correct");
        score++;
    } else {
        ansss.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(b=>{
        if(b.dataset.correct==="true")
        {
            b.classList.add("correct")
        }
        b.disabled=true;
    });
    nextButton.style.display="block";
}
function handleNextButton()
{
currentQueIndex++;
if(currentQueIndex<questions.length)
{
    showQuestion();
}else{
    showScore();
}
}

nextButton.addEventListener("click",()=>{
    if(currentQueIndex<questions.length){
        handleNextButton();
    }else
    startQuiz();
})
function showScore()
{
    resetState();
    questElement.innerHTML=`Your Score is ${score} out of ${questions.length}`;

    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
startQuiz();
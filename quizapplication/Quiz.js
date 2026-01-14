const Quiz = [
    {
        q: "What is NaN?",
        O: ["Not a Number", "Null And Nothing", "No Assignment Needed", "New Array"],
        Answer: 0
    },
    {
        q: "What is a closure in JS?",
        O: ["A function call", "A variable scope", "A function with access to its outer scope", "A loop"],
        Answer: 2
    },
    {
        q: "Which method displays a pop-up with a message to the user ?",
        O: ["prompt()", "confirm()", "alert()", "log()"],
        Answer: 2
    },
    {
        q: "What does === check for?",
        O: ["Loose equality (value only)", "Strict equality (value & type)", "Inequality", "Assignment"],
        Answer: 1
    },
    {
        q: "What is null considered in JavaScript ?",
        O: ["A string", "An object", "A primitive", "Undefined"],
        Answer: 1
    },
    {
        q: "Which of the following is NOT a JavaScript data type?",
        O: ["Symbol", "Character", "Undefined", "Boolean"],
        Answer: 1
    },
    {
        q: "Which symbol is used for single-line comments in JavaScript?",
        O: ["<!--", "#", "//", "**"],
        Answer: 2
    },
    {
        q: "Which of the following function of Number object returns the number's value?",
        O: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        Answer: 1
    },
    {
        q: "Which of the following function of Array object removes the last element from an array?",
        O: ["pop()", "push()", "join()", "map()"],
        Answer: 0
    },
    {
        q: "Which type of variable is visible everywhere?",
        O: ["global variable", "local variable", "all of the above", "None"],
        Answer: 0
    }
];

let index = 0;
let answer = new Array(Quiz.length).fill(null);

let options = document.getElementsByName('option');

options.forEach((ele) => {
    ele.addEventListener('change', () => {
        answer[index] = Number(ele.value);
    });
});

/* ===== TIMER VARIABLES ===== */
let timeLeft = 60;
let timer = null;

/* ===== START QUIZ ===== */
function startQuiz() {
    document.getElementById("startBtn").style.display = "none";
    showQuestion();
    startTimer();
}

/* ===== TIMER START ===== */
function startTimer() {
    document.getElementById("timer").innerHTML = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            Result(); // time out submit
        }
    }, 1000);
}



function showQuestion() {
    const question = document.querySelector('#question');
    question.innerHTML = `${index + 1}. ${Quiz[index].q}`;

    document.getElementById("option1").innerHTML = Quiz[index].O[0];
    document.getElementById("option2").innerHTML = Quiz[index].O[1];
    document.getElementById("option3").innerHTML = Quiz[index].O[2];
    document.getElementById("option4").innerHTML = Quiz[index].O[3];

    options.forEach((opt) => {
        opt.checked = opt.value == answer[index];
    });

    document.getElementById("prev").disabled = index == 0;

    if (index == Quiz.length - 1) {
        document.getElementById("NEXT").style.display = "none";
        document.getElementById("OUTPUT").style.display = "block";
    } else {
        document.getElementById("NEXT").style.display = "block";
        document.getElementById("OUTPUT").style.display = "none";
    }
}

function nextQuestion() {
    index++;
    showQuestion();
}

function prevQuestion() {
    index--;
    showQuestion();
}

/* ===== RESULT / SUBMIT ===== */
function Result() {
    clearInterval(timer);

    let score = 0;
    Quiz.forEach((q, i) => {
        if (q.Answer === answer[i]) {
            score++;
        }
    });

    document.body.innerHTML =
        "<h2> Quiz Completed </h2>" +
        "<h3>Your Marks: " + score + " / " + Quiz.length + "</h3>";
}
showQuestion();

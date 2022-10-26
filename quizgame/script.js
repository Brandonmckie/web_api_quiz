const questions = document.getElementById('quizQuestions')
const answers = Array.from(document.getElementsByClassName('answerBttn'))
const scoreText = document.getElementById('score')
const highScoreBtn = document.getElementById('highScoreBttn')

let currentQuestion = {}
let acceptingAnswers = false
let score = 0
let availableQuestions = []
let answerDisplay = document.getElementById('rightWong')
let scorePage = document.getElementById('quiz-finish-screen')

let questionList = [
    {
        questions: 'Which of the following is the correct way of making a string in Java?',
        bttn1: 'String "Text";',
        bttn2: 'String text = "text"',
        bttn3: 'String text = "text"',
        bttn4: 'String text = "text";',
        answer: 4
    },
    {
        questions: 'What does HTML stand for?',
        bttn1: 'Hyper Text Markup Language',
        bttn2: 'Hyper Trainer Marking Language',
        bttn3: 'Hyper Text Marketing Language',
        bttn4: 'Hyper Text Markup Leveler',
        answer: 1
    },
    {
        questions: "Which of the following includes Chrome's V8 JavaScript Engine?",
        bttn1: 'jQuery',
        bttn2: 'Node.js',
        bttn3: 'Java',
        bttn4: 'npm',
        answer: 2
    },
    {
        questions: 'Inside which HTML element do we put the JavaScript?',
        bttn1: '<script>',
        bttn2: '<javascript>',
        bttn3: '<js>',
        bttn4: '<scripting>',
        answer: 1
    },
]

const correctAnserPoints = 10
const maxQuestion = 4


document.getElementById('start-Bttn').onclick = function startGame() {
    document.getElementById('innerContainer').style.display = 'none'
    // show the questions
    document.getElementById('mainQs').style.display = 'block'
    availableQuestions = [...questionList]
    // start timer
    let timeLeft = + 59;
    let quizTimer = setInterval(function () {
        timeLeft--;
        document.getElementById('timer').textContent = 'Timer: ' + timeLeft
        if (timeLeft <= 0) {
            clearInterval(quizTimer)
        }
    }, 1000)
    getNewQuestions()
}

function getNewQuestions() {
    if (availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)
        // go to score pages
        return window.location.assign('ended.html')


    }


    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questions.innerText = currentQuestion.questions

    answers.forEach(bttn => {
        const number = bttn.dataset['number'];
        bttn.innerText = currentQuestion['bttn' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}
answers.forEach(bttn => {
    bttn.addEventListener('click', e => {
        if (!acceptingAnswers) return


        acceptingAnswers = false
        const selectedBttn = e.target
        const selectedAnswer = selectedBttn.dataset['number']

        let rightOrWrong = selectedAnswer == currentQuestion.answer

        if (rightOrWrong) {
            answerDisplay.textContent = 'Correct'
        } else {
            answerDisplay.textContent = 'Incorrect'
        }


        if (answerDisplay.textContent === 'Correct') {
            incrementScore(correctAnserPoints)
        }

        setTimeout(() => {
            if (rightOrWrong) {
                answerDisplay.textContent = 'Correct'
                console.log('right')
            } else {
                answerDisplay.textContent = 'Incorrect'
                console.log('wrong')
            }
            getNewQuestions()

        }, 1000)


        // getNewQuestions()
    })
})

function incrementScore(number) {
    score += number;
    scoreText.textContent = score
}

highScoreBtn.onclick = function () {
    return window.location.assign('highscore.html')
}
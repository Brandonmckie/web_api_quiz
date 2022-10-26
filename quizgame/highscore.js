let mostRecentScore = localStorage.getItem('mostRecentScore')
let userHighScore = JSON.parse(localStorage.getItem('highScore'))
let userName = localStorage.getItem('username')

const returnBtn = document.getElementById('back-btn')
const clearBtn = document.getElementById('clear-scores')
const userScore = document.getElementById('user-score')

// userHighScore.map(score => {

// })

returnBtn.onclick = function () {
    return window.location.assign('index.html')
}

clearBtn.onclick = function () {
    document.getElementById('user-score').style.display = 'none'
    document.getElementById('userscore').style.backgroundColor = 'white'
}

userHighScore.map(score => {
    userScore.innerText = (`${score.username} ${score.score}`)
})
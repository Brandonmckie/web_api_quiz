const finalScore = document.getElementById('final-score')
const submitBttn = document.getElementById('submit-bttn')
const userName = document.getElementById('user-name')
const scoreRecord = document.getElementById('score-record')
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];


let mostRecentScore = localStorage.getItem('mostRecentScore')
let newP = document.createElement('p')
// let userScore = userName.value




finalScore.innerText = 'Your Score is ' + mostRecentScore + ' points'
// localStorage.setItem('userHighScore', userHighScore)


saveScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        username: userName.value,

    }
    highScore.push(score)
    // console.log(score)
    // localStorage.setItem('userHighScore', score)
    localStorage.setItem('highScore', JSON.stringify(highScore))
    return window.location.assign('highscore.html')

}



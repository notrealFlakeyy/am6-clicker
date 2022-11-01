let score = 0;
const showScore = document.getElementById('score');

function countScore() {
    score++;
    showScore.textContent = score;
}

function upgradeScore() {
    if (score >= 100)
        score += 5;
    showScore.textContent = score;
}

function upgradeScore2() {
    if (score >= 1000)
        score += 10;
    showScore.textContent = score;
}

//variables
let score = 0;
let randomWord = "";
let newWord = "";

//HTML stuff
const scoreDisplay = document.getElementById("test-score");
const wordleButton = document.getElementById("wordle-button");
const resetCount = document.getElementById("reset-count");

//Vocabulary Words
const response = await fetch("vista1_words.json");
const vocabulary = await response.json();


//wordle
//functions
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}
function resetScore() {
    score = 0;
    console.log("Reset the score!");
    updateScore();
}
function increaseScore() {
    score += 1;
    console.log("The button was clicked");
    updateScore();
    if (score === 20) {
        console.log("You did it! You finished the game");
    }
    else if (score === 10) {
        console.log("Congrats");
    }
}
const wordleWords = [...new Set(
    vocabulary
        .map(word => word.english)
        .filter(word => /^[a-z]{5}$/.test(word))
)];

function getRandomWord() {
    newWord = wordleWords[Math.floor(Math.random() * wordleWords.length)];
    while (newWord === randomWord) {
        newWord = wordleWords[Math.floor(Math.random() * wordleWords.length)];
    }
    randomWord = newWord;
    console.log(randomWord);
}

getRandomWord();
//Event Listeners
wordleButton.addEventListener("click", getRandomWord);

//Initialization
updateScore();



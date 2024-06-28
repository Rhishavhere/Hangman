const keyboardDiv = document.querySelector(".keyboard")
const wordDisplay = document.querySelector(".word-display")
const guessesText = document.querySelector(".guesses-text b")
const hangmanImage = document.querySelector(".hangman-box img")



function gameload() {
  gsap.to("._", {
    opacity: 0,
    duration: 0.1
  })
  gsap.to(".m", {
    top: 0,
    opacity: 1,
    duration: 0.7,
    ease: "bounce.out"
  })
  gsap.to("#hangmans-img", {
    y: -600,
    duration: 0.5,
    delay: 1
  })
  gsap.to("#ceiling-img", {
    y: -20,
    duration: 0.5,
    delay: 1
  })
  gsap.to(".footer", {
    y: 50,
    duration: 0.5,
    delay: 1
  })
  gsap.to(".footer div", {
    y: -40,
    duration: 0.5,
    delay: 1
  })
  gsap.to(".header", {
    y: -90,
    duration: 0.5,
    delay: 1
  })
  gsap.to(".start", {
    opacity: 0,
    duration: 0.5,
    delay: 1
  })
  gsap.to(".intro", {
    opacity: 0,
    duration: 0.5,
    delay: 1
  })
  gsap.to(".title", {
    opacity: 0,
    duration: 0,
    delay: 1
  })
  gsap.to(".title", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    delay: 1,
    display: "none"
  })
  gsap.to(".intro", { display: "none", delay: 1.5 })
  gsap.to(".title", { display: "none", delay: 1.5 })

  gsap.to("#game-main", {
    opacity: 1,
    duration: 1,
    delay: 2,
    display: "flex"
  })

}



let currentWord, correctLetters = [], wrongGuessCount = 0, score = 0;
const maxGuesses = 6;

const resetGame = () => {
  correctLetters = []
  wrongGuessCount = 0
  hangmanImage.src = `images/${wrongGuessCount + 1}.svg`
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false)
  wordDisplay.innerHTML = currentWord.split("").map(() => '<li class="letter"></li>').join("")

}


const getRandowWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();

}
getRandowWord()

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter)
        wordDisplay.querySelectorAll("li")[index].innerText = letter
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
      }
    })
  }
  else {
    wrongGuessCount++;
    hangmanImage.src = `images/${wrongGuessCount + 1}.svg`
  }
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  button.disabled = true;

  if (wrongGuessCount === maxGuesses) return gameOver(false)
  if (correctLetters.length === currentWord.length) return gameOver(true)
}

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button")
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button)
  button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}


function gameOver(isVictory) {
  if (isVictory) {
    score++;
    document.querySelector(".score").innerText = `Score = ${score}`
    getRandowWord()
  }
  else {
    fail()
    score = 0
    document.querySelector(".score").innerText = `No Current Score`
  }
}

function fail() {
  const animation = gsap.to(".game-box", {
    onStart: getRandowWord,
    x: "+=5",
    yoyo: true,
    repeat: -1,
    duration: 0.05,
    delay: 0.2
  })
  setTimeout(() => {
    animation.pause()
  }, 1000)
}



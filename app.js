
//declare constant variables
const gameStatusBox = document.querySelector('.gameStatus')
const playerOneScoreBox = document.querySelector('.oneScore')
const playerTwoScoreBox = document.querySelector('.twoScore')
const responsesBox = document.querySelector('.Responses')
const questionBox = document.querySelector('.Questions')
const aChoice = document.querySelector('#a')
const bChoice = document.querySelector('#b')
const cChoice = document.querySelector('#c')
const dChoice = document.querySelector('#d')
let playerOneScore = 0
let playerTwoScore = 0
playerOneScoreBox.innerText = 'Player One\'s Score: ' + playerOneScore
playerTwoScoreBox.innerText = 'Player Two\'s Score: ' + playerTwoScore
let currentPlayer

//game object
const game = {
    currentSet: null, 
    //question generator function
    generateQuestion: function () {
      //refresh the page button activated
      const startButton = document.querySelector('#start')
      startButton.innerText = 'Restart the Game'
      startButton.addEventListener('click', game.refreshPage)
      //assign current player and randomly choose trivia question
      gameStatusBox.innerText = 'Time for ' + currentPlayer + '\'s turn!'
      const random = Math.floor(Math.random() * questions.length)
      game.currentSet = questions[random]
      //add question from randomly selected question
      questionBox.innerText = game.currentSet.question
      //add answers from randomly selected question
      aChoice.innerText = game.currentSet.answers.a
      bChoice.innerText = game.currentSet.answers.b
      cChoice.innerText = game.currentSet.answers.c
      dChoice.innerText = game.currentSet.answers.d
      //add photo to photo class      
      const imgBox = document.querySelector('.Photos')
      while(imgBox.firstChild) {
        imgBox.removeChild(imgBox.firstChild)
      }
      const newImg = document.createElement('img')
      newImg.src = questions[random].photo
      newImg.classList.add('image')
      imgBox.appendChild(newImg)
      //invoke getAnswer function for buttons
      aChoice.addEventListener('click', game.getAnswer)
      bChoice.addEventListener('click', game.getAnswer)
      cChoice.addEventListener('click', game.getAnswer)
      dChoice.addEventListener('click', game.getAnswer)
      //splice used index so it isn't used again
      questions.splice(random, 1)
    }, 
    //function that finds the answer to the asked trivia question and awards points
    getAnswer: function (event) {
      if (event.target.innerText === game.currentSet.correctAns) {
        gameStatusBox.innerText = 'You got it right!'
        //change current player's score
          if (currentPlayer === 'Player 1') {
            playerOneScore += 1
            playerOneScoreBox.innerText = 'Player One\'s Score: ' + playerOneScore
            setTimeout(game.checkWin, 1500)
          } else if (currentPlayer === 'Player 2') {
            playerTwoScore += 1
            playerTwoScoreBox.innerText = 'Player Two\'s Score: ' + playerTwoScore
            setTimeout(game.checkWin, 1500)
          }
      } else if (event.target.innerText !== game.currentSet.correctAns) {
        gameStatusBox.innerText = 'You got it wrong. It is the ' + game.currentSet.correctAns + '!'
        setTimeout(game.checkWin, 1500)
      }
    },

    //function that checks for a winner of the game
    checkWin: function() {
      if(playerOneScore < 3 && playerTwoScore < 3) {
        game.switchPlayer()
        console.log('no winner...switching player')
      } else if (playerOneScore >= 3) {
        gameStatusBox.innerText = 'Player 1 Wins!'
        questionBox.innerText = ' Click the restart button to play again!'
        //prevent player from continuing game
        game.gameEnd()
      } else if (playerTwoScore >= 3) {
        gameStatusBox.innerText = 'Player 2 Wins!'
        questionBox.innerText = ' Click the restart button to play again!'
        // prevent player from continuing game
        game.gameEnd()
      } 
    },
    //function to switch players
    switchPlayer: function() {
      if(currentPlayer === 'Player 1') {
        currentPlayer = 'Player 2'
      } else if (currentPlayer === 'Player 2') {
        currentPlayer = 'Player 1'
      }
      gameStatusBox.innerText = 'Time for ' + currentPlayer + '\'s turn!'
      setTimeout(game.generateQuestion, 1000)
    },
    //function to start game
    start: function () {
      currentPlayer = 'Player 1'
      const startButton = document.querySelector('#start')
      startButton.addEventListener('click', game.generateQuestion)
    },
    //function to end game
    gameEnd: function () {
      responsesBox.removeChild(aChoice)
      responsesBox.removeChild(bChoice)
      responsesBox.removeChild(cChoice)
      responsesBox.removeChild(dChoice)
      const imgBox = document.querySelector('.Photos')
        while(imgBox.firstChild) {
          imgBox.removeChild(imgBox.firstChild)
        }
    },
    //refersh page function
    refreshPage: function () {
      currentPlayer = 'Player 1'
      playerOneScore = 0
      playerTwoScore = 0
      game.generateQuestion()
      playerOneScoreBox.innerText = 'Player One\'s Score: ' + playerOneScore
      playerTwoScoreBox.innerText = 'Player Two\'s Score: ' + playerTwoScore
      responsesBox.appendChild(aChoice)
      responsesBox.appendChild(bChoice)
      responsesBox.appendChild(cChoice)
      responsesBox.appendChild(dChoice)
    }
  } //end game object
  
  //invoke start
  game.start()






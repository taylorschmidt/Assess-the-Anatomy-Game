
const gameStatusBox = document.querySelector('.gameStatus')
const playerOneScoreBox = document.querySelector('.oneScore')
const playerTwoScoreBox = document.querySelector('.twoScore')
let playerOneScore = 0
let playerTwoScore = 0
playerOneScoreBox.innerText = 'Player One\'s Score: ' + playerOneScore
playerTwoScoreBox.innerText = 'Player Two\'s Score: ' + playerTwoScore
let currentPlayer = 'Player 1'



const questions = [
    {
    question: 'What bone is pictured?',
    answers: {
      a: 'Answer A ex1 This is the answer',
      b: 'Answer B ex1',
      c: 'Answer C ex1',
      d: 'Answer D ex1'
    },
    correctAns: 'Answer A ex1 This is the answer',
    photo: 'https://i.imgur.com/trbo1Whm.jpg'
    },
    {
    question: 'Here is my example question two.',
    answers: {
      a: 'Answer A ex2',
      b: 'Answer B ex2',
      c: 'Answer C ex 2',
      d: 'Answer D ex2'
    },
    correctAns: 'Answer A ex2',
    photo: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
        question: 'Here is my example question three.',
        answers: {
          a: 'Radius',
          b: 'Ulna',
          c: 'Femur',
          d: 'Humerus'
        },
        correctAns: 'Ulna',
        photo: 'https://i.imgur.com/UgYWLa3.jpg?1'
    },
    {
        question: 'Here is my example question four.',
        answers: {
          a: 'Radius',
          b: 'Ulna',
          c: 'Femur',
          d: 'Humerus'
        },
        correctAns: 'Ulna',
        photo: 'https://i.imgur.com/UgYWLa3.jpg?1'
    },
  ]
  
  
  const game = {
    //start function
    start: function () {
      //when start button is clicked
      const startButton = document.querySelector('#start')
      startButton.addEventListener('click', this.generateQuestion)
      //invoke first question function
    },

    generateQuestion: function () {
        const random = Math.floor(Math.random() * questions.length)
        const currentSet = questions[random]
        const questionBox = document.querySelector('.Questions')
        questionBox.innerText = currentSet.question
        const aChoice = document.querySelector('#a')
        aChoice.innerText = currentSet.answers.a
        const bChoice = document.querySelector('#b')
        bChoice.innerText = currentSet.answers.b
        const cChoice = document.querySelector('#c')
        cChoice.innerText = currentSet.answers.c
        const dChoice = document.querySelector('#d')
        dChoice.innerText = currentSet.answers.d
      
      //add photo to photo class      
        const imgBox = document.querySelector('.Photos')
        while(imgBox.firstChild) {
            imgBox.removeChild(imgBox.firstChild)
        }
        const newImg = document.createElement('img')
        newImg.src = questions[random].photo
        newImg.classList.add('image')
        imgBox.appendChild(newImg)
     
      //get answer function within main create function
        const getAnswer = (event) => {
        //event.target.classList.add('pink')
            if (event.target.innerText === currentSet.correctAns) {
                gameStatusBox.innerText = 'You got it right!'
                //change current player's score
                if (currentPlayer === 'Player 1') {
                    playerOneScore ++
                    playerOneScoreBox.innerText = 'Player One\'s Score: ' + playerOneScore
                } else if (currentPlayer === 'Player 2') {
                    playerTwoScore ++
                    playerTwoScoreBox.innerText = 'Player Two\'s Score: ' + playerTwoScore
                }
                setTimeout(checkWin, 1500)

            } else {
                gameStatusBox.innerText = 'You got it wrong!' 
                setTimeout(checkWin, 1500)
            }
        }
    //invoke getAnswer function for buttons
        aChoice.addEventListener('click', getAnswer)
        bChoice.addEventListener('click', getAnswer)
        cChoice.addEventListener('click', getAnswer)
        dChoice.addEventListener('click', getAnswer)
    
    //splice used index so it isn't used again
    questions.splice(random, 1)
    console.log(questions)
    
    } //end generateQuestion function
  
  } //end game object
  

const switchPlayer = () => {
    if(currentPlayer === 'Player 1') {
        currentPlayer = 'Player 2'
    } else if (currentPlayer === 'Player 2') {
        currentPlayer = 'Player 1'
    }
    gameStatusBox.innerText = 'Time for ' + currentPlayer + '\'s turn!'
    game.generateQuestion()
}

//win conditional
const checkWin = () => {
    if (playerOneScore >= 5) {
        gameStatusBox.innerText = 'Player 1 Wins!'
        return game.generateQuestion()
    } else if (playerTwoScore >= 5) {
        gameStatusBox.innerText = 'Player 2 Wins!'
    } else {
        switchPlayer()
    }
}

//invoke start
game.start()


//TO DO
//current glitch: when switching back to player 1, it gives player 2 another turn

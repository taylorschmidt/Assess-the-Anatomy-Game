
const gameStatusBox = document.querySelector('.gameStatus')
const playerOneScoreBox = document.querySelector('.oneScore')
const playerTwoScoreBox = document.querySelector('.twoScore')
let playerOneScore = 0
let playerTwoScore = 0
playerOneScoreBox.innerText = 'Player One\'s Score: ' + playerOneScore
playerTwoScoreBox.innerText = 'Player Two\'s Score: ' + playerTwoScore
let currentPlayer




const questions = [
    {
    question: 'What bone is pictured?',
    answers: {
      a: 'Ulna',
      b: 'Radius',
      c: 'Patella',
      d: 'Coccyx'
    },
    correctAns: 'Radius',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Full_Anterior_View_of_Right_Radius.png/220px-Full_Anterior_View_of_Right_Radius.png'
    },
    {
    question: 'What bone is pictured?',
    answers: {
      a: 'Fibula',
      b: 'Radius',
      c: 'Humerus',
      d: 'Tibia'
    },
    correctAns: 'Tibia',
    photo: 'https://sites.google.com/site/skeletalsystemport/_/rsrc/1418767126751/tibia/tibia.jpg'
    },
    {
    question: 'What bone is pictured?',
    answers: {
      a: 'Radius',
      b: 'Ulna',
      c: 'Femur',
      d: 'Humerus'
     },
    correctAns: 'Ulna',
    photo: 'https://cdn3.volusion.com/nqpvm.detql/v/vspfiles/photos/A45-2-2.jpg?v-cache=1594737065'
    },
    {
        question: 'What bones are pictured?',
        answers: {
          a: 'Metatarsals',
          b: 'Phalanges',
          c: 'Carpals',
          d: 'Metacarpals'
        },
        correctAns: 'Metacarpals',
        photo: 'https://www.orthopaedicsone.com/download/attachments/32179851/worddav33c4f7c8010ff76d06fd64265d010922.png?version=1&modificationDate=1270172536000'
    },
    {
        question: 'What bone is pictured?',
        answers: {
          a: 'Clavicle',
          b: 'Scapula',
          c: 'Deltoid',
          d: 'Sternum'
        },
        correctAns: 'Scapula',
        photo: 'https://images-na.ssl-images-amazon.com/images/I/61iHK48Yn7L._SL1200_.jpg'
    },
    {
      question: 'What bone is pictured?',
      answers: {
        a: 'Clavicle',
        b: 'Scapula',
        c: 'Humerus',
        d: 'Femur'
      },
      correctAns: 'Femur',
      photo: 'https://www.osteoporosisinstitute.org/wp-content/uploads/i02-Femurs.jpg'
  },
  {
    question: 'What bone is pictured?',
    answers: {
      a: 'Rib',
      b: 'Radius',
      c: 'Fibula',
      d: 'Carpal'
    },
    correctAns: 'Rib',
    photo: 'https://cdn.shopify.com/s/files/1/1467/6660/products/Real-Human-Rib-_Single_--Main__SHN-18__1.jpg?v=1534882062'
},
{
  question: 'What bone is pictured?',
  answers: {
    a: 'Sternum',
    b: 'Tarsal',
    c: 'Carpal',
    d: 'Patella'
  },
  correctAns: 'Patella',
  photo: 'https://images-na.ssl-images-amazon.com/images/I/41WlaUQp7gL._SX342_.jpg'
},
//two more bone questions
//ten more muscle questions

]
  
  const game = {
    //start function
    start: function () {
      //when start button is clicked
      currentPlayer = 'Player 1'
      const startButton = document.querySelector('#start')
      startButton.addEventListener('click', game.generateQuestion)
      //invoke first question function
    },

    generateQuestion: function () {
        console.log(currentPlayer)
        gameStatusBox.innerText = 'Time for ' + currentPlayer + '\'s turn!'
        const random = Math.floor(Math.random() * questions.length)
        const currentSet = questions[random]
        //add question from randomly selected question
        const questionBox = document.querySelector('.Questions')
        questionBox.innerText = currentSet.question
        //add answers from randomly selected question
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
     
      //get answer function within main create question function
        const getAnswer = (event) => {
            if (event.target.innerText === currentSet.correctAns) {
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
            } else if (event.target.innerText !== currentSet.correctAns) {
                gameStatusBox.innerText = 'You got it wrong!'
            //     setTimeout(game.switchPlayer, 1500)
            // setTimeout(game.checkWin, 1500)
             }
          }
    //invoke getAnswer function for buttons
        aChoice.addEventListener('click', getAnswer)
        bChoice.addEventListener('click', getAnswer)
        cChoice.addEventListener('click', getAnswer)
        dChoice.addEventListener('click', getAnswer)
    
    //splice used index so it isn't used again
    questions.splice(random, 1)
    console.log('here are the number of questions left: ' + questions.length)

    }, //end generateQuestion function

    checkWin: function() {
        if(playerOneScore < 3 && playerTwoScore < 3) {
            game.switchPlayer()
            console.log('no winner...switching player')
        } else if (playerOneScore >= 3) {
            gameStatusBox.innerText = 'Player 1 Wins!'
            // end game function
            game.endGame()
        } else if (playerTwoScore >= 3) {
            gameStatusBox.innerText = 'Player 2 Wins!'
            // end game function
            game.endGame()
        } 
    },

    switchPlayer: function() {
        if(currentPlayer === 'Player 1') {
            currentPlayer = 'Player 2'
        } else if (currentPlayer === 'Player 2') {
            currentPlayer = 'Player 1'
        }
        gameStatusBox.innerText = 'Time for ' + currentPlayer + '\'s turn!'
        setTimeout(game.generateQuestion, 1000)
    },

    endGame: function() {
      const title = document.querySelector('.Title')
      const restartButton = document.createElement('button')
      restartButton.innerText = 'Restart Game'
      title.appendChild(restartButton)
      const refreshPage = () => {
        window.location.reload()
      }
      restartButton.addEventListener('click', refreshPage)
    }
  } //end game object
  
  //invoke start
  game.start()



///////////////////TO DO///////////////////////
//current glitch: fix you got it wrong function
//add in more images and question (up to 25?)
//style!


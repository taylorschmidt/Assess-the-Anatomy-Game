
const gameStatusBox = document.querySelector('.gameStatus')
const playerOneScoreBox = document.querySelector('.oneScore')
const playerTwoScoreBox = document.querySelector('.twoScore')
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

const refreshPage = () => {
  window.location.reload()
}




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
{
  question: 'What bone is pictured?',
  answers: {
    a: 'Sternum',
    b: 'Cervix',
    c: 'Sacrum',
    d: 'Scapula'
  },
  correctAns: 'Scapula',
  photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkidport.com%2FRefLib%2FScience%2FHumanBody%2FSkeletalSystem%2FSacrum.htm&psig=AOvVaw2tRbm7Rnq0rJJwtYCjDAEG&ust=1601591983731000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODxpbb_kewCFQAAAAAdAAAAABAD'
},
{
  question: 'What bone is pictured?',
  answers: {
    a: 'Sternum',
    b: 'Fibula',
    c: 'Clavicle',
    d: 'Ulna'
  },
  correctAns: 'Clavicle',
  photo: 'https://www.tornado-studios.com/sites/default/files/styles/slider_full/public/products/2178/gallery/human_clavicle_bone_collarbone_01_thumbnail_square_0000.jpg?itok=HKzD7GUA'
},
{
  question: 'What muscle is pictured?',
  answers: {
    a: 'Sartorius',
    b: 'Gastrocnemius',
    c: 'Quadricep',
    d: 'Biceps femoris'
  },
  correctAns: 'Sartorius',
  photo: 'https://i.imgur.com/sER0dez.png'
},
{
  question: 'What muscle is pictured?',
  answers: {
    a: 'Gastrocnemius',
    b: 'Tibialis anterior',
    c: 'Rectus femoris',
    d: 'Soleus'
  },
  correctAns: 'Tibialis anterior',
  photo: 'https://i.imgur.com/lXG5xLP.png'
},
{
  question: 'What muscle is pictured?',
  answers: {
    a: 'Triceps',
    b: 'Deltoid',
    c: 'Biceps brachii',
    d: 'Soleus'
  },
  correctAns: 'Biceps brachii',
  photo: 'https://i.imgur.com/oOi7HcU.png'
},
{  
  question: 'What muscle is pictured?',
  answers: {
    a: 'Sartorius',
    b: 'Dorsi',
    c: 'Obliques',
   d: 'Ab rectus'
  },
  correctAns: 'Ab rectus',
  photo: 'https://i.imgur.com/PUHoZKI.png'
},
{  
  question: 'What muscle is pictured?',
  answers: {
    a: 'Deltoid',
    b: 'Trapezius',
    c: 'Obliques',
   d: 'Pectoralis'
  },
  correctAns: 'Deltoid',
  photo: 'https://i.imgur.com/Sc5Bm8G.png'
},
//if time, add more muscles questions
]

const game = {
    currentSet: null, 

    //start function
 
    generateQuestion: function () {
      const startButton = document.querySelector('#start')
      startButton.innerText = 'Restart the Game'
      startButton.addEventListener('click', refreshPage)


        console.log(currentPlayer)
        gameStatusBox.innerText = 'Time for ' + currentPlayer + '\'s turn!'
        const random = Math.floor(Math.random() * questions.length)
        game.currentSet = questions[random]
        console.log(game.currentSet)
        console.log(game.currentSet.correctAns)
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
    console.log('here are the number of questions left: ' + questions.length)
    }, 
    
    getAnswer: function (event) {
      console.log(event.target)
      console.log(game.currentSet)
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


    checkWin: function() {
        if(playerOneScore < 3 && playerTwoScore < 3) {
            game.switchPlayer()
            console.log('no winner...switching player')
        } else if (playerOneScore >= 3) {
            gameStatusBox.innerText = 'Player 1 Wins! Click the Restart Game button to play again!'
            //prevent player from continuing game
            game.gameEnd()
    
        } else if (playerTwoScore >= 3) {
            gameStatusBox.innerText = 'Player 2 Wins! Click the Restart Game button to play again!'
            // prevent player from continuing game
            game.gameEnd()
            
            
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

    start: function () {
      //when start button is clicked
      currentPlayer = 'Player 1'
      const startButton = document.querySelector('#start')
      startButton.addEventListener('click', game.generateQuestion)
      //invoke first question function
    },

   
    gameEnd: function () {
      aChoice.innerText = ''
      bChoice.innerText = ''
      cChoice.innerText = ''
      dChoice.innerText = ''
      questionBox.innerText=''
      aChoice.removeEventListener('click', game.getAnswer)
      bChoice.removeEventListener('click', game.getAnswer)
      cChoice.removeEventListener('click', game.getAnswer)
      dChoice.removeEventListener('click', game.getAnswer)
  
    }
  } //end game object
  
  //invoke start
  game.start()



///////////////////TO DO//////////////////////
//prevent player from continuing game

//add in more images and question (up to 25?)
//style! (add on bootstrap?)
//add skeleton pngs in a flexbox?


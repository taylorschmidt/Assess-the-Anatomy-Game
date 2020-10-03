# ProjectOne

### Demo:
[Assess The Anatomy](https://taylorschmidt.github.io/ProjectOne/)

## Concept
Welcome to Assess the Anatomy, a two-player trivia game that tests your human anatomy knowledge!
Once the game begins, a random number generator selects a question from my questions array. The first player has the chance to answer the question and earn a point if they are correct by clicking on a possible answer. Then, it is the next player's turn. The first player to get 3 correct answers is the winner! You can then reset the board to play again.

## Technologies Used:
* HTML
* CSS
* Javascript

## Approach: 
# Overview:
Using Object Oriented Programming, I wrote a variety of functions that enable random question display on the game board, a counter score function if the question answered is correct, a switch player function, and an end game function. These functions all work in tandem after the game is initiated by the game.start() function which is invoked after the "start game" button is pressed by the user.

# User Stories:
As a user I expect to see a start game function. I expect to see a question to appear that is simple to read and an image that clearly depicts a part of human anatomy. I expect to be able to choose the answer to the trivia question by pressing a button. If I get the question correct, I expect to see my turn increase. I expect the next person's turn to follow. Once a player's score reaches 3, I expect to be able to replay the game.


# Development Plan:
* Determine game theme and create wireframe.
* Pseudocode game object with various functions required for game play.
* Create an array of trivia questions with possible answers, the correct answer, and an image.
* Code "Generate Question" function that pulls questions from the question array and displays them on the game board.
* Code "Check Answer" function that determines whether the selected answer is correct and awards points.
* Code "End Game" and "Check Winner" functions that determine whether a player's score has reached three points. These functions will declare a winner and give an option for the player to restart the game.

## Challenges:
Although there are no longer bugs in my project, a major challenge I had to overcome was learning how to use the "game object" and refer to functions within my game object using the "this" method. Using this syntax incorrectly at the start of creating my project resulted in some later issues that had to be solved. I have also learned that UX/UI design is not one of my strengths, and I relied on the feedback from family and friends to style my page.
Purpose:
I made this project to practice writing command-line applications using the asynchronous readline module in node.js.
Description:
This is an implementation of the classic guess the number game. The game is played in multiple rounds. In each round, the computer will pick a secret number between 1 and 100 (inclusive). All numbers are equally likely. The user will have 10 chances to guess the secret number. If the user enters something that isn't a number, the computer will ask them to try again, but this invalid input won't count as one of the guesses. If the user enters a number that isn't the secret number, then the computer will tell them whether the guess is too big or too small. The round is over when the user guesses the secret number or they run out of guesses. After a tenth unsuccessful guess, the computer will reveal the secret number. Regardless of whether the secret number was guessed correctly, the computer will ask the user whether they want to play again. If so, another round will start; if not, the program will exit.
What you will need to run this program:
node.js version 18.12.0 or later
how to run the program:
1. Open your preferred shell (for example, cmd on windows).
2. Change to the directory where the guess.js file is located.
3. Type node guess.

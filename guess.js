function secret()
{
let crypto = require("crypto");
let chosenByte = 200;
while(chosenByte >= 200)
{
chosenByte = crypto.randomBytes(1)[0];
}
return chosenByte%100+1;
}
function readNumber(callback)
{
let readline = require("readline");
let rl = readline.createInterface({input: process.stdin, output: process.stdout});
let processNumber = function(number)
{
rl.close();
if(isNaN(Number(number)))
{
console.log("That is not a number. Please try again.");
readNumber(callback);
}
else
{
callback(number);
}
};
rl.question("Enter a number", processNumber);
}
function awaitGuess(secret, guessesRemaining, callback)
{
let processGuess = function(guess)
{
if(guess > secret)
{
console.log("Too big!");
awaitGuess(secret, guessesRemaining-1, callback);
}
else if(guess < secret)
{
console.log("Too small!");
awaitGuess(secret, guessesRemaining-1, callback);
}
else
{
callback(true, secret);
}
};
if(guessesRemaining === 0)
{
callback(false, secret);
}
else
{
console.log(`You have ${guessesRemaining} guesses left.\n`);
readNumber(processGuess);
}
}
function playGame()
{
let secretNumber = secret();
awaitGuess(secretNumber, 10, processGameResult);
}
function processGameResult(hasWon, secret)
{
if(hasWon)
{
console.log("You win!");
}
else
{
console.log(`You lose! The secret was ${secret}`);
}
readYOrN(processContinueResponse);
}
function readYOrN(callback)
{
let readline = require("readline");
let rl = readline.createInterface({input: process.stdin, output: process.stdout});
let processAnswer = function(answer)
{
rl.close();
if((answer === "y") || (answer === "n"))
{
callback(answer);
}
else
{
console.log("Invalid input. Please try again.");
readYOrN(callback);
}
};
rl.question("Do you want to play again (y/n)?", processAnswer);
}
function processContinueResponse(response)
{
if(response === "y")
{
playGame();
}
else
{
console.log("goodbye!");
}
}
function main()
{
console.log("Welcome to guess the number");
playGame();
}
main();

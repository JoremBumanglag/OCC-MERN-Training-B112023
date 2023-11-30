let secretNumber = 8;
let attemps = 0;
let guessedNumber;

do{
    guessedNumber = parseInt(prompt('Enter your guessed number: '));

    if(guessedNumber < secretNumber){
        console.log("Too low! Try again.");
        attemps++;
    }
    else if(guessedNumber > secretNumber){
        console.log("Too high! Try again.");
        attemps++;
    }
    else{
        console.log("Congratulations! You guessed the correct number: "+secretNumber);
        console.log("It took you "+attemps+" attempts.")
    }
}while(guessedNumber != secretNumber);
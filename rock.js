const getUserChoice=(userInput)=>{
 userInput = 'rock';
 userInput= userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper'||userInput === 'scissors' ||userInput ==='bomb') {
   return userInput;
 }

  else {
   console.log('error');
 }

};


//getUserChoice();

const getComputerChoice = ()=> {
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0){
      return 'rock';
      }
  if(randomNumber === 1 ){
    return 'paper';
  }
  if(randomNumber === 2 ){
    return 'scissors';

  }
};

//getComputerChoice();

let determineWinner = (userChoice,computerChoice)=>{

  if(userChoice ==='bomb'){
    return 'user win';
  }
  if (userChoice === computerChoice){
    return 'tie'};

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'computer win'
    } else {
      return 'user win';
    }
  };

  if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'computer win'
    } else{
      return 'user win';
    }
  };

  if(userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'computer win'
    } else{
      return 'user win';
    }
  };

};

console.log(determineWinner('rock','paper'));

let playGame=()=>{
  let userChoice = getUserChoice('paper');
  console.log(`You threw: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer's choice: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));

};

playGame();

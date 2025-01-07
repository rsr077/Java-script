
 /*  const score = {
    wins : 0,
    losses: 0,
    ties: 0
  } */


    const score = JSON.parse(localStorage.getItem('score')) ||{
      wins: 0,
      losses:0,
      ties :0
    };
    
   updateScoreElement();
  
  //5hr 
  /* if(!score) {
    score = {
      wins: 0,
      losses:0,
      ties :0
    };
  } */
  
  
   function playgame(playerMove) {
    const  randomNumber = Math.random();
  
  const computerMove =  PickComputerMove();
  let result = '';
  
  if(playerMove === 'Scissors'){
  if (computerMove === 'rock') {
  result = 'You lose.';
  }else if ( computerMove === 'Paper'){
  result = 'You win.';
  }else if ( computerMove === 'Scissors'){
   result = 'Tie.';
   }
  
  }else if(playerMove === 'Paper'){
    if (computerMove === 'rock') {
     result =  'You win.';
    }else if ( computerMove === 'Paper'){
      result = 'Tie.';
    }else if ( computerMove === 'Scissors'){
        result ='You lose.';
    }
    
  }else if(playerMove === 'rock'){
      if (computerMove === 'rock') {
        result = 'Tie.';
      }else if ( computerMove === 'Paper'){
      result = 'You lose.';
      }else if ( computerMove === 'Scissors'){
        result = 'You win.'
      }
  }
  
  if (result === 'You win.'){
    score.wins +=1;
  }else if (result === 'You lose.') {
    score.losses  +=1;
  }else if (result ==='Tie.'){
    score.ties +=1;
  }
  
  
  localStorage.setItem('score',JSON.stringify(score));
  
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-move').innerHTML = ` You 
    <img src = "img/${playerMove}-emoji.png"class="move-icon">
    <img src="img/${computerMove}-emoji.png"class="move-icon">Computer`;
  
  
   }
  
   function updateScoreElement() {
   
    document.querySelector('.js-score')
    .innerHTML = `wins:${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`;
  
    
  }
  
   function PickComputerMove(){
    const  randomNumber = Math.random();
    let = computerMove ='';
  
        if (randomNumber >= 0 && randomNumber <1/3){
        computerMove ='rock';
        }else if (randomNumber >= 1/3 && randomNumber <2/3) {
           computerMove ='Paper';
        }else if (randomNumber >= 2/3 && randomNumber <1){
           computerMove ='Scissors';
        }
     return computerMove;

      }
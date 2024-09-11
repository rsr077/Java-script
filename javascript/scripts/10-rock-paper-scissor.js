
const score =JSON.parse (localStorage.getItem('score'))
|| {
  wins:0,
  losses:0,
  ties:0
};

document.querySelector('.js-score').innerHTML =`Wins: ${score.wins},Losses:${score.losses}, Ties:${score.ties}`;

updateScoreElement();

/*
if (!score){
score=
wins:0,
losses: 0,
ties:0
};

*/
          function playGame(playerMove){
            const computerMove= pickComputerMove();
    
            let result = '';

      if(playerMove == `scissors`){
        if(computerMove === 'rock'){
    result ='you lose.';
      }else if (computerMove === 'Paper'){
        result ='You win.';
      }else if (computerMove === 'scissors'){
        result = 'Tie.'; 
      }
       
      }else if (playerMove === 'paper'){
            if(computerMove === 'rock'){
      result ='You win.';
        }else if (computerMove === 'Paper'){
          result ='Tie.';
        }else if (computerMove === 'scissors'){
          result = 'You lose.';
        }
  

        }else if (palyerMove === `rock`){

          if(computerMove === 'rock'){
      result ='Tie.';
      }else if (computerMove === 'Paper'){
        result ='You lose.';
      }else if (computerMove === 'scissors'){
        result = 'You win.';
      }
    }

    if (result === 'You win.'){
  score.wins +=1;
}else if(result === 'you lose.'){
  score.losses +=1;
}else if(result === 'Tie.'){
  score.ties +=1;
}


localStorage.setItem('score', JSON .stringify (score));

  updateScoreElement();

document.querySelector('.js-result').innerHTML =result;

document.querySelector('.js.moves').innerHTML = `You 
<img src="img/${playerMove}-emoji.png"class="move-icon">
<img src="img/${computerMove}-emoji.png"class="move-icon">
Computer`;
 
  }

function  updateScoreElement(){
  document.querySelector('.js-score').innerHTML =`Wins: ${score.wins},Losses:${score.losses}, Ties:${score.ties}`;
}

      function pickComputerMove(){
 const randomNumuber =Math.random();

  let computerMove = '';
    if(randomNumuber >= 0 && randomNumuber < 1 / 3){  
    computerMove ='rock';
  
    }else if (randomNumuber >= 1/3 && randomNumuber < 2 / 3){
       computerMove = 'Paper';
  
    }else if(randomNumuber >= 2 /3 && randomNumuber <1){
     
     computerMove = 'scissors';
    }

    return computerMove;
      }
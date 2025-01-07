const score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0
};
updateScoreElement();

function playgame (playerMove){
  const randomNumber = Math.random();
  const computerMove = playerMoves();

let result = '';

if(playerMove === 'Head'){
    if (computerMove === 'Head') {
      result = 'You win.';
    }else if ( computerMove === 'Tail'){
    result = 'You lose.';
    }

}else if(playerMove === 'Tail') {
      if (computerMove === 'Head') {
      result = 'You lose.';
    }else if ( computerMove === 'Tail'){
      result = 'You win.';
    }
}


if (result === 'You win.'){
  score.wins +=1;
}else if (result === 'You lose.') {
  score.losses  +=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement(); 

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML = `You<img src ="img/${playerMove}-emoji.jpg" class = "move-icons"> 
<img src ="img/${computerMove}-emoji.jpg" class = "move-icons"> Computer`


}
function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML =`wins:${score.wins}, Losses:${score.losses}`;
}





  function playerMoves() {
 

    const  randomNumber = Math.random();

    let computerMove ='';
if (randomNumber >= 0 && randomNumber <0.5){
    computerMove ='Head';
   }else {
    computerMove = 'Tail';
   }
  
   return computerMove;

  }
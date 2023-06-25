const score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    draw:0,
    comp:0};

    document.querySelector('.js-score').innerHTML = 
        `Your wins: ${score.wins}, Computer wins: ${score.comp}, Draw: ${score.draw}`;

    function gamePlay(playerPick){
        let compMove = compChoose();
        let result ='';
        if (playerPick==='Scissors'){
            if (compMove === 'Rock'){
                result = 'Computer wins'; 
            }
            else if(compMove === 'Paper'){
                result ='You win'; 
            }
            else
            {
                result = 'Draw'; 
            }
        }
        else if(playerPick === 'Paper'){
            compMove = compChoose();
            if (compMove === 'Rock'){
                result = 'You win'; 
            }
            else if(compMove === 'Paper'){
                result ='Draw'; 
            }
            else
            {
                result = 'Computer wins'; 
            } 
        } 
        else{
            compMove = compChoose()
            if (compMove === 'Rock'){
                result = 'Draw'; 
            }
            else if(compMove === 'Paper'){
                result ='Computer wins'; 
            }
            else
            {
                result = 'You win'; 
            }
        } 
        if(result === 'You win'){
            score.wins+=1;
        }
        else if(result === 'Computer wins'){
            score.comp+=1;
        }
        else{
            score.draw+=1
        }

        localStorage.setItem('score',JSON.stringify(score));

        document.querySelector('.js-moves').innerHTML = `You picked <img src= ${playerPick}-emoji.png class="move-icon">. Computer picked <img src= ${compMove}-emoji.png class="move-icon">. ${result}`;

        document.querySelector('.js-score').innerHTML = 
        `Your wins: ${score.wins}, Computer wins: ${score.comp}, Draw: ${score.draw}`;
        }


    function compChoose(){
        const rand = Math.random();
        let pick;
        if (rand >= 0 && rand <1/3){
            pick = 'Rock'; 
        }
        else if(rand>=1/3 && rand<2/3){
            pick = 'Paper'; 
        }
        else
        {
            pick = 'Scissors'; 
        }
        return pick;
    }

    function resetScore(){
        score.wins=0;
        score.draw=0;
        score.comp=0;
        localStorage.removeItem('score');
        document.querySelector('.js-score').innerHTML = 
                `Your wins: ${score.wins}, Computer wins: ${score.comp}, Draw: ${score.draw}`;
    }
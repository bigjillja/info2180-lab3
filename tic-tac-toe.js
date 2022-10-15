document.addEventListener('DOMContentLoaded', function(){

    
    let gameState = true; 
    let player = "X" 
    let choice = []; 

    const board = document.querySelector("#board");
    const squares = board.querySelectorAll("div");
    const status = document.querySelector("#status");
    let controls = document.querySelector(".controls");
    const newGame = controls.querySelector('.btn');

    function switch_player(){ 
        if (player == "X"){
            player = "O";
        }
        else if(player == "O"){
                player = "X";
        }
    }

    squares.forEach(function(box, index){
        box.classList.add('square'); 

        box.addEventListener("mouseover", () => {
            box.style.cursor = "pointer";
            box.classList.add("hover");
        })

        box.addEventListener("mouseout",()=>{ 
            box.classList.remove("hover");
        });
 
        box.addEventListener("click", function(e){ 

            if (gameState == true && box.innerHTML==""){

                if (player == "X"){
                    box.classList.add("X")
                }
                else{
                    box.classList.add("O");
                }

                box.innerHTML = player;
                
                choice[index] = player;


                if (winner(index, player) == true){ 
                    gameState = false;
                    status.classList.add("you-won");
                    status.innerHTML = `Congratulations! ${player} is the Winner!`;

                };
                
                switch_player()
            
            }
            
        })
        
        
    })

    
     function winner(index, player){
     
        if (index == 0){
            if((choice[1] == player && choice[2] == player) || 
            (choice[4]==player && choice[8]==player) || 
            (choice[3]==player && choice[6] == player)){
                return true;
            }
        }

        else if(index == 1){
            if((choice[0] == player && choice[2] == player) || 
            (choice[4] == player && choice[7] == player)){
                return true;
            }
        }

        else if(index == 2){
            if((choice[0] == player && choice[1] == player) || 
            (choice[4] == player && choice[6] == player) ||
            (choice[5] == player && choice[8] == player)){
                return true;
            }
        }

        else if(index == 3){
            if((choice[4] == player && choice[5] == player) ||
            (choice[0] == player && choice[6] == player)){
                return true;
            }
        }

        else if(index == 4){
            if((choice[3] == player && choice[5] == player) ||
            (choice[0] == player && choice[8] == player) ||
            (choice[2] == player && choice[6] == player)){
                return true;
            }
        }

        else if(index == 5){
            if((choice[3] == player && choice[4] == player) ||
            (choice[2] == player && choice[8] == player)){
                return true;
            }
        }

        else if(index == 6){
            if((choice[7] == player && choice[8] == player) ||
            (choice[2] == player && choice[4] == player) ||
            (choice[0] == player && choice[3] == player)){
                return true;
            }
        }

        else if(index == 7){
            if ((choice[6] == player && choice[8] == player) ||
            (choice[1] == player && choice[4] == player)){
                return true;
            }
        }

        else if(index == 8){
            if((choice[6] == player && choice[7] == player) ||
            (choice[0] == player && choice[4] == player) || 
            (choice[2] == player && choice[5] == player)){
                return true;
            }
        }

        return false; 
     };


     newGame.addEventListener("click", () => { 
        
        squares.forEach(box => {
            box.classList.remove("X")
            box.classList.remove("O")
            box.innerHTML="";

        });

        choice = [] 
        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."
        gameState = true; 
        player = "X";

     })
         
});
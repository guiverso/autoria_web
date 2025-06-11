const grid = document.querySelector('#grid');
const h2_atualplayer = document.querySelector('#h2_atualplayer');
const h2_turnsqtd = document.querySelector('#h2_turnsqtd');

var turns = 0;
var atualplayer = 'X';

function victory_verify(){
    let cells = document.querySelectorAll('.cell');
    let emptycells = document.querySelectorAll('.cell_empty');
    let victorypossible = [//possibilidades de vitória
        [0,1,2],[3,4,5],[6,7,8],//horizontais
        [0,3,6],[1,4,7],[2,5,8],//verticais
        [0,4,8],[2,4,6]//verticais
    ];
    let someonewin = 'jogando';

    for(const pattern of victorypossible){
        const [a,b,c] = pattern;
        if(cells[a].classList[1] == 'cell_'+atualplayer &&cells[b].classList[1] == 'cell_'+atualplayer && cells[c].classList[1] == 'cell_'+atualplayer){
            someonewin = 'alguemganhou';
            break;
        }
    }

    if(emptycells.length == 0){
        someonewin = 'empate';
    }
    return someonewin;
}

function play_event(index,event){
    let cells = document.querySelectorAll('.cell');
    let cell = event.target;

    if(cell.classList[1] == 'cell_empty'){
        console.log('posição clicada é:'+index)
        cell.classList.replace('cell_empty','cell_'+atualplayer);
        cells.forEach(element =>{
            console.log(element.classList)
        })

        let someonewin = victory_verify();
        
        if(someonewin == 'alguemganhou'){
            alert("O jogador : "+atualplayer+" venceu! parabéns!!!!!");
        }else if(someonewin == 'jogando'){
            turns++;

            if(turns%2 == 0){atualplayer = 'X';}
            else{atualplayer = 'O'}

            h2_atualplayer.innerHTML = 'vez de: '+atualplayer;
            h2_turnsqtd.innerHTML = 'jogada:'+(turns+1);
        }else if(someonewin == 'empate'){
            alert('o jogo deu velha!')
        }
    }else{
        alert('não pode jogar em quadrados que estão ocupados');
    }
}

function generate_grid(){
    turns = 0;
    atualplayer = 'X';

    h2_atualplayer.innerHTML = 'vez de: '+atualplayer;
    h2_turnsqtd.innerHTML = 'jogada:'+(turns+1);

    grid.innerHTML = '';
    for(let i = 0; i < 9; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add('cell_empty');
        cell.id = 'cell'+i;
        cell.addEventListener('click',(event) =>{
            play_event(i,event)
        })

        grid.appendChild(cell);
    }
}

generate_grid();
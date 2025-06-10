const grid = document.querySelector('main');
const header = document.querySelector('header');

var turns = 0;
var atualplayer = 'X';
var cells = [];

for(let i = 0; i<9;i++){
    cells[i] = document.querySelector('#cell'+(i+1));
}

var victorypossible = [
    [0,1,2],[3,4,5],[6,7,8],//horizontais
    [0,3,6],[1,4,7],[2,5,8],//verticais
    [0,4,8],[2,4,6]//verticais
];

function play_event(index){
    
    
    turns++;

    if(turns%2 == 0){atualplayer = 'X';}
    else{atualplayer = 'O'}
}
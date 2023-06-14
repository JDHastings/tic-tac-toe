//make game board
const gameBoard = document.querySelector('.game-board');
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        const piece = document.createElement('div');
        piece.classList.add('board-piece');
        gameBoard.append(piece);
    }
}

//put markers on board
const pieces = document.querySelectorAll('.board-piece');
pieces.forEach(piece => piece.addEventListener('click', () => {
    placeMarker(piece);
}));
let markerCount = 1;
function placeMarker(piece){
    if(!piece.firstChild){
        const x = document.createElement('img');
        if(markerCount % 2){
            x.src = './images/x.png';
        }else{
            x.src = './images/o.png';
        }
        piece.append(x);
        markerCount++;
    }
}

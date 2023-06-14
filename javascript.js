(function() {
    let board = {
        init: function(){
            this.draw();
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function(){
            this.pieces = document.querySelectorAll('.board-piece');
        },
        draw: function(){
            const gameBoard = document.querySelector('.game-board');
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    const piece = document.createElement('div');
                    piece.classList.add('board-piece');
                    gameBoard.append(piece);
                }
            }
        },
        bindEvents: function(){
            let markerCount = 1;
            this.pieces.forEach(piece => piece.addEventListener('click', () => {
                markerCount = this.placeMarker(piece, markerCount);
                if(markerCount > 5){
                    this.checkWin();
                }
            }));
        },
        placeMarker: function(piece, markerCount){
            if(!piece.firstChild){
                const x = document.createElement('img');
                if(markerCount % 2){
                    x.src = './images/x.png';
                    x.classList.add('x');
                }else{
                    x.src = './images/o.png';
                    x.classList.add('o');
                }
                piece.append(x);
                markerCount++;
            }
            return markerCount;
        },
        checkWin: function(){
            let markers = [];
            this.pieces.forEach(piece => {
                if(piece.firstChild){
                    markers.push(piece.firstChild.classList.contains('x'));
                }else{
                    markers.push(null);
                }
            });
            let score = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
            // make score
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    score[i][j] = markers[(i * 3) + j];
                }
            }
            // check win horizontal
            for(let i = 0; i < 3; i++){
                let count = 0;
                for(let j = 0; j < 3; j++){
                    if(score[i][j] == true){
                        count++;
                    }else if(score[i][j] == false){
                        count--;
                    }
                }
                if(count == 3){
                    console.log('x wins horizontal');
                    this.reset();
                }else if(count == -3){
                    console.log('o wins horizontal');
                    this.reset();
                }
            }
            // check win vertical
            for(let i = 0; i < 3; i++){
                let count = 0;
                for(let j = 0; j < 3; j++){
                    if(score[j][i] == true){
                        count++;
                    }else if(score[j][i] == false){
                        count--;
                    }
                }
                if(count == 3){
                    console.log('x wins vertical');
                    this.reset();
                }else if(count == -3){
                    console.log('o wins vertical');
                    this.reset();
                }
            }
            // check win diagonal
            dCount1 = 0;
            dCount2 = 0;
            if(score[0][0] == true){
                dCount1++;
            }else if(score[0][0] == false){
                dCount1--;
            }
            if(score[2][2] == true){
                dCount1++;
            }else if(score[2][2] == false){
                dCount1--;
            }
            if(score[0][2] == true){
                dCount2++;
            }else if(score[0][2] == false){
                dCount2--;
            }
            if(score[2][0] == true){
                dCount2++;
            }else if(score[2][0] == false){
                dCount2--;
            }
            if(score[1][1] == true){
                dCount1++;
                dCount2++;
            }else if(score[1][1] == false){
                dCount1--;
                dCount2--;
            }
            if(dCount1 == 3 || dCount2 == 3){
                console.log('x wins diagonal');
                this.reset();
            }else if(dCount1 == -3 || dCount2 == -3){
                console.log('o wins diagonal');
                this.reset();
            }
        },
        reset: function(){
            console.log('resetting board...');
        }
    };
    board.init();
})()
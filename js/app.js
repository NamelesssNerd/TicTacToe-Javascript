let tikTaktoeTable = ['', '', '', '', '', '', '', '', '', '']
const checkGameOverValue = [
    [0, 1, 2], [0, 4, 8,], [0, 3, 6], [1, 4, 7], [2, 4, 6,], [2, 5, 8], [3, 4, 5], [6, 7, 8]
];
const turnX = 'X';
const turnO = 'O';
let xTurn = true;

let Welcome = new Audio('../sound/Welcome.mp3');
Welcome.volume = .5;
let Click = new Audio('../sound/wrong.wav');
let Congratulation = new Audio('../sound/Congratulation.mp3');
const Slide = 'Slide';
let coverGame = document.getElementById('coverGame');
let tile = document.getElementById('tile');
let start = document.getElementById('start');
let restart = document.getElementById('restart');
let TicTacToe = document.getElementById('TicTacToe');


start.addEventListener('click', () => {
    Welcome.play();
    coverGame.classList.add(Slide);
    coverGame.classList.remove(SlideRight);
    start.style.display = 'none';
});
restart.addEventListener('click', () => {
window.location.reload();
});

for (var DivVal = 0; DivVal <= 8; DivVal++) {
    const Child = `<h1 class="Child"></h1>`;
    TicTacToe.insertAdjacentHTML('beforeend', Child);
}
const Child = document.querySelectorAll('.Child');
function placeAllValue() {
    for (var i = 0; i < tikTaktoeTable.length - 1; i++) {
        Child[i].textContent = tikTaktoeTable[i];
    }
}
placeAllValue();
Child.forEach((Currenelem, Index) => {
    Currenelem.addEventListener('click', () => {
        Click.play();
        xTurn ? TurnX(Index) : TurnO(Index);
    })
});
function TurnX(Value) {
    if (tikTaktoeTable[Value] == '') {
        tikTaktoeTable[Value] = turnX;
        xTurn = false;
        placeAllValue();
        setTimeout(() => {
            checkGameOver(tikTaktoeTable[Value]);
        }, 500);
    } else {
        alert('Already Clicked');
    }
}
function TurnO(Value) {
    if (tikTaktoeTable[Value] == '') {
        tikTaktoeTable[Value] = turnO;
        xTurn = true;
        placeAllValue();
        setTimeout(() => {
            checkGameOver(tikTaktoeTable[Value]);
        }, 10);
    } else {
        alert('Already Clicked');
    }
}
function checkGameOver(gameValue) {
    for (var j = 0; j < checkGameOverValue.length - 1; j++) {
        for (var k = 0; k <= checkGameOverValue[0].length - 3; k++) {
            if ((tikTaktoeTable[checkGameOverValue[j][k]] == tikTaktoeTable[checkGameOverValue[j][k + 1]]) && (tikTaktoeTable[checkGameOverValue[j][k]] == tikTaktoeTable[checkGameOverValue[j][k + 2]])) {
                if ((tikTaktoeTable[checkGameOverValue[j][k]] != '') && (tikTaktoeTable[checkGameOverValue[j][k + 1]] != '') && (tikTaktoeTable[checkGameOverValue[j][k + 2]] !== '')) {
                    Welcome.pause();
                    Congratulation.play();
                    tile.textContent = `Winner is ${gameValue}`;
                    coverGame.classList.remove(Slide);
                    coverGame.classList.add(SlideRight);
                    alert(`Winner Player is ${gameValue}`);
                }
            }
        }
    }
}
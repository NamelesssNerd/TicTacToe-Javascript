let tikTaktoeTable = ['', '', '', '', '', '', '', '', '', '']
const checkGameOverValue = [
    [0, 1, 2], [0, 4, 8,], [0, 3, 6], [1, 4, 7], [2, 4, 6,], [2, 5, 8], [3, 4, 5], [6, 7, 8]
];
const turnX = 'X';
const turnO = 'O';
let xTurn = true;

const Child = document.querySelectorAll('.Child');
function placeAllValue() {
    for (var i = 0; i < tikTaktoeTable.length - 1; i++) {
        Child[i].textContent = tikTaktoeTable[i];
    }
}
placeAllValue();
Child.forEach((Currenelem, Index) => {
    Currenelem.addEventListener('click', () => {
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
                    alert(`Winner Player is ${gameValue}`);
                }
            }
        }
    }
}
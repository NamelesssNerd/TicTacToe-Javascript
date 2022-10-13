const TicTacToe = document.getElementById('TicTacToe');
const First = document.getElementById('First');
const Second = document.getElementById('Second');
const Third = document.getElementById('Third');
const Fourth = document.getElementById('Fourth');
const Fifth = document.getElementById('Fifth');
const Sixth = document.getElementById('Sixth');
const Seventh = document.getElementById('Seventh');
const Eighth = document.getElementById('Eighth');
const Ninenth = document.getElementById('Ninenth');


let Counter = 1;

First.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionFirst();
    } else {
        CircleFirst();
    }
    Counter++;
});
Second.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionSecond();
    } else {
        CircleSecond();
    }
    Counter++;
});
Third.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionThird();
    } else {
        CircleThird();
    }
    Counter++;
});
Fourth.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionFourth();
    } else {
        CircleFourth();
    }
    Counter++;
});
Fifth.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionFifth();
    } else {
        CircleFifth();
    }
    Counter++;
});
Sixth.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionSixth();
    } else {
        CircleSixth();
    }
    Counter++;
});
Seventh.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionSeventh();
    } else {
        CircleSeventh();
    }
    Counter++;
});
Eighth.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionEighth();
    } else {
        CircleEighth();
    }
    Counter++;
});
Ninenth.addEventListener('click', () => {
    if (Counter % 2 != 0) {
        FunctionNinth();
    } else {
        CircleNinth();
    }
    Counter++;
});

function FunctionFirst() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    First.appendChild(LineOne);
    First.appendChild(LineTwo);
}
function CircleFirst(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    First.append(Circle);
}


function FunctionSecond() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Second.appendChild(LineOne);
    Second.appendChild(LineTwo);
}
function CircleSecond(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Second.append(Circle);
}


function FunctionThird() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Third.appendChild(LineOne);
    Third.appendChild(LineTwo);
}
function CircleThird(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Third.append(Circle);
}


function FunctionFourth() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Fourth.appendChild(LineOne);
    Fourth.appendChild(LineTwo);
}
function CircleFourth(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Fourth.append(Circle);
}


function FunctionFifth() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Fifth.appendChild(LineOne);
    Fifth.appendChild(LineTwo);
}
function CircleFifth(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Fifth.append(Circle);
}


function FunctionSixth() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Sixth.appendChild(LineOne);
    Sixth.appendChild(LineTwo);
}
function CircleSixth(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Sixth.append(Circle);
}


function FunctionSeventh() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Seventh.appendChild(LineOne);
    Seventh.appendChild(LineTwo);
}
function CircleSeventh(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Seventh.append(Circle);
}


function FunctionEighth() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Eighth.appendChild(LineOne);
    Eighth.appendChild(LineTwo);
}
function CircleEighth(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Eighth.append(Circle);
}

function FunctionNinth() {
    const LineOne = document.createElement('div');
    LineOne.classList.add('LineOne');
    const LineTwo = document.createElement('div');
    LineTwo.classList.add("LineTwo")
    Ninenth.appendChild(LineOne);
    Ninenth.appendChild(LineTwo);
}
function CircleNinth(circle) {
    const Circle = document.createElement('div');
    Circle.classList.add('Circle');
    Ninenth.append(Circle);
}
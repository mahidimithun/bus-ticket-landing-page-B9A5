
function setBackgroundColorById(elementId) {

    const element = document.getElementById(elementId);
    element.style.backgroundColor = "rgb(29, 209, 0)";
    // element.classList.add('bg-green-400');
    element.style.color = "white";
    element.style.fontSize = "20px";

}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    // element.classList.remove('bg-green-400');
    element.style.backgroundColor = "";
    element.style.color = "#03071280";
    element.style.fontSize = "";

}



let clickCountA1 = 0;
let clickCountA2 = 0;
let clickCountA3 = 0;
let clickCountA4 = 0;
let clickCountB1 = 0;
let clickCountB2 = 0;
let clickCountB3 = 0;
let clickCountB4 = 0;
let clickCountC1 = 0;
let clickCountC2 = 0;
let clickCountC3 = 0;
let clickCountC4 = 0;
let clickCountD1 = 0;
let clickCountD2 = 0;
let clickCountD3 = 0;
let clickCountD4 = 0;
let clickCountE1 = 0;
let clickCountE2 = 0;
let clickCountE3 = 0;
let clickCountE4 = 0;
let clickCountF1 = 0;
let clickCountF2 = 0;
let clickCountF3 = 0;
let clickCountF4 = 0;
let clickCountG1 = 0;
let clickCountG2 = 0;
let clickCountG3 = 0;
let clickCountG4 = 0;
let clickCountH1 = 0;
let clickCountH2 = 0;
let clickCountH3 = 0;
let clickCountH4 = 0;
let clickCountI1 = 0;
let clickCountI2 = 0;
let clickCountI3 = 0;
let clickCountI4 = 0;
let clickCountJ1 = 0;
let clickCountJ2 = 0;
let clickCountJ3 = 0;
let clickCountJ4 = 0;

function selectSeatA1() {
    clickCountA1 = clickCountA1 + 1;
    if (clickCountA1 % 2 !== 0) {
        setBackgroundColorById('A1');
        addSeat('A1');

    }
    else {
        removeBackgroundColorById('A1')
        removeSeat('A1');
     
    }
}


function selectSeatA2() {

    clickCountA2 = clickCountA2 + 1;
    if (clickCountA2 % 2 !== 0) {
        setBackgroundColorById('A2');
        addSeat('A2');
    }
    else {
        removeBackgroundColorById('A2')
        removeSeat('A2');
    }
}
function selectSeatA3() {
    clickCountA3 = clickCountA3 + 1;
    if (clickCountA3 % 2 !== 0) {
        setBackgroundColorById('A3');
        addSeat('A3');
    }
    else {
        removeBackgroundColorById('A3')
        removeSeat('A3');
    }
}

function selectSeatA4() {

    clickCountA4 = clickCountA4 + 1;
    if (clickCountA4 % 2 !== 0) {
        setBackgroundColorById('A4');
        addSeat('A4');
    }
    else {
        removeBackgroundColorById('A4')
        removeSeat('A4');
    }

}
function selectSeatB1() {
    clickCountB1 = clickCountB1 + 1;
    if (clickCountB1 % 2 !== 0) {
        setBackgroundColorById('B1');
        addSeat('B1');
    }
    else {
        removeBackgroundColorById('B1');
        removeSeat('B1');
    }

}
function selectSeatB2() {
    clickCountB2 = clickCountB2 + 1;
    if (clickCountB2 % 2 !== 0) {
        setBackgroundColorById('B2');
        addSeat('B2');
    }
    else {
        removeBackgroundColorById('B2');
        removeSeat('B2');
    }

}
function selectSeatB3() {
    clickCountB3 = clickCountB3 + 1;
    if (clickCountB3 % 2 !== 0) {
        setBackgroundColorById('B3');
        addSeat('B3');
    }
    else {
        removeBackgroundColorById('B3');
        removeSeat('B3');
    }

}
function selectSeatB4() {
    clickCountB4 = clickCountB4 + 1;
    if (clickCountB4 % 2 !== 0) {
        setBackgroundColorById('B4');
        addSeat('B4');
    }
    else {
        removeBackgroundColorById('B4');
        removeSeat('B4');
    }

}
function selectSeatC1() {
    clickCountC1 = clickCountC1 + 1;
    if (clickCountC1 % 2 !== 0) {
        setBackgroundColorById('C1');
    }
    else {
        removeBackgroundColorById('C1')
    }

}
function selectSeatC2() {
    clickCountC2 = clickCountC2 + 1;
    if (clickCountC2 % 2 !== 0) {
        setBackgroundColorById('C2');
    }
    else {
        removeBackgroundColorById('C2')
    }

}
function selectSeatC3() {
    clickCountC3 = clickCountC3 + 1;
    if (clickCountC3 % 2 !== 0) {
        setBackgroundColorById('C3');
    }
    else {
        removeBackgroundColorById('C3')
    }

}
function selectSeatC4() {
    clickCountC4 = clickCountC4 + 1;
    if (clickCountC4 % 2 !== 0) {
        setBackgroundColorById('C4');
    }
    else {
        removeBackgroundColorById('C4')
    }

}
function selectSeatD1() {
    clickCountD1 = clickCountD1 + 1;
    if (clickCountD1 % 2 !== 0) {
        setBackgroundColorById('D1');
    }
    else {
        removeBackgroundColorById('D1')
    }

}
function selectSeatD2() {
    clickCountD2 = clickCountD2 + 1;
    if (clickCountD2 % 2 !== 0) {
        setBackgroundColorById('D2');
    }
    else {
        removeBackgroundColorById('D2')
    }

}
function selectSeatD3() {
    clickCountD3 = clickCountD3 + 1;
    if (clickCountD3 % 2 !== 0) {
        setBackgroundColorById('D3');
    }
    else {
        removeBackgroundColorById('D3')
    }

}
function selectSeatD4() {
    clickCountD4 = clickCountD4 + 1;
    if (clickCountD4 % 2 !== 0) {
        setBackgroundColorById('D4');
    }
    else {
        removeBackgroundColorById('D4')
    }

}
function selectSeatE1() {
    clickCountE1 = clickCountE1 + 1;
    if (clickCountE1 % 2 !== 0) {
        setBackgroundColorById('E1');
    }
    else {
        removeBackgroundColorById('E1')
    }

}
function selectSeatE2() {
    clickCountE2 = clickCountA2 + 1;
    if (clickCountE2 % 2 !== 0) {
        setBackgroundColorById('E2');
    }
    else {
        removeBackgroundColorById('E2')
    }

}
function selectSeatE3() {
    clickCountE3 = clickCountE3 + 1;
    if (clickCountE3 % 2 !== 0) {
        setBackgroundColorById('E3');
    }
    else {
        removeBackgroundColorById('E3')
    }

}
function selectSeatE4() {
    clickCountE4 = clickCountE4 + 1;
    if (clickCountE4 % 2 !== 0) {
        setBackgroundColorById('E4');
    }
    else {
        removeBackgroundColorById('E4')
    }

}
function selectSeatF1() {
    clickCountF1 = clickCountF1 + 1;
    if (clickCountF1 % 2 !== 0) {
        setBackgroundColorById('F1');
    }
    else {
        removeBackgroundColorById('F1')
    }

}
function selectSeatF2() {
    clickCountF2 = clickCountF2 + 1;
    if (clickCountF2 % 2 !== 0) {
        setBackgroundColorById('F2');
    }
    else {
        removeBackgroundColorById('F2')
    }

}
function selectSeatF3() {
    clickCountF3 = clickCountF3 + 1;
    if (clickCountF3 % 2 !== 0) {
        setBackgroundColorById('F3');
    }
    else {
        removeBackgroundColorById('F3')
    }

}
function selectSeatF4() {
    clickCountF4 = clickCountF4 + 1;
    if (clickCountF4 % 2 !== 0) {
        setBackgroundColorById('F4');
    }
    else {
        removeBackgroundColorById('F4')
    }

}
function selectSeatG1() {
    clickCountG1 = clickCountG1 + 1;
    if (clickCountG1 % 2 !== 0) {
        setBackgroundColorById('G1');
    }
    else {
        removeBackgroundColorById('G1')
    }

}
function selectSeatG2() {
    clickCountG2 = clickCountG2 + 1;
    if (clickCountG2 % 2 !== 0) {
        setBackgroundColorById('G2');
    }
    else {
        removeBackgroundColorById('G2')
    }

}
function selectSeatG3() {
    clickCountG3 = clickCountG3 + 1;
    if (clickCountG3 % 2 !== 0) {
        setBackgroundColorById('G3');
    }
    else {
        removeBackgroundColorById('G3')
    }

}
function selectSeatG4() {
    clickCountG4 = clickCountG4 + 1;
    if (clickCountG4 % 2 !== 0) {
        setBackgroundColorById('G4');
    }
    else {
        removeBackgroundColorById('G4')
    }

}
function selectSeatH1() {
    clickCountH1 = clickCountH1 + 1;
    if (clickCountH1 % 2 !== 0) {
        setBackgroundColorById('H1');
    }
    else {
        removeBackgroundColorById('H1')
    }

}
function selectSeatH2() {
    clickCountH2 = clickCountH2 + 1;
    if (clickCountH2 % 2 !== 0) {
        setBackgroundColorById('H2');
    }
    else {
        removeBackgroundColorById('H2')
    }

}
function selectSeatH3() {
    clickCountH3 = clickCountH3 + 1;
    if (clickCountH3 % 2 !== 0) {
        setBackgroundColorById('H3');
    }
    else {
        removeBackgroundColorById('H3')
    }

}
function selectSeatH4() {
    clickCountH4 = clickCountH4 + 1;
    if (clickCountH4 % 2 !== 0) {
        setBackgroundColorById('H4');
    }
    else {
        removeBackgroundColorById('H4')
    }

}
function selectSeatI1() {
    clickCountI1 = clickCountI1 + 1;
    if (clickCountI1 % 2 !== 0) {
        setBackgroundColorById('I1');
    }
    else {
        removeBackgroundColorById('I1')
    }

}
function selectSeatI2() {
    clickCountI2 = clickCountI2 + 1;
    if (clickCountI2 % 2 !== 0) {
        setBackgroundColorById('I2');
    }
    else {
        removeBackgroundColorById('I2')
    }

}
function selectSeatI3() {
    clickCountI3 = clickCountI3 + 1;
    if (clickCountI3 % 2 !== 0) {
        setBackgroundColorById('I3');
    }
    else {
        removeBackgroundColorById('I3')
    }

}
function selectSeatI4() {
    clickCountA2 = clickCountA2 + 1;
    if (clickCountA2 % 2 !== 0) {
        setBackgroundColorById('I4');
    }
    else {
        removeBackgroundColorById('I4')
    }

}
function selectSeatJ1() {
    clickCountJ1 = clickCountJ1 + 1;
    if (clickCountJ1 % 2 !== 0) {
        setBackgroundColorById('J1');
    }
    else {
        removeBackgroundColorById('J1')
    }

}
function selectSeatJ2() {
    clickCountJ2 = clickCountJ2 + 1;
    if (clickCountJ2 % 2 !== 0) {
        setBackgroundColorById('J2');
    }
    else {
        removeBackgroundColorById('J2')
    }

}
function selectSeatJ3() {
    clickCountJ3 = clickCountJ3 + 1;
    if (clickCountJ3 % 2 !== 0) {
        setBackgroundColorById('J3');
    }
    else {
        removeBackgroundColorById('J3')
    }

}
function selectSeatJ4() {
    clickCountJ4 = clickCountJ4 + 1;
    if (clickCountJ4 % 2 !== 0) {
        setBackgroundColorById('J4');
    }
    else {
        removeBackgroundColorById('J4')
    }

}















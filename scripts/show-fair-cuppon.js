function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function seatInfo(uniqueArray, removeUniqueArray) {
    // console.log('Remove seat',  removeUniqueArray);
    // console.log('add seat', uniqueArray);


    for (let i = 0; i < uniqueArray.length; i++) {
        console.log(uniqueArray[i]);
        if (i === 0) {
            // console.log('u ar 0', uniqueArray[i]);
            const seatAlphabet = document.getElementById('first-seat');
            seatAlphabet.innerText = uniqueArray[i];
            showElementById('seat-first-row');

        }
        else if (i === 1) {
            // console.log('u ar 1', uniqueArray[i]);
            const seatAlphabet = document.getElementById('second-seat');
            seatAlphabet.innerText = uniqueArray[i];
            showElementById('seat-second-row');
        }

        else if (i === 2) {
            // console.log('u ar 2', uniqueArray[i]);
            const seatAlphabet = document.getElementById('third-seat');
            seatAlphabet.innerText = uniqueArray[i];
            showElementById('seat-third-row');
        }

        else if (i === 3) {
            // console.log('u ar 2', uniqueArray[i]);
            const seatAlphabet = document.getElementById('forth-seat');
            seatAlphabet.innerText = uniqueArray[i];
            showElementById('seat-forth-row');
        }


    }

}
let arr = [];
function addSeat(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    arr.push(text);

    uniqueArray = [...new Set(arr)];
    console.log('add seat', uniqueArray);
    let countAfterAdd = uniqueArray.length;


    ct(countAfterAdd);
    
    seatInfo(uniqueArray);



}

function removeSeat(elementId) {
    
    const element = document.getElementById(elementId);
    const text = element.innerText;
    let elementToRemove = text;
    let newArray = arr.filter(item => item !== elementToRemove);
    removeUniqueArray = [...new Set(newArray)];
    console.log('Remove seat',  removeUniqueArray);
    arr = removeUniqueArray;
    
    let countAfterRemove = removeUniqueArray.length;
    ct(countAfterRemove); 
    
    seatInfo(removeUniqueArray);
    
    

}







function ct(countAfterAdd,countAfterRemove){


    fair = countAfterAdd * 550;
    
    // console.log(fair)
    const element = document.getElementById('total-fair');
    const text = element.innerText;
    let totalFairInt = parseFloat(text);
    totalFairInt = fair;
    
    // console.log('Int',totalFairInt);

    const displayTotalFair = document.getElementById('total-fair');
    displayTotalFair.innerText = totalFairInt;
    // console.log('Dis', displayTotalFair.innerText = totalFairInt);
    //After git hub downlaod
    const numberOfSeat = document.getElementById('number-of-seat');
    const innerTextNumberOfSeat = numberOfSeat.innerText;
    console.log('Seat number',innerTextNumberOfSeat);

    let totalNumberOfSeat = parseFloat(innerTextNumberOfSeat);
    totalNumberOfSeat = countAfterAdd;
    // console.log('Count',totalNumberOfSeat);
    const totalSeatCount = document.getElementById('number-of-seat');
    totalSeatCount.innerText = totalNumberOfSeat;
    
    

}














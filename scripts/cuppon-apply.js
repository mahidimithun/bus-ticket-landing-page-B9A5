
function clickCupponApply() {
    const cuppon = document.getElementById('cuppon-text');
    const cupponInnerText = cuppon.value;

    const element = document.getElementById('total-fair');
    const text = element.innerText;
    let totalFairInt = parseFloat(text);
    totalFairInt = fair;


    const newYearCuppon = "NEW15";
    const couple = "Couple20"
    if (newYearCuppon == cupponInnerText) {
        const off = (15 * totalFairInt) / 100;
        const newYear = (totalFairInt - off)
        

        //grand-total
        const totalGrand = document.getElementById('grand-total');
        totalGrand.innerText = newYear;


    }

    else if (couple == cupponInnerText) {
        const off2 = (20 * totalFairInt) / 100;
        const couple20 = (totalFairInt - off2)
        
        const totalGrand = document.getElementById('grand-total');
        totalGrand.innerText = couple20;
    }

    else {
        console.log("You are Not eligible");
    }
}





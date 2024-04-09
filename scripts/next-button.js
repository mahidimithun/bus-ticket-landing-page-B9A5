function nextClick(){
    hideElementById('home-screen');
    // success-page
    showElementById('success-page');
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function continueClick(){
    showElementById('home-screen');
    hideElementById('success-page');

}
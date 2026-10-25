let counterValue = 0

function renderCounterValue() {
    const container = document.querySelector('.js-container');
    container.innerHTML = counterValue;
}

function countCallback() {
    counterValue += 1;
    renderCounterValue();
}

function resetCallback() {
    counterValue = 0;
    renderCounterValue();
}

const countbutton =document.querySelector('.js-1up-button');
const resetbutton =document.querySelector('.js-reset-button');
countbutton.addEventListener('click', countCallback)
resetbutton.addEventListener('click', resetCallback)
renderCounterValue();
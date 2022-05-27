
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrementClick = () => {
    counterValue = counterValue - 1;
    document.getElementById('value').innerHTML = counterValue;
};

const incrementClick = () => {
    counterValue = counterValue + 1;
    document.getElementById('value').innerHTML = counterValue;
};

decrementBtn.addEventListener('click', decrementClick);

incrementBtn.addEventListener('click', incrementClick);

